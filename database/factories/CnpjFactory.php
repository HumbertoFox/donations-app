<?php

namespace Database\Factories;

use App\Models\Cnpj;
use Illuminate\Database\Eloquent\Factories\Factory;

class CnpjFactory extends Factory
{
    protected $model = Cnpj::class;

    public function definition(): array
    {
        return [
            'cnpj' => $this->faker->unique()->numerify('##############'),
            'corporatename' => $this->faker->company,
        ];
    }
}