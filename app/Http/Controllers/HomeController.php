<?php

namespace App\Http\Controllers;

use App\Models\UsersCount;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
        $ip = $request->ip();

        if ($ip) {
            $this->saveUserCountToFile($ip);
            //$this->saveUserCountToCache($ip);
        }

        return view('index');
        //return view('index');
//dd($_SERVER);
        /*if (isset($_SERVER['REMOTE_ADDR']))
            $data['ip'] = $_SERVER['REMOTE_ADDR']; //else $data['ip'] = $_SERVER['HTTP_X_REAL_IP'];

        if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){

           // if(strpos($_SERVER['HTTP_X_FORWARDED_FOR'],$_SERVER['REMOTE_ADDR'])!==false){

                $forwardeds=explode(",",$_SERVER['HTTP_X_FORWARDED_FOR']);

                if(isset($forwardeds[0])){

                    $data['ip']=$forwardeds[0];
                }

            //}



        }*/

/*
        $userCounts = UsersCount::whereDate('created_at', Carbon::today())->first();
        if ($userCounts) {
            $ips = json_decode($userCounts->ips, true);
            if (!is_array($ips)) $ips = (array)$ips;

            if (!in_array($data['ip'], $ips)) {
                $userCounts->count++;
                $ips[] = $data['ip'];
                $ips = array_unique($ips);
                $userCounts->ips = json_encode($ips);
                $userCounts->save();
            }

        } else {
            UsersCount::create([
                'count' => 1,
                'ips' => json_encode($data['ip']),
            ]);
        }*/
/*        $this->saveUserCountToCache($data['ip']);
        return view('index');*/

    }
    protected function saveUserCountToCache(string $ip): void
    {
        $dateKey = Carbon::today()->format('Y-m-d');
        $cacheKey = "users_count_ips:{$dateKey}";
        $lockKey = "lock:{$cacheKey}";

        Cache::lock($lockKey, 5)->block(2, function () use ($cacheKey, $ip) {
            $ips = Cache::get($cacheKey, []);

            if (!is_array($ips)) {
                $ips = [];
            }

            if (!in_array($ip, $ips, true)) {
                $ips[] = $ip;

                Cache::put(
                    $cacheKey,
                    array_values(array_unique($ips)),
                    now()->endOfDay()
                );
            }
        });
    }
    public function saveUserCountToFile(string $ip): void
    {
        $hourKey = Carbon::now()->format('Y-m-d-H');
        $path = "user_counts/{$hourKey}.json";

        $data = [];

        if (Storage::exists($path)) {
            $content = Storage::get($path);
            $data = json_decode($content, true) ?: [];
        }

        if (!isset($data['ips'])) {
            $data['ips'] = [];
        }

        if (!in_array($ip, $data['ips'])) {
            $data['ips'][] = $ip;
        }

        Storage::put($path, json_encode($data, JSON_UNESCAPED_UNICODE));
    }
}
