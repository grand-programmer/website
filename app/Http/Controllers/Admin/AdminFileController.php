<?php

namespace App\Http\Controllers\Admin;

use App\Models\DocFile;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller as ParentController;

class AdminFileController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return string
     */
    public function index(Request $request)
    {
        $perpage=10;
        $page=10;
        $data= $request->only(['itemsPerPage','page', 'search']);
        if(isset($data['itemsPerPage'])) {
            $perpage=$data['itemsPerPage'];
        }
        if(isset($data['page'])) {
            $page=$data['page'];
        }
        $search='';
        if(isset($data['search'])) {
            $search=$data['search'];
        }

        return DocFile::where('name','like','%'. $search .'%')->orderByDesc('id')->paginate($perpage, ['*'], 'page', $page);
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
                'name',
                'file',
            );

            $validator = Validator::make($data, [
                'name' => 'required|min:3|max:255',
                'file' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            try {
                $uuid = time();
                $fileName = $uuid . '.' . $request->file->getClientOriginalExtension();

                $docFile = DocFile::create([
                    "name" => $data['name'],
                    "filename" => $fileName,
                    "uuid" => $uuid
                ]);
                $docFile->save();
                $request->file->move(public_path('docfiles'), $fileName);

            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 400);
            }

            return response()->json($docFile, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\DocFile $docFile
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(DocFile $file)
    {
        return $file;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param DocFile $file
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, DocFile $file)
    {
        if ($request->isMethod('put')) {

            $data = $request->only(
                'name',
                'docFile',
            );

            $validator = Validator::make($data, [
                'name' => 'required|min:3|max:255'
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            try {

                if ($request->docFile instanceof File) {
                    $file->fileName = $file->uuid . '.' . $request->docFile->getClientOriginalExtension();
                    $request->docFile->move(public_path('docfiles'), $file->fileName);
                    File::delete(public_path('docfiles') . '/' . $file->fileName);
                }
                $file->update([
                    "name" => $data['name'],
                    "filename" => $file->filename,
                    "uuid" => $file->uuid
                ]);

                return $file;
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 400);
            }

        }
        return response()->json('error', 400);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\DocFile $file
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(DocFile $file)
    {
            $file->delete();
            File::delete(public_path('docfiles') . '/' . $file->filename);
            return response()->json([
                'success'], 200);

    }

}
