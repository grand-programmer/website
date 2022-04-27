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

        $apiCodes = array("hududimex", "avto", "kunimex");
        if (isset($data['name']) and in_array($data['name'], $apiCodes)) $apiCode = $data['name']; else $apiCode = "hududimex";

        $params = $request->only(['year', 'month']);
        $month = 0;
        $year = 0;

        if (isset($params['year'])) {
            $year = $params['year'];
        }

        if (isset($params['month'])) {
            $month = $params['month'];
        }
        $statService = new StatService();

        $statService->fromRepl = !isset($data['online']);
        $function = $statService->nameFunctions[$apiCode];
        return response()->json(['data' => $statService->$function($year, $month)]);

    }
}
