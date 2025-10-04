<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class AppPost extends Model
{
    use HasFactory;

    protected $table = 'filter_posts';
    protected $primaryKey = 'id';
    protected $connection='databaseconfigEd1';
    protected $guarded = false;


}
