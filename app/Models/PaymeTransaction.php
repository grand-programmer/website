<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PaymeTransaction extends Model
{
    use HasFactory;

    protected $guarded = false;
    protected $table = 'transactions';

    protected $connection='databaseconfigEd1';


/*    case Pending = 1;
    case Done = 2;
    case Cancelled = -1;
    case Cancelled_After_Success = -2;*/

    protected $casts = [
        'state' => 'integer',
        'create_time' => 'integer',
        'perform_time' => 'integer',
        'cancel_time' => 'integer',
        'reason' => 'integer',
    ];

    public function application(): BelongsTo
    {
        return $this->belongsTo(StatServiceApplication::class, 'owner_id','appnum');
    }

}
