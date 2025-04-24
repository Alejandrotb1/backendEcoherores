<?php

namespace App\Services;

use App\Models\Solicitud;
use Illuminate\Support\Facades\Auth;

class SolicitudService
{
    protected $geocodingService;

    public function __construct(GeocodingService $geocodingService = null)
    {
        $this->geocodingService = $geocodingService;
    }

    // Obtener todas las solicitudes (admin)
    public function listAll(int $perPage = 10)
    {
        return Solicitud::with(['usuario', 'recolector'])
            ->orderByDesc('fecha_solicitud')
            ->paginate($perPage);
    }

    // Crear una solicitud
    public function create(array $data, int $usuarioId): Solicitud
    {
        return Solicitud::create([
            'usuario_id' => $usuarioId,
            'direccion_recojo' => $data['direccion_recojo'],
            'numero_referencia' => $data['numero_referencia'],
            'detalles_casa' => $data['detalles_casa'],
            'tipo_material' => $data['tipo_material'],
            'detalles_adicionales' => $data['detalles_adicionales'] ?? null,
            'estado' => 'pendiente',
            'fecha_solicitud' => now(),
            'fecha_programada' => $data['fecha_programada'],
            'latitud' => $data['latitud'],
            'longitud' => $data['longitud'],
            'tamano_residuo' => $data['tamano_residuo'],
            'tipo_residuo' => $data['tipo_residuo'],
        ]);
    }

    // Actualizar solicitud
    public function update(Solicitud $solicitud, array $data): Solicitud
    {
        $solicitud->update($data);
        return $solicitud;
    }

    // Eliminar solicitud
    public function delete(Solicitud $solicitud): bool
    {
        return $solicitud->delete();
    }

    // Obtener historial del usuario autenticado
    public function listByUser(int $usuarioId, int $perPage = 10)
    {
        return Solicitud::with(['usuario', 'recolector'])
            ->where('usuario_id', $usuarioId)
            ->orderByDesc('fecha_solicitud')
            ->paginate($perPage);
    }

    // Obtener historial del recolector
    public function listByRecolector(int $recolectorId, int $perPage = 10)
    {
        return Solicitud::with(['usuario', 'recolector'])
            ->where('recolector_id', $recolectorId)
            ->orderByDesc('fecha_solicitud')
            ->paginate($perPage);
    }

    // Asignar un recolector
    public function assignRecolector(Solicitud $solicitud, int $recolectorId): Solicitud
    {
        $solicitud->update([
            'recolector_id' => $recolectorId,
            'estado' => 'asignada'
        ]);

        return $solicitud;
    }

    // Cambiar estado de la solicitud
    public function updateStatus(Solicitud $solicitud, string $estado): Solicitud
    {
        $solicitud->update([
            'estado' => $estado
        ]);

        return $solicitud;
    }

    // Obtener coordenadas usando servicio externo
    public function getCoordinates(string $direccion): ?array
    {
        return $this->geocodingService
            ? $this->geocodingService->getCoordinates($direccion)
            : null;
    }
}
