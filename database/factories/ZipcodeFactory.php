<?php

namespace Database\Factories;

use App\Models\Zipcode;
use Illuminate\Database\Eloquent\Factories\Factory;

class ZipcodeFactory extends Factory
{
    protected $model = Zipcode::class;

    public function definition(): array
    {
        return [
            'zipcode' => $this->faker->unique()->numerify('########'),
            'city' => $this->faker->city(),
            'district' => $this->faker->word(),
            'street' => $this->faker->streetName(),
        ];
    }
}