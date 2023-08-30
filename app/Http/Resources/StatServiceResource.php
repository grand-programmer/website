<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StatServiceResource extends JsonResource
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
            'id' => $this->id?$this->id:null,
            'step' => $this->step,
            'org_name' => $this->org_name,
            'tin' => $this->tin,
            'address' => $this->address,
            'phone' => $this->phone,
            'email' => $this->email,
            'servicetype' => $this->servicetype,
            'boshqarma' => $this->boshqarma,
            'post' => $this->post,
            'rejim' => $this->rejim,
            'tftn' => $this->tftn,
            'shartnoma' => $this->shartnoma,
            'country' => $this->country,
            'byud' => $this->byud,
            'byudsanadan' => date("d-m-Y", strtotime($this->byudsanadan)),
            'byudsanagacha' => date("d-m-Y", strtotime($this->byudsanagacha)),
            'grafalar' => is_array($this->grafalar)?$this->grafalar:json_decode($this->grafalar),
            'status' => (int)$this->status,
            'statusNm' => $this->statusNm,
            'comment' => $this->comment,
            'price' => $this->price,
            'count' => $this->count,
        ];
    }
}
