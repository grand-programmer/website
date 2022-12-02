<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DocumentCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminDocumentCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $data=$request->all();

        $per_page=10;
        $page=1;

        if(isset($data['itemsPerPage'])){
            $per_page=$data['itemsPerPage'];
        }
        if(isset($data['page'])){
            $page=$data['page'];
        }

        $cats=DocumentCategory::where(['lang'=>'uz']);
        if (isset($data['select'])) {
            return response()->json([
                'data' => $cats->get(['name','id']),
            ]);
        }
        return response()->json([
            'count'=>$cats->get()->count(),
            'data'=>$cats->limit($per_page)->skip($per_page*($page-1))->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'title' => 'required|min:3',
            'translates' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->errors()], 400);
        }

        $category = DocumentCategory::create([
            'name' => $data['title'],
            'lang' => 'uz'
        ]);
        $insertData = [];
        if ($category) {
            foreach ($data['translates'] as $localKey => $locale) {
                $insertData[] = [
                    'name' => strlen($locale['title']) > 0 ? $locale['title'] : " ",
                    'lang' => $localKey,
                    'relation_id' => $category->id
                ];
            }
            DocumentCategory::insert($insertData);

            return response()->json([
                'success' => true,
                'message' => 'Omadli tarzda yuklandi'], 400);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param DocumentCategory $doccategory
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(DocumentCategory $doccategory,Request $request)
    {
        $doccategory['translates']=$doccategory->translates;
        return response()->json([
            'data'=>$doccategory
        ]);
    }



    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param DocumentCategory $doccategory
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(DocumentCategory $doccategory, Request $request)
    {
        $data = $request->all();
        $validator = Validator::make($data, [
            'name' => 'required|min:3',
            'translates' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->errors()], 400);
        }

        $category = $doccategory->update([
            'name' => $data['name'],
            'lang' => 'uz'
        ]);
        if ($category) {
            foreach ($data['translates'] as $localKey => $locale) {

                DocumentCategory::where([
                    'relation_id' => $doccategory->id,
                    'lang' => $localKey,
                ])->update([
                    'name' => strlen($locale['name']) > 0 ? $locale['name'] : " "]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Omadli tarzda yuklandi'], 200);
        }

        return response()->json([
            'success' => false,
            'message' => 'Xatolik yuz berdi'], 400);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param DocumentCategory $doccategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(DocumentCategory $doccategory)
    {
        $doccategory->translates()->delete();
        $doccategory->delete();
    }
}
