<?php

namespace App\Services;

use App\Exceptions\PaymeException;
use App\Models\PaymeTransaction;
use App\Models\Statservice\AppPrice;
use App\Models\StatServiceApplication;
use App\Models\User;
use App\Traits\JsonRPC;
use App\Traits\PaymeHelper;
use Illuminate\Http\JsonResponse;

class PaymeService
{
    use JsonRPC, PaymeHelper;

    /*    case Pending = 1;
    case Done = 2;
    case Cancelled = -1;
    case Cancelled_After_Success = -2;*/

    public array $params;
    protected int $minAmount = 1_000_00;
    protected int $maxAmount = 100_000_000_00;

    /**
     * Transaction timeout
     *
     * @var int $timeout
     */
    protected int $timeout = 6000 * 1000;

    protected string $identity = 'id';

    public function __construct(array $params)
    {
        $this->params = $params;
        $this->minAmount = config('payme.min_amount', $this->minAmount);
        $this->maxAmount = config('payme.max_amount', $this->maxAmount);
        $this->identity = config('payme.identity', $this->identity);
    }

    /**
     * @throws PaymeException
     */
    public function CheckPerformTransaction(): JsonResponse
    {
        if(!$this->hasParam(['amount', 'account']))
        {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }
        $amount = $this->params['amount'];

        if(!$this->isValidAmount($amount))
        {
            throw new PaymeException(PaymeException::WRONG_AMOUNT);
        }

        $account = $this->params['account'];
        if(!array_key_exists($this->identity, $account))
        {
            throw new PaymeException(PaymeException::USER_NOT_FOUND);
        }

        $account = $account[$this->identity];

        $statGtdServiceApplication = StatServiceApplication::whereHas('status',function($query){
            return $query->where('status_id','=',4);
        })->where('appnum',$account)->first();

        if(!$statGtdServiceApplication)
        {
            throw new PaymeException(PaymeException::USER_NOT_FOUND);
        }

        $totalSum = (float)AppPrice::with('tarif')->where('application_id', '=', $statGtdServiceApplication->id)->get()->unique('tariff_id')->sum('price');

        if((int)($totalSum*100)!==(int)$amount)
        {
            throw new PaymeException(PaymeException::WRONG_AMOUNT);
        }

        return $this->successCheckPerformTransaction();
    }

    /**
     * @throws PaymeException
     */
    public function CreateTransaction(){
        if(!$this->hasParam(['id', 'time', 'amount', 'account']))
        {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }
        $id = $this->params['id'];

        $time = $this->params['time'];
        $amount = $this->params['amount'];
        $account = $this->params['account'];

        if(!array_key_exists($this->identity, $account))
        {
            throw new PaymeException(PaymeException::USER_NOT_FOUND);
        }

        $account = $account[$this->identity];

        $statGtdServiceApplication = StatServiceApplication::whereHas('status',function($query){
            return $query->where('status_id','=',4);
        })->where('appnum',$account)->first();

        if(!$statGtdServiceApplication)
        {
            throw new PaymeException(PaymeException::USER_NOT_FOUND);
        }

        if(!$this->isValidAmount($amount))
        {
            throw new PaymeException(PaymeException::WRONG_AMOUNT);
        }
        $totalSum = (float)AppPrice::with('tarif')->where('application_id', '=', $statGtdServiceApplication->id)->get()->unique('tariff_id')->sum('price');


        if((int)($totalSum*100)!==$amount)
        {
            throw new PaymeException(PaymeException::WRONG_AMOUNT);
        }



        $transaction = PaymeTransaction::where('transaction', $id)->first();

        if($transaction)
        {
            if ($transaction->state != 1) {
                throw new PaymeException(PaymeException::CANT_PERFORM_TRANS);
            }

            if(!$this->checkTimeout($transaction->create_time))
            {
                $transaction->update([
                    'state' => -1,
                    'reason' => 4
                ]);

                throw new PaymeException( PaymeException::CANT_PERFORM_TRANS, [
                    "uz" => "Vaqt tugashi o'tdi",
                    "ru" => "Тайм-аут прошел",
                    "en" => "Timeout passed"
                ]);
            }

            return $this->successCreateTransaction(
                $transaction->create_time,
                $transaction->id,
                $transaction->state
            );
        }
        if(PaymeTransaction::where(['owner_id'=>$account,'state'=>1] )->exists()){
            throw new PaymeException(PaymeException::PENDING_PAYMENT);
        }
        $transaction = PaymeTransaction::create([
            'transaction' => $id,
            'payme_time' => $time,
            'amount' => $amount,
            'state' => 1,
            'create_time' => $this->microtime(),
            'owner_id' => $account,
        ]);

        return $this->successCreateTransaction(
            $transaction->create_time,
            $transaction->id,
            $transaction->state
        );
    }

    /**
     * @throws PaymeException
     */
    public function PerformTransaction(){
        if(!$this->hasParam('id'))
        {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }
        $id = $this->params['id'];

        $transaction = PaymeTransaction::where('transaction', $id)->first();
        if(!$transaction)
        {
            throw new PaymeException(PaymeException::TRANS_NOT_FOUND);
        }

        if($transaction->state !== 1){
            if($transaction->state == 2)
            {
                return $this->successPerformTransaction($transaction->state, $transaction->perform_time, $transaction->id);
            }else{
                throw new PaymeException(PaymeException::CANT_PERFORM_TRANS);
            }
        }

        if(!$this->checkTimeout($transaction->create_time))
        {
            $transaction->update([
                'state' => -1,
                'reason' => 4
            ]);
            throw new PaymeException(PaymeException::CANT_PERFORM_TRANS,  [
                "uz" => "Vaqt tugashi o'tdi",
                "ru" => "Тайм-аут прошел",
                "en" => "Timeout passed"
            ]);
        }

        $transaction->state = 2;
        $transaction->perform_time = $this->microtime();
        $transaction->save();

        $this->fillUpBalance($transaction->application, $transaction->transaction);

        return $this->successPerformTransaction($transaction->state, $transaction->perform_time, $transaction->id);
    }

    /**
     * @throws PaymeException
     */
    public function CancelTransaction(){
        if(!$this->hasParam(['id', 'reason']))
        {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }
        if(!array_key_exists('reason', $this->params))
        {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }

        $id = $this->params['id'];
        $reason = $this->params['reason'];

        $transaction = PaymeTransaction::where('transaction', $id)->first();
        if(!$transaction){
            throw new PaymeException(PaymeException::TRANS_NOT_FOUND);
        }

        if ($transaction->state == 2) {
            $cancelTime = $this->microtime();
            $transaction->update([
                "state" => -2,
                "cancel_time" => $cancelTime,
                "reason" => $reason
            ]);

            return $this->successCancelTransaction($transaction->state, $cancelTime, $transaction->id);
        }

        if ($transaction->state != 2) {
            return $this->successCancelTransaction($transaction->state, $transaction->cancel_time, $transaction->id);
        }

        $this->withdrawBalance($transaction->application, $transaction->amount);

        $cancelTime = $this->microtime();

        $transaction->update([
            "state" => -2,
            "cancel_time" => $cancelTime,
            "reason" => $reason
        ]);

        return $this->successCancelTransaction($transaction->state, $cancelTime, $transaction->id);
    }


    /**
     * @throws PaymeException
     */
    public function CheckTransaction(){
        if(!$this->hasParam('id'))
        {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }

        $id = $this->params['id'];

        $transaction = PaymeTransaction::where('transaction', $id)->first();

        if($transaction)
        {
            return $this->successCheckTransaction(
                $transaction->create_time,
                $transaction->perform_time,
                $transaction->cancel_time,
                $transaction->id,
                $transaction->state,
                $transaction->reason
            );
        }else{
            throw new PaymeException(PaymeException::TRANS_NOT_FOUND);
        }
    }

    public function GetStatement()
    {
        if (!$this->hasParam(['from', 'to'])) {
            throw new PaymeException(PaymeException::JSON_RPC_ERROR);
        }

        $from = $this->params['from'];
        $to = $this->params['to'];

        $transactions = PaymeTransaction::whereBetween('create_time', [$from, $to])
            ->orderBy('create_time', 'asc')
            ->get();

        if ($transactions->isEmpty()) {
            return $this->successGetStatement([]);
        }

        $transactionList = $transactions->map(function ($transaction) {
            return [
                'id' => $transaction->transaction,
                'time' => $transaction->create_time,
                'amount' => $transaction->amount,
                'account' => [
                    'invoice' => $transaction->owner_id
                ],
                'create_time' => $transaction->create_time,
                'perform_time' => $transaction->perform_time ?? 0,
                'cancel_time' => $transaction->cancel_time ?? 0,
                'transaction' => $transaction->transaction,
                'state' => $transaction->state,
                'reason' => $transaction->reason,
                /*'receivers' => $transaction->receivers()->get()->map(function ($receiver) {
                    return [
                        'id' => $receiver->id,
                        'amount' => $receiver->amount,
                    ];
                }),*/
            ];
        });

        return $this->successGetStatement($transactionList);
    }

    protected function successGetStatement($transactions)
    {
        return response()->json([
            'result' => [
                'transactions' => $transactions
            ]
        ]);
    }

    public function SetFiscalData(){
        // pass
    }
}
