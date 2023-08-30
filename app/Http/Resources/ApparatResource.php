<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class ApparatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $translates = json_decode($this->translates,true);
        $translates = $translates[app()->getLocale()]??[];


        return [
            'id' => $this->id,
            'fio' => $translates['fio'] ?? $this->fio,
            'lavozimi' => $this->lavozimi,
            'lavozim_name' => $this->lavozim_name,
            'qabul' => $translates['qabul'] ?? $this->qabul,
            'biografiyasi' =>  $translates['biografiyasi'] ?? $this->biografiyasi,
            'phone' => $this->phone,
            'add_phone' => $this->add_phone,
            'email' => $this->email,
            'rahbariyat' => $this->rahbariyat,
            'org_name' => $translates['org_name'] ??$this->org_name,
            'image' => $this->image,
            'rahbar' => $this->rahbar,
            'sort' => $this->sort,
            'translates' => json_decode($this->translates),

/*            'id' => $this->id,
            'title' => isset($translates[0]) ? $translates[0]->title : $this->title,
            'description' => isset($translates[0]) ? $translates[0]->description : $this->description,
            'menu' => $this->menu,
            'slug' => $this->slug,
            'parent' => $this->parent,
            'publish' => $this->publish,
            'children' => $this->children,
            'created_at' => $this->created_at->format('d-m-Y'),*/
        ];

        // return parent::toArray($request);
    }
}
