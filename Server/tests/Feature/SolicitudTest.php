<?php

namespace Tests\Feature;

use App\Enums\TamanoResiduo;
use App\Enums\TipoResiduo;
use App\Models\Recolector;
use App\Models\Solicitud;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SolicitudTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->withoutMiddleware([
            \App\Http\Middleware\VerifyCsrfToken::class,
            \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
            \App\Http\Middleware\TrimStrings::class
        ]);
    }

    /** @test */
    public function puede_crear_una_solicitud()
    {
        $usuario = User::factory()->create();
        $recolector = Recolector::factory()->create();
        
        $solicitud = Solicitud::factory()->create([
            'usuario_id' => $usuario->id,
            'recolector_id' => $recolector->id,
            'tamano_residuo' => TamanoResiduo::PEQUENO->value,
            'tipo_residuo' => TipoResiduo::ORGANICO->value
        ]);

        $this->assertDatabaseHas('solicitudes', [
            'id' => $solicitud->id,
            'usuario_id' => $usuario->id,
            'recolector_id' => $recolector->id,
            'tamano_residuo' => TamanoResiduo::PEQUENO->value,
            'tipo_residuo' => TipoResiduo::ORGANICO->value
        ]);
    }

    /** @test */
    public function puede_obtener_todas_las_solicitudes()
    {
        Solicitud::factory()->count(5)->create();

        $response = $this->getJson('/api/solicitudes');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    'current_page',
                    'data' => [
                        '*' => [
                            'id',
                            'usuario_id',
                            'recolector_id',
                            'direccion_recojo',
                            'numero_referencia',
                            'detalles_casa',
                            'tipo_material',
                            'detalles_adicionales',
                            'estado',
                            'fecha_solicitud',
                            'fecha_programada',
                            'fecha_recojo',
                            'latitud',
                            'longitud',
                            'tamano_residuo',
                            'tipo_residuo',
                            'created_at',
                            'updated_at',
                            'usuario' => [
                                'id',
                                'name',
                                'email',
                                'phone',
                                'status',
                                'role_id',
                                'created_at',
                                'updated_at'
                            ],
                            'recolector' => [
                                'nombre',
                                'apellido',
                                'ci',
                                'telefono',
                                'email',
                                'direccion',
                                'licencia',
                                'estado'
                            ]
                        ]
                    ],
                    'first_page_url',
                    'from',
                    'last_page',
                    'last_page_url',
                    'links' => [
                        '*' => [
                            'url',
                            'label',
                            'active'
                        ]
                    ],
                    'next_page_url',
                    'path',
                    'per_page',
                    'prev_page_url',
                    'to',
                    'total'
                ],
                'message'
            ]);
    }

    /** @test */
    public function puede_obtener_una_solicitud_especifica()
    {
        $solicitud = Solicitud::factory()->create();

        $response = $this->getJson("/api/solicitudes/{$solicitud->id}");

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'id' => $solicitud->id,
                    'usuario_id' => $solicitud->usuario_id,
                    'recolector_id' => $solicitud->recolector_id,
                    'direccion_recojo' => $solicitud->direccion_recojo,
                    'estado' => $solicitud->estado,
                    'tamano_residuo' => $solicitud->tamano_residuo->value,
                    'tipo_residuo' => $solicitud->tipo_residuo->value
                ],
                'message' => 'Solicitud obtenida exitosamente'
            ]);
    }

    /** @test */
    public function puede_actualizar_una_solicitud()
    {
        $solicitud = Solicitud::factory()->create();
        $nuevosDatos = [
            'estado' => 'completada',
            'detalles_adicionales' => 'Nuevos detalles',
            'tamano_residuo' => TamanoResiduo::MEDIANO->value,
            'tipo_residuo' => TipoResiduo::INORGANICO_RECICLABLE->value
        ];

        $response = $this->putJson("/api/solicitudes/{$solicitud->id}", $nuevosDatos);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    'estado' => 'completada',
                    'detalles_adicionales' => 'Nuevos detalles',
                    'tamano_residuo' => TamanoResiduo::MEDIANO->value,
                    'tipo_residuo' => TipoResiduo::INORGANICO_RECICLABLE->value
                ],
                'message' => 'Solicitud actualizada exitosamente'
            ]);

        $this->assertDatabaseHas('solicitudes', $nuevosDatos);
    }

    /** @test */
    public function puede_eliminar_una_solicitud()
    {
        $solicitud = Solicitud::factory()->create();

        $response = $this->deleteJson("/api/solicitudes/{$solicitud->id}");

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'Solicitud eliminada exitosamente'
            ]);

        $this->assertDatabaseMissing('solicitudes', ['id' => $solicitud->id]);
    }

    /** @test */
    public function valida_los_campos_requeridos_al_crear_una_solicitud()
    {
        $response = $this->postJson('/api/solicitudes', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors([
                'usuario_id',
                'direccion_recojo',
                'tamano_residuo',
                'tipo_residuo'
            ]);
    }

    /** @test */
    public function valida_el_formato_de_los_enums()
    {
        $response = $this->postJson('/api/solicitudes', [
            'usuario_id' => 1,
            'direccion_recojo' => 'Calle Test 123',
            'tamano_residuo' => 'invalido',
            'tipo_residuo' => 'invalido'
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['tamano_residuo', 'tipo_residuo']);
    }
} 