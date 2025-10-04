<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $data = $request->all();

        $per_page = 10;
        $page = 1;

        if (isset($data['itemsPerPage'])) {
            $per_page = $data['itemsPerPage'];
        }
        if (isset($data['page'])) {
            $page = $data['page'];
        }
        $cats = Document::where(['lang' => 'uz']);


        return response()->json([
            'count' => $cats->get()->count(),
            'data' => $cats->limit($per_page)->skip($per_page * ($page - 1))->get(),
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
        if (isset($data['translates'])) $data['translates'] = json_decode($data['translates'], true);
        $validator = Validator::make($data, [
            'name' => 'required|min:3',
            'url' => 'required|min:3',
            'code' => 'required|min:1',
            'date' => 'required|min:3|date',
            'categories' => 'required',
            'type' => 'required',
            'translates' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->errors()], 400);
        }
        $doc = Document::create([
            'name' => $data['name'],
            'url' => $data['url'],
            'code' => $data['code'],
            'date' => $data['date'],
            'type' => $data['type'],
            'cat_id' => $data['categories'],
            'lang' => 'uz'
        ]);
        $insertData = [];

        if ($doc) {
            foreach ($data['translates'] as $localKey => $locale) {
                $insertData[] = [
                    'name' => strlen($locale['name']) > 0 ? $locale['name'] : " ",
                    'url' => strlen($locale['url']) > 0 ? $locale['url'] : " ",
                    'code' => strlen($locale['code']) > 0 ? $locale['code'] : " ",
                    'date' => $data['date'],
                    'type' => $data['type'],
                    'cat_id' => $data['categories'],
                    'lang' => $localKey,
                    'relation_id' => $doc->id
                ];
            }
            Document::insert($insertData);

            return response()->json([
                'success' => true,
                'message' => 'Omadli tarzda yuklandi'], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param Document $document
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Document $document)
    {
        $document['translates'] = $document->translates;
        return response()->json([
            'data' => $document
        ]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Document $document
     * @return JsonResponse
     */
    public function update(Document $document, Request $request): JsonResponse
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'name' => 'required|min:3',
            'url' => 'required',
            'code' => 'required',
            'date' => 'required',
            'type' => 'required',
            'cat_id' => 'required',
            'translates' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->errors()], 400);
        }

        $doc = $document->update([
            'name' => $data['name'],
            'url' => $data['url'],
            'code' => $data['code'],
            'date' => $data['date'],
            'type' => $data['type'],
            'cat_id' => $data['cat_id'],
            'lang' => 'uz'
        ]);

        if ($doc) {
            foreach ($data['translates'] as $localKey => $locale) {
                Document::where([
                    'relation_id' => $document->id,
                    'lang' => $localKey,
                ])->update([
                    'name' => strlen($locale['name']) > 0 ? $locale['name'] : "",
                    'url' => strlen($locale['url']) > 0 ? $locale['url'] : "",
                    'code' => strlen($locale['code']) > 0 ? $locale['code'] : "",
                    'date' => $data['date'],
                    'type' => $data['type'],
                    'cat_id' => $data['cat_id']
                ]);
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
     * @param Document $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(Document $document)
    {
        $document->translates()->delete();
        $document->delete();
    }
}
