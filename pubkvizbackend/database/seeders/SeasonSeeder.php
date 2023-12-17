<?php

namespace Database\Seeders;

use App\Models\Season;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SeasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Season::create([
            'name'=>'2021/2022',
            'start_date'=>'2021-10-01',
            'end_date'=>'2022-07-01'
        ]);

        Season::create([
            'name'=>'2022/2023',
            'start_date'=>'2022-10-01',
            'end_date'=>'2023-07-01'
        ]);
    }
}
