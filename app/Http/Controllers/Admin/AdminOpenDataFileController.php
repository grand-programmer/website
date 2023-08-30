<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminAdminVoteResource;
use App\Http\Resources\Admin\AdminOpenDataFileResource;
use App\Http\Resources\Admin\AdminVoteResource;
use App\Models\OpenDataFile;
use App\Models\OpenDataItem;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Request as Input;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller as ParentController;

class AdminOpenDataFileController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(OpenDataItem $opendata)
    {
        return response()->json(['success' => true, 'data' => AdminOpenDataFileResource::collection(OpenDataFile::with('relationItems')->where('relation_id','=',null)->where(['item_id'=>$opendata->id])->orderBy('year')->get())], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param OpenDataItem $opendata
     * @param OpenDataFile $file
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(OpenDataItem $opendata, OpenDataFile $file)
    {
        return response()->json(['status' => true, 'data' => new AdminOpenDataFileResource($file)], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(OpenDataItem $opendata, Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'year',
                'quarter',
                'translates'
            );
            $validator = Validator::make($data, [
                'year' => 'required',
                'translates.*.json' => 'required',
                'translates.*.xml' => 'required',
                'translates.*.csv' => 'required',
                'translates.*.xls' => 'required',
                'translates.*.rdf' => 'required',
                //'answers.*.value' => 'required_with:answers.*.title'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'error' => $validator->errors()], 400);
            }

            $uzTranslates = $data['translates']['uz'];
            // Begin a transaction
            DB::beginTransaction();
            try {
                // Create the supervisor
                $parentItem = new OpenDataFile();
                $parentItem->item_id= $opendata->id;
                $parentItem->json = $uzTranslates['json'];
                $parentItem->csv = $uzTranslates['csv'];
                $parentItem->xml = $uzTranslates['xml'];
                $parentItem->xls = $uzTranslates['xls'];
                $parentItem->rdf = $uzTranslates['rdf'];
                $parentItem->year = $data['year'];
                $parentItem->quarter = $data['quarter'];
                $parentItem->language = 'uz';
                // Set other supervisor properties...

                // Save the supervisor
                $parentItem->save();

                // Create an array of $relationItems belonging to the $parentItem

                foreach($data['translates'] as $translateKey=>$translateItem){
                    if($translateKey!=='uz')
                    $relationItems[]= new OpenDataFile([
                        "json"=> $translateItem['json'],
                        "csv"=> $translateItem['csv'],
                        "xml"=> $translateItem['xml'],
                        "xls"=> $translateItem['xls'],
                        "rdf"=> $translateItem['rdf'],
                        "year"=> $parentItem->year,
                        "quarter"=> $parentItem->quarter,
                        "language"=> $translateKey,
                        "item_id"=> $opendata->id
                    ]);
                }

                // Save the employees with the supervisor using saveMany
                $parentItem->relationItems()->saveMany($relationItems);

                // Commit the transaction
                DB::commit();

                // Success message or other actions on success
            } catch (\Exception $e) {
                // If an error occurs, rollback the transaction
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'error' => $e->getMessage()], 400);

                // Error handling and error response
            }
            return response()->json([
                'success' => true,
                'data' => new AdminOpenDataFileResource($parentItem)], 200);
        }
    }


    /**
     * Update the specified resource in storage.
     * @param OpenDataItem $opendata
     * @param  OpenDataFile $file
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, OpenDataItem $opendata, OpenDataFile $file)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'year',
                'quarter',
                'translates'
            );
            $validator = Validator::make($data, [
                'year' => 'required',
                'translates.*.json' => 'required',
                'translates.*.xml' => 'required',
                'translates.*.csv' => 'required',
                'translates.*.xls' => 'required',
                'translates.*.rdf' => 'required',
                //'answers.*.value' => 'required_with:answers.*.title'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'error' => $validator->errors()], 400);
            }

            $uzTranslates = $data['translates']['uz'];
            // Begin a transaction
            DB::beginTransaction();
            try {
                // Create the supervisor
                $parentItem = $file;
                $parentItem->json = $uzTranslates['json'];
                $parentItem->csv = $uzTranslates['csv'];
                $parentItem->xml = $uzTranslates['xml'];
                $parentItem->xls = $uzTranslates['xls'];
                $parentItem->rdf = $uzTranslates['rdf'];
                $parentItem->year = $data['year'];
                $parentItem->quarter = $data['quarter'];

                // Save the supervisor
                $parentItem->save();

                // Create an array of $relationItems belonging to the $parentItem

                foreach($parentItem->relationItems as $relationItem){
                    $relationItem->json=$data['translates'][$relationItem->language]['json'];
                    $relationItem->csv=$data['translates'][$relationItem->language]['csv'];
                    $relationItem->xml=$data['translates'][$relationItem->language]['xml'];
                    $relationItem->xls=$data['translates'][$relationItem->language]['xls'];
                    $relationItem->rdf=$data['translates'][$relationItem->language]['rdf'];
                    $relationItem->save();
                }

                // Commit the transaction
                DB::commit();

                // Success message or other actions on success
            } catch (\Exception $e) {
                // If an error occurs, rollback the transaction
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'error' => $e->getMessage()], 400);

                // Error handling and error response
            }
            return response()->json([
                'success' => true,
                'data' => new AdminOpenDataFileResource($parentItem)], 200);
        }
        return response()->json(['success' => false], 400);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param OpenDataItem $opendata
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(OpenDataItem $opendata, OpenDataFile $file)
    {
        $file->relationItems()->delete();
        if ($file->delete())
            return response()->json([
                'success' => true], 200);

        return response()->json([
            'success' => false], 400);
    }

}
