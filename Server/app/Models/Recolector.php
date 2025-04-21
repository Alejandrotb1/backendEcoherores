<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;


class Recolector extends BaseModel
{
    use HasFactory;
    protected $table = 'recolectores';

    protected $fillable = [
        'nombre',
        'apellido',
        'ci',
        'telefono',
        'email',
        'direccion',
        'licencia',
        'estado',
    ];

    protected $hidden = [
        'id', 'created_at', 'updated_at',
    ];
}
