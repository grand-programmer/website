<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class AppStatus extends Model
{
    use HasFactory,SoftDeletes;

    protected $table = 'application_status';
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    protected $connection='databaseconfigEd1';
    protected $guarded = false;


}
