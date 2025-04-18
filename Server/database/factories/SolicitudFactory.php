<?php

namespace Database\Factories;

use App\Enums\TamanoResiduo;
use App\Enums\TipoResiduo;
use App\Models\Recolector;
use App\Models\Solicitud;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class SolicitudFactory extends Factory
{
    protected $model = Solicitud::class;

    public function definition(): array
    {
        return [
            'usuario_id' => User::factory(),
            'recolector_id' => Recolector::factory(),
            'direccion_recojo' => $this->faker->address,
            'numero_referencia' => $this->faker->buildingNumber,
            'detalles_casa' => $this->faker->sentence(),
            'tipo_material' => $this->faker->randomElement(['organico', 'inorganico_reciclable', 'inorganico_no_reciclable', 'peligroso', 'sanitario', 'electronico', 'construccion', 'nuclear']),
            'detalles_adicionales' => $this->faker->paragraph(),
            'estado' => $this->faker->randomElement(['pendiente', 'en_proceso', 'completada']),
            'fecha_solicitud' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'fecha_programada' => $this->faker->dateTimeBetween('now', '+1 month'),
            'fecha_recojo' => null,
            'latitud' => $this->faker->latitude,
            'longitud' => $this->faker->longitude,
            'tamano_residuo' => $this->faker->randomElement(TamanoResiduo::cases())->value,
            'tipo_residuo' => $this->faker->randomElement(TipoResiduo::cases())->value,
        ];
    }

    public function pendiente()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado' => 'pendiente',
                'fecha_programada' => null,
                'fecha_recojo' => null,
            ];
        });
    }

    public function asignada()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado' => 'asignada',
                'fecha_programada' => $this->faker->dateTimeBetween('now', '+1 week'),
            ];
        });
    }

    public function completada()
    {
        return $this->state(function (array $attributes) {
            return [
                'estado' => 'completada',
                'fecha_recojo' => $this->faker->dateTimeBetween('-1 week', 'now'),
            ];
        });
    }
} 