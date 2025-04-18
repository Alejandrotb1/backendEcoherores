<?php

namespace App\Models;

use App\Enums\TipoEventoHistorial;
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
        /* $this->attributes['tipo_evento'] = TipoEventoHistorial::from($value)->value; */
        $this->attributes['tipo_evento'] = $value->value;

    }

    // Mutador para tipo_evento
    public function getTipoEventoAttribute($value)
    {
        return TipoEventoHistorial::from($value);
    }
}

