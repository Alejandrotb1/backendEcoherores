<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    // Indica el nombre de la tabla 'usuarios'


    /**
     * Los atributos que son asignables masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
    ];

    /**
     * Los atributos que deben ser ocultados para la serialización.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];


    /**
     * Relación muchos a muchos con los roles.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    
    public function entries()
    {
        return $this->hasMany(Entry::class)->withTrashed();
    }
}
