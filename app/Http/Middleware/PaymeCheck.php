<?php

namespace App\Http\Middleware;

use App\Exceptions\PaymeException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Closure;

class PaymeCheck
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return Response
     * @throws PaymeException
     */
    public function handle(Request $request, Closure $next): Response
    {
        $authorization = str_replace('Bearer ', '', $request->header('Authorization'));

        if (!$authorization ||
            !preg_match('/^\s*Basic\s+(\S+)\s*$/i', $authorization, $matches) ||
            base64_decode($matches[1]) != config('payme.login') . ":" . config('payme.key')) {

            throw new PaymeException(PaymeException::AUTH_ERROR);
        }

        $ip = $request->ip();
        if (!in_array($ip, config('payme.allowed_ips'))) {

            throw new PaymeException(PaymeException::AUTH_ERROR);
        }

        return $next($request);
    }
}
