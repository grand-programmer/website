<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $data=$request->only('withnews');

        $translates = DB::table('category_translates')->where(["category_id" => $this->id, "language" => app()->getLocale()])->get();
        $categoryArray=[
            'id' => $this->id,
            'title' => isset($translates[0]) ? $translates[0]->title : $this->title,
            'description' => isset($translates[0]) ? $translates[0]->description : $this->description,
            'menu' => $this->menu,
            'slug' => $this->slug,
            'parent' => $this->parent,
            'publish' => $this->publish,
            'children' => $this->children,
            'created_at' => $this->created_at->format('d-m-Y'),
        ];
        if (isset($data['withnews']))$categoryArray['news']=NewsResource::collection($this->news);
        return $categoryArray;
    }
}
