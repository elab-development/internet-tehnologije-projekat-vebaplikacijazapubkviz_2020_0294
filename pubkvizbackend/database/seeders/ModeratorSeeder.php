<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ModeratorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'username' => 'moderator1',
            'email' => 'moderator1@example.com',
            'password' => Hash::make('moderator1'),
            'full_name' => 'Pera Peric',
            'role' => 'moderator'
        ]);

        User::create([
            'username' => 'moderator2',
            'email' => 'moderator2@example.com',
            'password' => Hash::make('moderator2'),
            'full_name' => 'Zika Zikic',
            'role' => 'moderator'
        ]);
    }
}
