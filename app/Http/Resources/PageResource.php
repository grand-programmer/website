<?php

namespace App\Http\Resources;
use App\Models\Page;
use App\Models\Menu;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $translates = DB::table('page_translates')->where(["page_id" => $this->id, "language" => app()->getLocale()])->get();
        return [
            'id'=>$this->id,
            'parent'=>($menu=Menu::where([
                'relation_id'=>$this->id,
            ])->first())?(($menu1=Menu::where([
                'id'=>$menu->parent,
            ])->first())?$menu1:$menu->parent):-1,
            'publish'=>$this->publish,
            'title'=>isset($translates[0]) ? $translates[0]->title : $this->title,
            'slug'=>$this->slug,
            'description'=>isset($translates[0]) ? $translates[0]->description : $this->description,
            'menu'=>($menu=Menu::where([
                    'relation_id'=>$this->id,
                    'parent'=>$this->menu,
                ])->first()) ? $this->menu : -1,

        ];
    }
}
