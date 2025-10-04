<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class AppTarmoq extends Model
{
    use HasFactory;

    protected $table = 'application_tarmoq_korxona';
    protected $primaryKey = 'id';
    protected $connection='databaseconfigEd1';
    protected $guarded = false;


}
