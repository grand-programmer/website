<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;

    protected $table = 'votes';
    protected $fillable = [
        'question',
        'answers',
        'sort',
        'active'
    ];
/*    public function resolveRouteBinding($value,$field=NULL)
    {
        return $this->where('id', $value)->first();
    }*/
    public $jsonable=['answers'];

    public function getRouteKeyName(): string
    {
        return 'id';
    }
}
