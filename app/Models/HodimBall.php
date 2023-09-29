<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HodimBall extends Model
{
    use HasFactory;
    protected $table = 'hodim_baholar';
    protected $fillable=[
        'slug','ball','comment','region','post','group'
    ];
}
