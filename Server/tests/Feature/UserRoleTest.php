<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Database\Seeders\RoleSeeder;
use Database\Seeders\UserSeeder;

class UserRoleTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RoleSeeder::class);
        $this->seed(UserSeeder::class);
    }

    public function test_admin_user_exists()
    {
        $admin = User::where('email', 'admin@ecoheroes.com')->first();
        $this->assertNotNull($admin);
        $this->assertEquals(1, $admin->role_id);
    }

    public function test_second_admin_exists()
    {
        $admin = User::where('email', 'admin2@ecoheroes.com')->first();
        $this->assertNotNull($admin);
        $this->assertEquals(2, $admin->role_id);
    }

    public function test_user_creation()
    {
        $user = User::create([
            'name' => 'Test User',
            'email' => 'test@ecoheroes.com',
            'phone' => '0987654321',
            'password' => bcrypt('password'),
            'status' => 'active',
            'role_id' => 2,
        ]);
        $this->assertNotNull($user);
        $this->assertEquals(2, $user->role_id);
    }
}