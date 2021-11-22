<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class CategoryController extends Controller
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
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Category $category, Request $request)
    {
        $data = $request->only('withnews');
        if (isset($data['withnews']))
            return response()->json($category->with(['news' => function ($query) {
                $query->orderby('created_at', 'desc');
            }])->where('id', $category->id)->get()[0], 200);
        else
            return response()->json($category, 200);

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
