<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminOpenDataResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        $translates = $this->relationItems()->get();
        $translates->push([
            "id" => $this->id,
            "title" => $this->title,
            "contact" => $this->contact,
            "boshqarma" => $this->boshqarma,
            "language" => $this->language,
        ]);
        return [
            "id" => $this->id,
            "phone" => substr($this->phone, 3),
            "sort" => $this->sort,
            "email" => $this->email,
            "title" => $this->title,
            "contact" => $this->contact,
            "boshqarma" => $this->boshqarma,
            'translates' => $translates->groupBy('language')
        ];
    }
}
