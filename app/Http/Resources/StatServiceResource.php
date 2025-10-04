<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Http;

class StatServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $status = $this->status()->first();
        $token = null;
        if ($status && $status->id === 7) {
            $tokenResponse = Http::withoutVerifying()->get('https://servicepdf.customs.uz/' . $this->id . '/token');
            $token = $tokenResponse->body();
        }


        return [
            'id' => $this->id ? $this->id : null,
            'step' => $this->step,
            'org_name' => $this->org_name,
            'tin' => $this->tin,
            'pin' => $this->pin,
            'address' => $this->address,
            'phone' => $this->phone,
            'email' => $this->email,
            'appNum' => $this->appnum,
            'payment' => $this->payment,
            'status' => $status ? $status->id : null,
            'token' => $token,
            'statusName' => $status ? $status['name_' . app()->getLocale()] : null,
            'comment' => $this->comment,
            'application_type' => (int)$this->application_type - 1,
            'region' => $this->app_regions()->pluck('region_code')->values(),
            'post' => $this->app_posts()->pluck('post_code')->values(),
            'org' => $this->tarmoq()->pluck('tarmoq_inn')->values(),
            'rejim' => $this->app_regimes()->pluck('rejim_code')->values(),
            'is_tsa' => !!$this->is_tsa,
            'shartnoma' => $this->app_shartnoma()->pluck('contract_idn')->values(),
            'tftn' => $this->app_tftn()->pluck('tiftn')->values(),
            'country' => $this->app_country()->pluck('country_code')->values(),
            'byud' => $this->app_byud()->pluck('byud_number')->values(),
            'grafalar' => ($this->application_type === '1') ? $this->app_docs()->pluck('doc_code')->values() : $this->app_fields()->pluck('field_code')->values(),
            'byudsanadan' => ($this->app_date && $this->app_date->from_date) ? Carbon::createFromFormat('Y-m-d', $this->app_date->from_date)->format('d-m-Y') : null,
            'byudsanagacha' => ($this->app_date && $this->app_date->to_date) ? Carbon::createFromFormat('Y-m-d', $this->app_date->to_date)->format('d-m-Y') : null,
            'isCreatedDate' => $this->app_date && $this->app_date->to_date && !$this->app_date->is_confirmed_date,
        ];
    }
}
