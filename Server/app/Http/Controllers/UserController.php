<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::with('roles')->get();  // Obtener todos los usuarios con sus roles
        return response()->json($usuarios);
    }

    public function show($id)
    {
        $usuario = Usuario::with('roles')->findOrFail($id);  // Obtener un usuario por ID con sus roles
        return response()->json($usuario);
    }

    public function store(Request $request)
    {
        $usuario = Usuario::create($request->only('nombre', 'email', 'contraseña', 'telefono'));
        $usuario->roles()->attach($request->roles);  // Asociar roles al usuario
        return response()->json($usuario, 201);
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->only('nombre', 'email', 'contraseña', 'telefono'));
        $usuario->roles()->sync($request->roles);  
        return response()->json($usuario);
    }

    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(null, 204);
    }
}
