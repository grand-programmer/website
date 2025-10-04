<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $local = ($request->hasHeader('X-localization') and in_array($request->header('X-localization'),["uz","ru","en","oz"])) ? $request->header('X-localization') : 'oz';
        // set laravel localization
        ///dd($local);
        app()->setLocale($local);
        return $next($request);
    }
}
