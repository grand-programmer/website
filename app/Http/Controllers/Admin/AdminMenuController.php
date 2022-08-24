<?php

namespace App\Http\Controllers\Admin;

use Exception;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\CustomMenuLink;
use App\Models\Page;
use App\Http\Resources\Admin\AdminMenuResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller as ParentController;

class AdminMenuController extends ParentController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $data = $request->only('parent');
        if (isset($data['parent']))
            return AdminMenuResource::collection(Menu::where('parent', $data['parent'])->get());

        return AdminMenuResource::collection(Menu::all())->all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getForSelect(Request $request)
    {

        return Menu::all()->transform(function ($item, $key) {
            return [
                'text' => $item['title'],
                'value' => $item['id'],
            ];
        })->toJson();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getForFront(Request $request)
    {
        return Menu::with('children')->where('parent', 0)->where('status', 1)->orderby('sort_number', 'asc')->get()->transform(function ($item) {
            if ($item->children) {
                foreach ($item->children as $child) {
                    if ($child->type == 1) {
                        if (Page::find($child->relation_id))
                            $child->url = '/page/' . Page::find($child->relation_id)->slug;
                        else
                            $child->url = '/page/' . $child->url;
                    };
                    if ($child->children) {
                        foreach ($child->children as $subchild) {
                            if ($subchild->type == 1) {
                                if (Page::find($subchild->relation_id))
                                    $subchild->url = '/page/' . Page::find($subchild->relation_id)->slug;
                                else
                                    $subchild->url = '/page/' . $subchild->url;
                            };
                            if ($subchild->children) {
                                foreach ($subchild->children as $sch) {
                                    if ($sch->type == 1) {
                                        if (Page::find($sch->relation_id))
                                            $sch->url = '/page/' . Page::find($sch->relation_id)->slug;
                                        else
                                            $sch->url = '/page/' . $sch->url;


                                    };

                                }
                            }

                        }
                    }

                }
            }

            if ($item->type == 1) $item->url = '/page/' . Page::find($item->relation_id)->slug;
            return $item;

        })->whereNotNull()->toJson();


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
                'type',
                'parent',
                'url',
                'status',
                'page_id',
                'sort_number',
                'translates'
            );

            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'url' => 'required_if:type,0|nullable|min:1|max:255',
                'parent' => 'numeric|nullable',
                'type' => 'numeric|between:0,1',
                'page_id' => 'required_if:type,1|numeric|nullable',
                'sort_number' => 'numeric|nullable',
                'status' => 'boolean|nullable',
                'deleted' => 'boolean|nullable',
            ]);

            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }
            if ($data['parent'] == null) $data['parent'] = 0;
            try {
                if ($data['type'] == 1) {
                    $menuData = [
                        'type' => $data['type'],
                        'title' => $data['title'],
                        'status' => $data['status'],
                        'sort_number' => $data['sort_number'],
                        'parent' => $data['parent'],
                        'relation_id' => $data['page_id'],
                    ];
                }
                if ($data['type'] == 0) {
                    $custom_menu_link = [
                        'url' => $data['url'],
                        'title' => $data['title'],
                        'status' => $data['status'],
                        'sort_number' => $data['sort_number'],
                    ];

                    $customMenu = CustomMenuLink::create($custom_menu_link);
                    $menuData = [
                        'type' => $data['type'],
                        'url' => $data['url'],
                        'title' => $data['title'],
                        'status' => $data['status'],
                        'sort_number' => $data['sort_number'],
                        'parent' => $data['parent'],
                        'relation_id' => $customMenu->id,
                    ];
                }
                $menu = Menu::create($menuData);
                //$appeal->number = Str::random(10);
                $menu->save();

                $data = $this->updateTranslates($data, $menu);
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 400);
            }
            return new AdminMenuResource($menu);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        return new AdminMenuResource($menu);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Menu $menu)
    {
        if ($request->isMethod('put')) {
            $data = $request->only(
                'title',
                'type',
                'parent',
                'url',
                'status',
                'page_id',
                'sort_number',
                'translates'
            );

            $validator = Validator::make($data, [
                'title' => 'required|min:3|max:255',
                'url' => 'required_if:type,0|nullable|min:1|max:255',
                'parent' => 'numeric|nullable',
                'type' => 'numeric|between:0,1',
                'page_id' => 'required_if:type,1|numeric|nullable',
                'sort_number' => 'numeric|nullable',
                'status' => 'boolean|nullable',
                'deleted' => 'boolean|nullable',
            ]);
            if ($data['parent'] == null) $data['parent'] = 0;
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], 400);
            }

            try {

                if ($data['type'] == 1) {
                    $menuData = [
                        'type' => $data['type'],
                        'title' => $data['title'],
                        'status' => $data['status'],
                        'sort_number' => $data['sort_number'],
                        'parent' => $data['parent'],
                        'relation_id' => $data['page_id'],
                    ];
                    $menu->update($menuData);
                }
                if ($data['type'] == 0) {
                    $custom_menu_link = [
                        'url' => $data['url'],
                        'title' => $data['title'],
                        'status' => $data['status'],
                        'sort_number' => $data['sort_number'],
                    ];
                    if ($customMenu = CustomMenuLink::where(['url' => $data['url']])->first()) {
                        $customMenu->update($custom_menu_link);
                    } else {
                        $customMenu = CustomMenuLink::create($custom_menu_link);
                        $menuData = [
                            'type' => $data['type'],
                            'url' => $data['url'],
                            'title' => $data['title'],
                            'status' => $data['status'],
                            'sort_number' => $data['sort_number'],
                            'parent' => $data['parent'],
                            'relation_id' => $customMenu->id,
                        ];
                        $menu->update($menuData);

                        $data = $this->updateTranslates($data, $menu);


                    }
                }

                //$appeal->number = Str::random(10);
                $menu->save();
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 400);
            }


            try {
                $menu->update($data);
                //$appeal->number = Str::random(10);
                $menu->save();
                $data = $this->updateTranslates($data, $menu);
                return response()->json($menu, 200);
            } catch (Exception $e) {
                return response()->json(['error' => $e->getMessage()], 400);
            }


        }
        return response()->json('error', 400);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Menu $menu)
    {
        $menu->delete();
        return response()->json([
            'success'], 200);
    }

    /**
     * @param array $data
     * @param Menu $menu
     * @return array
     */
    public function updateTranslates(array $data, Menu $menu): array
    {
        if (isset($data['translates'])) {
            //$data['translates'] = json_decode($data['translates'], true);
            //dd($data['translates']);
            $translates = [];
            if (is_array($data['translates'])) {
                foreach ($data['translates'] as $language => $translate) {
                    if (is_array($translate)) {
                        if (strlen($translate['title']) > 3)
                            DB::table('menu_translates')
                                ->updateOrInsert(
                                    ['language' => $language, 'menu_id' => $menu->id],
                                    [
                                        'title' => $translate['title'] ?? "",
                                    ]
                                );
                    }
                }
            }
        }
        return $data;
    }
}
