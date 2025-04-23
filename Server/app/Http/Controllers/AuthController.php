<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validar entrada
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Buscar el usuario
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json([
                'error' => 'El usuario no existe'
            ], 404);
        }

        // Verificar la contraseña manualmente
        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'error' => 'Contraseña incorrecta'
            ], 401);
        }

        /* // Crear token si todo está bien */
        /* $token = $user->createToken('token_personal')->plainTextToken; */

        // Revocar tokens anteriores
/* $user->tokens()->delete(); */

// Crear nuevo token
$token = $user->createToken('token_personal')->plainTextToken;


        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'roles' => $user->roles->pluck('role_name') ?? [] // por si no tiene
            ],
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Sesión cerrada']);
    }
}

