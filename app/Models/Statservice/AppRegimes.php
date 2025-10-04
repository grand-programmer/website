<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class AppRegion extends Model
{
    use HasFactory;

    protected $table = 'filter_regions';
    protected $primaryKey = 'id';
    protected $connection='db2_odbc223';
    protected $guarded = false;


}
