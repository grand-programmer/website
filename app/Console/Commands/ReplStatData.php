<?php

namespace App\Console\Commands;

use App\Services\StatService;
use Illuminate\Console\Command;

class ReplStatData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'repl:data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Replikatsiya ves stat data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        (new StatService())->parse();
        $this->info('The command was successful!');
        return "sdf";
    }
}
