<?php

namespace App\Services;

use App\Models\Category;
use App\Models\News;
use App\Models\Page;
use Illuminate\Support\Facades\DB;

class SitemapService
{
    public static function generate(){
        // Correct hreflang codes for Google
        $locales = [
            'oz' => 'uz-Latn',  // Uzbek Latin
            'uz' => 'uz-Cyrl',  // Uzbek Cyrillic
            'ru' => 'ru',       // Russian
            'en' => 'en'        // English
        ];

        // All important static pages
        $staticPages = [
            '/' => ['priority' => '1.0', 'changefreq' => 'daily'],
            '/news' => ['priority' => '0.9', 'changefreq' => 'daily'],
            '/services' => ['priority' => '0.9', 'changefreq' => 'weekly'],
            '/services/vacancy' => ['priority' => '0.9', 'changefreq' => 'daily'],
            '/services/appeals' => ['priority' => '0.8', 'changefreq' => 'weekly'],
            '/page/search' => ['priority' => '0.6', 'changefreq' => 'monthly'],
            '/page/opendata' => ['priority' => '0.8', 'changefreq' => 'weekly'],
            '/page/votes' => ['priority' => '0.7', 'changefreq' => 'monthly'],
            '/page/faq' => ['priority' => '0.7', 'changefreq' => 'monthly'],
        ];

        // Start XML
        $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"' . "\n";
        $xml .= '        xmlns:xhtml="http://www.w3.org/1999/xhtml">' . "\n";

        // Static pages with proper hreflang
        foreach ($staticPages as $page => $settings) {
            foreach (array_keys($locales) as $locale) {
                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . url($locale . $page) . '</loc>' . "\n";

                // Add hreflang links
                foreach ($locales as $altLocale => $hreflang) {
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $hreflang . '" href="' . url($altLocale . $page) . '" />' . "\n";
                }

                $xml .= '    <changefreq>' . $settings['changefreq'] . '</changefreq>' . "\n";
                $xml .= '    <priority>' . $settings['priority'] . '</priority>' . "\n";
                $xml .= '  </url>' . "\n";
            }
        }

        // News with actual lastmod dates
        foreach (News::select('slug', 'updated_at')->cursor() as $news) {
            foreach (array_keys($locales) as $locale) {
                $url = '/' . $locale . '/news/' . $news->slug;

                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . url($url) . '</loc>' . "\n";

                // Add hreflang links
                foreach ($locales as $altLocale => $hreflang) {
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $hreflang . '" href="' . url('/' . $altLocale . '/news/' . $news->slug) . '" />' . "\n";
                }

                // Use actual update date
                $xml .= '    <lastmod>' . $news->updated_at->toAtomString() . '</lastmod>' . "\n";
                $xml .= '    <changefreq>weekly</changefreq>' . "\n";
                $xml .= '    <priority>0.8</priority>' . "\n";
                $xml .= '  </url>' . "\n";
            }
        }

        // Categories - FIXED: category instead of blog
        foreach (Category::select('slug', 'updated_at')->cursor() as $category) {
            foreach (array_keys($locales) as $locale) {
                $url = '/' . $locale . '/category/' . $category->slug;

                $xml .= '  <url>' . "\n";
                $xml .= '    <loc>' . url($url) . '</loc>' . "\n";

                // Add hreflang links - FIXED URL
                foreach ($locales as $altLocale => $hreflang) {
                    $xml .= '    <xhtml:link rel="alternate" hreflang="' . $hreflang . '" href="' . url('/' . $altLocale . '/category/' . $category->slug) . '" />' . "\n";
                }

                // Use actual update date if available
                $lastmod = $category->updated_at ? $category->updated_at->toAtomString() : now()->toAtomString();
                $xml .= '    <lastmod>' . $lastmod . '</lastmod>' . "\n";
                $xml .= '    <changefreq>monthly</changefreq>' . "\n";
                $xml .= '    <priority>0.6</priority>' . "\n";
                $xml .= '  </url>' . "\n";
            }
        }

        // Dynamic Pages (if Page model exists)
        if (class_exists(Page::class)) {
            try {
                foreach (Page::select('slug', 'updated_at')->where('status', 1)->cursor() as $page) {
                    foreach (array_keys($locales) as $locale) {
                        $url = '/' . $locale . '/page/' . $page->slug;

                        $xml .= '  <url>' . "\n";
                        $xml .= '    <loc>' . url($url) . '</loc>' . "\n";

                        foreach ($locales as $altLocale => $hreflang) {
                            $xml .= '    <xhtml:link rel="alternate" hreflang="' . $hreflang . '" href="' . url('/' . $altLocale . '/page/' . $page->slug) . '" />' . "\n";
                        }

                        $lastmod = $page->updated_at ? $page->updated_at->toAtomString() : now()->toAtomString();
                        $xml .= '    <lastmod>' . $lastmod . '</lastmod>' . "\n";
                        $xml .= '    <changefreq>monthly</changefreq>' . "\n";
                        $xml .= '    <priority>0.7</priority>' . "\n";
                        $xml .= '  </url>' . "\n";
                    }
                }
            } catch (\Exception $e) {
                // Skip if Page model doesn't have expected structure
            }
        }

        $xml .= '</urlset>';

        // FIXED: Save directly to public/sitemap.xml
        file_put_contents(public_path('sitemap.xml'), $xml);

        return true;
    }
}
