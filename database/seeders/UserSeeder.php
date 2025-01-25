<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'vurdel@icloud.com'],
            ['name' => 'Gustavo', 'email' => 'vurdel@icloud.com',
            'password' => '123456A#']
        );

        User::firstOrCreate(
            ['email' => 'santos@icloud.com'],
            ['name' => 'Joao', 'email' => 'joao@icloud.com',
            'password' => '123456A#']
        ); 

        User::firstOrCreate(
            ['email' => 'silva@icloud.com'],
            ['name' => 'Maria', 'email' => 'silva@icloud.com',
            'password' => '123456A#']
        );

        User::firstOrCreate(
            ['email' => 'santos@icloud.com'],
            ['name' => 'Jose', 'email' => 'santos@icloud.com',
            'password' => '123456A#']
        );
            
    }
}
