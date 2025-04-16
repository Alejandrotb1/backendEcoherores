<?php

namespace Tests\Feature;

use App\Models\Recolector;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RecolectorTest extends TestCase
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
    public function puede_crear_un_recolector()
    {
        $recolector = Recolector::factory()->create();

        $this->assertDatabaseHas('recolectores', [
            'id' => $recolector->id,
            'nombre' => $recolector->nombre,
            'apellido' => $recolector->apellido,
            'ci' => $recolector->ci,
        ]);
    }

    /** @test */
    public function puede_crear_multiples_recolectores_con_el_seeder()
    {
        $this->seed(\Database\Seeders\RecolectorSeeder::class);

        $recolectoresActivos = Recolector::where('estado', 'activo')->count();
        $recolectoresInactivos = Recolector::where('estado', 'inactivo')->count();

        $this->assertEquals(10, $recolectoresActivos);
        $this->assertEquals(5, $recolectoresInactivos);
    }

    /** @test */
    public function puede_obtener_todos_los_recolectores()
    {
        Recolector::factory()->count(5)->create();

        $response = $this->getJson('/api/recolectores');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'current_page',
                    'data' => [
                        '*' => [
                            'nombre',
                            'apellido',
                            'ci',
                            'telefono',
                            'email',
                            'direccion',
                            'licencia',
                            'estado'
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
    public function puede_obtener_un_recolector_especifico()
    {
        $recolector = Recolector::factory()->create();

        $response = $this->getJson("/api/recolectores/{$recolector->id}");

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    'nombre' => $recolector->nombre,
                    'apellido' => $recolector->apellido,
                    'ci' => $recolector->ci,
                    'telefono' => $recolector->telefono,
                    'email' => $recolector->email,
                    'direccion' => $recolector->direccion,
                    'licencia' => $recolector->licencia,
                    'estado' => $recolector->estado
                ],
                'message' => 'Detalles del recolector obtenidos'
            ]);
    }

    /** @test */
    public function puede_actualizar_un_recolector()
    {
        $recolector = Recolector::factory()->create();
        $nuevosDatos = [
            'nombre' => 'Nuevo Nombre',
            'apellido' => 'Nuevo Apellido',
            'estado' => 'inactivo'
        ];

        $response = $this->putJson("/api/recolectores/{$recolector->id}", $nuevosDatos);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'data' => [
                    'nombre' => 'Nuevo Nombre',
                    'apellido' => 'Nuevo Apellido',
                    'estado' => 'inactivo'
                ],
                'message' => 'Recolector actualizado exitosamente'
            ]);

        $this->assertDatabaseHas('recolectores', $nuevosDatos);
    }

    /** @test */
    public function puede_eliminar_un_recolector()
    {
        $recolector = Recolector::factory()->create();

        $response = $this->deleteJson("/api/recolectores/{$recolector->id}");

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Recolector eliminado exitosamente'
            ]);

        $this->assertDatabaseMissing('recolectores', ['id' => $recolector->id]);
    }

    /** @test */
    public function valida_los_campos_requeridos_al_crear_un_recolector()
    {
        $response = $this->postJson('/api/recolectores', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['nombre', 'apellido', 'ci']);
    }

    /** @test */
    public function valida_el_formato_de_la_licencia()
    {
        $response = $this->postJson('/api/recolectores', [
            'nombre' => 'Test',
            'apellido' => 'Test',
            'ci' => '12345678',
            'licencia' => 'X' // Licencia inválida
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['licencia']);
    }
} 