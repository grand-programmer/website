<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\AppealController;
use Illuminate\Support\Facades\Schema;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'v1'], function(){
    Route::resource('/appeal','App\Http\Controllers\AppealController');
    Route::post('/page/related/{page}','App\Http\Controllers\PageController@related');
    Route::resource('/page','App\Http\Controllers\PageController');
    Route::get('/menu/select','App\Http\Controllers\MenuController@getForSelect');
    Route::get('/menu/front','App\Http\Controllers\MenuController@getForFront');
    Route::resource('/menu','App\Http\Controllers\MenuController');
    Route::resource('/news','App\Http\Controllers\NewsController');
    Route::get('/categories/select','App\Http\Controllers\CategoryController@getForSelect');
    Route::resource('/categories','App\Http\Controllers\CategoryController');

    Route::post('/appeal/checkAppeal','App\Http\Controllers\AppealController@check');
    Route::get('/test',function(){
        $columns = Schema::getColumnListing('appeals'); // users table
        dd($columns);
    });
});
