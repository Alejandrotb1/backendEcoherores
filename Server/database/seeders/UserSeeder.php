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



         // Buscar roles por nombre
        $userRole = Role::where('role_name', 'User')->first();
        $moderatorRole = Role::where('role_name', 'Moderator')->first();

        // Crear 500 usuarios y asignar rol 'User'
        User::factory(50)->create()->each(function ($user) use ($userRole) {
            if ($userRole) {
                $user->roles()->attach($userRole->id);
            }
        });

        // Crear 10 usuarios y asignar rol 'Moderator'
        User::factory(5)->create()->each(function ($user) use ($moderatorRole) {
            if ($moderatorRole) {
                $user->roles()->attach($moderatorRole->id);
            }
        });
    }
}