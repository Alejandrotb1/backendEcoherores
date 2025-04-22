<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validación de las credenciales
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        // Intentar autenticarse
        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Credenciales inválidas'], 401);
        }

        $user = Auth::user();
        // Generar token para la sesión
        $token = $user->createToken('token_personal')->plainTextToken;

        // Respuesta optimizada
        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->roles->pluck('role_name') // Solo los roles, si es necesario
            ],
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        // Eliminar todos los tokens del usuario para cerrar sesión
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Sesión cerrada']);
    }
}
