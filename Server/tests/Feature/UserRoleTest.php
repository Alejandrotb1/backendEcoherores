<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;

class UserRoleTest extends TestCase
{
    public function test_admin_user_exists()
    {
        $admin = User::where('email', 'admin@ecoheroes.com')->first();
        $this->assertNotNull($admin);
        $this->assertEquals(1, $admin->role_id);
    }

    public function test_second_admin_exists()
    {
        $admin = User::where('email', 'admin@ecoheroe7s.com')->first();
        $this->assertNotNull($admin);
        $this->assertEquals(2, $admin->role_id);
    }
}