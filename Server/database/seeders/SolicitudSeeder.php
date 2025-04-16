<?php

namespace Database\Seeders;

use App\Models\Solicitud;
use Illuminate\Database\Seeder;

class SolicitudSeeder extends Seeder
{
    public function run(): void
    {
        // Create 20 random solicitudes
        Solicitud::factory()->count(20)->create();

        // Create 5 pending solicitudes
        Solicitud::factory()->count(5)->pendiente()->create();

        // Create 5 assigned solicitudes
        Solicitud::factory()->count(5)->asignada()->create();

        // Create 5 completed solicitudes
        Solicitud::factory()->count(5)->completada()->create();
    }
} 