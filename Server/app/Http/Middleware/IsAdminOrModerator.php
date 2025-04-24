<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdminOrModerator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */

public function handle($request, Closure $next)
{
    $user = $request->user();

    // Verifica si el usuario tiene los roles Admin o Moderator
    if (!$user || !$user->roles()->whereIn('role_name', ['Admin', 'Moderator'])->exists()) {
        // Para depuración, agrega un log para ver los roles del usuario
        \Log::info('Roles del usuario:', $user->roles()->pluck('role_name')->toArray());
        return response()->json(['error' => 'No autorizado.'], 403);
    }

    return $next($request);
}

}
