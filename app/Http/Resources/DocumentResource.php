<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(app()->getLocale()!=='uz'){

            $translate=$this->translates()->where(['lang'=>app()->getLocale(),'relation_id'=>$this->id])->first();
            if($translate and strlen($translate->name)>3 and strlen($translate->url)>3  ){
                return [
                    "id"=>$translate->id,
                    "cat_id"=>$translate->cat_id,
                    "code"=>$translate->code,
                    "date"=>(new Carbon($translate->date))->format("d.m.Y"),
                    "name"=>$translate->name,
                    "type"=>$translate->type,
                    "url"=>$translate->url,
                ];
            }
        }
        return [
            "id"=>$this->id,
            "cat_id"=>$this->cat_id,
            "code"=>$this->code,
            "date"=>(new Carbon($this->date))->format("d-m-Y"),
            "name"=>$this->name,
            "type"=>$this->type,
            "url"=>$this->url,
        ];
    }
}
