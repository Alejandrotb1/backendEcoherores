<?php

namespace App\Exceptions;
namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Illuminate\Auth\AuthenticationException;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Handle an unauthenticated exception.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        // Verifica si la solicitud espera JSON (API)
        if ($request->expectsJson()) {
            // Devuelve una respuesta JSON con código 401 (No autorizado)
            return response()->json(['error' => 'Unauthorized'], 401);
        }
   return response()->json(['error' => 'No autenticado HANDLER'], 401);
        // Si no es JSON, puedes redirigir a la página de login (si es una interfaz de usuario)
        // Si prefieres no hacer redirección, simplemente puedes devolver algún mensaje o vista.
        // return redirect()->route('login');  // Omitir si no lo necesitas
    }
}

