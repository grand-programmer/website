<?php

namespace App\Services;

use App\Models\Category;
use App\Models\News;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class SitemapService
{
    public static function generate(){
        $locales = ['uz', 'oz', 'ru', 'en'];

        // Static pages
        $staticPages = [
            '/',
            '/news',
/*            '/contact',
            '/products',
            '/blogs',*/
        ];


        // Start XML
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">';

        // Static pages
        foreach ($staticPages as $page) {
            foreach ($locales as $locale) {
                $xml .= '<url>';
                $xml .= '<loc>' . url($locale . $page) . '</loc>';

                foreach ($locales as $altLocale) {
                    $xml .= '<xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . url($altLocale . $page) . '" />';
                }

                $xml .= '<changefreq>weekly</changefreq>';
                $xml .= '<priority>0.8</priority>';
                $xml .= '</url>';
            }
        }

        // Products
        foreach (News::with(['categories','translates'])->cursor() as $news) {
            foreach ($locales as $locale) {
                $url = '/' . $locale . '/news/' . $news->slug;

                $xml .= '<url>';
                $xml .= '<loc>' . url($url) . '</loc>';

                foreach ($locales as $altLocale) {
                    $xml .= '<xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . url('/' . $altLocale . '/news/' . $news->slug) . '" />';
                }

                $xml .= '<lastmod>' . now()->toDateString() . '</lastmod>';
                $xml .= '<changefreq>daily</changefreq>';
                $xml .= '<priority>0.9</priority>';
                $xml .= '</url>';
            }
        }

        // Blogs
        foreach (Category::cursor() as $blog) {
            foreach ($locales as $locale) {
                $url = '/' . $locale . '/category/' . $blog->slug;

                $xml .= '<url>';
                $xml .= '<loc>' . url($url) . '</loc>';

                foreach ($locales as $altLocale) {
                    $xml .= '<xhtml:link rel="alternate" hreflang="' . $altLocale . '" href="' . url('/' . $altLocale . '/blog/' . $blog->slug) . '" />';
                }

                $xml .= '<lastmod>' . now()->toDateString() . '</lastmod>';
                $xml .= '<changefreq>weekly</changefreq>';
                $xml .= '<priority>0.7</priority>';
                $xml .= '</url>';
            }
        }

        $xml .= '</urlset>';

        // Save to public/sitemap.xml
        Storage::disk('public')->put('sitemap.xml', $xml);


    }
}
