<?php

namespace App\Models\StatService;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vto extends Model
{
    use HasFactory;

    public $table = 'vto_2022_07';
    protected $connection = 'db2_odbc_stat';
    public function sprPotr()
    {
        return $this->belongsTo(SprPotr::class, 'g33a', 'kod');
    }

}
