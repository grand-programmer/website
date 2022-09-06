<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class FaqResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $translate=DB::table('faq_translates')
        ->whereRaw('faq_id =? and language=?',[$this->id,app()->getLocale()])
        ->get();



        return [
            "id"=>$this->id,
            "question"=> isset($translate[0]->question)?$translate[0]->question:$this->question,
            "answer"=>isset($translate[0]->answer)?$translate[0]->answer:$this->answer,
            "sort"=>$this->sort,
            "active"=>$this->active,

        ];
    }
}
