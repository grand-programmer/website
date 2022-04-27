<?php

namespace App\Services;

use App\Models\StatData;
use Illuminate\Support\Facades\DB;

class StatService
{
    public $yearLoop = 1;
    public $fromRepl = false;
    public $nameFunctions = [
        'avto' => 'getAvtoData',
        'kunimex' => 'getKunImExData',
        'hududimex' => 'getHududImExData',
    ];

    public function parse()
    {
        foreach ($this->nameFunctions as $name => $function) {
            $this->saveData($name);
        }
    }

    public function saveData($name = 'avto')
    {
        $yearData = $this->loopGetData($this->nameFunctions[$name]);

        if ($statdata = StatData::where('created_at', '>=', date('Y-m-d'))->where(['name' => $name])->first()) {
            $statdata->data = json_encode($yearData);
            $statdata->save();
        } else {
            $statdata = new StatData();
            $statdata->name = $name;
            $statdata->data = json_encode($yearData);
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


}
