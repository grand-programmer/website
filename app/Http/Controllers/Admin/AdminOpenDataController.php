<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminAdminVoteResource;
use App\Http\Resources\Admin\AdminOpenDataResource;
use App\Http\Resources\Admin\AdminVoteResource;
use App\Models\OpenDataItem;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Request as Input;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller as ParentController;

class AdminOpenDataController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['success' => true, 'data' => AdminOpenDataResource::collection(OpenDataItem::with('relationItems')->where('relation_id','=',null)->orderBy('sort')->get())], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param OpenDataItem $opendata
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(OpenDataItem $opendata)
    {
        return response()->json(['status' => true, 'data' => new AdminOpenDataResource($opendata)], 200);
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
                'phone',
                'email',
                'sort',
                'translates'
            );
            $validator = Validator::make($data, [
                'phone' => 'required|min:3|max:255',
                'sort' => 'numeric',
                'email' => 'email|required',
                'translates.*.title' => 'required|min:3',
                'translates.*.contact' => 'required|min:3|max:255',
                'translates.*.boshqarma' => 'required|min:3|max:255',
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
                $parentItem = new OpenDataItem();
                $parentItem->title = $uzTranslates['title'];
                $parentItem->contact = $uzTranslates['contact'];
                $parentItem->boshqarma = $uzTranslates['boshqarma'];
                $parentItem->phone = str_replace(['-',' ','+'],'',$data['phone'],);
                $parentItem->email = $data['email'];
                $parentItem->sort = $data['sort'];
                // Set other supervisor properties...

                // Save the supervisor
                $parentItem->save();

                // Create an array of $relationItems belonging to the $parentItem

                foreach($data['translates'] as $translateKey=>$translateItem){
                    if($translateKey!=='uz')
                    $relationItems[]= new OpenDataItem([
                        "title"=> $translateItem['title'],
                        "contact"=> $translateItem['contact'],
                        "boshqarma"=> $translateItem['boshqarma'],
                        "phone"=> $parentItem->phone,
                        "email"=> $parentItem->email,
                        "sort"=> $parentItem->sort,
                        "language"=> $translateKey,
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
                'data' => new AdminOpenDataResource($parentItem)], 200);
        }
    }


    /**
     * Update the specified resource in storage.
     * @param OpenDataItem $opendata
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, OpenDataItem $opendata)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'phone',
                'email',
                'sort',
                'translates'
            );
            $validator = Validator::make($data, [
                'phone' => 'required|min:3|max:255',
                'sort' => 'numeric',
                'email' => 'email|required',
                'translates.*.id' => 'required|numeric',
                'translates.*.title' => 'required|min:3',
                'translates.*.contact' => 'required|min:3|max:255',
                'translates.*.boshqarma' => 'required|min:3|max:255',
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
                $parentItem = $opendata;
                $parentItem->title = $uzTranslates['title'];
                $parentItem->contact = $uzTranslates['contact'];
                $parentItem->boshqarma = $uzTranslates['boshqarma'];
                $parentItem->phone = str_replace(['-',' ','+'],'',$data['phone'],);
                $parentItem->email = $data['email'];
                $parentItem->sort = $data['sort'];
                // Set other supervisor properties...

                // Save the supervisor
                $parentItem->save();

                // Create an array of $relationItems belonging to the $parentItem

                foreach($parentItem->relationItems as $relationItem){
                    $relationItem->title=$data['translates'][$relationItem->language]['title'];
                    $relationItem->contact=$data['translates'][$relationItem->language]['contact'];
                    $relationItem->boshqarma=$data['translates'][$relationItem->language]['boshqarma'];
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
                'data' => new AdminOpenDataResource($parentItem)], 200);
        }
        return response()->json(['success' => false], 401);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param OpenDataItem $opendata
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(OpenDataItem $opendata)
    {
        $opendata->relationItems()->delete();
        $opendata->openDataFiles()->delete();
        if ($opendata->delete())
            return response()->json([
                'success' => true], 200);

        return response()->json([
            'success' => false], 400);
    }

}
