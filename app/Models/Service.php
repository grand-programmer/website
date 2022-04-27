<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    const TYPES=[
        0=>'Ишга кириш учун ариза юбориш',
        1=>'Божхона қиймати дастлабки қарорни олиш',
        2=>'Божхона органларига мурожаат юбориш',
    ];
    const STATUSES=[
      0=> "Янги",
      1=> "Жараёнда",
    ];
    public $fillable=[
        'type',
        'app_id',
        'status',
    ];
}
