<?php

namespace App\Http\Controllers;

use App\Models\Historial;
use Illuminate\Http\Request;

class HistorialController extends Controller
{
    /**
     * Muestra todos los eventos del historial.
     */
    public function index()
    {
        return response()->json(Historial::with(['usuario', 'solicitud'])->orderBy('fecha', 'desc')->get());
    }

    /**
     * Muestra el historial de una solicitud específica.
     */
    public function porSolicitud($id)
    {
        $historial = Historial::where('solicitud_id', $id)
            ->with(['usuario', 'solicitud'])
            ->orderBy('fecha', 'asc')
            ->get();

        if ($historial->isEmpty()) {
            return response()->json(['mensaje' => 'No se encontraron eventos para esta solicitud'], 404);
        }

        return response()->json($historial);
    }

    /**
     * Registra un nuevo evento en el historial.
     */
    public function store(Request $request)
    {
        $request->validate([
            'usuario_id' => 'required|exists:users,id',
            'solicitud_id' => 'required|exists:solicitudes,id',
            'tipo_evento' => 'required|in:solicitud_creada,solic

