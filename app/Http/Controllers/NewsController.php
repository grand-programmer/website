<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        return News::with('categories')->orderby('created_at','desc')->get()->toJson();
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
                'short',
                'categories',
                'image',
                'home',
            );

            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'description' => 'required',
                'short' => 'required',
                'categories' => 'array|nullable',
                'image' => 'file|nullable|mimes:jpg,jpeg,png|max:5048',
            ]);
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }
            if (isset($data['home'])) {
                if ($data['home'] == "true") $data['home'] = true;
                else $data['home'] = false;
            }
            $news = News::create($data);

            if ($request->file()) {
                $file_ext = $request->file('image')->getClientOriginalExtension();
                $file_name = time() . "." . $file_ext;
                $request->file('image')->storeAs('uploads', $file_name, 'public');
                $news->image = $file_name;
            }

            $news->save();
            if (isset($data['categories']))
                $news->categories()->sync($data['categories']);
            return response()->json($news, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\News $news
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(News $news)
    {
        $categories = [];
        if ($news->categories->isNotEmpty())
            $categories = $news->categories->transform(function ($item) {
                return $item->id;
            })->toArray();
        return response()->json(array_merge($news->with('categories')->where('id',$news->id)->get()[0]->toArray(), ['cats' => $categories]), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\News $news
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, News $news): \Illuminate\Http\JsonResponse
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'title',
                'description',
                'short',
                'home',
                'parent',
                'cats',
                'image',
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'description' => 'required',
                'short' => 'required',
                'parent' => 'numeric|nullable',
                'cats' => 'array|nullable',
                'image' => 'nullable|file|mimes:jpg,jpeg,png|max:5120',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            if (isset($data['home'])) {
                if ($data['home'] == "true") $data['home'] = true;
                else $data['home'] = false;
            }
            $news->update($data);

            if ($request->file()) {
                $file_ext = $request->file('image')->getClientOriginalExtension();
                $file_name = time() . "." . $file_ext;
                $request->file('image')->storeAs('uploads', $file_name, 'public');
                $news->image = $file_name;
            }
            if (isset($data['cats']))
                $news->categories()->sync($data['cats']);
            //$appeal->number = Str::random(10);
            $news->save();
            return response()->json($news, 200);
        }
        return response()->json('error', 401);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\News $news
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(News $news)
    {
        $news->categories()->detach();
        Storage::delete("public/uploads/".$news->image);
        $news->delete();
        return response()->json([
            'success'], 200);
    }
}
