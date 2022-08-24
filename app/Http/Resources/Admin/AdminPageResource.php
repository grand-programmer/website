<?php

namespace App\Http\Resources\Admin;
use App\Models\Page;
use App\Models\Menu;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AdminPageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'parent'=>$this->parent,
            'publish'=>$this->publish,
            'title'=>$this->title,
            'slug'=>$this->slug,
            'description'=>$this->description,
            'menu'=>($menu=Menu::where([
                    'relation_id'=>$this->id,
                    'parent'=>$this->menu,
                ])->first()) ? $this->menu : -1,
            'translates'=>DB::table('page_translates')
                ->whereRaw('page_id =?',[$this->id])
                ->get()

        ];
    }
}
