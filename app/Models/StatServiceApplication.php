<?php

namespace App\Models;

use App\Models\Statservice\AppByud;
use App\Models\Statservice\AppCountry;
use App\Models\Statservice\AppDate;
use App\Models\Statservice\AppDoc;
use App\Models\Statservice\AppField;
use App\Models\Statservice\AppPost;
use App\Models\Statservice\AppPrice;
use App\Models\Statservice\AppRegime;
use App\Models\Statservice\AppRegion;
use App\Models\Statservice\AppShartnoma;
use App\Models\Statservice\AppStatus;
use App\Models\Statservice\AppTarmoq;
use App\Models\Statservice\AppTftn;
use App\Models\Statservice\Status;
use Http;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class StatServiceApplication extends Model
{
    use HasFactory;

    protected $table = 'applications';
    protected $primaryKey = 'id';
    public $incrementing = false;
    protected $connection = 'databaseconfigEd1';

    protected $keyType = 'string';
    // protected $guarded = false;
    public $fillable = [
        'step',
        'org_name',
        'pin',
        'tin',
        'is_yuridik',
        'is_tsa',
        'address',
        'phone',
        'email',
        'application_type',
        'status',
        'comment',
        'payment_id',
    ];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string)Str::uuid();
            }
        });
        static::saved(function ($model) {
            // Faqat `step` ustuni o'zgarganini tekshiramiz
            if ($model->isDirty('payment_id')) {
                $oldpayment_id = $model->getOriginal('payment_id'); // Eski qiymat
                $newPayment_id = $model->payment_id; // Yangi qiymat

                if ($newPayment_id and !$oldpayment_id) {
                    $response = Http::withoutVerifying()->get('http://172.16.112.27:8089/' . $model->id . '/start-gathering');
                    /*$responseData = $response->json();
                    if (!$responseData['success']) {
                        foreach ($model->status()->get() as $status) {
                            $status->delete();
                        }
                        $model->status()->attach(5, ['created_by' => 'payme']);
                    } else {
                        Log::error($responseData);
                        /*                foreach ($statservice->status()->wherePivot('status_id', 1)->get() as $status) {
                                            $statservice->status()->updateExistingPivot($status->id, [
                                                'deleted_at' => now()
                                            ]);
                                        }
                                        $statservice->status()->attach(2, ['created_by' => auth()->user()->pin]);*/

                    //} */
                    // Step 5 ga o'zgargan bo'lsa, handlerni chaqiramiz

                }
            }
        });
    }


    public function app_regions()
    {
        return $this->hasMany(AppRegion::class, 'application_id');
    }

    public function app_posts()
    {
        return $this->hasMany(AppPost::class, 'application_id');
    }

    public function tarmoq()
    {
        return $this->hasMany(AppTarmoq::class, 'application_id');
    }

    public function app_regimes()
    {
        return $this->hasMany(AppRegime::class, 'application_id');
    }

    public function app_tftn()
    {
        return $this->hasMany(AppTftn::class, 'application_id');
    }

    public function price()
    {
        return $this->hasMany(AppPrice::class, 'application_id');
    }

    public function app_shartnoma()
    {
        return $this->hasMany(AppShartnoma::class, 'application_id');
    }

    public function app_country()
    {
        return $this->hasMany(AppCountry::class, 'application_id');
    }

    public function app_byud()
    {
        return $this->hasMany(AppByud::class, 'application_id');
    }

    public function app_fields()
    {
        return $this->hasMany(AppField::class, 'application_id');
    }

    public function app_docs()
    {
        return $this->hasMany(AppDoc::class, 'application_id');
    }

    public function app_date()
    {
        return $this->hasOne(AppDate::class, 'application_id');
    }

    public function payment()
    {
        return $this->belongsTo(PaymeTransaction::class, 'payment_id', 'transaction');
    }

    public function status()
    {
        return $this->belongsToMany(Status::class, 'application_status', 'application_id', 'status_id')->wherePivotNull('deleted_at')->withTimestamps();
    }

    public function giveStatus(int $status): void {
        DB::connection('databaseconfigEd1')->table('application_status')
            ->where('application_id', $this->id)
            ->whereNull('deleted_at')
            ->update(['deleted_at' => now()]);

        $this->status()->attach($status, ['created_by' => $this->pin]);
    }


}
