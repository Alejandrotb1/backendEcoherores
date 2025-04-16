<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;  

class RoleSeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */


    public function run()
    {
        Role::create([
            'name' => 'Admin',
            'description' => 'Administrator Role',
            'status' => 1,
        ]);

        Role::create([
            'name' => 'User',
            'description' => 'Regular User Role',
            'status' => 1, 
        ]);
    }
}




