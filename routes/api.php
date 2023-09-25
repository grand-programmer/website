<?php

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use App\AppealController;
use App\AuthController;
use Illuminate\Support\Facades\Schema;
use App\Services\NewsToSocial;
use Illuminate\Support\Facades\Notification;


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



//Route::group(['prefix' => '{lang?}'], function ($lang) {
//    App::setLocale($lang||'uz');
    Route::group(['prefix' => 'v1','middleware' => 'locale'], function () {
        Route::get('test', function(){

            // Notification::via('telegram')->notify($message);
            // phpinfo();
           $date1=new \Carbon\Carbon('2021-01-10');
           $date2=new \Carbon\Carbon('2031-01-09');
           print_r($date1->day);
           print_r($date1->month);
           print_r($date1->year);
            dd($date1->subDay()->getTimestamp() === $date2->subYears(10)->getTimestamp());
        });
        Route::prefix('auth')->group(function () {
            Route::post('register', 'App\Http\Controllers\AuthController@register');
            Route::post('login', 'App\Http\Controllers\AuthController@login');
            Route::group(['middleware' => 'auth:api'], function () {
                Route::get('user', 'App\Http\Controllers\AuthController@user');
                Route::get('services', 'App\Http\Controllers\UserController@getServices');
                Route::post('logout', 'App\Http\Controllers\AuthController@logout');
                Route::get('refresh', 'App\Http\Controllers\AuthController@refresh');



            });

        });
        /*    Route::get('test',function(){

            });*/
        Route::any('ex_api/{action}', 'App\Http\Controllers\ApiController@index');
        Route::get('get_image', 'App\Http\Controllers\UserController@showImage');

        Route::group(['middleware' => 'auth:api'], function () {
            Route::post('statservice', 'App\Http\Controllers\StatController@saveStat');
            Route::get('statservice', 'App\Http\Controllers\StatController@getApps');
            Route::get('statservice/export', 'App\Http\Controllers\StatController@exportByud');
            Route::post('statservice/agree', 'App\Http\Controllers\StatController@agreed');
            Route::post('userUpdate', 'App\Http\Controllers\UserController@update');
            Route::get('users', 'App\Http\Controllers\UserController@index')->middleware('isAdmin');
            Route::get('users/{id}', 'App\Http\Controllers\UserController@show')->middleware('isAdminOrSelf');
        });


        /**
         *
         * Admin routes
         *
         */
        Route::group(['prefix' => 'admin', 'middleware' => 'role:admin'], function () {  //role:editor,approver
            Route::post('/locales', 'App\Http\Controllers\Admin\AdminEventController@setLocale',['as'=>'admin']);
            Route::get('/locales', 'App\Http\Controllers\Admin\AdminEventController@getLocales',['as'=>'admin']);
            Route::resource('/news', 'App\Http\Controllers\Admin\AdminNewsController', ['as' => 'admin']);
            Route::get('/categories/select', 'App\Http\Controllers\Admin\AdminCategoryController@getForSelect');
            Route::resource('/categories', 'App\Http\Controllers\Admin\AdminCategoryController', ['as' => 'admin']);
            Route::resource('/page', 'App\Http\Controllers\Admin\AdminPageController', ['as' => 'admin']);
            Route::resource('/file', 'App\Http\Controllers\Admin\AdminFileController', ['as' => 'admin']);
            Route::resource('/events', 'App\Http\Controllers\Admin\AdminEventController', ['as' => 'admin']);
            Route::resource('/organizations', 'App\Http\Controllers\Admin\AdminOrganizationController', ['as' => 'admin']);
            Route::resource('/apparat', 'App\Http\Controllers\Admin\AdminApparatController', ['as' => 'admin']);
            Route::resource('/faqs', 'App\Http\Controllers\Admin\AdminFaqController', ['as' => 'admin']);
            Route::get('/menu/select', 'App\Http\Controllers\MenuController@getForSelect', ['as' => 'admin']);
            Route::get('/menu/front', 'App\Http\Controllers\MenuController@getForFront', ['as' => 'admin']);
            Route::get('/footermenu/select', 'App\Http\Controllers\FooterMenuController@getForSelect', ['as' => 'admin']);
            Route::get('/footermenu/front', 'App\Http\Controllers\FooterMenuController@getForFront', ['as' => 'admin']);
            Route::resource('/votes', 'App\Http\Controllers\Admin\AdminVoteController',['as'=>'admin']);
            Route::resource('/opendatas', 'App\Http\Controllers\Admin\AdminOpenDataController',['as'=>'admin']);
            Route::resource('/opendata/{opendata}/files', 'App\Http\Controllers\Admin\AdminOpenDataFileController',['as'=>'admin']);
            Route::resource('/menu', 'App\Http\Controllers\Admin\AdminMenuController', ['as' => 'admin']);
            Route::resource('/footermenu', 'App\Http\Controllers\Admin\AdminFooterMenuController', ['as' => 'admin']);
            Route::resource('/appeal', 'App\Http\Controllers\Admin\AdminAppealController', ['as' => 'admin']);
            Route::resource('/doccategories', 'App\Http\Controllers\Admin\AdminDocumentCategoryController', ['as' => 'admin']);
            Route::resource('/documents', 'App\Http\Controllers\Admin\AdminDocumentController', ['as' => 'admin']);

        });

        Route::get('/categories/select', 'App\Http\Controllers\CategoryController@getForSelect');
        Route::get('/stat', 'App\Http\Controllers\StatController@index');
        Route::post('/appeal/checkAppeal', 'App\Http\Controllers\AppealController@check');
        //Route::resource('/appeal', 'App\Http\Controllers\AppealController');
        Route::post('/page/related/{page}', 'App\Http\Controllers\PageController@related');
        Route::resource('/page', 'App\Http\Controllers\PageController');
        Route::get('/menu/select', 'App\Http\Controllers\MenuController@getForSelect');
        Route::get('/menu/front', 'App\Http\Controllers\MenuController@getForFront');
        Route::get('/documents', 'App\Http\Controllers\DocumentController@index');
        Route::get('/documentcategories', 'App\Http\Controllers\DocumentController@getCategories');
        Route::resource('/menu', 'App\Http\Controllers\MenuController');
        Route::get('/footermenu/select', 'App\Http\Controllers\FooterMenuController@getForSelect');
        Route::get('/footermenu/front', 'App\Http\Controllers\FooterMenuController@getForFront');
        Route::get('/opendata', 'App\Http\Controllers\OpenDataController@index');
        Route::post('/opendata/{opendata}', 'App\Http\Controllers\OpenDataController@show');
        Route::resource('/footermenu', 'App\Http\Controllers\FooterMenuController');

        Route::post('/news/{news}/vote', 'App\Http\Controllers\NewsController@like');
        Route::post('/news/search', 'App\Http\Controllers\NewsController@search');
        Route::resource('/news', 'App\Http\Controllers\NewsController');


        Route::resource('/categories', 'App\Http\Controllers\CategoryController');
        Route::get('/front/events', 'App\Http\Controllers\EventController@getForFront');
        Route::resource('/events', 'App\Http\Controllers\EventController');
        Route::resource('/organizations', 'App\Http\Controllers\OrganizationController');
        Route::resource('/apparat', 'App\Http\Controllers\ApparatController');
        Route::resource('/faqs', 'App\Http\Controllers\FaqController');
        Route::get('/front/faqs', 'App\Http\Controllers\FaqController@getForFront');
        Route::get('/votes/front', 'App\Http\Controllers\VoteController@indexFront');
        Route::get('/phoneVotes', 'App\Http\Controllers\VoteController@phoneVotes');
        Route::resource('/votes', 'App\Http\Controllers\VoteController');
        Route::put('/votescount/{vote}', 'App\Http\Controllers\VoteController@updateCount');


        /*    Route::get('/test',function(){
                $columns = Schema::getColumnListing('appeals'); // users table
                dd($columns);
            });*/

        Route::get('/data/tftn', 'App\Http\Controllers\DataController@getTftn');
        Route::get('/data/inn', 'App\Http\Controllers\DataController@getInn');
        Route::get('/data/currency', 'App\Http\Controllers\DataController@getCurrency');
        Route::get('/data/country', 'App\Http\Controllers\DataController@getCountry');
        Route::get('/data/mfo', 'App\Http\Controllers\DataController@getMFO');
        Route::get('/data/contract', 'App\Http\Controllers\DataController@getEisvoContract');
        Route::get('/users-viewed', 'App\Http\Controllers\UsersCountController@getCount');
        Route::post('/spreaded-search', 'App\Http\Controllers\NewsController@spreadedSearch');
    });
//});
