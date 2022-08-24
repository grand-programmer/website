<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AdminCategoryResource extends JsonResource
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
            'id'=>$this->id,
            'menu'=>$this->menu,
            'parent'=>$this->parent,
            'description'=>$this->description,
            'publish'=>$this->publish,
            'slug'=>$this->slug,
            'title'=>$this->title,
            'translates'=>DB::table('category_translates')
                ->whereRaw('category_id =?',[$this->id])
                ->get()
        ];
    }
}
