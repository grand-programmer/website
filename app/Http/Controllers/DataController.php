<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Ramsey\Collection\Collection;

class DataController extends Controller
{
    public function getTftn(Request $request)
    {
        $data = $request->only('code', 'page','name');

        if (isset($data['code'])) {
            $returnData = DB::connection('db2_odbc')->select(
                "select tnved.*, u1.shortname as u1,u2.shortname as u2 from TNVED2 tnved
                    Left Join Unit u1 On tnved.unit1=u1.id
                    Left Join Unit u2 On tnved.unit2=u2.id
                    WHERE tnved.FINISHDATE IS NULL and tnved.ID LIKE '" . $data['code'] . "%'");
            $returnData = collect($returnData)->transform(function ($item) {
                $item->name = str_replace("", "-", $item->name);
                return $item;
            });
        } else {

            if (isset($data['name'])) {
                $returnData = DB::connection('db2_odbc')->select(
                    "select tnved.*, u1.shortname as u1,u2.shortname as u2 from TNVED2 tnved
                    Left Join Unit u1 On tnved.unit1=u1.id
                    Left Join Unit u2 On tnved.unit2=u2.id
                    WHERE tnved.FINISHDATE IS NULL and tnved.name LIKE '%" . $data['name'] . "%'");
                $returnData = collect($returnData)->transform(function ($item) {
                    $item->name = str_replace("", "-", $item->name);
                    return $item;
                });
            } else {


                $returnData = DB::connection('db2_odbc')->select(
                    "select tnved.*, u1.shortname as u1,u2.shortname as u2 from TNVED2 tnved
                    Left Join Unit u1 On tnved.unit1=u1.id
                    Left Join Unit u2 On tnved.unit2=u2.id
                    WHERE tnved.FINISHDATE IS NULL");
                $returnData = collect($returnData)->transform(function ($item) {
                    $item->name = str_replace("", "-", $item->name);
                    return $item;
                });
            }
        }
        if (isset($data['page'])) {
            if($data['page']== -1 ) {
                return response()->json($returnData->all());
            }
            return response()->json($returnData->take((int)$data['page']));
        }
        if($returnData->isEmpty()) return response()->json(['error'=>'Not Found'],404);
        return response()->json($returnData->take(10));
    }

    public function getInn(Request $request)
    {
        $data = $request->only('code', 'page');
        $returnData =[];
        if (isset($data['code'])) {
            $returnData = DB::connection('db2_odbcInn')->select(
                "select tin,name,shortname,registrationdate,registrationnumber from INN_ASOS WHERE tin = '" . $data['code'] . "'");
            $returnData = collect($returnData)->transform(function ($item) {
                $item->name = str_replace("", "-", $item->name);
                return $item;
            })->all();
        }


        return response()->json($returnData);
    }
    public function getCurrency(Request $request)
    {
        $data = $request->only(['code', 'name', 'lang']);

        $currencies = DB::table('currencies');
        if (isset($data['code'])) $currencies->where('CODE', '=', $data['code']);
        if (isset($data['name'])) $currencies->where('CD_NM', 'like', $data['name'] . '%');
        if (isset($data['lang'])) $currencies->where('LNGA_TPCD', '=', $data['lang']); else $currencies->where('LNGA_TPCD', '=', 'OZ');

        return response()->json($currencies->get()->toArray());
    }

    public function getCountry(Request $request)
    {
        $data = $request->only(['code', 'name', 'lang']);

        $currencies = DB::table('countries');
        if (isset($data['code'])) $currencies->where('CODE', '=', $data['code']);
        if (isset($data['name'])) $currencies->where('CD_NM', 'like', $data['name'] . '%');
        if (isset($data['lang'])) $currencies->where('LNGA_TPCD', '=', $data['lang']); else $currencies->where('LNGA_TPCD', '=', 'OZ');
        return response()->json($currencies->get()->toArray());
    }
    public function getEisvoContract(Request $request)
    {
        $data = $request->only(['code','inn']);
        if (isset($data['inn'])) {
            //dd("select KNTID from contracts where KNTTYPE in (11,12,16,17,'06') and ACTIVE_PR=0 and KNTRINN =" . $data['inn']);
            $returnData = DB::connection('databaseconfig2_10_EISVO')->select(
                "select KNTID from contracts where KNTTYPE in (11,12,16,17,6) and ACTIVE_PR=0 and KNTRINN ='" . $data['inn']."'");
            if($returnData) return response()->json(['data'=>$returnData]);
        }
        if (isset($data['code'])) {
            $returnData = DB::connection('databaseconfig2_10_EISVO')->select(
                "select KNTID from contracts where KNTTYPE in (11,12,16,17,6) and ACTIVE_PR=0 and KNTID LIKE '" . $data['code'] . "%' fetch first 5 rows only");
            if($returnData) return response()->json(['data'=>$returnData]);
        }
        return response()->json(['data'=>[]]);
    }
    public function getMFO(Request $request)
    {
        $data = $request->only(['code','lang']);

        //$currencies = DB::table('countries');
        if (!isset($data['code']))
            return response()->json([]);
        $response = Http::contentType("application/json")->timeout(10)->get('http://192.168.214.152:7070/DECAPP/s04apiresponse/getMfo', [
            "mfoCode" => $data['code'],
        ]);

        if ($response->status() == 200) {
            return $response->json();
        }
        return response()->json([]);

    }

}
