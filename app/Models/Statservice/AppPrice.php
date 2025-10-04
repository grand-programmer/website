<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AppPrice extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'application_price';
    protected $primaryKey = 'id';
    protected $connection='databaseconfigEd1';
    protected $guarded = false;

    public function tarif(){
        return $this->hasOne(Tarif::class, 'id','tariff_id');//->select(DB::raw('name_'.app()->getLocale().' as name,code,is_bhm, value'))->get();
    }


}
