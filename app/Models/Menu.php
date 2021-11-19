<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CustomMenuLink;

class Menu extends Model
{
    use HasFactory;
    protected $fillable=[
        'type',
        'title',
        'url',
        'relation_id',
        'parent',
        'sort_number',
        'status',
        'deleted',
    ];
    public function children()
    {
        return $this->hasMany('App\Models\Menu', 'parent', 'id');
    }
    public static function boot(){
        parent::boot();

        static::updating(function ($model) {
            if($model->type!=$model->original['type'] and $model->original['type'] ==0 ) {
                if(CustomMenuLink::find($model->relation_id))  CustomMenuLink::find($model->relation_id)->delete();
            }
        });
        static::deleting(function ($model) {
            if($model->type == 0 ) {
                if(CustomMenuLink::find($model->relation_id)) CustomMenuLink::find($model->relation_id)->delete();
            }
        });
    }
}
