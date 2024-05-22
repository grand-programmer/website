<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatData extends Model
{
    protected $table = 'website';
    use HasFactory;
    protected $connection = 'db2_odbc_stat';

    protected static function boot()
    {
        parent::boot();

        // Har bir so'rovga where shartini qo'shish
        static::addGlobalScope('state', function (Builder $builder) {
            $builder->where(['state'=>null] );
        });

        static::saving(function ($statData) {
            if ($statData->state !== null) {
                $statData->state = null;
            }
        });
    }
}
