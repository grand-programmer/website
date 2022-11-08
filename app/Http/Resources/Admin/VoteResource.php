<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class VoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        //global $total;
        $total=$answers->sum('count');
        return [
            "id"=>$this->id,
            "question"=>$this->question,
            "answers"=>$answers->all(),
            "sort"=>$this->sort,
            "active"=>$this->active,
            "total"=>$total,
        ];
    }
}
