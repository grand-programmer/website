<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\AppealController;
use App\AuthController;
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


Route::group(['prefix' => 'v1'], function(){
    Route::prefix('auth')->group(function () {
        Route::post('register', 'App\Http\Controllers\AuthController@register');
        Route::post('login', 'App\Http\Controllers\AuthController@login');
        Route::group(['middleware' => 'auth:api'], function(){
            Route::get('user', 'App\Http\Controllers\AuthController@user');
            Route::get('services', 'App\Http\Controllers\UserController@getServices');
            Route::post('logout', 'App\Http\Controllers\AuthController@logout');
            Route::get('refresh', 'App\Http\Controllers\AuthController@refresh');
        });

    });
/*    Route::get('test',function(){

    });*/
    Route::any('ex_api/{action}','App\Http\Controllers\ApiController@index');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('users', 'App\Http\Controllers\UserController@index')->middleware('isAdmin');
        Route::get('users/{id}', 'App\Http\Controllers\UserController@show')->middleware('isAdminOrSelf');
    });
    Route::get('/stat','App\Http\Controllers\StatController@index');
    Route::post('/appeal/checkAppeal','App\Http\Controllers\AppealController@check');
    Route::resource('/appeal','App\Http\Controllers\AppealController');
    Route::post('/page/related/{page}','App\Http\Controllers\PageController@related');
    Route::resource('/page','App\Http\Controllers\PageController');
    Route::get('/menu/select','App\Http\Controllers\MenuController@getForSelect');
    Route::get('/menu/front','App\Http\Controllers\MenuController@getForFront');
    Route::resource('/menu','App\Http\Controllers\MenuController');
    Route::resource('/news','App\Http\Controllers\NewsController');
    Route::get('/categories/select','App\Http\Controllers\CategoryController@getForSelect');
    Route::resource('/categories','App\Http\Controllers\CategoryController');
    Route::get('/front/events','App\Http\Controllers\EventController@getForFront');
    Route::resource('/events','App\Http\Controllers\EventController');
    Route::resource('/organizations','App\Http\Controllers\OrganizationController');
    Route::resource('/apparat','App\Http\Controllers\ApparatController');
    Route::resource('/faqs','App\Http\Controllers\FaqController');
    Route::get('/front/faqs','App\Http\Controllers\FaqController@getForFront');
    Route::resource('/votes','App\Http\Controllers\VoteController');
    Route::put('/votescount/{vote}','App\Http\Controllers\VoteController@updateCount');


/*    Route::get('/test',function(){
        $columns = Schema::getColumnListing('appeals'); // users table
        dd($columns);
    });*/

    Route::get('/data/tftn','App\Http\Controllers\DataController@getTftn');
    Route::get('/data/currency','App\Http\Controllers\DataController@getCurrency');
    Route::get('/data/country','App\Http\Controllers\DataController@getCountry');
});
