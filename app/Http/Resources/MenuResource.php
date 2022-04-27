<?php

namespace App\Http\Resources;
use App\Models\Page;

use Illuminate\Http\Resources\Json\JsonResource;

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
        if($this->type===1){
            if(Page::find($this->relation_id)){
                $url='/page/' . Page::find($this->relation_id)['slug'];
            }
            else $url='/page/'.$this->url;
        }
        else $url=$this->url;


        return [
            'id'=>$this->id,
            'parent'=>$this->parent,
            'page_id'=>$this->relation_id,
            'sort_number'=>$this->sort_number,
            'status'=>$this->status,
            'title'=>$this->title,
            'type'=>$this->type,
            'url'=>$url,
            'children'=>($this->children)??$this->children,
        ];
    }
}
