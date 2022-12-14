<?php

namespace App\Services;

use App\Helpers\MainHelper;
use App\Models\StatData;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StatService
{
    public $yearLoop = 1;
    public $fromRepl = true;
    public $nameFunctions = [
        //'avto' => 'getAvtoData',
        //'kunimex' => 'getKunImExData',
        //'hududimex' => 'getHududImExData',
        'davlatimex' => 'getDavlatImExData',
        'tovarimex' => 'getTovarImExData',
        'oyimex' => 'getOyImExData',
    ];

    public function parse()
    {
        foreach ($this->nameFunctions as $name => $function) {
            $this->saveAllData($name);
        }
    }

    public function saveAllData($name = 'davlatimex')
    {
        $year=$date = date("Y");
        //for ($year = $date; $year >= $date - 2; $year--) {
            for ($month = 0; $month <= 12; $month++) {
                for ($rejim = 0; $rejim <= 2; $rejim++) {
                    $this->saveData($name, $year, $month, $rejim);
                }
            }
       // }
    }

    public function saveData($name, $year, $month, $rejim)
    {
        $data = $this->{$this->nameFunctions[$name]}($year, $month,$rejim);
        if ($statdata = StatData::where([
            'name' => $name,
            'month' => $month,
            'year' => $year,
            'rejim' => $rejim,

        ])->first()) {
            $statdata->data = json_encode($data);
            //$statdata->month = $month;
            //$statdata->year = $year;
            $statdata->save();
        } else {
            $statdata = new StatData();
            $statdata->name = $name;
            $statdata->month = $month;
            $statdata->year = $year;
            $statdata->rejim = $rejim;
            $statdata->data = json_encode($data);
            $statdata->save();
        }
    }

    public function loopGetData($func = 'getAvtoData')
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
        $selectedrejim=(int)$selectedrejim;

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
            if(!$statData) return [];
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
                        (select sd.davlat, sum(value(v.g46,0)) g46 from tst_stat.VTO_REZERV_2 v left join tst_stat.SPR_DAVLAT sd on sd.kod=v.G15_17
                        where " . $year . " " . $month . " " . $rejim . "
                        group by sd.davlat) v_22

                        ---------------->>>>>2021>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
                        left join (select sd.davlat,sum(value(v.g46,0)) g46
                        from tst_stat.VTO_REZERV_2 v
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
        $selectedrejim=(int)$selectedrejim;
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
            if(!$statData) return [];
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
        from tst_stat.VTO_REZERV_2 v
        left join tst_stat.SPR_TOVAR st on st.G33=v.G33A
        where " . $year . " " . $month . " " . $rejim . "
        group by st.GTK) v_22

        ---------------->>>>>2021>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
        left join
        (select st.GTK,
                sum(value(v.g46,0)) g46
        from tst_stat.VTO_REZERV_2 v
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
        $selectedrejim=(int)$selectedrejim;
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
            ])->first();
            if(!$statData) return [];
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
                        from tst_stat.VTO_REZERV_2 v
                        where " . $year . "
                        " . $rejim . "
                        group by month(v.G54d)) v_22

                        ---------------->>>>>2021>>>>>>-------------------------------------------------------------------------------------------------------------------------------------------
                        left join
                        (select month(v.G54d) m,
                                sum(value(v.g46,0)) g46
                        from tst_stat.VTO_REZERV_2 v
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
                    8 => 'Август',
                    9 => 'Сентябр',
                    10 => 'Октябр',
                    11 => 'Ноябр',
                    12 => 'Декабр',
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
        $query = "  select
                f.file_id,
                f.docname,
                f.doc_type,
                ft.file_num,
                ft.file_data,
                d.cd_id
                from
                    e_arxiv.freedoc f
     join file_type as ft on ft.file_id=f.file_id join
    e_arxiv.docs_type d
on
    d.code=f.doc_type and d.lnga_tpcd='UZ'
                where
                 f.file_id='" . $file_id . "' and
                      f.isdeleted=0 " . $whereUser;
        return DB::connection('db2_odbcEA')->select($query);

    }

}
