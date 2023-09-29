<?php

namespace App\Http\Controllers;

use App\Models\HodimBall;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class HodimBallController extends Controller
{
    public function index(Request $request)
    {
       // HodimBall::where('id','>',0)->delete();

        $data = $request->only([
            'muomala',
            'muomalaComment',
            'rasmiylashturuv',
            'rasmiylashturuvComment',
            'kurik',
            'kurikComment',
            'elektron',
            'elektronComment',
            'sharoit',
            'sharoitComment',
            ]);
        $validation = Validator::make($data, [
            'muomala'=> 'required|numeric',
            'rasmiylashturuv'=> 'required|numeric',
            'kurik'=> 'required|numeric',
            'elektron'=> 'required|numeric',
            'sharoit'=> 'required|numeric',
            'muomalaComment'=> 'required_if:muomala,2',
            'rasmiylashturuvComment'=> 'required_if:rasmiylashturuv,2',
            'kurikComment'=> 'required_if:kurik,2',
            'elektronComment'=> 'required_if:elektron,2',
            'sharoitComment'=> 'required_if:sharoit,2'
        ]);
        if ($validation->fails()) {
            return response()->json(['errors' => $validation->errors()], 400);
        }
////// muomala
        $hodimBallmuomala= new HodimBall([
            "slug"=>'muomala',
            "ball"=>$data['muomala']
        ]);
        if(isset($data['muomalaComment'])){
            $hodimBallmuomala->comment = $data['muomalaComment'];
        }
        $hodimBallmuomala->save();
//// rasmiylashturuv
        $hodimBallrasmiylashturuv= new HodimBall([
            "slug"=>'rasmiylashturuv',
            "ball"=>$data['rasmiylashturuv']
        ]);
        if(isset($data['rasmiylashturuvComment'])){
            $hodimBallrasmiylashturuv->comment = $data['rasmiylashturuvComment'];
        }
        $hodimBallrasmiylashturuv->save();
///kurik
        $hodimBallkurik= new HodimBall([
            "slug"=>'kurik',
            "ball"=>$data['kurik']
        ]);
        if(isset($data['kurikComment'])){
            $hodimBallkurik->comment = $data['kurikComment'];
        }
        $hodimBallkurik->save();
///elektron
        $hodimBallelektron= new HodimBall([
            "slug"=>'elektron',
            "ball"=>$data['elektron']
        ]);
        if(isset($data['elektronComment'])){
            $hodimBallelektron->comment = $data['elektronComment'];
        }
        $hodimBallelektron->save();
/// sharoit
        $hodimBallsharoit= new HodimBall([
            "slug"=>'sharoit',
            "ball"=>$data['sharoit']
        ]);
        if(isset($data['sharoitComment'])){
            $hodimBallsharoit->comment = $data['sharoitComment'];
        }
        $hodimBallsharoit->save();


/*        $data = $request->only(['region', 'post', 'balls']);
        $validation = Validator::make($data, [
            'balls' => 'required|array',
            'balls.*.slug' => 'required',
            'balls.*.ball' => 'required|numeric|between:2,5',
            'balls.*.comment' => 'required_if:balls.*.ball,2'
        ]);
        if ($validation->fails()) {
            return response()->json(['errors' => $validation->errors()], 400);
        }
        $timestamp = microtime(true) * 10000;

        // Generate a random component
        $random = mt_rand(1000, 9999);

        // Combine the timestamp and random component
        $group = $timestamp . $random;
        foreach ($data['balls'] as $ball){
                    $hodimBall= new HodimBall([
                        "slug"=>$ball['slug'],
                        "ball"=>$ball['ball'],
                        "group"=>$group,
                    ]);
                    if(isset($ball['comment'])) $hodimBall->comment = $ball['comment'];
                    if(isset($ball['region'])) $hodimBall->region = $ball['region'];
                    if(isset($ball['post'])) $hodimBall->post = $ball['post'];
                    $hodimBall->save();
                }*/

        $counts = DB::table('hodim_baholar')
            ->whereIn('ball', [2, 3, 4, 5])
            ->select('slug', 'ball', DB::raw('COUNT(*) as count'))
            ->groupBy('slug', 'ball')
            ->get();
        $response = $counts->groupBy('slug')->transform(function ($slugItem) {
            global $slugArray;
            $slugArray = [];
            /*$slugItem->map(function ($sItem) use ($slugArray) {
               $slugArray[] = [
                   'ball' =>$sItem->ball,
                   'count'=>$sItem->count
               ];
            });*/
            collect([2, 3, 4, 5])->map(function ($sBallItem) use ($slugItem, $slugArray) {
                global $slugArray;
                if (!$slugItem->contains('ball', $sBallItem)) {
                    $slugArray[] = [
                        'ball' => $sBallItem,
                        'count' => 0
                    ];
                } else $slugArray[] = [
                    'ball' => $sBallItem,
                    'count' =>  $slugItem->where('ball', $sBallItem)->first()->count
                ];
            });
            return $slugArray;


        });
        return response()->json( $response->all());

    }
}
