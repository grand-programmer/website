<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FooterMenu extends Model
{
    use HasFactory;
    protected $table = 'footer_menu';
    protected $fillable=[
        'type',
        'title',
        'url',
        'relation_id',
        'parent',
        'sort_number',
        'status',
        'layout',
        'deleted',
    ];
    public function children()
    {
        return $this->hasMany('App\Models\FooterMenu', 'parent', 'id')->orderBy('sort_number');
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
