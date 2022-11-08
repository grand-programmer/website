<?php

namespace App\Http\Controllers;

use App\Models\UsersCount;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UsersCountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCount()
    {
        //today
        $today=UsersCount::whereDate('created_at', Carbon::today())->first();
        $data['today']=$today?$today->count:0;
        //yesterday
        $yesterday=UsersCount::whereDate('created_at', Carbon::yesterday())->first();
        $data['yesterday']=$yesterday?$yesterday->count:0;

        //week
        $week=UsersCount::whereBetween('created_at',
            [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]
        );
        $data['week']=($week->get()->count()>0)?$week->sum('count'):0;

        //month
        $month=UsersCount::whereBetween('created_at',
            [Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth()]
        );
        $data['month']=($month->get()->count()>0)?$month->sum('count'):0;

        //year
        $year=UsersCount::whereYear('created_at', Carbon::now()->year);

        $data['year']=($year->get()->count()>0)?$year->sum('count'):0;

        return response()->json(['data'=>$data]);

    }

/*    /**
     * Show the form for creating a new resource.
     *
     * @return Response

    public function addCount(Request $request)
    {
        $data=$request->only('ip');
        if(isset($data['ip'])) {
            $userCounts=UsersCount::whereDate('created_at', Carbon::today())->get();
            if($userCounts){
                if(!in_array($data['ip'],json_decode($userCounts[0]->ips,true))){

                }

            }else {
                UsersCount::create([
                    'count'=>1,
                    'ips'=>$data['ips'],
                ]);
            }



        }
    }*/

}
