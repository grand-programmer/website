<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\MainHelper;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'short',
        'description',
        'slug',
        'home',
        'image',
        'created_by',
        'created_at',
        'boshqarma'
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->slug = $model->createSlug($model->title);// Str::slug($model->title);
        });
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

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category', 'news_categories');
    }

    public function translates()
    {
        return $this->hasMany('App\Models\NewsTranslates');
    }

    public function resolveRouteBinding($value, $field = NULL)
    {

        if($this->where('slug', $value)->exists()) return $this->where('slug', $value)->first();
        else {
            $news=$this->where('id', (int)$value)->first();

            if ($news->id == $value and strlen($value)===strlen((int)$value))
                return $this->where('id', (int)$value)->first();
            else return false;
        }
        /*if ((int)$value > 0 and strlen($value)<=4) {
            return $this->where('id', (int)$value)->first();
        }else return $this->where('slug', $value)->first();*/
    }
}
