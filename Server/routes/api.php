<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/





Route::middleware(['auth:sanctum', 'rol:Admin,Moderator'])->get('/admin-zone', function () {
    return 'Bienvenido jefe';
});

// Publica (no requiere autenticación)
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

// Protegida con token
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);



///////////////////////////////////////




Route::resource('usuarios', \App\Http\Controllers\UserController::class);
// Route::resource('roles', RolController::class);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//recolectores
Route::apiResource('recolectores', \App\Http\Controllers\RecolectorController::class);
Route::patch('recolectores/{id}/restore', [\App\Http\Controllers\RecolectorController::class, 'restore']);
Route::put('recolectores/{id}/restore', [\App\Http\Controllers\RecolectorController::class, 'restore']);


Route::apiResource('solicitudes', \App\Http\Controllers\SolicitudController::class);
//editar solicitud para el admin
Route::patch('solicitudes/{id}/historial/update', [\App\Http\Controllers\SolicitudController::class, 'updateHistorialAdmin']);
//listar el historial de una solicitud
Route::get('solicitudes/{id}/historial', [\App\Http\Controllers\SolicitudController::class, 'getHistorial']);


// por usuario
Route::get('/usuarios/{usuario_id}/solicitudes', [\App\Http\Controllers\SolicitudController::class, 'listarPorUsuario']);

// por recolector
Route::get('/recolectores/{recolector_id}/solicitudes', [\App\Http\Controllers\SolicitudController::class, 'listarPorRecolector']);
//historiales cambiar estado
Route::patch('/solicitudes/{recolector_id}/estado', [\App\Http\Controllers\SolicitudController::class, 'cambiarEstado']);


/* Route::get('/solicitudes/recolector/{id}', [SolicitudController::class, 'listarPorRecolector']); */


Route::apiResource('puntuaciones', \App\Http\Controllers\PuntuacionController::class);




//enum
Route::get('/enums/tipos-residuo', [\App\Http\Controllers\EnumController::class, 'tiposResiduo']);
Route::get('/enums/tamanos-residuo', [\App\Http\Controllers\EnumController::class, 'tamanosResiduo']);
