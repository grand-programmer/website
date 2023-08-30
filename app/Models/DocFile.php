<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class DocFile extends Model
{
    public $table = "files";
/*
    protected static function booted(): void
    {
        static::creating(function (DocFile $docFile) {
            $docFile->uuid = Str::uuid()->toString();
        });
    }*/
    public $fillable=[
        'name',
        'filename',
        'uuid',
    ];
}
