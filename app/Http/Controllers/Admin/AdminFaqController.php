<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminFaqResource;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller as ParentController;
use function GuzzleHttp\Promise\all;

class AdminFaqController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return AdminFaqResource::collection(Faq::all());
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function getForFront()
    {
        return AdminFaqResource::collection(Faq::where(['active'=>1])->orderby('sort')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return AdminFaqResource
     */
    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'question',
                'answer',
                'sort',
                'active',
                'translates'
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
            $this->extracted($data,$myfaq);
            return AdminFaqResource::make($myfaq);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Faq  $faq
     * @return AdminFaqResource
     */
    public function show(Faq $faq)
    {
        return AdminFaqResource::make($faq);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Faq  $faq
     * @return AdminFaqResource
     */
    public function update(Request $request, Faq $faq)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'question',
                'answer',
                'sort',
                'active',
                'translates'
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
            $this->extracted($data,$faq);
            //$appeal->number = Str::random(10);
            //$myfaq->save();
            return AdminFaqResource::make($faq);
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
        $faq_id=$faq->id;
        if ($faq->delete()) {
            $deleted = DB::table('faq_translates')->where(["faq_id" => $faq_id])->delete();
            return response()->json([
                'success' => true], 200);
        }
        else
            return response()->json([
                'success' => false], 401);
    }

    public function extracted(array $data, $page): void
    {
        if (isset($data['translates'])) {
            //dd($data['translates']);
            $translates = [];
            if (is_array($data['translates'])) {
                foreach ($data['translates'] as $language => $translate) {
                    if (is_array($translate)) {

                        if (strlen($translate['answer']) > 3 and strlen($translate['question']) > 3)
                            DB::table('faq_translates')
                                ->updateOrInsert(
                                    ['language' => $language, 'faq_id' => $page->id],
                                    [
                                        'answer' => $translate['answer'] ?? "",
                                        'question' => $translate['question'] ?? "",
                                    ]
                                );
                    }
                }
            }
        }
    }

}
