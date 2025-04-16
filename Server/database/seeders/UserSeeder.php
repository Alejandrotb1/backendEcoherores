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
        User::create([
            'role_id' => 1,
            'name' => 'Admin Principal',
            'email' => 'admin@ecoheroes.com',
            'phone' => '555-555-5555',
            'password' => Hash::make('admin'),
            'status' => 'active',
        ]);
        User::create([
            'role_id' => 2,
            'name' => 'Admin',
            'email' => 'admin@ecoheroe7s.com',
            'phone' => '+15477545447',
            'password' => Hash::make('123456'),
            'status' => 'active',
        ]);

    }
}
