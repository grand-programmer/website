<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AdminNewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $liked=json_decode($this->liked,true);
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'categories'=>$this->categories,
            'description'=>$this->description,
            'image'=>$this->image,
            'short'=>$this->short,
            'slug'=>$this->slug,
            'viewed'=>$this->viewed,
            'telegram'=>$this->telegram,
            'created_by'=>$this->created_by,
            'boshqarma'=>$this->boshqarma,
            'like'=>(isset($liked['like']))?$liked['like']:0,
            'dislike'=>(isset($liked['dislike']))?$liked['dislike']:0,
            'created_at'=>$this->created_at->format('d-m-Y'),
            'translates'=>DB::table('news_translates')
                ->whereRaw('news_id =?',[$this->id])
                ->get()
        ];
    }
}
