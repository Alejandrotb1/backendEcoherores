<?php

namespace App\Http\Controllers;

use App\Models\Solicitud;
use App\Enums\TamanoResiduo;
use App\Enums\TipoResiduo;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use App\Models\Historial;
use App\Enums\TipoEventoHistoriales;
use Illuminate\Support\Facades\Auth;

class SolicitudController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $solicitudes = Solicitud::with(['usuario', 'recolector'])
            ->paginate(10);

        return response()->json([
            'data' => $solicitudes,
            'message' => 'Solicitudes obtenidas exitosamente'
        ]);
    }



    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario_id' => 'required|exists:users,id',
            'recolector_id' => 'nullable|exists:recolectores,id', // si no siempre viene, ponelo nullable
            'direccion_recojo' => 'required|string|max:255',
            'numero_referencia' => 'required|string|max:50',
            'detalles_casa' => 'nullable|string',
            'tipo_material' => 'required|string|max:255',
            'detalles_adicionales' => 'nullable|string',
            'estado' => 'sometimes|string|max:50',
            'fecha_solicitud' => 'required|date',
            'fecha_programada' => 'nullable|date',
            'fecha_recojo' => 'nullable|date',
            'latitud' => 'required|numeric',
            'longitud' => 'required|numeric',
            'tamano_residuo' => [
                'required',
                Rule::in(collect(TamanoResiduo::cases())->pluck('value'))
            ],
            'tipo_residuo' => [
                'required',
                Rule::in(collect(TipoResiduo::cases())->pluck('value'))
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'message' => 'Error de validación'
            ], 422);
        }

        $solicitud = Solicitud::create($validator->validated());

        return response()->json([
            'data' => $solicitud->load(['usuario', 'recolector']),
            'message' => 'Solicitud creada exitosamente'
        ], 201);
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $solicitud = Solicitud::with(['usuario', 'recolector', 'historiales', 'puntuaciones'])
            ->find($id);

        if (!$solicitud) {
            return response()->json([
                'message' => 'Solicitud no encontrada'
            ], 404);
        }

        return response()->json([
            'data' => $solicitud,
            'message' => 'Solicitud obtenida exitosamente'
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $solicitud = Solicitud::find($id);

        if (!$solicitud) {
            return response()->json([
                'message' => 'Solicitud no encontrada'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'usuario_id' => 'sometimes|exists:users,id',
            'recolector_id' => 'nullable|exists:recolectores,id',
            'direccion_recojo' => 'sometimes|string|max:255',
            'numero_referencia' => 'sometimes|string|max:50',
            'detalles_casa' => 'nullable|string',
            'tipo_material' => 'sometimes|string|max:255',
            'detalles_adicionales' => 'nullable|string',
            'estado' => 'sometimes|string|max:50',
            'fecha_solicitud' => 'sometimes|date',
            'fecha_programada' => 'nullable|date',
            'fecha_recojo' => 'nullable|date',
            'latitud' => 'sometimes|numeric',
            'longitud' => 'sometimes|numeric',
            'tamano_residuo' => [
                'sometimes',
                Rule::in(collect(TamanoResiduo::cases())->map(fn($case) => $case->value))
            ],
            'tipo_residuo' => [
                'sometimes',
                Rule::in(collect(TipoResiduo::cases())->map(fn($case) => $case->value))
            ],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
                'message' => 'Error de validación'
            ], 422);
        }

        $solicitud->fill($request->all());
        $solicitud->save();

        return response()->json([
            'data' => $solicitud->load(['usuario', 'recolector']),
            'message' => 'Solicitud actualizada exitosamente'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $solicitud = Solicitud::find($id);

        if (!$solicitud) {
            return response()->json([
                'message' => 'Solicitud no encontrada'
            ], 404);
        }

        $solicitud->delete();

        return response()->json([
            'message' => 'Solicitud eliminada exitosamente'
        ]);
    }
public function listarPorUsuario($usuarioId)
{
    // Obtener las solicitudes del usuario con la relación 'recolector'
    $solicitudes = Solicitud::with('recolector')
        ->where('usuario_id', $usuarioId)
        ->orderBy('fecha_solicitud', 'desc')
        ->get();

    // Si no hay solicitudes, devolver mensaje de "Usuario no encontrado"
    if ($solicitudes->isEmpty()) {
        return response()->json([
            'message' => 'Usuario no encontrado'
        ], 404); // 404 Not Found
    }

    // Obtener los datos del usuario una sola vez
    $usuario = $solicitudes->first()->usuario;

    // Eliminar la relación 'usuario' de cada solicitud para no repetirla
    $solicitudes->each(function ($solicitud) {
        $solicitud->setRelation('usuario', null);
    });

    // Retornar las solicitudes y los datos del usuario una sola vez
    return response()->json([
        'data' => $solicitudes,
        'usuario' => $usuario,  // Datos del usuario una sola vez
        'message' => 'Solicitudes del usuario obtenidas exitosamente'
    ]);
}


public function listarPorRecolector($recolectorId)
{
    // Obtener las solicitudes del recolector con la relación 'usuario' y 'recolector'
    $solicitudes = Solicitud::with('usuario')
        ->where('recolector_id', $recolectorId)
        ->orderBy('fecha_programada', 'desc')
        ->get();

    // Obtener los datos del recolector una sola vez
    $recolector = $solicitudes->isNotEmpty() ? $solicitudes->first()->recolector : null;

    // Eliminar la relación 'recolector' de cada solicitud para no repetirla
    $solicitudes->each(function ($solicitud) {
        $solicitud->setRelation('recolector', null);
    });

    // Retornar las solicitudes y los datos del recolector una sola vez
    return response()->json([
        'data' => $solicitudes,
        'recolector' => $recolector,  // Datos del recolector una sola vez
        'message' => 'Solicitudes del recolector obtenidas exitosamente'
    ]);
}

//historiales
public function cambiarEstado(Request $request, $id)
{
    $request->validate([
        'estado' => 'required|string|in:pendiente,asignada,en_proceso,completada,cancelada',
    ]);

    $solicitud = Solicitud::findOrFail($id);

    $estadoAnterior = $solicitud->estado;
    $solicitud->estado = $request->estado;
    $solicitud->save();

    // Registrar en el historial
    Historial::create([
        /* 'usuario_id' => Auth::id(), // O el ID del admin si viene desde otro lado */
        'usuario_id' => 1,
        'solicitud_id' => $solicitud->id,
        'tipo_evento' => match ($request->estado) {
            'completada' => TipoEventoHistoriales::SolicitudCompletada,
            'cancelada' => TipoEventoHistoriales::SolicitudCancelada,
            'asignada' => TipoEventoHistoriales::SolicitudAsignada,
            default => TipoEventoHistoriales::SolicitudCreada, // o un nuevo enum tipo 'EstadoCambiado'
        },
        'detalle' => "Estado cambiado de '{$estadoAnterior}' a '{$request->estado}'",
        'fecha' => now(),
    ]);

    return response()->json([
        'message' => 'Estado actualizado correctamente.',
        'solicitud' => $solicitud,
    ]);
}

}
