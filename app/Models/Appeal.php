<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Appeal extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'lastname',
        'address',
        'email',
        'phone',
        'state',
        'retry',
        'yur_shaxs',
        'work',
        'date_birth',
        'text',
    ];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->number = Str::random(10);
            $model->retry = $model->retry ? 1 : 0;
        });
    }
}
