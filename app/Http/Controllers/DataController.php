<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Collection\Collection;

class DataController extends Controller
{
    public function getTftn(Request $request)
    {
        $data = $request->only('code', 'page');

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
        if (isset($data['page'])) {
            if($data['page']== -1 ) {
                return response()->json($returnData->all());
            }
            return response()->json($returnData->take((int)$data['page']));
        }
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

}
