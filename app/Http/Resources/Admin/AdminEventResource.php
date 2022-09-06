<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AdminEventResource extends JsonResource
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
            "title"=>$this->title,
            "date"=>$this->date,
            'translates'=>DB::table('event_translates')
                ->whereRaw('event_id =?',[$this->id])
                ->get()
        ];
    }
}
