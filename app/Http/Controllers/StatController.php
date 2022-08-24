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

        $apiCodes = array( "davlatimex", "tovarimex","oyimex"); //"hududimex", "avto", "kunimex",
        if (isset($data['name']) and in_array($data['name'], $apiCodes)) $apiCode = $data['name']; else $apiCode = "davlatimex";

        $params = $request->only(['year', 'month','rejim']);
        $month = 0;
        $year = 0;
        $rejim=0;

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
        $statService->fromRepl =!isset($data['online']);
        $function = $statService->nameFunctions[$apiCode];
        return response()->json(['data' => $statService->$function($year, $month,$rejim)]);

    }

}
