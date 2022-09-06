<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $translates = DB::table('event_translates')->where(["event_id" => $this->id, "language" => app()->getLocale()])->get();
        return [
            "id"=>$this->id,
            'title' => isset($translates[0]) ? $translates[0]->title : $this->title,
            "date"=>$this->date
        ];
    }
}
