<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $table="documents";
    protected $fillable=['name','lang','url','code','date','cat_id','type'];

    public function translates()
    {
        return $this->hasMany(Document::class,'relation_id','id');
    }

}
