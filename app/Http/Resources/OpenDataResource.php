<?php

namespace App\Http\Resources;

use App\Models\OpenDataFile;
use App\Models\OpenDataItem;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class OpenDataResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        if(app()->getLocale()==='uz')
        $translates = $this;
        else
            $translates= OpenDataItem::where(['relation_id'=>$this->id, 'language'=>app()->getLocale()])->first();

        $files=OpenDataFile::where(['item_id'=>$this->id, 'language'=>app()->getLocale(), 'quarter'=>null, 'year'=>Carbon::now()->year])->orderBy('created_at')->first();

        return [
            "id" => $this->id,
            "phone" => substr($this->phone, 3),
            "sort" => $this->sort,
            "email" => $this->email,
            "title" => $translates->title,
            "contact" => $translates->contact,
            "boshqarma" => $translates->boshqarma,
            "files" => $files
            // 'translates' => $translates->groupBy('language')
        ];
    }
}
