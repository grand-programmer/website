<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //dd();

        $translates = DB::table('news_translates')->where(["news_id" => $this->id, "language" => app()->getLocale()])->get();

        $liked = json_decode($this->liked, true);
        return [
            'id' => $this->id,
            'title' => isset($translates[0]) ? $translates[0]->title : $this->title,
            'categories' => $this->categories,
            'description' => isset($translates[0]) ? $translates[0]->description : $this->description,
            'image' => $this->image,
            'short' => isset($translates[0]) ? $translates[0]->short : $this->short,
            'slug' => $this->slug,
            'viewed' => $this->viewed,
            'created_by' => $this->created_by,
            'boshqarma' => $this->boshqarma,
            'like' => (isset($liked['like'])) ? $liked['like'] : 0,
            'dislike' => (isset($liked['dislike'])) ? $liked['dislike'] : 0,
            'created_at' => $this->created_at->format('d-m-Y'),
        ];
    }
}
