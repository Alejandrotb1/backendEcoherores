<?php
// database/factories/SolicitudFactory.php
namespace Database\Factories;

use App\Models\Solicitud;
use App\Models\User;
use App\Models\Recolector;
use App\Enums\TipoResiduo;
use App\Enums\TamanoResiduo;
use App\Enums\TipoEventoSolicitud;
use Illuminate\Database\Eloquent\Factories\Factory;

class SolicitudFactory extends Factory
{
    protected $model = Solicitud::class;

    public function definition(): array
    {

             // Probabilidad de que el estado sea pendiente (80%)
        $estadoSolicitud = $this->faker->boolean(80)
            ? TipoEventoSolicitud::Pendiente->value
            : $this->faker->randomElement([
                TipoEventoSolicitud::Asignada->value,
                TipoEventoSolicitud::Completada->value,
                TipoEventoSolicitud::Cancelada->value
            ]);

        return [
            /* 'usuario_id' => User::factory(), // Crea un usuario aleatorio */
            /* 'recolector_id' => Recolector::factory(), // Crea un recolector aleatorio */
            'usuario_id' => rand(1, 20),
'recolector_id' => rand(1, 50),

            'direccion_recojo' => $this->faker->address,
            'numero_referencia' => $this->faker->uuid,
            'detalles_casa' => $this->faker->paragraph,
            /* 'tipo_material' => $this->faker->randomElement([ */
            /*     TipoResiduo::ORGANICO->value, */
            /*     TipoResiduo::INORGANICO_RECICLABLE->value, */
            /*     TipoResiduo::INORGANICO_NO_RECICLABLE->value, */
            /*     TipoResiduo::PELIGROSO->value, */
            /*     TipoResiduo::SANITARIO->value, */
            /*     TipoResiduo::ELECTRONICO->value, */
            /*     TipoResiduo::CONSTRUCCION->value, */
            /*     TipoResiduo::NUCLEAR->value, */
            /* ]), */
            'detalles_adicionales' => $this->faker->optional()->text,
            /* 'estado_solicitud' => TipoEventoSolicitud::Pendiente->value, // Usamos el Enum */
                        'estado_solicitud' => $estadoSolicitud, // Usamos la probabilidad definida

            'fecha_solicitud' => now(),
            'fecha_programada' => $this->faker->optional()->dateTime,
            'fecha_recojo' => $this->faker->optional()->dateTime,
            'latitud' => $this->faker->latitude,
            'longitud' => $this->faker->longitude,
            'tamano_residuo' => $this->faker->randomElement([
                TamanoResiduo::PEQUENO->value,
                TamanoResiduo::MEDIANO->value,
                TamanoResiduo::GRANDE->value
            ]),
            'tipo_residuo' => $this->faker->randomElement([
                TipoResiduo::ORGANICO->value,
                TipoResiduo::INORGANICO_RECICLABLE->value,
                TipoResiduo::INORGANICO_NO_RECICLABLE->value,
                TipoResiduo::PELIGROSO->value,
                TipoResiduo::SANITARIO->value,
                TipoResiduo::ELECTRONICO->value,
                TipoResiduo::CONSTRUCCION->value,
            ]),
            'estado' => 'activo', // Valor por defecto
        ];
    }
}

