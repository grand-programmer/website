<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentCategory extends Model
{
    use HasFactory;
    protected $table="document_categories";
    protected $fillable=[
        'name',
        'lang'
    ];
    public function translates()
    {
        return $this->hasMany(DocumentCategory::class,'relation_id','id');
    }
}
