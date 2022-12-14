<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentCategoryResource extends JsonResource
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
            if($translate and strlen($translate->name)>3 ){
                return [
                    "id"=>$translate->id,
                    "name"=>$translate->name,
                ];
            }
        }
        return [
          "id"=>$this->id,
          "name"=>$this->name
        ];
    }
}
