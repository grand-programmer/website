<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\NewsResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $data = $request->only('limit');
        if (isset($data['limit']))
            return CategoryResource::collection(Category::with('children')->limit((int)$data['limit'])->get());
        else
            return CategoryResource::collection(Category::with('children')->get());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getForSelect(): \Illuminate\Http\JsonResponse
    {
        return new JsonResponse(CategoryResource::collection(Category::all())->transform(function ($item, $key) {
            $translates = DB::table('category_translates')->where(["category_id" => $item['id'], "language" => app()->getLocale()])->get();

            return [
                'text' => isset($translates[0]) ? $translates[0]->title :$item['title'] ,
                'value' => $item['id'],
                'slug' => $item['slug'],
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
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'parent' => 'numeric|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            $category = Category::create($data);
            //$appeal->number = Str::random(10);
            $category->save();
            return response()->json($category, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Category $category
     * @return CategoryResource
     */
    public function show(Category $category, Request $request)
    {
        $data = $request->only('withnews','page');
        $page=1;
        if (isset($data['page'])) $page = (int)$data['page'];
        if (isset($data['withnews'])) {
            $category = Category::with(['news' => function ($query) use ($page) {
                $query->orderby('created_at', 'desc')->skip(($page - 1) * 6 )->limit(6);
            }])->where('id', $category->id)->get()[0];
        }
        return CategoryResource::make($category);

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
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'parent' => 'numeric|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            $category->update($data);
            //$appeal->number = Str::random(10);
            $category->save();
            return response()->json($category, 200);
        }
        return response()->json('error', 401);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Category $category
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([
            'success'], 200);
    }
}
