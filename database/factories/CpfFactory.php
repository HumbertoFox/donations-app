<?php

namespace Database\Factories;

use App\Models\Cpf;
use Illuminate\Database\Eloquent\Factories\Factory;

class CpfFactory extends Factory
{
    protected $model = Cpf::class;

    public function definition(): array
    {
        return [
            'cpf' => $this->faker->unique()->numerify('###########'),
            'name' => $this->faker->name(),
            'birthdate' => $this->faker->date(),
        ];
    }
}