<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class AppPrice extends Model
{
    use HasFactory;

    protected $table = 'application_price';
    protected $primaryKey = 'id';
    protected $connection='db2_odbc223';
    protected $guarded = false;


}
