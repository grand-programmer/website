<?php

namespace App\Http\Resources;

use App\Models\News;
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
        $data = $request->only('withnews','page');
        $page=1;
        if (isset($data['page']) and $data['page'] > 0) $page = (int)$data['page'];
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
        if(isset($data['withnews'])){
            $news=$this->news()->orderby('created_at', 'desc')->skip(($page - 1) * 6 )->limit(6)->get();
            if(app()->getLocale()!=='uz') $news=News::orderBy('created_at','desc')->whereIn('id',$this->news->pluck('id'))->whereRelation('translates','language','=',app()->getLocale())->orderby('created_at', 'desc')->skip(($page - 1) * 6 )->limit(6)->get();

            $categoryArray['news']= NewsResource::collection($news)->toArray($request);
        }

        return $categoryArray;
    }
}
