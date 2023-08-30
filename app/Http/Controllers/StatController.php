<?php

namespace App\Http\Controllers;

use App\Exports\ByudExport;
use App\Http\Resources\StatServiceResource;
use App\Models\StatData;
use App\Models\StatService as ServiceStat;
use App\Services\StatService;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

class StatController extends Controller
{
    public function index(Request $request)
    {
        $data = $request->only(['name', 'month', 'year', 'online']);

        $apiCodes = array("davlatimex", "tovarimex", "oyimex"); //"hududimex", "avto", "kunimex",
        if (isset($data['name']) and in_array($data['name'], $apiCodes)) $apiCode = $data['name']; else $apiCode = "davlatimex";

        $params = $request->only(['year', 'month', 'rejim']);
        $month = 0;
        $year = 0;
        $rejim = 0;

        if (isset($params['year'])) {
            if($params['year']==='2023') $params['year']=2020;
            if($params['year']==='2022') $params['year']=2019;
            $year = $params['year'];
        }

        if (isset($params['month'])) {
            $month = $params['month'];
        }
        if (isset($params['rejim'])) {
            $rejim = $params['rejim'];
        }

        $statService = new StatService();
        $statService->fromRepl = !isset($data['online']);
        $function = $statService->nameFunctions[$apiCode];
        $locale = app()->getLocale();
        if (!empty($request->lang)) {
            $locale = $request->lang;
        }
        $json = json_decode(File::get(base_path('resources/js/locales/dynamic/' . $locale . '.json')), true);

        global $newtranslates;
        $newtranslates = [];
        $data = collect($statService->$function($year, $month, $rejim))->transform(function ($item) use ($request, $apiCode) {

            if ($apiCode === 'davlatimex') {
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
            }
            return $item;
        })->all();

        if ($apiCode === 'tovarimex' and !empty($newtranslates)) {
            // $json=json_decode(file_get_contents(base_path('resources/js/locales/dynamic/' . $locale . '.json')),true);


            File::put(base_path('resources/js/locales/dynamic/' . $locale . '.json'), json_encode(array_merge($json, $newtranslates), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
            // file_put_contents(base_path('resources/js/locales/dynamic/' . $locale . '1.json'), json_encode($json,JSON_PRETTY_PRINT));


            // dd($item);


            //dd(app()->getLocale());

            //$item->country=(new DataController())->getCountry()
        }

        return response()->json(['data' => $data]);

    }

    public function saveStat(Request $request)
    {
        $data = $request->only([
            'id',
            'step',
            'org_name',
            'tin',
            'address',
            'phone',
            'email',
            'servicetype',
            'boshqarma',
            'post',
            'rejim',
            'tftn',
            'shartnoma',
            'country',
            'byud',
            'byudsanadan',
            'byudsanagacha',
            'grafalar',
        ]);
        $v = Validator::make($data, [
            'step' => 'required|numeric',
            'org_name' => 'required_if:step,1',
            'tin' => 'required_if:step,1|digits:9',
            'address' => 'required_if:step,1',
            'phone' => 'required_if:step,1',
            'email' => 'required_if:step,1|email',
            'servicetype' => 'required_if:step,2|numeric',
            'byudsanadan' => 'required_if:step,3',
            'byudsanagacha' => 'required_if:step,3',
            'id' => 'required_if:step,2|numeric',
        ]);
        if ($v->fails()) {
            return response()->json([
                'status' => 'error',
                'error' => $v->errors()
            ], 400);
        }
        switch ($data['step']) {
            case 1:
                $findService = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id, 'step' => 1])->first();
                if ($findService) {
                    $findService->update($data);
                    $service = $findService;
                } else {
                    $service = ServiceStat::make($data);
                    $service->user_id = Auth::guard('api')->user()->id;
                    $service->pin = Auth::guard('api')->user()->pin;
                }
                $service->step=2;
                if ($service->save()) {

                    return response()->json(['data' => $service]);
                } else response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 2:
                $service = ServiceStat::find($data['id']);
                if (!$service) return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 404);
                if($data['servicetype']!==$service->servicetype){
                    $service->grafalar=[];
                }
                $service->servicetype = $data['servicetype'];
                $service->step = 3;
                if ($service->save()) {
                    return response()->json(['data' => $service], 200);
                } else return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 3:
                $service = ServiceStat::find($data['id']);
                if (!$service) return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 404);
                $service->boshqarma = isset($data['boshqarma']) ? $data['boshqarma'] : null;
                $service->post = isset($data['post']) ? $data['post'] : null;
                $service->rejim = isset($data['rejim']) ? $data['rejim'] : null;
                $service->tftn = isset($data['tftn']) ? $data['tftn'] : null;
                $service->shartnoma = isset($data['shartnoma']) ? $data['shartnoma'] : null;
                $service->country = isset($data['country']) ? $data['country'] : null;
                $service->byud = isset($data['byud']) ? $data['byud'] : null;
                $service->byudsanadan = date("Y-m-d", strtotime($data['byudsanadan']));
                $service->byudsanagacha = date("Y-m-d", strtotime($data['byudsanagacha']));
                $service->step=4;
                if ($service->save()) {
                    return response()->json(['data' => $service], 200);
                } else return response()->json(['erros' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            case 4:
                $service = ServiceStat::find($data['id']);
                if (!$service) return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 404);
                $service->grafalar = isset($data['grafalar']) ? $data['grafalar'] : [];
                $service->step = 5;
                $service->save();
/*                $service->status = 1;
                $service->statusNm = 'Янги';*/


                if ($service->save()) {
                    $this->getPrice($service);
                    return response()->json(['data' => $service]);
                } else return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
                case 5:
                $service = ServiceStat::find($data['id']);
                if (!$service) return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 404);

                $service->step = $data['step'];
                $service->status = 1;
                $service->statusNm = 'Янги';


                if ($service->save()) {
                    return response()->json(['data' => $service]);
                } else return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
            default:
                return response()->json(['error' => 'Серверга маълумотлар сақлашда хатолик юз берди'], 400);
                break;
        }

    }

    public function getApps(Request $request)
    {
        $data = $request->only(['status', 'id']);
        if (isset($data['id'])) {
            $services = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id, 'id' => $data['id']])->first();
            if ($services) {
                $this->getPrice($services);
                return response()->json(['data' => StatServiceResource::make($services)]);
            } else {
                return response()->json(['data' => 'Маълумотлар топилмади'], 404);
            }
        }
        if (isset($data['status'])) {
            if ($data['status'] == 0) {
                $services = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id, 'status' => null])->first();
                if (!$services) return response()->json(['data' => 'Маълумотлар топилмади'], 404);
                $this->getPrice($services);
            } else
                if ($data['status'] === 'sent') {
                    $services = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id])->where('status', '<>', null)->get();
                } else
                    $services = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id, 'status' => $data['status']])->get();
        } else $services = ServiceStat::where(['user_id' => Auth::guard('api')->user()->id])->get();

        if ($data['status'] == 0) return response()->json(['data' => StatServiceResource::make($services)]);
        return response()->json(['data' => StatServiceResource::collection($services)]);
    }

    public function exportByud()
    {
        $service= ServiceStat::first();

        try {
            return (new ByudExport($service))->download("result.xlsx");
        } catch (Exception $e) {
            dd($e);
        }

    }
    public function agreed(){
        $service= ServiceStat::where(['status'=>1, 'user_id'=>Auth::guard('api')->user()->id])->first();
        if($service) {
            $service->status = 2;
            $service->save();
        }
    }

    public function getPrice(ServiceStat $statService)
    {
        if($statService->step < 5) return;
        $price= 0;
        if((int) $statService->servicetype ===0){
            $data=DB::connection('db2_odbc')->select($statService->getQuery(true));
            $price = (int)$data[0]->count * $statService->getBhm() * 0.01;
            $price= $price + ($statService->getBhm() * (int)$data[0]->count * 0.01 * count((is_array($statService->grafalar))?$statService->grafalar:json_decode($statService->grafalar)));
        }
        else {
            $data=DB::connection('db2_odbc')->select($statService->getQuery(true));
            if((int)$data[0]->count > 15000){
                $price= 3 * $statService->getBhm();
            } elseif ((int)$data[0]->count > 5000){
                $price= 2 * $statService->getBhm();
            } elseif ((int)$data[0]->count > 1500){
                $price= 1 * $statService->getBhm();
            } elseif ((int)$data[0]->count > 700){
                $price= 0.5 * $statService->getBhm();
            } elseif ((int)$data[0]->count > 300){
                $price= 0.2 * $statService->getBhm();
            } elseif ((int)$data[0]->count > 100){
                $price= 0.1 * $statService->getBhm();
            }
            else $price= 0.05 * $statService->getBhm();
            $price= $price + $price * 0.05 * count((is_array($statService->grafalar))?$statService->grafalar:json_decode($statService->grafalar));
        }
        $statService->price=$price;
        $statService->count=(int)$data[0]->count;
        $statService->save();

    }
}
