<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpenDataItem extends Model
{
    use HasFactory;
    public $table = 'open_data_items';
    // public $belongsTo=
    // Parent Employee relationship


    public function parentItem()
    {
        return $this->belongsTo(OpenDataItem::class, 'relation_id');
    }

    // Children Employees relationship
    public function relationItems()
    {
        return $this->hasMany(OpenDataItem::class, 'relation_id');
    }
    public function openDataFiles()
    {
        return $this->hasMany(OpenDataFile::class, 'item_id');
    }
    public $fillable = [
        "title",
        "contact",
        "boshqarma",
        "phone",
        "email",
        "sort",
        "language",
    ];
}
