<?php

namespace App\Enums;

enum TipoEventoHistorial: string
{
    case SolicitudCreada = 'solicitud_creada';
    case SolicitudAsignada = 'solicitud_asignada';
    case SolicitudCompletada = 'solicitud_completada';
    case SolicitudCancelada = 'solicitud_cancelada';
    /* case SolicitudRechazada = 'solicitud_rechazada'; */
    case SolicitudReprogramada = 'solicitud_reprogramada';

    case RecolectorAsignado = 'recolector_asignado';

}



