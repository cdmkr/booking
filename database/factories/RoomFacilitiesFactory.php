<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RoomFacilities>
 */
class RoomFacilitiesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'size'=>$this->faker->numberBetween(16,95),
            "bedrooms" => $this->faker->numberBetween(1,3),
            'parking' => $this->faker->numberBetween(0,1),
            'wi_fi' => $this->faker->numberBetween(0,1)
        ];
    }
}
