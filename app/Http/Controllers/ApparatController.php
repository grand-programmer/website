<?php

namespace App\Http\Controllers;

use App\Http\Resources\ApparatResource;
use App\Models\Apparat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ApparatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $data = $request->only('rahbar');
        if (isset($data['rahbar']))
        return response()->json(['success' => true, 'data' => ApparatResource::collection(Apparat::where(['rahbariyat' => 0])->get())], 200);
        return response()->json(['success' => true, 'data' => ApparatResource::collection(Apparat::where('rahbariyat','<>', 0)->get())], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Apparat $apparat
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Apparat $apparat, Request $request)
    {
        $data = $request->only('rahbar');
        if (isset($data['rahbar']) and $apparat->rahbariyat == 0)
            return response()->json(['status' => true, 'data' => new ApparatResource($apparat)], 200);
        return response()->json(['status' => true, 'data' => new ApparatResource($apparat)], 200);
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
                'fio',
                'lavozimi',
                'qabul',
                'phone',
                'add_phone',
                'email',
                'rahbariyat',
                'org_name',
                'image',
                'rahbar',
            );
            $validator = Validator::make($data, [
                'fio' => 'required|min:3',
                'lavozimi' => 'required',
                'phone' => 'required|min:3',
                'add_phone' => 'required_without:rahbar',
                'email' => 'required_without:rahbar',
                'org_name' => 'required_without:rahbar',
                'image' => 'required',
                'rahbariyat' => 'required_without:rahbar',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'error' => $validator->errors()], 401);
            }

            if ($request->file()) {
                if ($request->file('image')) {
                    $file_ext = $request->file('image')->getClientOriginalExtension();
                    $file_name = time() . "." . $file_ext;
                    $request->file('image')->storeAs('uploads/markaziy/', $file_name, 'public');
                    //dd($data);
                    $data['image'] = $file_name;
                }
            }
            if (isset($data['rahbar'])) $data['rahbariyat'] = 0;

            $apparat = Apparat::create($data);
            $apparat->save();
            return response()->json([
                'success' => true,
                'data' => new ApparatResource($apparat)], 200);
        }
    }


    /**
     * Update the specified resource in storage.
     * @param Apparat $apparat
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Apparat $apparat)
    {
        if ($request->isMethod('put')) {

            $data = $request->only(
                'fio',
                'lavozimi',
                'qabul',
                'phone',
                'add_phone',
                'email',
                'rahbariyat',
                'org_name',
                'image',
                'rahbariyat',
                'rahbar',
            );
            $validator = Validator::make($data, [
                'fio' => 'required|min:3',
                'lavozimi' => 'required',
                'phone' => 'required|min:3',
                'add_phone' => 'required_without:rahbar',
                'email' => 'required_without:rahbar',
                'org_name' => 'required_without:rahbar',
                'image' => 'required',
                'rahbariyat' => 'required_without:rahbar',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            //$data['answers'] = json_encode($data['answers']);
            if ($request->file()) {
                if ($request->file('image')) {
                    //$extension = $request->file->extension();



                    $mimetype=$request->file('image')->getClientMimeType();
                    $file_ext = $request->file('image')->getClientOriginalExtension();
                    if(strlen($file_ext)<2) $file_ext=substr($mimetype,6);
                    $file_name = time() . "." . $file_ext;
                    $request->file('image')->storeAs('uploads/markaziy/', $file_name, 'public');
                    $data['image'] = $file_name;
                }
            } else $data['image'] = $apparat->image;
            if (isset($data['rahbar'])) $data['rahbariyat'] = 0;
            $apparat->update($data);
            //$appeal->number = Str::random(10);
            $apparat->save();
            return response()->json([
                'success' => true,
                'data' => new ApparatResource($apparat)], 200);
        }
        return response()->json(['success' => false], 401);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Apparat $apparat
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Apparat $apparat)
    {
        if ($apparat->delete())
            return response()->json([
                'success' => true], 200);

        return response()->json([
            'success' => false], 401);
    }
}
