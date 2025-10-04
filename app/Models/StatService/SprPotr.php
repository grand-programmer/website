<?php

namespace App\Models\StatService;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SprPotr extends Model
{
    use HasFactory;

    public $table = 'spr_potr';
    protected $connection = 'db2_odbc_stat';

    public function vtos()
    {
        return $this->hasMany(Vto::class, 'g33a', 'kod');
    }
}
