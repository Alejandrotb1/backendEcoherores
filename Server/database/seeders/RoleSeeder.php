<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        // Eliminar roles existentes
        Role::truncate();

        // Crear roles con IDs específicos
        Role::create([
            'id' => 1,
            'name' => 'admin',
            'description' => 'Administrador del sistema'
        ]);

        Role::create([
            'id' => 2,
            'name' => 'user',
            'description' => 'Usuario regular'
        ]);
    }
}




