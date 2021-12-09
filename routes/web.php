<?php

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
    //The XML string that you want to send.
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
    echo $result;
});
Route::get('/{any}', function () {
    return view('index');
})->where('any','.*');

/*Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');*/
