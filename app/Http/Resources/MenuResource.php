<?php

namespace App\Http\Resources;
use App\Models\Page;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $translates = DB::table('menu_translates')->where(["menu_id" => $this->id, "language" => app()->getLocale()])->get();
        if($this->type===1){
            if(Page::find($this->relation_id)){
                $url='/page/' . Page::find($this->relation_id)['slug'];
            }
            else $url='/page/'.$this->url;
        }
        else $url=$this->url;

           if(isset($this->parent->id)) {
               $parent_translate = DB::table('menu_translates')->where(["menu_id" => $this->parent->id, "language" => app()->getLocale()])->first();
               $this->parent->title = $parent_translate ? $parent_translate->title : $this->parent->title;
           }
        return [
            'id'=>$this->id,
            'parent'=>$this->parent,
            'page_id'=>$this->relation_id,
            'sort_number'=>$this->sort_number,
            'status'=>$this->status,
            'title'=>isset($translates[0]) ? $translates[0]->title : $this->title,
            'type'=>$this->type,
            'relation_id'=>$this->relation_id,
            'url'=>$url,
            'children'=>($this->children)??MenuResource::collection($this->children)->toArray($request),
        ];
    }
}
