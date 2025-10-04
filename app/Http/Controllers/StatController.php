<?php

namespace App\Http\Controllers;

use App\Exports\ByudExport;
use App\Http\Resources\StatServiceResource;
use App\Models\StatData;
use App\Models\Statservice\AppPrice;
use App\Models\Statservice\AppStatus;
use App\Models\StatServiceApplication;
use App\Services\StatService as ServiceStat;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class StatController extends Controller
{

    public function index(Request $request)
    {
        $data = $request->only(['name', 'month', 'toMonth', 'year', 'online']);
        $apiCodes = array("davlatimex_n", "tovarimex_n", "hududimex_n", "istemolimex_n"); //"hududimex", "avto", "kunimex",
        if (isset($data['name']) and in_array($data['name'], $apiCodes)) $apiCode = $data['name']; else $apiCode = "hududimex_n";

        $params = $request->only(['year', 'month', 'toMonth', 'rejim']);
        $month = 0;
        $year = 0;
        $rejim = 0;
        $toMonth = 0;

        if (isset($params['year'])) {
            //if($params['year']==='2023') $params['year']=2020;
            //if($params['year']==='2022') $params['year']=2019;
            $year = $params['year'];
        }

        if (isset($params['month'])) {
            $month = $params['month'];
        }
        if (isset($params['toMonth'])) {
            $toMonth = $params['toMonth'];
        }
        if (isset($params['rejim'])) {
            $rejim = $params['rejim'];
        }

        $statService = new ServiceStat(!isset($data['online']));
        // $statService->fromRepl = !isset($data['online']);
        $function = $statService->nameFunctions[$apiCode];
        $locale = app()->getLocale();
        if (!empty($request->lang)) {
            $locale = $request->lang;
        }
        $json = json_decode(File::get(base_path('resources/js/locales/dynamic/' . $locale . '.json')), true);

        global $myApp;
        $myApp = $this;
        $returnData = collect($statService->$function($year, $month, $rejim, $toMonth))->transform(function ($item) use ($request, $apiCode) {
            global $myApp;

            /*            if ($apiCode === 'tovarimex_n') {
                            if( gettype($item)==='array' && isset($item['titleen']))
                            $item['title'] = $myApp->translateText(trim($item['title'])); else
                            $item->title = $myApp->translateText(trim($item->title));
                        }*/
            /*if ($apiCode === 'tovarimex_n') {
                if (!isset($item->country)) return $item;
                $locale = app()->getLocale();
                if (!empty($request->lang)) {
                    $locale = $request->lang;
                }
                $country = str_replace("'", "\'", $item->country);
                if ($locale === 'en') $locale = 'gb';
                DB::enableQueryLog();

                $countries = DB::select("SELECT * FROM countries WHERE CODE = (SELECT CODE FROM countries WHERE cd_nm LIKE '%" . $country . "%' Limit 1) AND LNGA_TPCD = '" . $locale . "' AND use_yn='Y';");

                //$countries->where('CD_NM', 'like', '%' . $item->country . '%');
                //$countries->where('LNGA_TPCD', '=', strtoupper(app()->getLocale()));
                //dd(DB::getQueryLog());

                if (!empty($countries)) {
                    $item->country = $countries[0]->CD_NM;
                }
                //dd(app()->getLocale());

                //$item->country=(new DataController())->getCountry()
            }
            if ($apiCode === 'tovarimex') {

                // $json=json_decode(file_get_contents(base_path('resources/js/locales/dynamic/' . $locale . '.json')),true);

                if (!isset($json[$item->title])) {
                    global $newtranslates;
                    $newtranslates[$item->title] = $item->title;

                    // File::put(base_path('resources/js/locales/dynamic/' . $locale . '1.json'), json_encode($json,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
                    // file_put_contents(base_path('resources/js/locales/dynamic/' . $locale . '1.json'), json_encode($json,JSON_PRETTY_PRINT));
                } else {
                    $item->title = $json[$item->title];
                }

                // dd($item);


                //dd(app()->getLocale());

                //$item->country=(new DataController())->getCountry()
            }*/
            return $item;
        })->all();

        /*  if ($apiCode === 'tovarimex' and !empty($newtranslates)) {
              // $json=json_decode(file_get_contents(base_path('resources/js/locales/dynamic/' . $locale . '.json')),true);


              File::put(base_path('resources/js/locales/dynamic/' . $locale . '.json'), json_encode(array_merge($json, $newtranslates), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
              // file_put_contents(base_path('resources/js/locales/dynamic/' . $locale . '1.json'), json_encode($json,JSON_PRETTY_PRINT));


              // dd($item);


              //dd(app()->getLocale());

              //$item->country=(new DataController())->getCountry()
          }*/
        $returnData = json_decode(json_encode($returnData), true);
        return response()->json(['data' => (array)$returnData]);

    }


    public function translateText($text)
    {
        $json = json_decode(File::get(base_path('resources/js/locales/dynamic/' . app()->getLocale() . '.json')), true);
        return (isset($json[$text])) ? $json[$text] : $text;
    }


    public function generateApp(Request $request)
    {
        $orgName = (auth()->user()->type === 2)
            ? "'" . trim(str_replace(
                    ["'", "\\", '"'],
                    ["''", '', ''],
                    json_decode(auth()->user()->legal_info)[0]->le_name)
            ) . "'"
            : trim(auth()->user()->sur_name . ' ' . auth()->user()->first_name . ' ' . auth()->user()->mid_name);
        $data = [
            'pin' => auth()->user()->pin,
            'tin' => (auth()->user()->type === 2) ? auth()->user()->legal_tin : auth()->user()->tin,
            'is_yuridik' => auth()->user()->type === 2,

        ];

        $statservice = StatServiceApplication::where($data)->whereHas('status', function ($query) {
            return $query->where('status_id', '<', 4);
        })->first();
        if (!$statservice) {
            $statservice = StatServiceApplication::create($data);
            $statservice->giveStatus(1);
        }
        $statservice->org_name = $statservice->org_name ?? $orgName;
        if (!$statservice->status()->first()) {
            $statservice->giveStatus(1);
        }
        return StatServiceResource::make($statservice);

    }

    public function show(StatServiceApplication $statservice, Request $request)
    {
        if ($statservice->pin != auth()->user()->pin and $statservice->tin != ((auth()->user()->type === 2) ? auth()->user()->legal_tin : auth()->user()->tin))
            return response()->json(['error' => 'Not found'], 404);
        $data = $request->only(['completed']);

        $statserviceApp = StatServiceApplication::with('status')->whereHas('status', function ($query) use ($data) {
            if (isset($data['completed']))
                return $query->where('status_id', '>', 3)->where('application_status.deleted_at', null); else return $query->where('status_id', '<', 4)->where('application_status.deleted_at', null);
        })->where('id', $statservice->id)->first();

        if (!$statserviceApp) {
            return response()->json(['error' => 'Not found..'], 404);
        }


        return StatServiceResource::make($statserviceApp);

    }

    public function saveStat(StatServiceApplication $statservice, Request $request)
    {
        $data = $request->only([
            'step',
            'org_name',
            /*            'pin',
                        'tin',*/
            'address',
            'phone',
            'email',
            'application_type',
            'region',
            'post',
            'org',
            'rejim',
            'is_tsa',
            'tftn',
            'shartnoma',
            'country',
            'byud',
            'isCreatedDate',
            'byudsanadan',
            'byudsanagacha',
            'grafalar',
        ]);


        if ($statservice->pin != auth()->user()->pin)
            return response()->json([
                'status' => 'error',
                'error' => 'Not found'
            ], 404);

        $v = Validator::make($data, [
            'step' => 'required|numeric',
            'org_name' => 'required_if:step,1',
            'address' => 'required_if:step,1',
            'phone' => 'required_if:step,1',
            'email' => 'required_if:step,1|email',
            'application_type' => 'required_if:step,2|numeric',
            'byudsanadan' => 'date_format:d-m-Y|before:' . date('d-m-Y', strtotime('+1 day')) . '|after:' . date('d-m-Y', strtotime('first day of January -3 years')) . '|required_if:step,3',
            'byudsanagacha' => 'date_format:d-m-Y|before:' . date('d-m-Y', strtotime('+1 day')) . '|after:' . date('d-m-Y', strtotime('first day of January -3 years')) . '|required_if:step,3'
        ]);
        if ($v->fails()) {
            return response()->json([
                'status' => 'error',
                'error' => $v->errors()
            ], 400);
        }
        if (!isset($data['byudsanadan']) || (Carbon::now(config('timezone'))->subYears(3)->startOfYear()->getTimestamp() > Carbon::createFromFormat('d-m-Y', $data['byudsanadan'])->getTimestamp())) {
            $data['byudsanadan'] = Carbon::now(config('timezone'))->subYears(3)->startOfYear()->format('Y-m-d');
        }
        if (!isset($data['byudsanagacha']) || (Carbon::now(config('timezone'))->subYears(3)->startOfYear()->getTimestamp() > Carbon::createFromFormat('d-m-Y', $data['byudsanagacha'])->getTimestamp())) {
            $data['byudsanagacha'] = Carbon::now(config('timezone'))->subYears(3)->startOfYear()->format('Y-m-d');
        }
        if ($statservice->status()->first()->id === 2) {
            return response()->json(['errror' => _('Hisoblash jarayonida')], 400);
        }
        foreach ($statservice->price()->where('deleted_at', '<>', null)->get() as $price) {
            $price->update([
                'deleted_at' => now()
            ]);
        }
        if ($statservice->status()->first()->id > 2) {
            $statservice->giveStatus(1);
        }
        // $data['tin'] = (auth()->user()->type===2)?auth()->user()->legal_tin:auth()->user()->tin;
        switch ($data['step']) {
            case 1:
                $statservice->update($data);
                $statservice->step = 1;
                if ($statservice->save()) {
                    return StatServiceResource::make($statservice);
                } else response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 2:

                $statservice->application_type = (int)$data['application_type'] + 1;
                $statservice->step = 3;
                if ($statservice->save()) {
                    return StatServiceResource::make($statservice);
                } else return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 3:
                if (isset($data['region']) and is_array($data['region']) and $data['region']) {
                    foreach ($data['region'] as $regionItem) {
                        $statservice->app_regions()->updateOrCreate(['region_code' => $regionItem]);
                    }
                    $statservice->app_regions()
                        ->whereNotIn('region_code', $data['region'])
                        ->delete();
                } else $statservice->app_regions()->delete();
                if (isset($data['post']) and is_array($data['post']) and $data['post']) {
                    foreach ($data['post'] as $item) {
                        $statservice->app_posts()->updateOrCreate(['post_code' => $item]);
                    }
                    $statservice->app_posts()
                        ->whereNotIn('post_code', $data['post'])
                        ->delete();
                } else $statservice->app_posts()->delete();
                // tarmoq
                if (isset($data['org']) and is_array($data['org']) and $data['org']) {
                    foreach ($data['org'] as $item) {
                        $statservice->tarmoq()->updateOrCreate(['tarmoq_inn' => $item]);
                    }
                    $statservice->tarmoq()
                        ->whereNotIn('tarmoq_inn', $data['org'])
                        ->delete();
                } else $statservice->tarmoq()->delete();


                if (isset($data['is_tsa'])) $statservice->is_tsa = $data['is_tsa']; else $statservice->is_tsa = false;
                if (isset($data['rejim']) and is_array($data['rejim']) and $data['rejim']) foreach ($data['rejim'] as $item) {
                    $statservice->app_regimes()->updateOrCreate(['rejim_code' => $item]);
                    $statservice->app_regimes()
                        ->whereNotIn('rejim_code', $data['rejim'])
                        ->delete();
                } else $statservice->app_regimes()->delete();

                if (isset($data['tftn']) and is_array($data['tftn']) and $data['tftn']) foreach ($data['tftn'] as $item) {
                    $statservice->app_tftn()->updateOrCreate(['tiftn' => $item]);
                    $statservice->app_tftn()
                        ->whereNotIn('tiftn', $data['tftn'])
                        ->delete();
                } else $statservice->app_tftn()->delete();

                if (isset($data['shartnoma']) and is_array($data['shartnoma']) and $data['shartnoma']) foreach ($data['shartnoma'] as $item) {
                    $statservice->app_shartnoma()->updateOrCreate(['contract_idn' => $item]);
                    $statservice->app_shartnoma()
                        ->whereNotIn('contract_idn', $data['shartnoma'])
                        ->delete();

                } else $statservice->app_shartnoma()->delete();

                if (isset($data['country']) and is_array($data['country']) and $data['country']) foreach ($data['country'] as $item) {
                    $statservice->app_country()->updateOrCreate(['country_code' => $item]);
                    $statservice->app_country()
                        ->whereNotIn('country_code', $data['country'])
                        ->delete();
                } else $statservice->app_country()->delete();
                if (isset($data['byud']) and is_array($data['byud']) and $data['byud']) foreach ($data['byud'] as $item) {
                    $statservice->app_byud()->updateOrCreate(['byud_number' => $item]);
                    $statservice->app_byud()
                        ->whereNotIn('byud_number', $data['byud'])
                        ->delete();
                } else $statservice->app_byud()->delete();

                if (isset($data['byudsanadan']) and isset($data['byudsanagacha']))
                    $statservice->app_date()->updateOrCreate(['application_id' => $statservice->id], [
                        'from_date' => Carbon::createFromFormat('d-m-Y', $data['byudsanadan'])->format('Y-m-d'),
                        'to_date' => Carbon::createFromFormat('d-m-Y', $data['byudsanagacha'])->format('Y-m-d'),
                        'is_confirmed_date' => !(isset($data['isCreatedDate']) and $data['isCreatedDate'])
                    ]);
                $statservice->step = 4;
                if ($statservice->save()) {
                    return response()->json(['data' => StatServiceResource::make($statservice)], 200);
                } else return response()->json(['errors' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 4:
                if ($statservice->application_type === '1') {

                    if (isset($data['grafalar']) and is_array($data['grafalar'])) {
                        foreach ($data['grafalar'] as $item) {
                            $statservice->app_docs()->updateOrCreate(['doc_code' => $item]);
                        }
                        $statservice->app_docs()
                            ->whereNotIn('doc_code', $data['grafalar'])
                            ->delete();
                    } else $statservice->app_docs()->delete();
                } else {
                    if (isset($data['grafalar']) and is_array($data['grafalar'])) {
                        foreach ($data['grafalar'] as $item) {
                            $statservice->app_fields()->updateOrCreate(['field_code' => $item]);
                        }
                        $statservice->app_fields()
                            ->whereNotIn('field_code', $data['grafalar'])
                            ->delete();
                    } else $statservice->app_fields()->delete();
                }
                $statservice->step = 5;


                if ($statservice->save()) {
                    // $this->getPrice($statservice);
                    return response()->json(['data' => $statservice]);
                } else return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 5:
                $statservice->step = $data['step'];

                $lastOrder = 0;

                $lastdata = StatServiceApplication::select(DB::raw("MAX(CAST(SUBSTR(appNum, LENGTH(appNum)-2, 8) AS INT)) AS last_order"))->first();
                if ($lastdata) $lastOrder = $lastdata->last_order;

                $statservice->appNum = 'EI' . str_pad($lastOrder + 1, 8, '0', STR_PAD_LEFT);
                $statservice->giveStatus(4);
                if ($statservice->save()) {
                    return response()->json(['data' => $statservice]);
                } else return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            default:
                return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
        }

    }

    public function getApps(Request $request)
    {
        $data = $request->only(['pin', 'tin', 'status', 'id']);

        $validator = Validator::make($data, [
            'pin' => ['required'],
        ]);
        if ($validator->fails()) return response()->json($validator->messages(), 400);

        if (isset($data['id'])) {
            $services = \App\Models\StatService\StatService::where(['pin' => $data['pin'], 'id' => $data['id']])->first();
            if ($services) {
                // $this->getPrice($services);
                return response()->json(['data' => StatServiceResource::make($services)]);
            } else {
                return response()->json(['data' => 'Маълумотлар топилмади!'], 404);
            }
        }
        if (isset($data['status'])) {
            if ($data['status'] == 0) {
                $services = ServiceStat::where(['pin' => (string)$data['pin'], 'status' => null])->first();
                if (!$services) return response()->json(['data' => 'Маълумотлар топилмади.'], 404);
                // $this->getPrice($services);
            } else
                if ($data['status'] === 'sent') {
                    $services = ServiceStat::where(['pin' => $data['pin']])->where('status', '<>', null)->get();
                } else
                    $services = ServiceStat::where(['pin' => $data['pin'], 'status' => $data['status']])->get();
        } else $services = ServiceStat::where(['pin' => $data['pin']])->get();

        if ($data['status'] == 0) return response()->json(['data' => StatServiceResource::make($services)]);
        return response()->json(['data' => StatServiceResource::collection($services)]);
    }

    public function exportByud()
    {
        $service = ServiceStat::first();

        try {
            return (new ByudExport($service))->download("result.xlsx");
        } catch (Exception $e) {
            dd($e);
        }

    }

    public function agreed(Request $request)
    {
        $data = $request->only(['pin', 'tin']);
        $service = ServiceStat::where(['status' => 1, 'pin' => $data['pin']])->first();
        if ($service) {
            $service->status = 2;
            $service->save();
        }
    }

    public function getPrice(StatServiceApplication $statservice, Request $request)
    {
        $data = $request->only(['calculate']);
        if ($statservice->status()->first()->id === 2)
            return response()->json(['error' => _('Ҳисоблаш жараёнида'), 'status' => $statservice->status()->first()->id]);

        if (isset($data['calculate']) && in_array(($statservice->status()->first()->id), [1, 8])) {
            $response = Http::withoutVerifying()->get('http://172.16.112.27:8089/' . $statservice->id . '/calculate');
            $responseData = $response->json();
            if (!$responseData['success']) {
                return response()->json(['error' => $responseData->message, 'status' => $statservice->status()->first()->id], 400);
            } else {
                $statservice->load('status');
            }
            return response()->json(['error' => _('Ҳисоблаш жараёнида'), 'status' => $statservice->status()->first()->id]);
        }
        $bhm = DB::connection('db2_odbc_new_stat')->table('bhm')->whereNull('ends')->first();
        $priceQuery = AppPrice::with('tarif')->where('application_id', '=', $statservice->id)->get()->unique('tariff_id');
        $priceData = $priceQuery->values();
        $totalSum = (int)($priceQuery->sum('price') * 100);
        return response()->json([
            'status' => $statservice->status()->first()->id,
            'data' => $priceData,
            'bhm' => $bhm->value,
            'total' => $totalSum,
            'payme' => base64_encode('m=' . config('payme.merchant_id') . ';ac.invoice_id=' . $statservice->appnum . ';a=' . $totalSum)
        ], 200);


    }
}
