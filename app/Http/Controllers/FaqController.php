<?php

namespace App\Http\Controllers;

use App\Http\Resources\FaqResource;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return FaqResource::collection(Faq::all());
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getForFront()
    {
        return FaqResource::collection(Faq::where(['active'=>1])->orderby('sort')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'question',
                'answer',
                'sort',
                'active',
            );
            $validator = Validator::make($data, [
                'question' => 'required',
                'answer' => 'required',
                'sort' => 'numeric|nullable',
                'active' => 'boolean|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            $myfaq = Faq::create($data);
            //$appeal->number = Str::random(10);
            $myfaq->save();
            return response()->json($myfaq, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Faq  $faq
     * @return FaqResource
     */
    public function show(Faq $faq)
    {
        return FaqResource::make($faq); // response()->json(['status' => true, 'data' => $faq], 200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Faq  $faq
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Faq $faq)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'question',
                'answer',
                'sort',
                'active',
            );
            $validator = Validator::make($data, [
                'question' => 'required',
                'answer' => 'required',
                'sort' => 'numeric|nullable',
                'active' => 'boolean|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            $myfaq = $faq->update($data);
            //$appeal->number = Str::random(10);
            //$myfaq->save();
            return response()->json($myfaq, 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Faq  $faq
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Faq $faq)
    {
        if ($faq->delete())
            return response()->json([
                'success' => true], 200);
        else
            return response()->json([
                'success' => false], 401);
    }
}
