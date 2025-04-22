<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // Indica el nombre de la tabla 'usuarios'


    /**
     * Los atributos que son asignables masivamente.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
    ];

    /**
     * Los atributos que deben ser ocultados para la serialización.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Los atributos que deben ser convertidos.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Relación muchos a muchos con los roles.
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'user_role', 'user_id', 'role_id');
    }

    /**
     * Cifrar la contraseña al crear o actualizar el usuario.
     */
    public static function boot()
    {
        parent::boot();

        // Cifrar la contraseña antes de guardar
        static::creating(function ($user) {
            if ($user->password) {
                $user->password = Hash::make($user->password);
            }
        });

        static::updating(function ($user) {
            if ($user->password) {
                $user->password = Hash::make($user->password);
            }
        });
    }
}
