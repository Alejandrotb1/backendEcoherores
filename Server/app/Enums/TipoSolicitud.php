<?php

namespace App\Enums;

enum TipoSolicitud: string
{
    case RECOLECCION = 'recoleccion';
    case RECICLAJE = 'reciclaje';

    public function label(): string
    {
        return match($this) {
            self::RECOLECCION => 'Recolección',
            self::RECICLAJE => 'Reciclaje',
        };
    }
} 