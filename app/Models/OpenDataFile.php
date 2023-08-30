<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenDataFile extends Model
{
    use HasFactory;
    public $table = 'opendatafiles';

    public function parentItem()
    {
        return $this->belongsTo(OpenDataFile::class, 'relation_id');
    }

    // Children Employees relationship
    public function relationItems()
    {
        return $this->hasMany(OpenDataFile::class, 'relation_id');
    }

    public $fillable = [
        "json",
        "csv",
        "xml",
        "xls",
        "rdf",
        "quarter",
        "year",
        "language",
        "item_id",
    ];

}
