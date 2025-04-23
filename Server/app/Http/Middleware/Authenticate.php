<?php
namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response|null
     */
    protected function redirectTo($request)
    {
        // Si la solicitud espera una respuesta JSON (es una API)
        if ($request->expectsJson()) {
            // Devuelve un error 401 Unauthorized
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}

