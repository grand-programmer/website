<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminApparatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fio' => $this->fio,
            'lavozimi' => $this->lavozimi,
            'qabul' => $this->qabul,
            'biografiyasi' => $this->biografiyasi,
            'phone' => $this->phone,
            'add_phone' => $this->add_phone,
            'email' => $this->email,
            'rahbariyat' => $this->rahbariyat,
            'org_name' => $this->org_name,
            'image' => $this->image,
            'rahbar' => $this->rahbar,
            'sort' => $this->sort,
            'translates' => json_decode($this->translates),
        ];
    }
}
