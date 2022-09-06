<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuResource;
use App\Models\Page;
use App\Models\Menu;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Helpers\MainHelper;
use App\Http\Resources\PageResource;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function related(Page $page)
    {
        $menu = Menu::with('children')->where([
            'type' => 1,
            'relation_id' => $page->id
        ])->first();
        if(!$menu) return response()->json([],200);
        if ($menu->parent > 0) {
            return MenuResource::collection(Menu::where('parent', $menu->parent)->with('children')
                //->where('id','<>',$menu->id)
                ->get())->transform(function ($item) {
                    if(Menu::find($item->parent)->parent !== 0) {

                        if ($item['type'] == 1 ) {
                            if($page = Page::find($item->relation_id))
                            $item['url'] = "/page/" . $page->slug;
                            else $item['url'] = "/page1/" . $item['url'];
                        }
                        if ($item['url'] == '#' and !(count($item->children) > 0)) return false;
                        return $item;
                    }
                })->whereNotNull()->toJson();
        }
        else return response()->json([],200);
            //$menus=Menu::with('children')->get();
        return $menu->children->transform(function ($item) {
            if($item)
            $page=Page::where('slug', $item->url)->first();
                    return ($page!=null ? new PageResource($page) : false);
                })->toJson();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return Page::all()->toJson();
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
                'publish',
                'menu',
                'inMenu',
            );

            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'description' => 'required',
                'parent' => 'numeric|nullable',
                'publish' => 'boolean|nullable',
                'menu' => 'numeric|nullable',
                'inMenu' => 'boolean|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            try {
                $page = Page::create($data);
                $page->save();
                if (isset($data['inMenu']) and $data['inMenu']) {
                    $menu=Menu::where('relation_id',$page->id)->first();
                    if(!$menu) {
                        $menu = Menu::create([
                            'title' => $page->title,
                            'type' => 1,
                            'url' => $page->slug,
                            'status' => 1,
                            'relation_id' => $page->id,
                            'parent' => $page->menu,
                        ]);
                        $menu->save();
                    }
                }
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 401);
            }

            return response()->json($page, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Page $page
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Page $page)
    {
        return new PageResource($page);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Page $page
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Page $page)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'title',
                'description',
                'parent',
                'publish',
                'menu',
                'inMenu',
            );
            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'description' => 'required',
                'parent' => 'numeric|nullable',
                'publish' => 'boolean|nullable',
                'menu' => 'numeric|nullable',
                'inMenu' => 'boolean|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 401);
            }

            try {
                $page->update($data);
                $page->slug=MainHelper::slug($page->title);
                //$appeal->number = Str::random(10);
                $page->save();
                if (isset($data['inMenu']) and $data['inMenu']) {
                    $menu=Menu::where('relation_id',$page->id)->first();
                    if(!$menu) {
                        $menu = Menu::create([
                            'title' => $page->title,
                            'type' => 1,
                            'url' => $page->slug,
                            'status' => 1,
                            'relation_id' => $page->id,
                            'parent' => $page->menu,
                        ]);
                        $menu->save();
                    }
                }
                return response()->json($page, 200);
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 401);
            }

        }
        return response()->json('error', 401);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Page $page
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Page $page)
    {
        $page->delete();
        return response()->json([
            'success'], 200);
    }
}
