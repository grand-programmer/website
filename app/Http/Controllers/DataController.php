<?php

namespace App\Http\Controllers;

use App\Models\StatServiceApplication;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;
use Ramsey\Collection\Collection;

class DataController extends Controller
{
    public function getTftn(Request $request)
    {
        $data = $request->only('contract', 'code', 'page', 'name');

        /*        $validator = Validator::make($data, [
                    'code' => 'required|min:0|max:20'
                ]);
                if ($validator->fails()) {
                    return response()->json(['error' => $validator->errors()], 400);
                }*/
        if (isset($data['contract'])) {

            $contracts = $data['contract']; // bu massiv bo'lishi kerak: ['123', '456', '789']

            $placeholders = implode(',', array_fill(0, count($contracts), '?'));

            $sql = "
    select ktnved from tov_k t
    left join specification s on s.idcol=t.specification_key
    left join contracts c on c.idcol=s.contract_key
    where c.kntid in ($placeholders)
";


            $ktnvedValues = collect(
                DB::connection('databaseconfig2_10_EISVO')->select($sql, $contracts)
            )->pluck('ktnved')->toArray();

// 2. Ikkinchi so'rov
            if (!empty($ktnvedValues)) {
                $placeholders2 = implode(',', array_fill(0, count($ktnvedValues), '?'));

                $sql2 = "
        select tnved.*, u1.shortname as u1, u2.shortname as u2
        from TNVED2 tnved
        left join Unit u1 on tnved.unit1 = u1.id
        left join Unit u2 on tnved.unit2 = u2.id
        where tnved.FINISHDATE is null
          and tnved.ID in ($placeholders2)
    ";

                $returnData = DB::connection('db2_odbc')->select($sql2, $ktnvedValues);
            } else {
                $returnData = [];
            }

            $returnData = collect($returnData)->transform(function ($item) {
                $item->name = str_replace("", "-", $item->name);
                return $item;
            });


        } else {
            if (isset($data['code'])) {
                $returnData = DB::connection('db2_odbc')->select(
                    "select tnved.*, u1.shortname as u1,u2.shortname as u2 from TNVED2 tnved
                    Left Join Unit u1 On tnved.unit1=u1.id
                    Left Join Unit u2 On tnved.unit2=u2.id
                    WHERE tnved.FINISHDATE IS NULL and tnved.ID LIKE ?",
                    ['%' . $data['code'] . '%']);
                $returnData = collect($returnData)->transform(function ($item) {
                    $item->name = str_replace("", "-", $item->name);
                    return $item;
                });
            } else {

                if (isset($data['name'])) {
                    $returnData = DB::connection('db2_odbc')->select(
                        "SELECT tnved.*, u1.shortname as u1, u2.shortname as u2 
                     FROM TNVED2 tnved
                     LEFT JOIN Unit u1 ON tnved.unit1 = u1.id
                     LEFT JOIN Unit u2 ON tnved.unit2 = u2.id
                     WHERE tnved.FINISHDATE IS NULL AND tnved.name LIKE ?",
                        ['%' . $data['name'] . '%']
                    );
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
        }
        if (isset($data['page'])) {
            if ($data['page'] == -1) {
                return response()->json($returnData->all());
            }
            return response()->json($returnData->take((int)$data['page']));
        }
        if ($returnData->isEmpty()) return response()->json(['error' => 'Not Found'], 404);
        return response()->json($returnData->take(10));
    }

    public function getInn(Request $request)
    {
        $data = $request->only('code', 'page');
        $returnData = [];
        if (isset($data['code'])) {
            $returnData = DB::connection('db2_odbcInn')->select(
                "select tin,name,shortname,registrationdate,registrationnumber from INN_ASOS WHERE tin = ?", [$data['code']]);
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
        if (isset($data['lang'])) $currencies->where('LNGA_TPCD', '=', $data['lang']); else $currencies->where('LNGA_TPCD', '=', strtoupper(app()->getLocale()));

        return response()->json($currencies->get()->toArray());
    }

    public function getCountry(Request $request)
    {
        $data = $request->only(['code', 'name', 'lang']);

        $currencies = DB::table('countries');
        if (isset($data['code'])) $currencies->where('CODE', '=', $data['code']);
        if (isset($data['name'])) $currencies->where('CD_NM', 'like', $data['name'] . '%');
        if (isset($data['lang'])) $currencies->where('LNGA_TPCD', '=', $data['lang']); else $currencies->where('LNGA_TPCD', '=', strtoupper(app()->getLocale()));
        return response()->json($currencies->get()->toArray());
    }

    public function getEisvoContract(Request $request)
    {
        $data = $request->only(['code', 'inn']);
        if (isset($data['inn'])) {
            //dd("select KNTID from contracts where KNTTYPE in (11,12,16,17,'06') and ACTIVE_PR=0 and KNTRINN =" . $data['inn']);
            $returnData = DB::connection('databaseconfig2_10_EISVO')->select(
                "select KNTID from contracts where KNTTYPE in (11,12,16,17,'06','02','01') and ACTIVE_PR=0 and KNTRINN = ?", [$data['inn']]);
            if ($returnData) return response()->json(['data' => $returnData]);
        }
        if (isset($data['code'])) {
            $returnData = DB::connection('databaseconfig2_10_EISVO')->select(
                "select KNTID from contracts where KNTTYPE in (11,12,16,17,'06','02','01') and ACTIVE_PR=0 and KNTID LIKE ? fetch first 5 rows only", [$data['code'] . '%']);
            if ($returnData) return response()->json(['data' => $returnData]);
        }
        return response()->json(['data' => []]);
    }

    public function getMFO(Request $request)
    {
        $data = $request->only(['code', 'lang']);

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

    public function statservicetype(Request $request)
    {
        $data = $request->only(['lang']);
        return DB::connection('databaseconfigEd1')->table('application_types')->select(DB::raw("code, name_" . app()->getLocale() . " as name"))->get();

    }

    public function getPosts(Request $request)
    {
        $appData = $request->only('code');
        $code = isset($appData['code']) ? explode(",", $appData['code']) : null;
        $locationCode = $code && is_array($code) ? $code : [$code];
        $locationCodeFiltered = [];
        foreach ($locationCode as $lCode) {
            if ($lCode)
                $locationCodeFiltered[] = str_replace(17, '', $lCode);
        }

        return response()->json(['posts' => DB::connection('databaseconfigEd1')->table('spr_posts')->select(DB::raw("code, name_" . app()->getLocale() . " as name"))->whereIn('region_code', $locationCodeFiltered)->get()]);
    }

    public function getRegions(Request $request)
    {
        return response()->json(DB::connection('databaseconfigEd1')->table('spr_regions')->select(DB::raw("code as value, name_" . app()->getLocale() . " as text"))->get());
    }

    public function getStatServiceRegime(StatServiceApplication $statservice, Request $request)
    {
        if (!$statservice->application_type || $statservice->application_type == 1)
            return DB::connection('databaseconfigEd1')->table('spr_rejims')->where('type', 'umumiy')->select(DB::raw("id,type,code1,code2, name_" . app()->getLocale() . " as name"))->get();
        return DB::connection('databaseconfigEd1')->table('spr_rejims')->whereIn('S' . ((int)$statservice->application_type), [1, 2])->select(DB::raw("id,type,code1,code2, name_" . app()->getLocale() . " as name"))->get();
    }

    public function getStatServiceFields(StatServiceApplication $statservice, Request $request)
    {

        if ($statservice->application_type === '1') return ['data' => DB::connection('databaseconfigEd1')->table('spr_docs')->where('deleted_at', null)->select(DB::raw("spr_docs.code, code_name, doc_groups.name_" . app()->getLocale() . " as group_name, group_code, spr_docs.name_" . app()->getLocale() . " as name"))->join('doc_groups', 'spr_docs.group_code', '=', 'doc_groups.code')->get()->groupBy('group_code')->toArray()];
        return [
            'data' => DB::connection('databaseconfigEd1')->table('spr_fields')->where('type', 'secondary')->where('deleted_at', null)->whereIn('S' . ((int)$statservice->application_type), [1, 2])->select(DB::raw("group_code as code, name_front_" . app()->getLocale() . " as name"))->groupBy('group_code', 'name_front_' . app()->getLocale())->get(),
            'secondary' => DB::connection('databaseconfigEd1')->table('spr_fields')->where('type', 'primary')->where('deleted_at', null)->whereIn('S' . ((int)$statservice->application_type), [1, 2])->select(DB::raw("code, name_" . app()->getLocale() . " as name"))->groupBy('code', 'name_' . app()->getLocale())->get()
        ];
    }

    public function getStatServiceTarifs(Request $request)
    {
        $asos = DB::connection('databaseconfigEd1')->table('staff_asos')->whereNull('ENDS')->first();
        //      if($asos) $asos = $asos[0]; else return [];
        return DB::connection('databaseconfigEd1')->table('tariffs')->select(DB::raw("code, name_" . app()->getLocale() . " as name, is_bhm, value,tt.application_type_id"))->join('tariff_application_types as tt', 'tt.tariff_code', '=', 'tariffs.code')->where(['asos_id' => $asos->id, 'tariffs.deleted_at' => null])->get()->groupBy('code')->toArray();
    }


    public function getStatServiceTarmoq(StatServiceApplication $statservice, Request $request)
    {
        return DB::connection('db2_odbc_stat')->table('spr_tarmoq')->where('stir_1', '=', auth()->user()->legal_tin)->select(DB::raw("stir_2 as value, name_2 as text"))->get();
    }

}
