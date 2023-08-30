<?php

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use App\Models\Menu;
use App\Models\Page;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*Route::group(['prefix' => 'laravel-filemanager', 'middleware' => ['web']], function () {
    Lfm::routes();
});*/
Route::any('/test',function(){

    DB::connection('mysql')->delete(
    "
DELETE n1 FROM currencies n1, currencies n2 WHERE n1.id > n2.id AND n1.code = n2.code and n1.LNGA_TPCD = n2.LNGA_TPCD
"
);



    dd("safdf");
    //and trim(d.g1a)||d.g1b in ('".$ek."10')
    $users = DB::connection('db2_odbc')->select("select g1a,cr.NAME,sum(c.G46) sumg46,sum(c.G38) sumg38
from asod.DECLARATION d
join asod.COMMODITY c on c.DECL_ID=d.id
join asod.COUNTRY cr on cr.id=d.G17
left join asod.RAYON r on r.ID=d.G2REGION
left join asod.RAYON r1 on r1.ID=d.G8REGION
where d.status=1 and trim(d.g1a)||d.g1b in ('ЭК10') and gdvipdate is not null
and (left(d.G2REGION,4)='1726'--or left(d.G8REGION,4)='1726'
) and d.g7b between '01.01.2021' and '30.09.2021'
group by g1a,cr.NAME
order by g1a,sumg46 desc
fetch first 10 rows only");

   dd($users);


    $months=[
        1=>'январ',
        2=>'феврал',
        3=>'март',
        4=>'апрел',
        5=>'май',
        6=>'июнь',
        7=>'июль',
        8=>'август',
        9=>'сентябр',
        10=>'октябр',
        11=>'ноябр',
        12=>'декабр',
    ];
    $events=App\Models\MyEvent::all()->transform(function ($item) use ($months) {
        return [
            'date'=>intval(date('m',strtotime($item->date))),
            'title'=>$item->title
        ];
    })->groupBy('date')->all();
    //dd($events);
    $data=(new Collection($months))->transform(function($item,$key) use ($events){
        return [
            'month'=>$item,
            'items'=>(isset($events[$key]))?$events[$key]->all():null,
            /*'day'=>intval(date('d',strtotime($item->date)))*/
        ];

        });
    dd($data);

   /* //The XML string that you want to send.
    $xml = '<?xml version="1.0" encoding="utf-8"?>
<DataCEPRequest>
     <pinpp>31105892390010</pinpp>
     <document>AA1050597</document>
     <langId>1</langId>
</DataCEPRequest>
';


//The URL that you want to send your XML to.
    $url = 'https://ips.gov.uz/mediate/ips/PC/PersonDocInfoService?wsdl';

//Initiate cURL
    $curl = curl_init($url);

//Set the Content-Type to text/xml.
    curl_setopt ($curl, CURLOPT_HTTPHEADER, array("Content-Type: text/xml"));

//Set CURLOPT_POST to true to send a POST request.
    curl_setopt($curl, CURLOPT_POST, true);

//Attach the XML string to the body of our request.
    curl_setopt($curl, CURLOPT_POSTFIELDS, $xml);

//Tell cURL that we want the response to be returned as
//a string instead of being dumped to the output.
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

//Execute the POST request and send our XML.
    $result = curl_exec($curl);

//Do some basic error checking.
    if(curl_errno($curl)){
        throw new Exception(curl_error($curl));
    }

//Close the cURL handle.
    curl_close($curl);

//Print out the response output.
    echo $result;*/
});
//Route::get('/social-login',[App\Http\Controllers\AuthController::class, 'loginWithOneId']);
//Route::get('/logout',[App\Http\Controllers\AuthController::class, 'logoutForWeb']);
Route::get('{any}', [App\Http\Controllers\HomeController::class, 'index'])->where('any','.*');

/*Route::get('{any}/', function () {
    return view('index');
})->where('any','.*');*/

/*Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');*/
