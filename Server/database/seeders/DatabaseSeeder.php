<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;
use App\Models\Recolector;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            RecolectorSeeder::class,
            SolicitudSeeder::class,
        ]);


        /* Recolector::factory(10)->create(); */
                \App\Models\Recolector::factory(50)->create();
                \App\Models\Solicitud::factory(500)->create();

    }
}