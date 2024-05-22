<?php

namespace App\Http\Controllers;

use App\Http\Resources\VoteResource;
use App\Models\Vote;
use Carbon\Carbon;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Request as Input;
use Illuminate\Support\Str;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        return response()->json(['success' => true, 'data' => VoteResource::collection(Vote::orderBy('sort')->get())], 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexFront()
    {
        return response()->json(['success' => true, 'data' => VoteResource::collection(Vote::where('active',true)->orderBy('sort')->get())], 200);
    }

    public function phoneVotes(Request $request){
        $data=$request->only(['month', 'year']);
if(isset($data['month'])) $queryMonth= ' and month(call_date) = ' . $data['month']; else $queryMonth= '';
if(isset($data['year'])) $queryYear= ' and year(call_date) = ' . $data['year']; else $queryYear= ' and year(call_date) = ' . Carbon::now()->year;

       $query= "SELECT count(id) count, evaluation text,
(select count(id)  FROM dbo.system_operator_evaluation_statistics
    where evaluation <> 0" . $queryYear. $queryMonth. "  ) 'total'
  FROM dbo.system_operator_evaluation_statistics
    where evaluation <> 0" . $queryYear. $queryMonth. "
  Group BY evaluation
  order by evaluation desc";
       $phonedata = DB::connection('sqlsrv')->select($query);

        return response()->json(['success'=>true, 'data' => $phonedata]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Vote $vote)
    {
        return response()->json(['status' => true, 'data' => new VoteResource($vote)], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
/*    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'question',
                'answers',
                'sort',
                'active',
            );
            $validator = Validator::make($data, [
                'question' => 'required|min:3|max:255',
                'sort' => 'numeric',
                'answers.*.text' => 'required_with:answers.*.text',
                //'answers.*.value' => 'required_with:answers.*.title'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'error' => $validator->errors()], 401);
            }
            $answers=collect($data['answers'])->transform(function($answer){
                    $answer['count']=0;
                    $answer['value']=Str::slug($answer['text']);

                return $answer;
            })->values()->all();
            $data['answers'] = json_encode($answers);
            $vote = Vote::create($data);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new VoteResource($vote)], 200);
        }
    }*/


    /**
     * Update the specified resource in storage.
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
/*    public function update(Request $request, Vote $vote)
    {
        if ($request->isMethod('put')) {

            $data = $request->only(
                'question',
                'answers',
                'sort',
                'active',
            );
            $validator = Validator::make($data, [
                'question' => 'required|min:3|max:255',
                'sort' => 'numeric',
                'answers.*.text' => 'required',
               //'answers.*.value' => 'required_with:answers.*.text,answers.*.count',
                //'answers.*.count' => 'required_with:answers.*.text,answers.*.value'
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            $answers=collect($data['answers'])->transform(function($answer) use ($vote){
                if( isset($answer['value']) and in_array($answer['value'],array_column(json_decode($vote->answers),'value'))){
                    $oldAnswerIndex=array_search('value',array_column(json_decode($vote->answers),'value'));

                    $answer['count']=isset(json_decode($vote->answers)[$oldAnswerIndex]->count)?json_decode($vote->answers)[$oldAnswerIndex]->count:0;
                }else {
                    $answer['count']=0;
                    $answer['value']=Str::slug($answer['text']);
                }
                return $answer;
            })->values()->all();;
            $data['answers'] = json_encode($answers);
            $vote->update($data);
            //$appeal->number = Str::random(10);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new VoteResource($vote)], 200);
        }
        return response()->json(['success' => false], 401);

    }*/

    /**
     * Update the specified resource in storage.
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateCount(Request $request, Vote $vote)
    {
        if ($request->isMethod('put')) {

            $data = $request->only(
                'answer',
            );
            $validator = Validator::make($data, [
                'answer' => 'required'
            ]);


            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }
            $myVote = $vote->toArray();




            $myVote['answers'] = (array)json_decode($myVote['answers']);
            //$myVote=$vote;
            $voteCollection = collect($myVote['answers']);
            ///dd($voteCollection->whereIn('value', $data['answer'])->isEmpty());
            if ($voteCollection->whereIn('value', $data['answer'])->isEmpty())
                return response()->json(['succes' => 'false', 'error' => 'Answer not found'], 400);
            $myVote['answers'] = $voteCollection->transform(function ($answer) use ($data) {
                if (isset($answer->value) && $answer->value === $data['answer']) {
                    if (isset($answer->count)) $answer->count++; else $answer->count = 1;
                }
                return $answer;
            })->all();
            //dd($myVote['answers']);
            //[$data['answer']]->count++;

            $data['answers'] = json_encode($myVote['answers']);
            $vote->update($data);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new VoteResource($vote)], 200);
        }
        return response()->json(['success' => false], 400);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
   /* public function destroy(Vote $vote)
    {
        if ($vote->delete())
            return response()->json([
                'success' => true], 200);

        return response()->json([
            'success' => false], 401);
    }*/

    public function baholash(){
        return Redirect::to('https://play.google.com/store/apps/details?id=com.eskishahar.app.bojxonaxizmatinibaholash');
        // return Storage::download('public/files/baholash.apk');
    }
}
