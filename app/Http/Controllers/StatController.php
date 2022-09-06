<?php

namespace App\Http\Controllers;

use App\Models\StatData;
use App\Services\StatService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $data = collect($statService->$function($year, $month, $rejim))->transform(function ($item) use ($request, $apiCode) {
            if ($apiCode === 'davlatimex') {
                $locale = app()->getLocale();
                if(!empty($request->lang)){
                    $locale = $request->lang;
                }

                $country=str_replace("'","\'",$item->country);
                if ($locale === 'en') $locale = 'gb';
                DB::enableQueryLog();

                $countries = DB::select("SELECT * FROM countries WHERE CODE = (SELECT CODE FROM countries WHERE cd_nm LIKE '%".$country."%' Limit 1) AND LNGA_TPCD = '" . $locale . "' AND use_yn='Y';");

                //$countries->where('CD_NM', 'like', '%' . $item->country . '%');
                //$countries->where('LNGA_TPCD', '=', strtoupper(app()->getLocale()));
                //dd(DB::getQueryLog());

                if(!empty($countries)){
                    $item->country=$countries[0]->CD_NM;
                }
                //dd(app()->getLocale());

                //$item->country=(new DataController())->getCountry()
            }
            return $item;
        })->all();

        return response()->json(['data' => $data]);

    }

}
