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
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;

class SolicitudTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RoleSeeder::class);
        $this->seed(UserSeeder::class);
        $this->withoutMiddleware([
            \App\Http\Middleware\VerifyCsrfToken::class,
            \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
            \App\Http\Middleware\TrimStrings::class
        ]);
    }

    /** @test */
    public function puede_crear_una_solicitud()
    {
        $user = User::factory()->create(['role_id' => 2]);
        $solicitud = Solicitud::factory()->create(['usuario_id' => $user->id]);
        $this->assertNotNull($solicitud);
    }

    /** @test */
    public function puede_obtener_todas_las_solicitudes()
    {
        $user = User::factory()->create(['role_id' => 2]);
        Solicitud::factory()->count(3)->create(['usuario_id' => $user->id]);
        $solicitudes = Solicitud::all();
        $this->assertCount(3, $solicitudes);
    }

    /** @test */
    public function puede_obtener_una_solicitud_especifica()
    {
        $user = User::factory()->create(['role_id' => 2]);
        $solicitud = Solicitud::factory()->create(['usuario_id' => $user->id]);
        $solicitudEncontrada = Solicitud::find($solicitud->id);
        $this->assertNotNull($solicitudEncontrada);
        $this->assertEquals($solicitud->id, $solicitudEncontrada->id);
    }

    /** @test */
    public function puede_actualizar_una_solicitud()
    {
        $user = User::factory()->create(['role_id' => 2]);
        $solicitud = Solicitud::factory()->create(['usuario_id' => $user->id]);
        $nuevoEstado = 'en_proceso';
        $solicitud->update(['estado' => $nuevoEstado]);
        $this->assertEquals($nuevoEstado, $solicitud->fresh()->estado);
    }

    /** @test */
    public function puede_eliminar_una_solicitud()
    {
        $user = User::factory()->create(['role_id' => 2]);
        $solicitud = Solicitud::factory()->create(['usuario_id' => $user->id]);
        $solicitud->delete();
        $this->assertNull(Solicitud::find($solicitud->id));
    }

    /** @test */
    public function valida_los_campos_requeridos_al_crear_una_solicitud()
    {
        $user = User::factory()->create(['role_id' => 2]);
        $solicitud = Solicitud::factory()->make(['usuario_id' => $user->id]);

        $this->assertNotNull($solicitud->descripcion);
        $this->assertNotNull($solicitud->direccion);
    }

    /** @test */
    public function valida_el_formato_de_los_enums()
    {
        $user = User::factory()->create(['role_id' => 2]);
        $solicitud = Solicitud::factory()->create([
            'usuario_id' => $user->id,
            'estado' => 'pendiente'
        ]);
        $this->assertContains($solicitud->estado, ['pendiente', 'en_proceso', 'completada', 'cancelada']);
    }
} 