<?php
namespace App\Enums;

enum TipoEventoSolicitud: string
{
    case Pendiente = 'pendiente';
    case Creada = 'creada';
    case Asignada = 'asignada';
    // case EnProceso = 'en_proceso';
    case Completada = 'completada';
    case Cancelada = 'cancelada';
}
