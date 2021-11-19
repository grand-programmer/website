<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomMenuLink extends Model
{
    use HasFactory;
    protected $fillable=[
        'title',
        'url',
        'sort_number',
        'status',
        'deleted',
    ];
}
