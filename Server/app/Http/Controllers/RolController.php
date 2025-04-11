<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    public function index()
    {
        $roles = Rol::all();
        return response()->json($roles);
    }

    public function show($id)
    {
        $rol = Rol::findOrFail($id);
        return response()->json($rol);
    }

    public function store(Request $request)
    {
        $rol = Rol::create($request->only('nombre_rol'));
        return response()->json($rol, 201);
    }

    public function update(Request $request, $id)
    {
        $rol = Rol::findOrFail($id);
        $rol->update($request->only('nombre_rol'));
        return response()->json($rol);
    }

    public function destroy($id)
    {
        $rol = Rol::findOrFail($id);
        $rol->delete();
        return response()->json(null, 204);
    }
}
