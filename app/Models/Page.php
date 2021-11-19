<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use App\Helpers\MainHelper;

class Page extends Model
{
    use HasFactory;

    protected $fillable=[
      'title',
      'description',
      'slug',
      'publish',
      'menu',
    ];
    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->slug = $model->createSlug($model->title);// Str::slug($model->title);
        });
    }
    private function createSlug($title){

        if (static::whereSlug($slug = MainHelper::slug($title))->exists()) {
            $max = static::whereTitle($title)->latest('id')->skip(1)->value('slug');
            if($max==null) return $slug;
            if (is_numeric($max[-1])) {
                return preg_replace_callback('/(\d+)$/', function ($mathces) {
                    return $mathces[1] + 1;
                }, $max);
            }

            return "{$slug}-2";
        }

        return $slug;
    }
    public function resolveRouteBinding($value,$field=NULL)
    {
        return $this->where('id', $value)->orWhere('slug', $value)->first();
    }

/*    public function getRouteKeyName(): string
    {
        return 'slug';
    }*/
}
