<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

class VehicleFactory extends Factory
{
    protected $model = Vehicle::class;

    public function definition(): array
    {
        $user = User::inRandomOrder()->first();

        return [
            'renavam' => $this->faker->regexify('[0-9]{11}'),
            'plate' => $this->faker->regexify('[A-Z]{3}[0-9]{4}'),
            'km' => $this->faker->numberBetween(0, 30000),
            'model' => $this->faker->word(),
            'automaker' => $this->faker->company(),
            'user_id' => $user->id,
        ];
    }
}