<?php

namespace Database\Factories;

use App\Models\Phone;
use Illuminate\Database\Eloquent\Factories\Factory;

class PhoneFactory extends Factory
{
    protected $model = Phone::class;

    public function definition(): array
    {
        return [
            'phone' => $this->faker->numerify('##9########'),
            'contact' => $this->faker->numerify('##9########'),
            'contact_old' => $this->faker->optional()->numerify('##########'),
            'email' => $this->faker->optional()->safeEmail(),
        ];
    }
}