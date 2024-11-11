<?php

namespace Database\Factories;

use App\Models\Cnh;
use App\Models\Cpf;
use Illuminate\Database\Eloquent\Factories\Factory;

class CnhFactory extends Factory
{
    protected $model = Cnh::class;

    public function definition(): array
    {
        return [
            'cnh' => $this->faker->unique()->numerify('###########'),
            'cpf_id' => Cpf::factory(),
        ];
    }
}