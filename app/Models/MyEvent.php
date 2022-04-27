<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyEvent extends Model
{
    use HasFactory;

    protected $table = 'events';
    protected $fillable = [
        'title',
        'date'
    ];
/*    public function resolveRouteBinding($value,$field=NULL)
    {
        return $this->where('id', $value)->first();
    }*/
    public function getRouteKeyName(): string
    {
        return 'id';
    }
}
