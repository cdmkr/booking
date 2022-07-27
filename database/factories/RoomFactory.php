<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rooms>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        $name =  "Room: ". $this->faker->name('female');


        return [
            'name' =>  $name,
            'thumbnail' => $this->faker->imageUrl,
            'price' => $this->faker->numberBetween(100, 3500),
            'check_in' => $this->faker->unique()->dateTimeBetween('-2 week', '-1 week'),
            'check_out' => $this->faker->unique()->dateTimeBetween('-1 week')

        ];
    }
}
