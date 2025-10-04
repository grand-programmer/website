<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class AppTftn extends Model
{
    use HasFactory;

    protected $table = 'filter_tiftn';
    protected $primaryKey = 'id';
    protected $connection='databaseconfigEd1';
    protected $guarded = false;


}
