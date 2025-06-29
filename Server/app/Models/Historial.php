<?php

namespace App\Models;

/* use App\Enums\TipoEventoHistorial; */
use App\Enums\TipoEventoSolicitud;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Historial extends BaseModel
{
    use HasFactory;

    protected $table = 'historiales';

    protected $fillable = [
        'usuario_id',
        'solicitud_id',
        'tipo_evento',
        'detalle',
        'fecha',
    ];

    // Relaciones
    public function solicitud()
    {
        return $this->belongsTo(Solicitud::class, 'solicitud_id');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuario_id');
    }

    // Accesor para tipo_evento
    public function setTipoEventoAttribute($value)
    {
        /* $this->attributes['tipo_evento'] = TipoEventoSolicitud::from($value)->value; */
        /* $this->attributes['tipo_evento'] = $value->value; */

            if ($value instanceof \App\Enums\TipoEventoSolicitud) {
        $this->attributes['tipo_evento'] = $value->value;
    } else {
        $this->attributes['tipo_evento'] = $value; // ya es string
    }

    }

    // Mutador para tipo_evento
    public function getTipoEventoAttribute($value)
    {
        return TipoEventoSolicitud::from($value);
    }
}

