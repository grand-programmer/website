<?php

namespace App\Http\Controllers;

use App\Models\NewsTranslates;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\News;
use App\Http\Resources\NewsResource;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $page=1;
        $requestData = $request->only(['boshqarma', 'page']);
        $news = News::with(['categories','translates']);
        if(app()->getLocale()!=='uz') $news=$news->whereRelation('translates','language','=',app()->getLocale());

        if (isset($requestData['boshqarma'])) $news = $news->where('boshqarma', $requestData['boshqarma']);
        if (isset($requestData['page'])) $page = $requestData['page'];
        return NewsResource::collection($news->orderby('created_at', 'desc')->paginate(6, ['*'], 'page', $page));
        /*->transform(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'categories' => $item->categories,/*function() use ($item){
                    return  [
                      $item->
                    ];
                },*/
        //'description'=>$item->description,
        /*'image' => $item->image,
        'short' => $item->short,
        'slug' => $item->slug,
        'created_at' => date("d.m.Y", strtotime($item->created_at)),
    ];
});*/
    }
    /**
     * Search news in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function search(Request $request){
        $data = $request->only(
            'text',
        );
        if(isset($data['text'])){
            if(app()->getLocale()!=='uz') {
                $news=News::whereHas('translates',function($q) use($data){
                    $q->where('language',app()->getLocale())->where('title','like', "%".$data['text']."%")->orWhere('description','like', "%".$data['text']."%");
                })->limit(5)->get();
                //$newsTranslates = NewsTranslates::where('title',$data['text'])->orWhere('description',$data['text'])->limit(5);
                //>whereRelation('translates', 'language', '=', app()->getLocale());
            } else {
                $news = News::where('title','like', "%".$data['text']."%")->orWhere('description','like', "%".$data['text']."%")->limit(5)->get();
            }
            return response()->json($news);
        }
        return response()->json([]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
   /* public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            $data = $request->only(
                'title',
                'description',
                'short',
                'categories',
                'image',
                'home',
                'boshqarma'
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
    }*/

    /**
     * Display the specified resource.
     *
     * @param \App\Models\News $news
     * @return NewsResource
     */
    public function show(News $news)
    {
        /*        $categories = [];
                if ($news->categories->isNotEmpty())
                    $categories = $news->categories->transform(function ($item) {
                        return $item->id;
                    })->toArray();*/
        $news->viewed = $news->viewed + 1;
        $news->save();
        return NewsResource::make(News::with('categories')->where('id', $news->id)->get()[0]);
        //die();
        //return response()->json(array_merge((NewsResource::collection($news->with('categories')->where('id', $news->id)->get()[0])), ['cats' => $categories]), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\News $news
     * @return \Illuminate\Http\JsonResponse
     */
    /*public function update(Request $request, News $news): \Illuminate\Http\JsonResponse
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
                'boshqarma',
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
            //dd($news->created_at);
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

    }*/

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\News $news
     * @return \Illuminate\Http\JsonResponse
     */
/*    public function destroy(News $news)
    {
        $news->categories()->detach();
        Storage::delete("public/uploads/" . $news->image);
        $news->delete();
        return response()->json([
            'success'], 200);
    }*/

    public function like(News $news, Request $request)
    {

        $appData = $request->only('like', 'discount');
        if (isset($appData['like'])) {


            $liked = json_decode($news->liked, true);
            if ($appData['like'] === 1) {

                if (isset($liked['like'])) $liked['like'] = $liked['like'] + 1; else $liked['like'] = 1;
                if (isset($appData['discount'])) $liked['dislike'] = isset($liked['dislike']) ? $liked['dislike'] - 1 : 0;
            }
            if ($appData['like'] === 0) {
                if (isset($liked['dislike'])) $liked['dislike'] = $liked['dislike'] + 1; else $liked['dislike'] = 1;
                if (isset($appData['discount'])) $liked['like'] = isset($liked['like']) ? $liked['like'] - 1 : 0;
            }
            if (isset($liked['like']) && $liked['like'] < 0) $liked['like'] = 0;
            if (isset($liked['dislike']) && $liked['dislike'] < 0) $liked['dislike'] = 0;
            $news->liked = json_encode($liked);
            $news->save();
            return response()->json([
                'success' => true], 200);

        }


        return response()->json([
            'error' => 'Give your vote'], 200);
    }
}
