<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatData extends Model
{
    protected $table = 'website';
    use HasFactory;
    protected $connection = 'db2_odbc_stat';
}
