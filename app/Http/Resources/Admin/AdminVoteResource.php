<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class AdminVoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $answers = collect((array)json_decode($this->answers));
        // if(isset($answers->all()['translates'])) dd($answers->all()['translates']);
        $questionAnswers = $answers->all();
        $translates = isset($questionAnswers['translates']) ? json_decode($questionAnswers['translates'], true) : [];
        unset($questionAnswers['translates']);

        //global $total;
        $total = $answers->sum('count');
        return [
            "id" => $this->id,
            "question" => $this->question,
            "answers" => $questionAnswers,
            "sort" => $this->sort,
            "active" => $this->active,
            "total" => $total,
            "translates" => $translates
        ];
    }
}
