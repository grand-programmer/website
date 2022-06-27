<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apparat extends Model
{
    use HasFactory;

    public $table = 'apparat';
    public $fillable = [
        'fio',
        'lavozimi',
        'qabul',
        'phone',
        'add_phone',
        'email',
        'rahbariyat',
        'org_name',
        'image',
        'sort',
    ];
}
