<?php

namespace App\Http\Controllers;

use App\Models\UsersCount;
use Carbon\Carbon;
use Illuminate\Http\Request;

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
        //return view('index');

        if (isset($_SERVER['HTTP_X_REAL_IP']))
            $data['ip'] = $_SERVER['HTTP_X_REAL_IP']; else $data['ip'] = $_SERVER['REMOTE_ADDR'];
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
        }
        return view('index');


        return view('home');
    }
}
