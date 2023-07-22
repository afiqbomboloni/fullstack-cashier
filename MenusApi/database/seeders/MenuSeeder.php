<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for($i = 0; $i < 10; $i++) {
            Menu::insert([
                'name' => $faker->sentence,
                'category' => $faker->sentence,
                'price' => $faker->randomDigit,
                'image' => $faker->imageUrl($width = 200, $height = 200)
            ]);
        }
    }
}
