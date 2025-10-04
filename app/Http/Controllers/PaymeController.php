<?php

namespace App\Http\Controllers;


use App\Exceptions\PaymeException;
use App\Services\PaymeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymeController
{
    public function handle(Request $request)
    {
        if ($request->method() !== 'POST') {
            throw new PaymeException(PaymeException::INVALID_HTTP_METHOD);
        }

        $data = $request->all();

        if (!isset($data['method']) || !isset($data['params'])) {
            throw new PaymeException(PaymeException::JSON_PARSING_ERROR);
        }

        $method = $data['method'];
        $params = $data['params'];

        $paymeMethods = [
            'CheckPerformTransaction'=>1,
            'CreateTransaction'=>1,
            'PerformTransaction'=>1,
            'CancelTransaction'=>1,
            'CheckTransaction'=>1,
            'GetStatement'=>1,
            'SetFiscalData'=>1,
        ];


        if (!isset($paymeMethods[$method])) {
            throw new PaymeException(PaymeException::METHOD_NOT_FOUND);
        }
        return (new PaymeService($params))->{$method}();
    }

}
