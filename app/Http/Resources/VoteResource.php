<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class VoteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $answers=collect((array)json_decode($this->answers));
        // if(isset($answers->all()['translates'])) dd($answers->all()['translates']);
        $questionAnswers=$answers->all();
        $translates=isset($questionAnswers['translates'])?json_decode($questionAnswers['translates'],true):[];
        unset($questionAnswers['translates']);
        //dd($translates);
        $translates=isset($translates[app()->getLocale()])?$translates[app()->getLocale()]:[];


           $questionAnswers = collect($questionAnswers)->transform(function ($answer, $key) use ($translates) {
               $answer->text = isset($translates['answers'][$key]) ? $translates['answers'][$key] : $answer->text;
               return $answer;
           })->all();
           //dd();
           //global $total;


        $total = $answers->sum('count');


        return [
            "id"=>$this->id,
            "question"=>isset($translates['question'])?$translates['question']:$this->question,
            "answers"=>$questionAnswers,
            "sort"=>$this->sort,
            "active"=>$this->active,
            "total"=>$total,

        ];
    }
}
