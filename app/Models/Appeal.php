<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Appeal extends Model
{
    use HasFactory;

    protected $fillable = [
        'fio',
        'appeal_type',
        'address',
        'email',
        'phone',
        'authority',
        'sphere',
        'text',
    ];
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($model) {
            $model->number = Str::random(10);
        });
    }
}
