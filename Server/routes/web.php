<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//rutas de pruba
Route::middleware('auth')->get('/mis-roles', function () {
    return auth()->user()->roles;
});


// Rutas de usuarios y roles
Route::resource('usuarios', UsuarioController::class);
Route::resource('roles', RolController::class);

// Rutas protegidas por roles
Route::middleware(['auth', 'rol:Admin'])->group(function () {
    Route::get('/admin/dashboard', function () {
        return 'Bienvenido administrador';
    });
});

Route::middleware(['auth', 'rol:Cliente,Recolector'])->group(function () {
    Route::get('/zona-publica', function () {
        return 'Acceso permitido a Clientes y Recolectores';
    });
});

// Ruta de bienvenida pública
Route::get('/', function () {
    return view('welcome');
});