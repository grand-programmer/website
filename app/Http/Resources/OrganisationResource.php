<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrganisationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $title = json_decode($this->title, true);
        $myTitle = $title['text'] ?? $this->title;
        $translates = isset($title['translates']) ? json_decode($title['translates'], true) : null;

        $rahbariyat = json_decode($this->rahbariyat, true);
        if (isset($rahbariyat['boshliq']) and isset($rahbariyat['boshliq']['translates'])) {
            $boshliq_translate = json_decode($rahbariyat['boshliq']['translates'], true);
            if (isset($boshliq_translate[app()->getLocale()]['qabul'])) {
                $rahbariyat['boshliq']['qabul'] = $boshliq_translate[app()->getLocale()]['qabul'];
            } if (isset($boshliq_translate[app()->getLocale()]['biografiyasi'])) {
                $rahbariyat['boshliq']['biografiyasi'] = $boshliq_translate[app()->getLocale()]['biografiyasi'];
            }
        }
        if (isset($rahbariyat['orinbosar'])) {
            foreach ($rahbariyat['orinbosar'] as $itemKey => $itemVal) {
                if (isset($rahbariyat['orinbosar'][$itemKey]['translates'])) {
                    $boshliq_translate = json_decode($rahbariyat['orinbosar'][$itemKey]['translates'], true);
                    if (isset($boshliq_translate[app()->getLocale()]['qabul']) and isset($boshliq_translate[app()->getLocale()]['lavozimi'])) {
                        $rahbariyat['orinbosar'][$itemKey]['qabul'] = $boshliq_translate[app()->getLocale()]['qabul'];
                        $rahbariyat['orinbosar'][$itemKey]['lavozimi'] = $boshliq_translate[app()->getLocale()]['lavozimi'];
                    }
                }
            }
        }
        $manzil = json_decode($this->manzil, true);
        if (isset($manzil['translates'])) {
            $manzil_translate = json_decode($manzil['translates'], true);
            $manzil['manzil'] = isset($manzil_translate[app()->getLocale()]['manzil']) ? $manzil_translate[app()->getLocale()]['manzil'] : $manzil['manzil'];
            $manzil['ytaksi'] = isset($manzil_translate[app()->getLocale()]['ytaksi']) ? $manzil_translate[app()->getLocale()]['ytaksi'] : $manzil['ytaksi'];
        }

        $postlar = json_decode($this->postlar, true);
        if ($postlar) {
            foreach ($postlar as $itemKey => $itemVal) {
                if (isset($postlar[$itemKey]['translates'])) {
                    $boshliq_translate = json_decode($postlar[$itemKey]['translates'], true);
                    if (isset($boshliq_translate[app()->getLocale()]['title']) and isset($boshliq_translate[app()->getLocale()]['manzil']) and isset($boshliq_translate[app()->getLocale()]['description'])) {
                        $postlar[$itemKey]['title'] = $boshliq_translate[app()->getLocale()]['title'];
                        $postlar[$itemKey]['manzili'] = $boshliq_translate[app()->getLocale()]['manzil'];
                        $postlar[$itemKey]['description'] = $boshliq_translate[app()->getLocale()]['description'];
                    }
                }
            }
        }


        return [
            'id' => $this->id,
            'title' => ($translates and isset($translates[app()->getLocale()]['title']) and $translates[app()->getLocale()]['title']) ? $translates[app()->getLocale()]['title'] : $myTitle,
            'rahbariyat' => $rahbariyat,
            'manzil' => $manzil,
            'posts' => $postlar,

        ];
    }
}
