<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AdminFaqResource extends JsonResource
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
            "id"=>$this->id,
            "question"=>$this->question,
            "answer"=>$this->answer,
            "sort"=>$this->sort,
            "active"=>$this->active,
            'translates'=>DB::table('faq_translates')
                ->whereRaw('faq_id =?',[$this->id])
                ->get()
        ];
    }
}
