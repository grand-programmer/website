<?php

namespace App\Console\Commands;

use App\Services\SitemapService;
use Illuminate\Console\Command;

class SitemapGenerate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate sitemap.xml file with all site URLs (static pages, news, categories, dynamic pages)';

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
        $this->info('Starting sitemap generation...');

        try {
            SitemapService::generate();

            $filePath = public_path('sitemap.xml');
            $fileSize = file_exists($filePath) ? filesize($filePath) : 0;

            $this->info('✓ Sitemap generated successfully!');
            $this->info('  Location: public/sitemap.xml');
            $this->info('  Size: ' . round($fileSize / 1024, 2) . ' KB');
            $this->info('  URL: ' . url('sitemap.xml'));

            return 0;
        } catch (\Exception $e) {
            $this->error('✗ Sitemap generation failed!');
            $this->error('  Error: ' . $e->getMessage());

            return 1;
        }
    }
}
