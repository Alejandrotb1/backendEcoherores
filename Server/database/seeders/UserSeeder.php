<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Crear usuario administrador
        $user = User::create([
            'name' => 'Admin Principal',
            'email' => 'admin@ecoheroes.com',
            'password' => Hash::make('password'),
            'phone' => '+15316166843',
        ]);

        // Asignar rol de administrador
        $user->roles()->attach(1); // Asumiendo que el rol de admin tiene ID = 1

        // Crear otros usuarios
        User::factory(5)->create()->each(function ($user) {
            $user->roles()->attach(2); // Asignar rol de usuario
        });
    }
}
