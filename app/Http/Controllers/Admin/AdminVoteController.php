<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminAdminVoteResource;
use App\Http\Resources\Admin\AdminVoteResource;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Request as Input;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller as ParentController;

class AdminVoteController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['success' => true, 'data' => AdminVoteResource::collection(Vote::orderBy('sort')->get())], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function indexFront()
    {
        return response()->json(['success' => true, 'data' => AdminVoteResource::collection(Vote::where('active', true)->orderBy('sort')->get())], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Vote $vote
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Vote $vote)
    {
        return response()->json(['status' => true, 'data' => new AdminVoteResource($vote)], 200);
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
                'sort',
                'active',
                'translates'
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
            global $translates;
            $translates= [];
            $answers = collect($data['answers'])->transform(function ($answer,$key) use ($translates,$data) {
                global $translates;
                //dd();
                $answer['count'] = 0;
                $answer['value'] = Str::slug($answer['text']);
                if (isset($data['translates'])) {
                    foreach ($data['translates'] as $locale => $translate) {
                        if (isset($translate['answers'][$key])) $translates[$locale]['answers'][$key] = $translate['answers'][$key];
                    }
                }
                return $answer;
            })->values()->all();
            if (isset($data['translates'])) {
                foreach ($data['translates'] as $locale => $translate) {
                    if (isset($translate['question'])) $translates[$locale]['question'] = $translate['question'];
                }
            }
            $answers['translates'] = json_encode($translates);
            $data['answers'] = json_encode($answers);
            $vote = Vote::create($data);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new AdminVoteResource($vote)], 200);
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
                'sort',
                'active',
                'translates'
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
            global $translates;
            $translates= [];
            $answers = collect($data['answers'])->transform(function ($answer, $key) use ($request, $vote, $data) {
                global $translates;
                $vote=AdminVoteResource::make($vote)->toArray($request);
                if (isset($answer['value']) and in_array($answer['value'], array_column($vote['answers'], 'value'))) {
                    $oldAnswerIndex = array_search('value', array_column($vote['answers'], 'value'));

                    $answer['count'] = isset($vote['answers'][$oldAnswerIndex]->count) ? $vote['answers'][$oldAnswerIndex]->count : 0;
                } else {
                    $answer['count'] = 0;
                    $answer['value'] = Str::slug($answer['text']);
                }
                if (isset($data['translates'])) {
                    foreach ($data['translates'] as $locale => $translate) {
                        if (isset($translate['answers'][$key])) $translates[$locale]['answers'][$key] = $translate['answers'][$key];
                    }
                }


                return $answer;
            })->values()->all();
            if (isset($data['translates'])) {
                foreach ($data['translates'] as $locale => $translate) {
                    if (isset($translate['question'])) $translates[$locale]['question'] = $translate['question'];
                }
            }

            $answers['translates'] = json_encode($translates);
            $data['answers'] = json_encode($answers);
            $vote->update($data);
            //$appeal->number = Str::random(10);
            $vote->save();
            return response()->json([
                'success' => true,
                'data' => new AdminVoteResource($vote)], 200);
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
                'answer' => 'required'
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
                'data' => new AdminVoteResource($vote)], 200);
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
