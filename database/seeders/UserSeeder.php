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
            [
                'name' => 'Gustavo',
                'password' => bcrypt('123456A#'),
                'acess_level' => 1, // Administrador
            ]
        );

        User::firstOrCreate(
            ['email' => 'joao@icloud.com'],
            [
                'name' => 'Joao',
                'password' => bcrypt('123456A#'),
                'acess_level' => 2, // Moderador
            ]
        );

        User::firstOrCreate(
            ['email' => 'silva@icloud.com'],
            [
                'name' => 'Maria',
                'password' => bcrypt('123456A#'),
                'acess_level' => 3, // Leitor
            ]
        );

        User::firstOrCreate(
            ['email' => 'jose@icloud.com'],
            [
                'name' => 'Jose',
                'password' => bcrypt('123456A#'),
                'acess_level' => 3, // Leitor
            ]
        );
    }
}
