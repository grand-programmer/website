<?php

namespace App\Http\Controllers\Admin;

use App\Http\Resources\Admin\AdminNewsResource;
use App\Services\NewsToSocial;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Models\News;
use App\Http\Resources\NewsResource;
use App\Http\Controllers\Controller as ParentController;

class AdminNewsController extends ParentController
{
    public function index(Request $request)
    {
        $requestData = $request->only('boshqarma');
        $news = News::with('categories')->select(['id','title','slug','created_at','boshqarma']);
        if (isset($requestData['boshqarma'])) $news = $news->where('boshqarma', $requestData['boshqarma']);

        return $news->orderby('created_at', 'desc')->get()->transform(function ($item) {
            return [
                'id' => $item->id,
                'title' => $item->title,
                'categories' => $item->categories,/*function() use ($item){
                    return  [
                      $item->
                    ];
                },*/
                //'description'=>$item->description,
                //'image' => $item->image,
                //'short' => $item->short,
                'slug' => $item->slug,
                'created_at' => date("d.m.Y", strtotime($item->created_at)),
            ];
        });
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
                'boshqarma',
                'translates'
            );

            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'description' => 'required',
                'short' => 'required',
                'categories' => 'array|nullable',
                'image' => 'file|nullable|mimes:jpg,jpeg,png|max:5048',
            ]);
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
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
            $this->update_translates($data, $news);
            if (isset($data['categories']))
                $news->categories()->sync($data['categories']);
            return response()->json($news, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\News $news
     * @return AdminNewsResource
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
        return AdminNewsResource::make($news->with('categories')->where('id', $news->id)->get()[0]);
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
                'boshqarma',
                'translates',
                'telegram',
                'created_at'

            );
            if(isset($data['telegram'])) {

                try {
                    $message = (new NewsToSocial($news));
                    Notification::route('telegram', '-1001137582956')
                        ->notify($message);
                    $news->telegram = true;
                    $news->save();
                    return response()->json(['data' => $news]);
                }
                catch(Exception $exception) {
                    return response()->json(['data' => $exception->getMessage()], 400);
                }
            }
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'description' => 'required',
                'short' => 'required',
                'parent' => 'numeric|nullable',
                'cats' => 'array|nullable',
                'image' => 'nullable|file|mimes:jpg,jpeg,png|max:5120',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            if (isset($data['home'])) {
                if ($data['home'] == "true") $data['home'] = true;
                else $data['home'] = false;
            }
            if (isset($data['boshqarma']) and !((int)$data['boshqarma']>0)) {
                unset($data['boshqarma']);
            }


            $news->update($data);
            $this->update_translates($data, $news);

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
        return response()->json('error', 400);

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
        Storage::delete("public/uploads/" . $news->image);
        $news_id = $news->id;
        $news->delete();
        $deleted = DB::table('news_translates')->where(["news_id" => $news_id])->delete();

        return response()->json([
            'success'], 200);
    }

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

    /**
     * @param array $data
     * @param $news
     * @return void
     */
    public function update_translates(array $data, $news)
    {
        if (isset($data['translates'])) {
            $data['translates'] = json_decode($data['translates'], true);
            //dd($data['translates']);
            $translates = [];
            if (is_array($data['translates'])) {
                foreach ($data['translates'] as $language => $translate) {
                    if (is_array($translate)) {

                        if (strlen($translate['title']) > 3 and strlen($translate['description']) > 3)
                            DB::table('news_translates')
                                ->updateOrInsert(
                                    ['language' => $language, 'news_id' => $news->id],
                                    [
                                        'short' => $translate['short'] ?? "",
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
