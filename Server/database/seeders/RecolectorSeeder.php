<?php

namespace Database\Seeders;

use App\Models\Recolector;
use Illuminate\Database\Seeder;

class RecolectorSeeder extends Seeder
{
    public function run(): void
    {
        // Crear 10 recolectores activos
        Recolector::factory()
            ->count(10)
            ->state(function (array $attributes) {
                return ['estado' => 'activo'];
            })
            ->create();

        // Crear 5 recolectores inactivos
        Recolector::factory()
            ->count(5)
            ->state(function (array $attributes) {
                return ['estado' => 'inactivo'];
            })
            ->create();
    }
} 