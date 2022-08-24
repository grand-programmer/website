<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminCategoryResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use App\Http\Controllers\Controller as ParentController;

class AdminCategoryController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $data = $request->only('limit');
        if (isset($data['limit']))
            return Category::with('children')->limit((int)$data['limit'])->get()->toJson();
        else
            return Category::with('children')->get()->toJson();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getForSelect(): \Illuminate\Http\JsonResponse
    {
        return new JsonResponse(Category::all()->transform(function ($item, $key) {
            return [
                'text' => $item['title'],
                'value' => $item['id'],
            ];
        }), 200);
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
                'title',
                'description',
                'parent',
                'translates'
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'parent' => 'numeric|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $category = Category::create($data);
            $this->update_translates($data, $category);
            //$appeal->number = Str::random(10);
            $category->save();
            return response()->json($category, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Category $category
     * @return AdminCategoryResource
     */
    public function show(Category $category, Request $request)
    {
        $data = $request->only('withnews');
        if (isset($data['withnews']))
            return AdminCategoryResource::make($category->with(['news' => function ($query) {
                $query->orderby('created_at', 'desc');
            }])->where('id', $category->id)->get()[0]);
/*            return response()->json($category->with(['news' => function ($query) {
                $query->orderby('created_at', 'desc');
            }])->where('id', $category->id)->get()[0], 200);*/
        else
            return AdminCategoryResource::make($category);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Category $category)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'title',
                'description',
                'parent',
                'translates'
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'parent' => 'numeric|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            $category->update($data);
            $this->update_translates($data, $category);
            //$appeal->number = Str::random(10);
            $category->save();
            return response()->json($category, 200);
        }
        return response()->json('error', 400);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Category $category)
    {
        $category_id = $category->id;
        $category->delete();
        $deleted = DB::table('category_translates')->where(["category_id" => $category_id])->delete();
        return response()->json([
            'success'], 200);
    }
    /**
     * @param array $data
     * @param $model
     * @return void
     */
    public function update_translates(array $data, $model)
    {
        if (isset($data['translates'])) {
            //$data['translates'] = json_decode($data['translates'], true);
            //dd($data['translates']);
            $translates = [];
            if (is_array($data['translates'])) {
                foreach ($data['translates'] as $language => $translate) {
                    if (is_array($translate)) {

                        if (strlen($translate['title']) > 3)
                            DB::table('category_translates')
                                ->updateOrInsert(
                                    ['language' => $language, 'category_id' => $model->id],
                                    [
                                        'title' => $translate['title'] ?? "",
                                        'description' => $translate['description'] ?? "",
                                    ]
                                );
                    }
                }
            }
        }
    }
}
