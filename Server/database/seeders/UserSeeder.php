<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Eliminar usuarios existentes
        User::truncate();

        // Crear usuario admin
        User::create([
            'name' => 'Admin',
            'email' => 'admin@ecoheroes.com',
            'phone' => '1234567890',
            'password' => bcrypt('password'),
            'status' => 'active',
            'role_id' => 1, // ID del rol admin
        ]);

        // Crear segundo usuario admin
        User::create([
            'name' => 'Admin 2',
            'email' => 'admin2@ecoheroes.com',
            'phone' => '0987654321',
            'password' => bcrypt('password'),
            'status' => 'active',
            'role_id' => 2, // ID del rol user
        ]);
    }
}
