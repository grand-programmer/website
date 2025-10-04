<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class StatServiceApplication extends Model
{
    use HasFactory;

    protected $bhm = 330000;
    protected $table = 'statservice';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $connection='db2_odbc223';

    protected $keyType = 'string';
    // protected $guarded = false;
    public $fillable = [
        'step',
        'org_name',
        'pin',
        'user_id',
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
        'price',
        'status',
        'comment',
        'statusnm',
    ];
    public $casts = ['grafalar' => 'json'];

    public function getBhm()
    {
        return $this->bhm;
    }
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    public function getQuery($count = false)
    {
        $type = $this->servicetype + 1;
        $query = "";

        switch ($type) {
            case 1:
                if ($count) {
                    $query = "
                    select
count(id) as count
from asod.DECLARATION d


where d.STATUS=1
and d.GDVIPDATE is not null



---------------------------------------------------------------------------STIR/JSHSHIR-------------------------------------------------

and (d.G8code2 in ('203366731') OR G9CODE2 in ('203366731') OR G2CODE2 in ('203366731'))

-----------------------------------------------------------------------------Rejim------------------------------------------------------
 and d.G1a in ('ИМ')
 and d.G1b in ('40')

--------------------------------------------------------------------------Bojxona posti-------------------------------------------------
-- and d.G7A='26002'

-----------------------------------------------------------------------------TIFTN------------------------------------------------------
-- and c.G33 in ('8501800000')

------------------------------------------------------------------------------IDN-------------------------------------------------------
-- and d.GC1BANKINN='200829053' and d.GC1INN='203366731' and d.GC1YEAR='22' and d.GC1KNTCODE='02' and d.GC1KNTNO='00021'

-----------------------------------------------------------------------------Davlat------------------------------------------------------
-- and d.G15='156'

---------------------------------------------------------------------------BYuD raqami---------------------------------------------------
-- and d.G7C='0017705'

-----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

 and d.G7B between '2023-07-01' and '2023-12-31'

----------------------------------------------------------------------Qo'shimcha xujjatlar-----------------------------------------------
-- and gr44.DOCNO='220'";
                } else {

                }
                break;
            case 2:
                if ($count) {
                    $query =
                        "select
                        count(c.id) as count
                        from asod.DECLARATION d
                        left join asod.COMMODITY c on d.id=c.DECL_ID
                        left join asod.G44DETAILS g301 on g301.cmdt_id=c.id and g301.ITEMSNO='301'
                        left join asod.COUNTRY c15 on c15.ID=d.g15
                        left join asod.COUNTRY c17 on c17.ID=d.g17
                        left join tst_stat.spr_tovar_2022 TN on TN.znak_10=c.g33
                        where d.STATUS=1
                        and d.GDVIPDATE is not null

                        ---------------------------------------------------------------------------STIR/JSHSHIR-------------------------------------------------

                        and (d.G8code2 in ('203366731') OR G9CODE2 in ('203366731') OR G2CODE2 in ('203366731'))

                        -----------------------------------------------------------------------------Rejim------------------------------------------------------
                         and d.G1a in ('ИМ')
                         and d.G1b in ('40')

                        --------------------------------------------------------------------------Bojxona posti-------------------------------------------------
                         and d.G7A='26002'

                        -----------------------------------------------------------------------------TIFTN------------------------------------------------------
                         and c.G33 like '%8501%'

                        ------------------------------------------------------------------------------IDN-------------------------------------------------------
                         and d.GC1BANKINN='200829053' and d.GC1INN='203366731' and d.GC1YEAR='22' and d.GC1KNTCODE='02' and d.GC1KNTNO='00021'

                        -----------------------------------------------------------------------------Davlat------------------------------------------------------
                         and d.G15='156'

                        ---------------------------------------------------------------------------BYuD raqami---------------------------------------------------
                         and d.G7C='0017705'

                        -----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

                        and d.G7B between '2022-01-01' and '2023-12-31'";
                } else {
                    $query =
                        "select
                        distinct c.id,
                        char(d.g7a)||'/'||char(d.g7b,eur)||'/'||d.g7c as \"byud\",
                        d.g1a||d.g1b \"rejim\",
                        case when D.G1A='ЭК' then d.G2CODE2 when D.G1A='ВД' and D.G1B='10' then d.G2CODE2 ELSE d.G8CODE2 end \"stir_yuk_junatuvchi_qabulqiluvchi\",
                        d.G2NAME \"yuk_junatuvchi\",
                        d.G8NAME \"yuk_qabulqiluvchi\",
                        d.G9CODE2 \"shartnoma_tuzuvchi\",
                        d.G9NAME \"shartnoma_tuzuvchi_nomi\",
                        d.G22A \"valyuta\",
                        c.G42 \"faktura\",
                        c.g32 \"tovar_raqami\",
                        c.g33 \"tovar_kodi\",
                        c.G31NAME \"tovar_nomi\",
                        c.g38 \"vazni_kg\",
                        c.G45 \"bojxona_qiymati\",
                        c.G46 \"statistik_qiymati\",
                        c.G31AMOUNT \"miqdori\",
                        tn.UNIT_10_2 \"olchov_birligi\",
                        char (g301.DOCNO)||'от'||' '|| char(g301.DCODATE) \"shartnoma_raqami_va_sanasi\",
                        value((d.GC1BANKOKPO||d.GC1INN||d.GC1YEAR||d.GC1KNTCODE||d.GC1KNTNO),(d.GC1BANKINN||d.GC1INN||d.GC1YEAR||d.GC1KNTCODE||d.GC1KNTNO)) \"idn\",
                        case when D.G1A='ЭК' then c17.NAME when D.G1A='ВД' and D.G1B='10' then c17.NAME ELSE c15.NAME end \"davlat\",
                        d.GDVIPDATE \"rasmiylashtirilgan_sana\"

                        from asod.DECLARATION d
                        left join asod.COMMODITY c on d.id=c.DECL_ID
                        left join asod.G44DETAILS g301 on g301.cmdt_id=c.id and g301.ITEMSNO='301'
                        left join asod.COUNTRY c15 on c15.ID=d.g15
                        left join asod.COUNTRY c17 on c17.ID=d.g17
                        left join tst_stat.spr_tovar_2022 TN on TN.znak_10=c.g33
                        where d.STATUS=1
                        and d.GDVIPDATE is not null


                        ---------------------------------------------------------------------------STIR/JSHSHIR-------------------------------------------------

                        and (d.G8code2 in ('203366731') OR G9CODE2 in ('203366731') OR G2CODE2 in ('203366731'))

                        -----------------------------------------------------------------------------Rejim------------------------------------------------------
                         and d.G1a in ('ИМ')
                         and d.G1b in ('40')

                        --------------------------------------------------------------------------Bojxona posti-------------------------------------------------
                         and d.G7A='26002'

                        -----------------------------------------------------------------------------TIFTN------------------------------------------------------
                         and c.G33 like '%8501%'

                        ------------------------------------------------------------------------------IDN-------------------------------------------------------
                         and d.GC1BANKINN='200829053' and d.GC1INN='203366731' and d.GC1YEAR='22' and d.GC1KNTCODE='02' and d.GC1KNTNO='00021'

                        -----------------------------------------------------------------------------Davlat------------------------------------------------------
                         and d.G15='156'

                        ---------------------------------------------------------------------------BYuD raqami---------------------------------------------------
                         and d.G7C='0017705'

                        -----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

                        and d.G7B between '2022-01-01' and '2023-12-31'";
                }
                break;
            case 3:
                if ($count) {

                    $query = "
                    select
                    count(c.id) as count
                    from asod.DECLARATION d
                    left join asod.COMMODITY c on d.id=c.DECL_ID
                    left join asod.COUNTRY c15 on c15.ID=d.g15
                    left join asod.COUNTRY c17 on c17.ID=d.g17
                    left join tst_stat.spr_tovar_2022 TN on TN.znak_10=c.g33
                    where d.STATUS=1
                    and d.GDVIPDATE is not null



                    -----------------------------------------------------------------------------Rejim------------------------------------------------------
                    and d.G1a in ('ИМ')
                    and d.G1b in ('40')

                    -----------------------------------------------------------------------------TIFTN------------------------------------------------------
                    and c.G33 in ('8501800000')

                    -----------------------------------------------------------------------------Davlat------------------------------------------------------
                    and d.G15='156'


                    -----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

                    and d.G7B between '2022-01-01' and '2023-12-31'

                    ";
                } else {
                    $query = "
                    select
                    distinct c.id,
                    d.g1a||d.g1b \"Режим\",
                    c.g33 \"Товар коди\",
                    c.G31NAME \"Товар номи\",
                    c.g38 \"Вазни (кг)\",
                    c.G46 \"Статистик киймати\",
                    c.G31AMOUNT \"Микдори\",
                    tn.UNIT_10_2 \"Ўлчов бирлиги\",
                    case when D.G1A='ЭК' then c17.NAME when D.G1A='ВД' and D.G1B='10' then c17.NAME ELSE c15.NAME end \"Давлат\",
                    d.GDVIPDATE \"Расмийлаштирилган сана\"

                    from asod.DECLARATION d
                    left join asod.COMMODITY c on d.id=c.DECL_ID
                    left join asod.COUNTRY c15 on c15.ID=d.g15
                    left join asod.COUNTRY c17 on c17.ID=d.g17
                    left join tst_stat.spr_tovar_2022 TN on TN.znak_10=c.g33
                    where d.STATUS=1
                    and d.GDVIPDATE is not null


                    -----------------------------------------------------------------------------Rejim------------------------------------------------------
                    and d.G1a in ('ИМ')
                    and d.G1b in ('40')

                    -----------------------------------------------------------------------------TIFTN------------------------------------------------------
                    and c.G33 in ('8501800000')

                    -----------------------------------------------------------------------------Davlat------------------------------------------------------
                    and d.G15='156'


                    -----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

                    and d.G7B between '2022-01-01' and '2023-12-31'

                    ";
                }
                break;
            case 4:
                if ($count) {
                    $query = "select
                    count(c.id) as count
                    from asod.DECLARATION d
                    left join asod.COMMODITY c on d.id=c.DECL_ID
                    left join asod.G44DETAILS g301 on g301.cmdt_id=c.id and g301.ITEMSNO='301'
                    left join asod.COUNTRY c15 on c15.ID=d.g15
                    left join asod.COUNTRY c17 on c17.ID=d.g17
                    left join tst_stat.spr_tovar_2022 TN on TN.znak_10=c.g33
                    where d.STATUS=1
                    and d.GDVIPDATE is not null

                    ---------------------------------------------------------------------------STIRJSHSHIR-------------------------------------------------

                    and (d.G8code2 in ('203366731') OR G9CODE2 in ('203366731') OR G2CODE2 in ('203366731'))

                    -----------------------------------------------------------------------------Rejim------------------------------------------------------
                    and d.G1a in ('ИМ')
                    and d.G1b in ('40')

                    --------------------------------------------------------------------------Bojxona posti-------------------------------------------------
                    and d.G7A='26002'

                    -----------------------------------------------------------------------------TIFTN------------------------------------------------------
                    and c.G33 in ('8501800000')

                    ------------------------------------------------------------------------------IDN-------------------------------------------------------
                    and d.GC1BANKINN='200829053' and d.GC1INN='203366731' and d.GC1YEAR='22' and d.GC1KNTCODE='02' and d.GC1KNTNO='00021'

                    -----------------------------------------------------------------------------Davlat------------------------------------------------------
                    and d.G15='156'

                    ---------------------------------------------------------------------------BYuD raqami---------------------------------------------------
                    and d.G7C='0017705'

                    -----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

                    and d.G7B between '2022-01-01' and '2023-12-31'";
                } else {
                    $query = "select
                    distinct c.id,
                    char(d.g7a)''char(d.g7b,eur)''d.g7c as \"БЮД\",
                    d.g1ad.g1b Режим,
                    case when D.G1A='ЭК' then d.G2CODE2 when D.G1A='ВД' and D.G1B='10' then d.G2CODE2 ELSE d.G8CODE2 end СТИР Юк жўнатувчиЮк кабул килувчи,
                    d.G2NAME \"Юк жўнатувчи\",
                    d.G8NAME \"Юк кабул килувчи\",
                    d.G9CODE2 \"Шартнома тузувчи СТИР\",
                    d.G9NAME \"Шартнома тузувчи номи\",
                    d.G22A \"Валюта\",
                    c.G42 \"Фактура\",
                    c.g32 \"Товар раками\",
                    c.g33 \"Товар коди\",
                    c.G31NAME \"Товар номи\",
                    c.g38 \"Вазни (кг)\",
                    c.G46 \"Статистик киймати\",
                    c.G31AMOUNT \"Микдори\",
                    tn.UNIT_10_2 \"Ўлчов бирлиги\",
                    char (g301.DOCNO)'от'' ' char(g301.DCODATE) \"Шартнома раками ва санаси\",
                    value((d.GC1BANKOKPOd.GC1INNd.GC1YEARd.GC1KNTCODEd.GC1KNTNO),(d.GC1BANKINNd.GC1INNd.GC1YEARd.GC1KNTCODEd.GC1KNTNO)) \"ИДН\",
                    case when D.G1A='ЭК' then c17.NAME when D.G1A='ВД' and D.G1B='10' then c17.NAME ELSE c15.NAME end \"Давлат\",
                    d.GDVIPDATE \"Расмийлаштирилган сана\"

                    from asod.DECLARATION d
                    left join asod.COMMODITY c on d.id=c.DECL_ID
                    left join asod.G44DETAILS g301 on g301.cmdt_id=c.id and g301.ITEMSNO='301'
                    left join asod.COUNTRY c15 on c15.ID=d.g15
                    left join asod.COUNTRY c17 on c17.ID=d.g17
                    left join tst_stat.spr_tovar_2022 TN on TN.znak_10=c.g33
                    where d.STATUS=1
                    and d.GDVIPDATE is not null


                    ---------------------------------------------------------------------------STIRJSHSHIR-------------------------------------------------

                    and (d.G8code2 in ('203366731') OR G9CODE2 in ('203366731') OR G2CODE2 in ('203366731'))

                    -----------------------------------------------------------------------------Rejim------------------------------------------------------
                    and d.G1a in ('ИМ')
                    and d.G1b in ('40')

                    --------------------------------------------------------------------------Bojxona posti-------------------------------------------------
                    and d.G7A='26002'

                    -----------------------------------------------------------------------------TIFTN------------------------------------------------------
                    and c.G33 in ('8501800000')

                    ------------------------------------------------------------------------------IDN-------------------------------------------------------
                    and d.GC1BANKINN='200829053' and d.GC1INN='203366731' and d.GC1YEAR='22' and d.GC1KNTCODE='02' and d.GC1KNTNO='00021'

                    -----------------------------------------------------------------------------Davlat------------------------------------------------------
                    and d.G15='156'

                    ---------------------------------------------------------------------------BYuD raqami---------------------------------------------------
                    and d.G7C='0017705'

                    -----------------------------------------------------------------------BYud taqdim etilgan sana------------------------------------------

                    and d.G7B between '2022-01-01' and '2023-12-31'";
                }
                break;
        }

        return $query;


    }


    public $grafa_fields = [
        101 => ['label' => '101 - Лицензия'],
        202 => ['label' => '202 - CMR'],
        203 => ['label' => '203 - Коносамент'],
        204 => ['label' => '204 - ТИР-карнет'],
        205 => ['label' => '205 - Авиа-юк хати'],
        206 => ['label' => '206 - Почта юк хати'],
        207 => ['label' => '207 - СМГС шаклидаги темир йўл юк хати'],
        220 => ['label' => '220 - Инвойси (ҳисоб, ҳисоб-фактура)'],
        222 => ['label' => '222 - Ўров варағи'],
        406 => ['label' => '406 - Санитария-эпидемиология хулосаси'],
        410 => ['label' => '410 - Карантин рухсатномаси'],
        417 => ['label' => '417 - Мувофиқлик сертификати'],
        418 => ['label' => '418 - Ўзстандарт агентлигининг хати'],
        419 => ['label' => '419 - Фитосанитария сертификати'],
        420 => ['label' => '420 - Экология сертификати'],
        701 => ['label' => '701 - Товарларнинг келиб чиқиш сертификати (импортда)'],
        804 => ['label' => '804 - Экспорт БЮДси'],
        11 => ['label' => '11-графа - Савдо қилинаётган мамлакат', 'columns' => ['g11'], 'table' => 'declaration'],
        13 => ['label' => '13-графа - АҚШ доллари курси', 'columns' => ['g13'], 'table' => 'declaration'],
        14 => ['label' => '14-графа - Декларант/божхона брокери', 'columns' => ['g14code1', 'g14name'], 'table' => 'declaration'],
        18 => ['label' => '18-графа - Жўнатиш/етказиб бериш вақтидаги транспорт воситаси', 'columns' => [], 'table' => 'declaration'],
        20 => ['label' => '20-графа - Етказиб бериш шартлари', 'columns' => [], 'table' => 'declaration'],
        21 => ['label' => '21-графа - Чегарадаги транспорт воситаси', 'columns' => [], 'table' => 'declaration'],
        23 => ['label' => '23-графа - Валюта курси', 'columns' => [], 'table' => 'declaration'],
        24 => ['label' => '24-графа - Битим хусусияти', 'columns' => [], 'table' => 'declaration'],
        28 => ['label' => '28-графа - Молия ва банк маълумотлари', 'columns' => [], 'table' => 'declaration'],
        29 => ['label' => '29-графа - Чегарадаги божхона', 'columns' => [], 'table' => 'declaration'],
        34 => ['label' => '34-графа - Келиб чиқиш мамлакати коди', 'columns' => [], 'table' => 'declaration'],
        35 => ['label' => '35-графа - Брутто вазн (кг)', 'columns' => [], 'table' => 'declaration'],
        37 => ['label' => '37-графа – Процедура', 'columns' => [], 'table' => 'declaration'],
        40 => ['label' => '40-графа - Умумий декларация/аввалги ҳужжат', 'columns' => [], 'table' => 'declaration'],
        43 => ['label' => '43-графа – Товар олиб ўтиш мақсади (ўз эҳтиёжи/тижорат)', 'columns' => [], 'table' => 'declaration'],
        44 => ['label' => '44-графа – Тақдим этилаётган ҳужжатлар (620, 627, 629 - бандлар)', 'columns' => [], 'table' => 'declaration'],
        47 => ['label' => '47-графа - Божхона тўловларининг ҳисоби', 'columns' => [], 'table' => 'declaration'],
        50 => ['label' => '50-графа - Ишонч билдирган шахс', 'columns' => [], 'table' => 'declaration'],
        54 => ['label' => '54-графа - Жой ва сана', 'columns' => [], 'table' => 'declaration'],
    ];
}
