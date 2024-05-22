<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Role
{
    public function handle($request, Closure $next, ...$roles)
    {

        //dd(Auth::guard('api')->user()->role);
        if (!Auth::guard('api')->check()) // I included this check because you have it, but it really should be part of your 'auth' middleware, most likely added as part of a route group.
            return response()->json(['error' => 'Unauthorized'], 403);

        $user = Auth::guard('api')->user();

        if ($user->isAdmin() or ($user->role > 2 and $_SERVER['REMOTE_ADDR']===$user->ip))
            return $next($request);

/*        foreach ($roles as $role) {
           // dd($role);
            // Check if user has the role This check will depend on how your roles are set up
            if ($user->hasRole($role))
                return $next($request);
        }*/

        return response()->json(['error' => 'Unauthorized'], 403);
    }
}
