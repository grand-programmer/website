<?php

namespace App\Services;

use App\Helpers\MainHelper;
use App\Models\StatData;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StatService
{
    public function __construct($fromRepl = true)
    {
        $this->fromRepl = $fromRepl;

    }

    public $yearLoop = 1;
    public $fromRepl = true;
    public $nameFunctions = [
        //'avto' => 'getAvtoData',
        //'kunimex' => 'getKunImExData',
        //'hududimex' => 'getHududImExData',
        // 'davlatimex' => 'getDavlatImExData',
        // 'tovarimex' => 'getTovarImExData',
        // 'oyimex' => 'getOyImExData',
        'istemoltovar_n' => 'getIstemolTovarDataNew',
        'istemolimex_n' => 'getIstemolDataNew',
        'davlatimex_n' => 'getDavlatImExDataNew',
        'tovarimex_n' => 'getTovarImExDataNew',
        'hududimex_n' => 'getHududImExDataNew',
    ];

    public function parse()
    {
        foreach ($this->nameFunctions as $name => $function) {
            $this->saveAllData($name);
        }

           //  $this->saveAllData('istemolimex_n');

    }

    public function saveAllData($name = 'davlatimex_n')
    {
        $year = $date = date("Y");
        for ($year = $date; $year >= $date - 2; $year--) {
            for ($month = 0; $month <= 12; $month++) {
/*                for ($rejim = 0; $rejim <= 2; $rejim++) {
                    $this->saveData($name, $year, $month, $rejim, 0);
                }*/
                for ($toMonth = 0; $toMonth <= 12; $toMonth++) {
                    for ($rejim = 0; $rejim <= 2; $rejim++) {
                        $this->saveData($name, $year, $month, $rejim,$toMonth);
                    }
                }

            }
        }
    }

    public function saveData($name, $year, $month, $rejim, $toMonth)
    {
        $data = $this->{$this->nameFunctions[$name]}($year, $month, $rejim, $toMonth);
        if ($statdata = StatData::where([
            'name' => $name,
            'month' => $month,
            'year' => $year,
            'rejim' => $rejim,
            'tomonth' => $toMonth,

        ])->first()) {
            $statdata->data = json_encode($data);
            //$statdata->month = $month;
            //$statdata->year = $year;
            $statdata->save();
        } else {
            $statdata = new StatData();
            $statdata->name = $name;
            $statdata->month = $month;
            $statdata->tomonth = $toMonth;
            $statdata->year = $year;
            $statdata->rejim = $rejim;
            $statdata->data = json_encode($data);
            $statdata->save();
        }
    }

    public function loopGetData($func = 'getTovarImExDataNew')
    {
        $data = [];
        $yearData = [];
        $date = date("Y");
        for ($year = $date; $year >= $date - 5; $year--) {
            for ($month = 0; $month <= 12; $month++) {

                $data[$month] = $this->$func($year, $month);
                //dd(json_decode($data->content())->data);
            }
            $yearData[$year] = $data;
        }
        return $yearData;

    }

    public function getTovarImExDataNew($year = 0, $month = 0, $selectedrejim = 0, $toMonth = 0)
    {
        $selectedrejim = (int)$selectedrejim;

        if ($selectedrejim === 0) {
            $data['rejim'] = "ИМ";
        } elseif ($selectedrejim === 1) {
            $data['rejim'] = "ИМ";
        } else {
            $selectedrejim = 2;
            $data['rejim'] = "ЭК";
        }
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;

        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($toMonth != 0) {
            $params['toMonth'] = $toMonth;
        }
        // $this->fromRepl=false;
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'tovarimex_n',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
                'tomonth' => $toMonth,
            ])->first();
            if (!$statData) return [];
            return collect(json_decode($statData->data))->values();
        }
        else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year1 = "year(v.g54d)=" . (date("Y") - 1);
            $year2 = "year(v.g54d) in (" . (int)date("Y") . ", " . ((int)date("Y") - 1) . ")";

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year1 = "year(v.g54d)=" . ($params['year'] - 1);
                $year2 = "year(v.g54d) in (" . (int)$params['year'] . ", " . ((int)$params['year'] - 1) . ")";
            }


            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
                if (isset($params['toMonth'])) {
                    $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
                }
            } else $month = "and month(v.g54d) < " . ((int)date("m"));

/*            if (isset($params['toMonth'])) {
                $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
            }*/



            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = 'ИМ';
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";

            $query = 'select
                        sp.SPRAV_STAT_T1_UZ "titleoz", 
                        sp.SPRAV_STAT_T1_UZ "titleuz", 
                        sp.SPRAV_STAT_T1_UZ "titleen", 
                        sp.SPRAV_STAT_T1_UZ "titleru", 
                        sp.SPRAV_STAT_T2_UZ "subItemoz", 
                        sp.SPRAV_STAT_T2_UZ "subItemuz", 
                        sp.SPRAV_STAT_T2_UZ "subItemen", 
                        sp.SPRAV_STAT_T2_UZ "subItemru", 
                       sum(case when ' . $year . ' ' . $month . '  then value(v.g46,0) else 0 end) "result1",
                       sum(case when ' . $year1 . ' ' . $month . ' then value(v.g46,0) else 0 end) "result2"


                        from tst_stat.vto_2022_07 v
                        left join tst_stat.SPR_tovar_2022_2 sp on sp.znak_10=v.g33a 
                        where ' . $year2 . ' ' . $month . ' ' . $rejim . '


                        group by 
                        sp.SPRAV_STAT_T1_UZ, 
                         sp.SPRAV_STAT_T2_UZ                        
                        ';
            /// +++ dd($query);
            $returnData = DB::connection('db2_odbc_stat')->select($query);

            /*
             * SELECT
    st.SPRAV_STAT_T1_UZ "title",
    st.SPRAV_STAT_T2_UZ "subItem",
    SUM(
    CASE
        WHEN YEAR(v.g54d)=2024
        AND MONTH(v.g54d) BETWEEN 1 AND 2
        THEN value(v.g46,0)
        ELSE 0
    END) "result1",
    SUM(
    CASE
        WHEN YEAR(v.g54d)=2023
        AND MONTH(v.g54d) BETWEEN 1 AND 2
        THEN value(v.g46,0)
        ELSE 0
    END) "result2"
FROM
    tst_stat.vto_2022_07 v
LEFT JOIN
    tst_stat.SPR_tovar_2022_2 st
ON
    st.znak_10=v.g33a
WHERE
    YEAR(v.g54d) IN (2024,
                     2023)
AND MONTH(v.g54d) BETWEEN 1 AND 2
AND G01A IN ('ИМ')
GROUP BY
    st.SPRAV_STAT_T1_UZ,
    st.SPRAV_STAT_T2_UZ
            */


            if ($returnData) return collect($returnData)->groupBy('titleen')->transform(function ($item, $key) {
                return [
                    'titleen' => $item->first()->titleen,
                    'titleoz' => $item->first()->titleoz,
                    'titleuz' => $item->first()->titleuz,
                    'titleru' => $item->first()->titleru,

                    'result1' => $item->sum('result1'),
                    'result2' => $item->sum('result2'),
                    'cats' => collect($item)->transform(function ($catItem) {
                        return [
                            'titleen' => $catItem->subitemen,
                            'titleoz' => $catItem->subitemoz,
                            'titleuz' => $catItem->subitemuz,
                            'titleru' => $catItem->subitemru,
                            'price' => $catItem->result1
                        ];
                    }),
                    'total' => collect($item)->sum(function ($subItem) {
                        return $subItem->result1;
                    })
                ];
            })->sortByDesc('total', SORT_ASC)->all();
        }
    }

    public function getIstemolTovarDataNew($year = 0, $month = 0, $selectedrejim = 0, $toMonth = 0)
    {
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;

        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($toMonth != 0) {
            $params['toMonth'] = $toMonth;
        }
        /// +++ $this->fromRepl=false;
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'istemoltovar_n',
                'month' => $month,
                'year' => $year,
                'tomonth' => $toMonth,
            ])->first();
            if (!$statData) return [];
            return collect(json_decode($statData->data))->values();
        }
        else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year1 = "year(v.g54d)=" . (date("Y") - 1);
            $year2 = "year(v.g54d) in (" . (int)date("Y") . ", " . ((int)date("Y") - 1) . ")";

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year1 = "year(v.g54d)=" . ($params['year'] - 1);
                $year2 = "year(v.g54d) in (" . (int)$params['year'] . ", " . ((int)$params['year'] - 1) . ")";
            }


            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
                if (isset($params['toMonth'])) {
                    $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
                }
            } else $month = "and month(v.g54d) < " . ((int)date("m"));



            $query = "select 
                        sp.TOVAR_1_N categoryKod,
                       sp.TOVAR_LOTIN_1 catTitleoz,
                       sp.TOVAR_KIRIL_1 catTitleuz,
                       sp.TOVAR_RU_1 catTitleru,
                       sp.TOVAR_ENG_1 catTitleen,
                       
                       sp.TOVAR_LOTIN_2 itemtitleoz,
                       sp.TOVAR_KIRIL_2 itemtitleuz,
                       sp.TOVAR_RU_2 itemtitleru,
                       sp.TOVAR_ENG_2 itemtitleen,
                       sp.TOVAR_LOTIN_3 subitemtitleoz,
                       sp.TOVAR_KIRIL_3 subitemtitleuz,
                       sp.TOVAR_RU_3 subitemtitleru,
                       sp.TOVAR_ENG_3 subitemtitleen,
                       sp.ED_I_LOTIN unitoz,
                       sp.ED_I_KIRIL unituz,
                       sp.ED_I_RU unitru,
                       sp.ED_I_ENG uniten,
                       sum(case when " . $year1 . " " . $month . "  and  sp.ED_I_LOTIN='kg' then value(v.g38,0) when " . $year1 . " " . $month . "  and  sp.ED_I_LOTIN<>'kg' then value(v.g31b,0) else 0 end) kol_2023,
                       sum(case when ". $year1 . " " . $month . " then value(v.g46,0) else 0 end) qiymat_2023,                       
                       sum(case when " . $year . " " . $month . "  and  sp.ED_I_LOTIN='kg' then value(v.g38,0) when " . $year . " " . $month . "  and  sp.ED_I_LOTIN<>'kg' then value(v.g31b,0) else 0 end) kol_2024,
                       sum(case when ". $year . " " . $month . " then value(v.g46,0) else 0 end) qiymat_2024


                        from tst_stat.vto_2022_07 v
                        left join tst_stat.spr_potr sp on sp.kod=v.g33a
                        where sp.kod is not null and v.g01a='ИМ'                       
                         group by sp.TOVAR_1_N,sp.TOVAR_LOTIN_1, sp.TOVAR_LOTIN_2, sp.TOVAR_KIRIL_2,sp.TOVAR_RU_2,sp.TOVAR_ENG_2,sp.TOVAR_LOTIN_3, sp.TOVAR_KIRIL_3,sp.TOVAR_RU_3,sp.TOVAR_ENG_3,sp.ED_I_LOTIN,
                       sp.ED_I_KIRIL,
                       sp.ED_I_RU,
                       sp.ED_I_ENG,
                       sp.TOVAR_LOTIN_1,
                       sp.TOVAR_KIRIL_1,
                       sp.TOVAR_RU_1,
                       sp.TOVAR_ENG_1
                        order by KOL_2024 desc ";
/// +++ dd($query);
            $returnData = DB::connection('db2_odbc_stat')->select($query);



            if ($returnData) return (collect($returnData)->groupBy('categorykod')->transform(function ($item, $key) {

                return [
                    'category' => $key,
                    'titleoz' => $item->first()->cattitleoz,
                    'titleuz' => $item->first()->cattitleuz,
                    'titleru' => $item->first()->cattitleru,
                    'titleen' => $item->first()->cattitleen,
                    'unitoz'=>null,
                    'unituz'=>null,
                    'unitru'=>null,
                    'uniten'=>null,
                    'kol_2023' => $item->sum('kol_2023'),
                    'qiymat_2023' => $item->sum('qiymat_2023'),
                    'kol_2024' => $item->sum('kol_2024'),
                    'qiymat_2024' => $item->sum('qiymat_2024'),
                    'subItems' =>  $item->sortBy('qiymat_2024')->groupBy('itemtitleen')->transform(function ($catItem) {

                        return [
                            'titleoz'=>$catItem->first()->itemtitleoz,
                            'titleuz'=>$catItem->first()->itemtitleuz,
                            'titleru'=>$catItem->first()->itemtitleru,
                            'titleen'=>$catItem->first()->itemtitleen,
                            'unitoz'=>(!$catItem->first()->subitemtitleen)?$catItem->first()->unitoz:null,
                            'unituz'=>(!$catItem->first()->subitemtitleen)?$catItem->first()->unituz:null,
                            'unitru'=>(!$catItem->first()->subitemtitleen)?$catItem->first()->unitru:null,
                            'uniten'=>(!$catItem->first()->subitemtitleen)?$catItem->first()->uniten:null,
                            'kol_2023' => (!$catItem->first()->subitemtitleen)?$catItem->sum('kol_2023'):null,
                            'qiymat_2023' => $catItem->sum('qiymat_2023'),
                            'kol_2024' => (!$catItem->first()->subitemtitleen)?$catItem->sum('kol_2024'):null,
                            'qiymat_2024' => $catItem->sum('qiymat_2024'),
                            'subProducts' => (!$catItem->first()->subitemtitleen)?[]:$catItem->sortBy('qiymat_2024')->groupBy('subitemtitleen')->transform(function ($subProductItem) {
                                    return [
                                        'subitemtitleoz'=>$subProductItem->first()->subitemtitleoz,
                                        'subitemtitleuz'=>$subProductItem->first()->subitemtitleuz,
                                        'subitemtitleru'=>$subProductItem->first()->subitemtitleru,
                                        'subitemtitleen'=>$subProductItem->first()->subitemtitleen,
                                        'unitoz'=>$subProductItem->first()->unitoz,
                                        'unituz'=>$subProductItem->first()->unituz,
                                        'unitru'=>$subProductItem->first()->unitru,
                                        'uniten'=>$subProductItem->first()->uniten,
                                        'kol_2023' => $subProductItem->sum('kol_2023'),
                                        'qiymat_2023' => $subProductItem->sum('qiymat_2023'),
                                        'kol_2024' => $subProductItem->sum('kol_2024'),
                                        'qiymat_2024' => $subProductItem->sum('qiymat_2024')
                                    ];
                                })->all()
                        ];
                        })->all()
                        ];

            })->sortByDesc('category', SORT_ASC)->all());
        }
    }

    public function getDavlatImExDataNew($year = 0, $month = 0, $selectedrejim = 0, $toMonth = 0)
    {
        $selectedrejim = (int)$selectedrejim;
        if ($selectedrejim === 0) {
            $data['rejim'] = "ИМ";
        } elseif ($selectedrejim == 1) {
            $data['rejim'] = "ИМ";
        } else {
            $selectedrejim = 2;
            $data['rejim'] = "ЭК";
        }
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($toMonth != 0) {
            $params['toMonth'] = $toMonth;
        }
        /// +++ $this->fromRepl=false;
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'davlatimex_n',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
                'tomonth' => $toMonth,
            ])->first();
            if (!$statData) return [];
            return collect(json_decode($statData->data))->values();
        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year1 = "year(v.g54d)=" . (date("Y") - 1);
            $year2 = "year(v.g54d) in (" . (int)date("Y") . ", " . ((int)date("Y") - 1) . ")";

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year1 = "year(v.g54d)=" . ($params['year'] - 1);
                $year2 = "year(v.g54d) in (" . (int)$params['year'] . ", " . ((int)$params['year'] - 1) . ")";
            }

            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];

                if (isset($params['toMonth'])) {
                    $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
                }
            } else $month = "and month(v.g54d) < " . ((int)date("m"));


            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = 'ИМ';
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";

            $query = 'select
                   sd.KOD "country",
                   sum(case when ' . $year . ' ' . $month . ' then value(v.g46,0) else 0 end) "result1",  
                   sum(case when ' . $year1 . ' ' . $month . ' then value(v.g46,0) else 0 end) "result2",
                   sum(case when ' . $year2 . ' ' . $month . ' then value(v.g46,0) else 0 end) "total"
                    from tst_stat.vto_2022_07 v
                    left join tst_stat.SPR_DAVLAT sd on sd.kod=v.G15_17
                    where ' . $year2 . ' ' . $month . ' ' . $rejim . '
                    group by sd.KOD';
/// +++ dd($query);
            $returnData = DB::connection('db2_odbc_stat')->select($query);

            if ($returnData) return collect($returnData)->transform(function ($item) {
                return [
                    'country' => $item->country,
                    'column1' => ((float)$item->result2 > 0) ? (((((float)$item->result1 - (float)$item->result2)) / ((float)$item->result2)) * 100) : 0,
                    'column2' => (((float)$item->total) > 0) ? ((((float)$item->total) - ((float)$item->result1)) / ((float)$item->total) * 100) : 0,
                    'total' => (float)$item->result1,
                ];
            })->sortByDesc('total');

        }
    }

    public function getHududImExDataNew($year = 0, $month = 0, $selectedrejim = 0, $toMonth = 0)
    {
        $selectedrejim = (int)$selectedrejim;
        if ($selectedrejim === 0) {
            $data['rejim'] = "ИМ";
        } elseif ($selectedrejim == 1) {
            $data['rejim'] = "ИМ";
        } else {
            $selectedrejim = 2;
            $data['rejim'] = "ЭК";
        }
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($toMonth != 0) {
            $params['toMonth'] = $toMonth;
        }
        /// +++ $this->fromRepl=false;
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'hududimex_n',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
                'tomonth' => $toMonth,
            ])->first();
            if (!$statData) return [];
            return collect(json_decode($statData->data))->values();
        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year1 = "year(v.g54d)=" . (date("Y") - 1);
            $year2 = "year(v.g54d) in (" . (int)date("Y") . ", " . ((int)date("Y") - 1) . ")";

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year1 = "year(v.g54d)=" . ($params['year'] - 1);
                $year2 = "year(v.g54d) in (" . (int)$params['year'] . ", " . ((int)$params['year'] - 1) . ")";
            }

            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
                if (isset($params['toMonth'])) {
                    $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
                }
            } else $month = "and month(v.g54d) < " . ((int)date("m"));


            /*if (isset($params['toMonth'])) {
                $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
            }*/

            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = 'ИМ';
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";

            $query = '
            select
               si.kb "hudud",
               sum(case when ' . $year . ' ' . $month . ' then value(v.g46,0) else 0 end) "result1",
               sum(case when ' . $year1 . ' ' . $month . ' then value(v.g46,0) else 0 end) "result2",
               sum(case when ' . $year2 . ' ' . $month . ' then value(v.g46,0) else 0 end) "total",
               si.KM "km"   ------- pu - doimiy , jsh - jismoniy shaxs yes - tarmoq korxona, no  - hududiy korxona ----

                from tst_stat.vto_2022_07 v
                left join tst_stat.SPR_inn si on si.inn=v.inn
                where ' . $year2 . ' ' . $month . ' ' . $rejim . '

                group by si.kb, si.KM';
/// +++ dd($query);
            $returnData = DB::connection('db2_odbc_stat')->select($query);
            $collection = collect($returnData);

            $grouped = $collection->groupBy('km');

// Calculate the sum of each group
            $sums = $grouped->map(function ($group) {
                return $group->reduce(function ($carry, $item) {
                    $carry['hudud'] = null;
                    $carry['result1'] += (float)$item->result1;
                    $carry['result2'] += (float)$item->result2;
                    $carry['total'] += (float)$item->result1;
                    // You can add other properties here if needed
                    return $carry;
                }, [
                    'hudud' => 0,
                    'result1' => 0,
                    'result2' => 0,
                    'total' => 0,
                    // You can initialize other properties here if needed
                ]);
            });

// Convert the sums to strings with the desired format (if necessary)
            $sums = $sums->map(function ($sum, $sumKey) {
                return [
                    'km' => $sumKey,
                    'hudud' => null,
                    'result1' => $sum['result1'],
                    'result2' => $sum['result2'],
                    'total' => $sum['total'],
                    // You can format other properties here if needed
                ];
            });

            if ($returnData) return ['totaldata' => ['hudud' => null, 'total' => $sums->sum('total'), 'subItems' => $sums->sortByDesc('km')->values()],
                'data' => $collection->groupBy('hudud')->transform(function ($item) {
                    return [
                        'hudud' => $item[0]->hudud,
                        'total' => collect($item)->sum('total'),
                        'subItems' => collect($item)->sortByDesc('km')->transform(function ($subItem) {
                            return [
                                'hudud' => $subItem->hudud,
                                'km' => $subItem->km,
                                'column1' => (float)$subItem->result1,
                                'column2' => (float)$subItem->result2,
                                'total' => (float)$subItem->total,
                            ];
                        })->all()];

                })];
        }
    }


    public function getIstemolDataNew($year = 0, $month = 0, $selectedrejim = 0, $toMonth = 0)
    {
        $selectedrejim = (int)$selectedrejim;
        if ($selectedrejim === 0) {
            $data['rejim'] = "1";
        } elseif ($selectedrejim == 1) {
            $data['rejim'] = "1";
        } else {
            $selectedrejim = 2;
            $data['rejim'] = "2";
        }
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($toMonth != 0) {
            $params['toMonth'] = $toMonth;
        }
 //       $this->fromRepl=false;
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'istemolimex_n',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
                'tomonth' => $toMonth,
            ])->first();
            if (!$statData) return [];
            return collect(json_decode($statData->data))->values();
        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year1 = "year(v.g54d)=" . (date("Y") - 1);
            $year2 = "year(v.g54d) in (" . (int)date("Y") . ", " . ((int)date("Y") - 1) . ")";

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year1 = "year(v.g54d)=" . ($params['year'] - 1);
                $year2 = "year(v.g54d) in (" . (int)$params['year'] . ", " . ((int)$params['year'] - 1) . ")";
            }

            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
                if (isset($params['toMonth'])) {
                    $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
                }
            } else $month = "and month(v.g54d) < " . ((int)date("m"));

/*            if (isset($params['toMonth'])) {
                $month = "and month(v.g54d) BETWEEN ". $params['month'] ." AND " . $params['toMonth'];
            }*/
            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
/*            if (!isset($data['rejim'])) {
                $data['rejim'] = 'ИМ';
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";*/

            $query = "select
                    sp.TOVAR_1_N as kod,
                    sp.TOVAR_KIRIL_1 nameuz,
                    sp.TOVAR_RU_1 nameru,
                    sp.TOVAR_ENG_1 nameen,
                    sp.TOVAR_LOTIN_1 nameoz,
                   sum(case when " . $year . " " . $month . " then value(v.g46,0) else 0 end) result1,
                   sum(case when " . $year1 ." " . $month . " then value(v.g46,0) else 0 end) result2
                    from tst_stat.vto_2022_07 v
                    left join tst_stat.spr_potr sp on sp.kod=v.g33a
                    where sp.n=". $data['rejim'] ." and v.g01a='ИМ'     
                   
                    group by sp.TOVAR_1_N, sp.TOVAR_KIRIL_1,
                    sp.TOVAR_RU_1,
                    sp.TOVAR_ENG_1,
                    sp.TOVAR_LOTIN_1";
///// +++ dd($query);
            $returnData = DB::connection('db2_odbc_stat')->select($query);

            if ($returnData) return collect($returnData)->transform(function ($item) {
                return [
                    'kod' => $item->kod,
                    'nameuz' => $item->nameuz,
                    'nameen' => $item->nameen,
                    'nameru' => $item->nameru,
                    'nameoz' => $item->nameoz,
                    'column1' => $item->result1,
                    'column2' => $item->result2,
                ];
            })->sortByDesc('column2');

        }
    }

    public function getAvtoData($year = 0, $month = 0)
    {
        //$params = $request->only(['year', 'month']);
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($this->fromRepl) {

            $statData = StatData::where(['name' => 'avto'])->orderby('id', 'desc')->first();
            $data = (array)json_decode($statData->data);

            if (isset($params['month'])) {
                return (isset($data[$params['year']][$params['month']])) ? $data[$params['year']][$params['month']] : [];
            }

            return (isset($data[$params['year']][0])) ? $data[$params['year']][0] : [];

        } else {
            $year = "";
            $month = "";

            if (isset($params['year'])) {
                $year = "year(b.dofr)=" . $params['year'];
            }

            if (isset($params['month'])) {
                if (isset($params['year']))
                    $month = "and month(b.dofr)=" . $params['month'] . " and ";
                else
                    $month = "month(b.dofr)=" . $params['month'] . " and ";
            } else {
                if (isset($params['year'])) $year = $year . " and ";
            }

            $query = "  select a.id, a.name, auto.trans_count from (
                 select left(b.TIP,1) Type, count(*) trans_count
                 from kkdg.book11 b  where  " . $year . " " . $month . "
                 left(b.TIP,1)<5  group by left(b.TIP,1)
                  order by Type) auto
                  left join KKDG.Autotype a on a.ID=CONCAT(auto.type,'0')  where a.id is not null";

            $returnData = DB::connection('db2_odbc')->select($query);

            return $returnData;
        }
    }

    public function getKunImExData($year = 0, $month = 0)
    {
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = date('m', strtotime('01.' . $month . '.2021'));
        }

        if ($this->fromRepl) {

            $statData = StatData::where(['name' => 'kunimex'])->orderby('id', 'desc')->first();
            $data = (array)json_decode($statData->data);

            if (isset($params['month'])) {
                return (isset($data[$params['year']][$month])) ? $data[$params['year']][$month] : [];
            }

            return (isset($data[$params['year']][0])) ? $data[$params['year']][0] : [];

        } else {
            $mmonth = $month;
            $month = "";
            // $month = "month(d.g7b)=" . date("m");
            $year = "year(d.g7b)=" . date("Y");

            if (isset($params['year'])) {
                $year = "year(d.g7b)=" . $params['year'];
            }

            if (isset($params['month'])) {
                $month = "and month(d.g7b)=" . $params['month'];
            }


            $query = "  select g1a, year(d.g7b) yil,month(d.g7b) oy, day(d.g7b) kun, sum(c.G46) sumg46,sum(c.G38) sumg38
                    from asod.DECLARATION d
                    join asod.COMMODITY c on c.DECL_ID=d.id
                    where d.status=1 and gdvipdate is not null
                    and d.g1b in (10,40)
                    and d.g1a in('ИМ','ЭК')
                    --and d.g7b=current_date
                    /*,left(d.g7a,2),year(d.g7b),*/
                    and " . $year . " " . $month . "
                    group by g1a, day(d.g7b), month(d.g7b),year(d.g7b)
                    order by month(d.g7b),day(d.g7b)  asc";


            $result = DB::connection('db2_odbc')->select($query);
            global $data;
            $data = [];

            collect($result)->each(function ($item) {
                global $data;
                $date = date("d.m.Y", strtotime("$item->yil-$item->oy-$item->kun 00:00"));
                if ($item->g1a == "ИМ") $data[$date]['import'] = $item->sumg46;
                else $data[$date]['eksport'] = $item->sumg46;

            });
            $returndata = $data;
            unset($data);

            return $returndata;
        }
    }

    public function getHududImExData($year = 0, $month = 0)
    {
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($this->fromRepl) {


            $statData = StatData::where(['name' => 'hududimex'])->orderby('id', 'desc')->first();
            $data = (array)json_decode($statData->data);

            if (isset($params['month'])) {
                return (isset($data[$params['year']][$month])) ? $data[$params['year']][$month] : [];
            }
            return (isset($data[$params['year']][0])) ? $data[$params['year']][0] : [];

        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(d.g7b)=" . date("Y");

            if (isset($params['year'])) {
                $year = "year(d.g7b)=" . $params['year'];
            }

            if (isset($params['month'])) {
                $month = "and month(d.g7b)=" . $params['month'];
            } else $month = "";

            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = ['ИМ40', 'ЭК10'];
            }

            if (is_array($data['rejim'])) {
                $rejim = "and trim(d.g1a)||d.g1b in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and trim(d.g1a)||d.g1b in ('" . $data['rejim'] . "')";
            $selectrejim = "g1a rejim,g1b rejimcode,";
            $orderbyrejim = "g1a,g1b,";
            $query = "select " . $selectrejim . " left(d.g7a,2) loc, l.NAME,sum(c.G46) sumg46,sum(c.G38) sumg38 from asod.DECLARATION d join asod.COMMODITY c on c.DECL_ID=d.id " . $rejim . "
                        left join asod.LOCATION l on right(l.ID,2)=left(d.g7a,2)  where d.status=1 and left(d.g7a,2) <> '00' and gdvipdate is not null and " . $year . " " . $month . " group by left(d.g7a,2)," . $orderbyrejim . " l.NAME order by left(d.g7a,2)";


            $returnData = DB::connection('db2_odbc')->select($query);
            $return = collect($returnData)->groupBy('loc')->transform(function ($item) {
                $regions = [
                    '3' => 'Андижон вилояти',
                    '14' => 'Наманган вилояти',
                    '6' => 'Бухоро вилояти',
                    '26' => 'Тошкент шаҳри',
                    '30' => 'Фарғона вилояти',
                    '27' => 'Тошкент вилояти',
                    '10' => 'Қашқадарё вилояти',
                    '8' => 'Жиззах вилояти',
                    '18' => 'Самаркандская обл',
                    '12' => 'Навоийская обл',
                    '24' => 'Сирдарё вилояти',
                    '33' => 'Хоразм вилояти',
                    '22' => 'Сурхондарё вилояти',
                    '35' => 'Қорақалпоғистон Респ.'];


                $data['region'] = $regions[(int)($item[0]->loc)];
                if (!isset($item[0]->rejim)) {
                    $data['export'] = (float)$item[0]->sumg46;
                    $data['import'] = (float)$item[0]->sumg46;
                } else {
                    if ($item[0]->rejim == 'ЭК') {
                        $data['export'] = (float)$item[0]->sumg46;
                        $data['import'] = (float)$item[1]->sumg46;
                    } else {
                        $data['export'] = (float)$item[1]->sumg46;
                        $data['import'] = (float)$item[0]->sumg46;
                    }
                }
                return $data;
            })->values();
            return $return->all();
        }
    }

    public function getDavlatImExData($year = 0, $month = 0, $selectedrejim = 0)
    {
        $selectedrejim = (int)$selectedrejim;

        if ($selectedrejim === 0) {
            $data['rejim'] = ["ИМ", "ЭК"];
        } elseif ($selectedrejim === 1) {
            $data['rejim'] = ["ИМ"];
        } else {
            $selectedrejim = 2;
            $data['rejim'] = ["ЭК"];
        }
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;

        if ($month != 0) {
            $params['month'] = $month;
        }
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'davlatimex',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
            ])->first();
            if (!$statData) return [];
            return (array)json_decode($statData->data);
        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year2 = "year(v.g54d)=" . ((int)date("Y") - 1);

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year2 = "year(v.g54d)=" . ((int)$params['year'] - 1);
            }

            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
            } else $month = "and month(v.g54d) < " . ((int)date("m"));

            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = ['ИМ'];
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";
            $query = "select " . $selectrejim . " left(d.g7a,2) loc, l.NAME,sum(c.G46) sumg46,sum(c.G38) sumg38 from asod.DECLARATION d join asod.COMMODITY c on c.DECL_ID=d.id " . $rejim . "
                        left join asod.LOCATION l on right(l.ID,2)=left(d.g7a,2)  where d.status=1 and left(d.g7a,2) <> '00' and gdvipdate is not null and " . $year . " " . $month . " group by left(d.g7a,2)," . $orderbyrejim . " l.NAME order by left(d.g7a,2)";

            $query = "
                        select v_22.davlat country, v_22.g46 val, value(decimal((decimal(v_22.g46-v_21.g46,15,6)/decimal(v_21.g46,15,6))*100,11,2),0) diff from
                        ---------------->>>>>2022>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
                        (select sd.davlat, sum(value(v.g46,0)) g46 from tst_stat.VTO_2022_07_2 v left join tst_stat.SPR_DAVLAT sd on sd.kod=v.G15_17
                        where " . $year . " " . $month . " " . $rejim . "
                        group by sd.davlat) v_22

                        ---------------->>>>>2021>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
                        left join (select sd.davlat,sum(value(v.g46,0)) g46
                        from tst_stat.VTO_2022_07_2 v
                        left join tst_stat.SPR_DAVLAT sd on sd.kod=v.G15_17
                        where " . $year2 . " " . $month . " " . $rejim . "
                        group by sd.davlat) v_21 on v_21.davlat=v_22.davlat
                        order by decimal(v_22.g46,15,6) desc
                        FETCH FIRST 10 ROWS ONLY
                        ";

            $returnData = DB::connection('db2_odbc')->select($query);

            if ($returnData) return collect($returnData)->transform(function ($item) {
                $item->diff = (float)$item->diff;

                return [
                    'val' => (float)number_format((float)$item->val / 1000000, 2),
                    'country' => $item->country,
                    'diff' => $item->diff,
                    'left' => ($item->diff < 0) ? $item->diff : 0,
                    'right' => ($item->diff > 0) ? $item->diff : 0,
                ];
            });

        }

    }

    public function getTovarImExData($year = 0, $month = 0, $selectedrejim = 0)
    {
        $selectedrejim = (int)$selectedrejim;
        if ($selectedrejim === 0) {
            $data['rejim'] = ["ИМ", "ЭК"];
        } elseif ($selectedrejim == 1) {
            $data['rejim'] = ["ИМ"];
        } else {
            $selectedrejim = 2;
            $data['rejim'] = ["ЭК"];
        }
        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }
        //$this->fromRepl=false;
        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'tovarimex',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
            ])->first();
            if (!$statData) return [];
            return (array)json_decode($statData->data);
        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year2 = "year(v.g54d)=" . ((int)date("Y") - 1);

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year2 = "year(v.g54d)=" . ((int)$params['year'] - 1);
            }

            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
            } else $month = "and month(v.g54d) < " . ((int)date("m"));

            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = ['ЭК'];
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";

            $query = "select v_22.GTK title,
       value(decimal(v_21.g46,15,6),0) column1,
       value(decimal(v_22.g46,15,6),0) column2,
       decimal(value(v_22.g46,0)-value(v_21.g46,0),15,6) diff,
       value(decimal((decimal(v_22.g46-v_21.g46,15,6)/decimal(v_21.g46,15,6))*100,11,2),0) diff
        from
        ---------------->>>>>2022>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
        (select st.GTK,
                sum(value(v.g46,0)) g46
        from tst_stat.VTO_2022_07_2 v
        left join tst_stat.SPR_TOVAR st on st.G33=v.G33A
        where " . $year . " " . $month . " " . $rejim . "
        group by st.GTK) v_22

        ---------------->>>>>2021>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
        left join
        (select st.GTK,
                sum(value(v.g46,0)) g46
        from tst_stat.VTO_2022_07_2 v
        left join tst_stat.SPR_TOVAR st on st.G33=v.G33A
        where " . $year2 . " " . $month . " " . $rejim . "
        group by st.GTK) v_21 on v_21.GTK=v_22.GTK

        order by decimal(v_22.g46,15,6) desc FETCH FIRST 10 ROWS ONLY";

            ///--FETCH FIRST 10 ROWS ONLY

            $returnData = DB::connection('db2_odbc')->select($query);

            if ($returnData) return collect($returnData)->transform(function ($item) {
                $item->diff = (float)$item->diff;

                return [
                    'title' => MainHelper::cyr2lat($item->title),
                    'column1' => (float)$item->column1 / 1000,
                    'column2' => (float)$item->column2 / 1000,
                    'diff' => (float)$item->diff,
                ];
            });

        }
    }

    public function getOyImExData($year = 0, $month = 0, $selectedrejim = 0)
    {
        $selectedrejim = (int)$selectedrejim;
        if ($selectedrejim === 0) {
            $data['rejim'] = ["ИМ", "ЭК"];
        } elseif ($selectedrejim == 1) {
            $data['rejim'] = ["ИМ"];
        } else {
            $selectedrejim = 2;
            $data['rejim'] = ["ЭК"];
        }

        if ($year == 0) $year = date('Y');
        $params['year'] = $year;
        if ($month != 0) {
            $params['month'] = $month;
        }

        if ($this->fromRepl) {
            $statData = StatData::where([
                'name' => 'oyimex',
                'rejim' => $selectedrejim,
                'month' => $month,
                'year' => $year,
            ])->where('month', '<', 8)->first();
            if (!$statData) return [];
            return (array)json_decode($statData->data);
        } else {

            //$month = "month(d.g7b)=" . date("m");
            $year = "year(v.g54d)=" . date("Y");
            $year2 = "year(v.g54d)=" . ((int)date("Y") - 1);

            if (isset($params['year'])) {
                $year = "year(v.g54d)=" . $params['year'];
                $year2 = "year(v.g54d)=" . ((int)$params['year'] - 1);
            }

            if (isset($params['month'])) {
                $month = "and month(v.g54d)=" . $params['month'];
            } else $month = "and month(v.g54d) < " . ((int)date("m"));

            $rejim = "";
            $orderbyrejim = "";
            $selectrejim = "";
            if (!isset($data['rejim'])) {
                $data['rejim'] = ['ЭК'];
            }

            if (is_array($data['rejim'])) {
                $rejim = "and G01A in ('" . implode("','", $data['rejim']) . "')";
            } else
                $rejim = "and G01A in ('" . $data['rejim'] . "')";

            $query = "
                        select v_22.m,
                        value(decimal(v_21.g46,15,6),0) as column1,
                        value(decimal(v_22.g46,15,6),0) as column2,
                        decimal(value(v_22.g46,0)-value(v_21.g46,0),15,6) as diffval,
                        value(decimal((decimal(v_22.g46-v_21.g46,15,6)/decimal(v_21.g46,15,6))*100,11,2),0) as diff
                        from
                        ---------------->>>>>2022>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
                        (select month(v.G54d) m,
                                sum(value(v.g46,0)) g46
                        from tst_stat.VTO_2022_07_2 v
                        where " . $year . "
                        " . $rejim . "
                        group by month(v.G54d)) v_22

                        ---------------->>>>>2021>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
                        left join
                        (select month(v.G54d) m,
                                sum(value(v.g46,0)) g46
                        from tst_stat.VTO_2022_07_2 v
                        where " . $year2 . "
                        " . $rejim . "
                        group by month(v.G54d)) v_21 on v_21.m=v_22.m";

            ///--FETCH FIRST 10 ROWS ONLY

            $returnData = DB::connection('db2_odbc')->select($query);

            if ($returnData) return collect($returnData)->transform(function ($item) {
                $item->diff = (float)$item->diff;

                $months = [
                    1 => 'Январ',
                    2 => 'Феврал',
                    3 => 'Март',
                    4 => 'Апрел',
                    5 => 'Май',
                    6 => 'Июн',
                    7 => 'Июл',
                    /*                    8 => 'Август',
                                        9 => 'Сентябр',
                                        10 => 'Октябр',
                                        11 => 'Ноябр',
                                        12 => 'Декабр',*/
                ];

                return [
                    //'title' => MainHelper::cyr2lat($item->title),
                    'm' => (isset($months[(int)$item->m])) ? $months[(int)$item->m] : "",
                    'column1' => (float)number_format((float)$item->column1 / 1000, 2, '.', ''),
                    'column2' => (float)number_format((float)$item->column2 / 1000, 2, '.', ''),
                    //'column2' => (float)$item->column2 / 1000,
                    'diff' => (float)$item->diff,
                ];
            });

        }
    }

    public function getFileFromEArxiv($file_id, $pnfl = null)
    {
        $whereUser = "";
        // if ($pnfl) $whereUser = " and f.user_id='" . $pnfl . "'";


        $query = "



select
                f.file_id,
                f.docname,
                f.doc_type,
                ft.file_num,
                ft.file_data,
                d.cd_id
                from
                    e_arxiv.freedoc f
     join e_arxiv.file_type as ft on ft.file_id=f.file_id
     join e_arxiv.docs_type d on d.lnga_tpcd='UZ' and d.code= ft.docs_type
                where
                 f.file_id='" . $file_id . "' and
                      f.isdeleted=0 " . $whereUser . " FETCH FIRST 1 ROWS ONLY";
        //     join e_arxiv.docs_type d on d.code=f.doc_type and d.lnga_tpcd='UZ'
// /// +++ dd($query);
        return DB::connection('db2_odbcEA')->select($query);

    }

    public function generateExcel($data = null)
    {
        dd($data);
    }

}
