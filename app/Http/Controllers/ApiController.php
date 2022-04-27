<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Ramsey\Collection\Collection;

class ApiController extends Controller
{
    public function index($action = 'vakantlar', Request $request)
    {
        $data = $request->all();

        $myrequest = \Illuminate\Support\Facades\Http::asForm()->acceptJson();
        switch ($action) {
            case "vacancy-show":
                if (!($vacancy = (int)$request->get('vacancy')))
                    return response()->json([
                        'success' => false,
                        'message' => 'Вакансия коди киритилмади'], 401);
                if(Auth::guard('api')->user())
                $response = $myrequest
                    ->get('http://192.168.214.159/vacancy/public/api/vakant_nomer/' . $vacancy.'?pnfl=' . Auth::guard('api')->user()->pin); else
                   $response = $myrequest->get('http://192.168.214.159/vacancy/public/api/vakant_nomer/' . $vacancy);
                break;
            case "boshqarma-show":
                if (!($boshqarma = (int)$request->get('boshqarma')))
                    return response()->json([
                        'success' => false,
                        'message' => 'Вакансия коди киритилмади'], 401);
                $response = $myrequest
                    ->get('http://192.168.214.159/vacancy/public/api/hudud/' . $boshqarma);
                break;
            case "boshqarma":
                $response = $myrequest
                    ->get('http://192.168.214.159/vacancy/public/api/hudud');
                break;
            case "resume":
                $response = $myrequest
                    ->post('http://192.168.214.159/vacancy/public/api/vacancynomzod', $request->all());
                break;

            default:

                if (Auth::guard('api')->user())
                    $response = $myrequest
                        ->get('http://192.168.214.159/vacancy/public/api/vakantlar/?pnfl=' . Auth::guard('api')->user()->pin);
                else $response = $myrequest
                    ->get('http://192.168.214.159/vacancy/public/api/vakantlar/');
                break;

        }
        return response()->json([
            'success' => true,
            'data' => json_decode($response->body())], $response->status());
    }
}
