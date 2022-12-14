<?php

namespace App\Http\Controllers;

use App\Http\Resources\DocumentCategoryResource;
use App\Http\Resources\DocumentResource;
use App\Models\Document;
use App\Models\DocumentCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $data = $request->all();

        $per_page = 20;
        $page = 1;

        if (isset($data['itemsPerPage'])) {
            $per_page = $data['itemsPerPage'];
        }
        if (isset($data['page'])) {
            $page = $data['page'];
        }
        $data = $request->only([
            "category",
            "type",
            "number",
            "sanagacha",
            "sanadan",
            "terms"
        ]);


        $docs = Document::where(['lang' => 'uz'])->orderBy('date', 'desc');
        if (app()->getLocale() !== 'uz') {
            if (isset($data['terms'])) {
                $docsT=Document::where(['lang' => app()->getLocale()])->where('name', 'like', '%' . $data['terms'] . '%')->orderBy('date', 'desc')->pluck('relation_id')->toArray();
                $docs = $docs->whereIn('id',$docsT);
            }
        } else {
            if (isset($data['terms'])) {
                $docs = $docs->where('name', 'like', '%' . $data['terms'] . '%');
            }
        }

        if(isset($data['sanadan'])){
            $docs=$docs->where('date','>=',(new Carbon($data['sanadan']))->toDate());
        }
        if(isset($data['sanagacha'])){
            $docs=$docs->where('date','<=',(new Carbon($data['sanagacha']))->toDate());
        }
        if(isset($data['category'])){
            $docs=$docs->where(['cat_id'=>$data['category']]);
        }
        if(isset($data['type'])){
            $docs=$docs->where(['type'=>$data['type']]);
        }
        if(isset($data['number'])){
            $docs=$docs->where(['code'=>$data['number']]);
        }



        return response()->json([
            'count' => $docs->get()->count(),
            'data' => DocumentResource::collection($docs->limit($per_page)->skip($per_page * ($page - 1))->get()),
        ]);
    }
    public function getCategories(){
        $cats=[];
        $cats=DocumentCategoryResource::collection(DocumentCategory::where('lang','uz')->get());
        return response()->json($cats);
    }
}
