<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
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

                // Crear 500 usuarios con rol 'User'
        $userRole = Role::where('role_name', 'User')->first();
        User::factory(500)->create([
            'role_id' => $userRole->id,
        ]);

        // Crear 10 usuarios con rol 'Moderator'
        $moderatorRole = Role::where('role_name', 'Moderator')->first();
        User::factory(10)->create([
            'role_id' => $moderatorRole->id,
        ]);
    }
}
