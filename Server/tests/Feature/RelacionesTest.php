<?php

namespace Tests\Feature;

use App\Models\Historial;
use App\Models\Solicitud;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RelacionesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function usuario_puede_tener_solicitudes_y_historiales()
    {
        // Crear un usuario
        $usuario = User::factory()->create();

        // Crear una solicitud para el usuario
        $solicitud = Solicitud::factory()->create([
            'usuario_id' => $usuario->id
        ]);

        // Crear un historial para la solicitud
        $historial = Historial::factory()->create([
            'usuario_id' => $usuario->id,
            'solicitud_id' => $solicitud->id
        ]);

        // Verificar que el usuario tiene la solicitud
        $this->assertTrue($usuario->solicitudes->contains($solicitud));
        
        // Verificar que el usuario tiene el historial
        $this->assertTrue($usuario->historiales->contains($historial));
        
        // Verificar que la solicitud tiene el historial
        $this->assertTrue($solicitud->historiales->contains($historial));
        
        // Verificar que el historial pertenece al usuario
        $this->assertEquals($usuario->id, $historial->usuario->id);
        
        // Verificar que el historial pertenece a la solicitud
        $this->assertEquals($solicitud->id, $historial->solicitud->id);
    }

    /** @test */
    public function solicitud_puede_tener_historiales()
    {
        // Crear una solicitud
        $solicitud = Solicitud::factory()->create();

        // Crear varios historiales para la solicitud
        $historiales = Historial::factory()->count(3)->create([
            'solicitud_id' => $solicitud->id
        ]);

        // Verificar que la solicitud tiene los historiales
        $this->assertCount(3, $solicitud->historiales);
        
        // Verificar que cada historial pertenece a la solicitud
        foreach ($historiales as $historial) {
            $this->assertEquals($solicitud->id, $historial->solicitud->id);
        }
    }

    /** @test */
    public function usuario_puede_tener_historiales_de_varias_solicitudes()
    {
        // Crear un usuario
        $usuario = User::factory()->create();

        // Crear varias solicitudes para el usuario
        $solicitudes = Solicitud::factory()->count(2)->create([
            'usuario_id' => $usuario->id
        ]);

        // Crear historiales para cada solicitud
        foreach ($solicitudes as $solicitud) {
            Historial::factory()->count(2)->create([
                'usuario_id' => $usuario->id,
                'solicitud_id' => $solicitud->id
            ]);
        }

        // Verificar que el usuario tiene 4 historiales en total
        $this->assertCount(4, $usuario->historiales);
        
        // Verificar que cada historial pertenece al usuario
        foreach ($usuario->historiales as $historial) {
            $this->assertEquals($usuario->id, $historial->usuario->id);
        }
    }
} 