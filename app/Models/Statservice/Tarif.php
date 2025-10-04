<?php

namespace App\Models\Statservice;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tarif extends Model
{
    use HasFactory;

    protected $table = 'tariffs';
    protected $primaryKey = 'id';
    protected $connection='databaseconfigEd1';
    protected $guarded = false;


}
