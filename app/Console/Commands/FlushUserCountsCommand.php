<?php

namespace App\Console\Commands;

use App\Models\UsersCount;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class FlushUserCountsCommand extends Command
{
    protected $signature = 'user-counts:flush';

    protected $description = 'Flush hourly user count files into database';


    public function handle(): int
    {
        $date = Carbon::today()->format('Y-m-d');
        $cacheKey = "users_count_ips:{$date}";
        $lockKey = "lock:{$cacheKey}";

        Cache::lock($lockKey, 30)->block(5, function () use ($date, $cacheKey) {
            $ips = Cache::get($cacheKey, []);

            if (!is_array($ips)) {
                $ips = [];
            }

            $ips = array_values(array_unique($ips));

            if (empty($ips)) {
                $this->info('Cache da IP topilmadi.');
                return;
            }

            $userCounts = UsersCount::whereDate('created_at', $date)->first();

            if ($userCounts) {
                $existingIps = json_decode($userCounts->ips, true);

                if (!is_array($existingIps)) {
                    $existingIps = [];
                }

                $mergedIps = array_values(array_unique(array_merge($existingIps, $ips)));

                $userCounts->count = count($mergedIps);
                $userCounts->ips = json_encode($mergedIps, JSON_UNESCAPED_UNICODE);
                $userCounts->save();
            } else {
                UsersCount::create([
                    'count' => count($ips),
                    'ips' => json_encode($ips, JSON_UNESCAPED_UNICODE),
                ]);
            }

            Cache::forget($cacheKey);

            $this->info('Cache dagi user count bazaga yozildi.');
        });

        return self::SUCCESS;
    }
}
