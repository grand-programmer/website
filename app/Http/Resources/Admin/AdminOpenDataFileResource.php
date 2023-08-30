<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminOpenDataFileResource extends JsonResource
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
            "json" => $this->json,
            "csv" => $this->csv,
            "xml" => $this->xml,
            "xls" => $this->xls,
            "rdf" => $this->rdf,
            "language" => $this->language,
        ]);
        return [
            "id" => $this->id,
            "quarter" => $this->quarter,
            "year" => $this->year,
            'translates' => $translates->groupBy('language')
        ];
    }
}
