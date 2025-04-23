<?php

namespace Database\Factories;

use App\Models\Recolector;
use Illuminate\Database\Eloquent\Factories\Factory;

class RecolectorFactory extends Factory
{
    protected $model = Recolector::class;

    public function definition()
    {
        return [
            'nombre' => $this->faker->firstName,
            'apellido' => $this->faker->lastName,
            'ci' => $this->faker->numerify('########'),
            'telefono' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'direccion' => $this->faker->address,
            'licencia' => $this->faker->randomElement(['A', 'B', 'C', 'P', null]),
            'estado' => $this->faker->randomElement(['activo', 'inactivo']),
        ];
    }
}

