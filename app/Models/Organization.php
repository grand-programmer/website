<?php

namespace App\Models;

use App\Helpers\MainHelper;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    public $table = 'organizations';
    public $fillable = [
        'title',
        'rahbariyat',
        'postlar',
        'manzil'
    ];

    public static function boot()
    {
        parent::boot();

/*        static::saving(function ($model) {
            $model->slug = $model->createSlug($model->title);// Str::slug($model->title);
        });*/
    }

    private function createSlug($title)
    {
        if (static::whereSlug($slug = MainHelper::slug($title))->exists()) {
            $max = static::whereTitle($title)->latest('id')->skip(1)->value('slug');
            if ($max == null) return $slug;
            if (is_numeric($max[-1])) {
                return preg_replace_callback('/(\d+)$/', function ($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }

            return "{$slug}-2";
        }

        return $slug;
    }
}
