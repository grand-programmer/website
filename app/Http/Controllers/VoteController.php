<?php

namespace App\Http\Controllers;

use App\Http\Resources\VoteResource;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Request as Input;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['success' => true, 'data' => VoteResource::collection(Vote::all())], 200);
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
    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'question',
                'answers',
            );
            $validator = Validator::make($data, [
                'question' => 'required|min:3|max:255',
                'answers.*.title' => 'required_with:answers.*.value',
                'answers.*.value' => 'required_with:answers.*.title'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'error' => $validator->errors()], 401);
            }
            $data['answers'] = json_encode($data['answers']);
            $vote = Vote::create($data);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new VoteResource($vote)], 200);
        }
    }


    /**
     * Update the specified resource in storage.
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Vote $vote)
    {
        if ($request->isMethod('put')) {

            $data = $request->only(
                'question',
                'answers',
            );
            $validator = Validator::make($data, [
                'question' => 'required|min:3|max:255',
                'answers.*.title' => 'required_with:answers.*.value',
                'answers.*.value' => 'required_with:answers.*.title,answers.*.count',
                'answers.*.count' => 'required_with:answers.*.title,answers.*.value'
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            $data['answers'] = json_encode($data['answers']);
            $vote->update($data);
            //$appeal->number = Str::random(10);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new VoteResource($vote)], 200);
        }
        return response()->json(['success' => false], 401);

    }

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
                'answer' => 'required|numeric'
            ]);


            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            $myVote = $vote->toArray();
            $myVote['answers'] = (array)json_decode($myVote['answers']);
            //$myVote=$vote;
            $voteCollection = collect($myVote['answers']);
            ///dd($voteCollection->whereIn('value', $data['answer'])->isEmpty());
            if ($voteCollection->whereIn('value', $data['answer'])->isEmpty())
                return response()->json(['succes' => 'false', 'error' => 'Answer not found'], 401);
            $myVote['answers'] = $voteCollection->transform(function ($answer) use ($data) {
                if ($answer->value === $data['answer']) {
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
        return response()->json(['success' => false], 401);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Vote $vote)
    {
        if ($vote->delete())
            return response()->json([
                'success' => true], 200);

        return response()->json([
            'success' => false], 401);
    }

}
