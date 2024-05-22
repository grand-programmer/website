<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Support\Facades\Auth;
class CheckIsAdmin
{
    public function handle($request, Closure $next)
    {
        print_r($request);

        if(Auth::user()->role > 2) {
            return $next($request);
        }
        else {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
    }
}
