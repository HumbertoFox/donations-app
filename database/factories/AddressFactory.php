<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Zipcode;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    protected $model = Address::class;

    public function definition(): array
    {
        $typeResidence = $this->faker->randomElement(['house', 'buildings']);

        if ($typeResidence == 'buildings') {
            return [
                'zipcode_id' => Zipcode::factory(),
                'type_residence' => $typeResidence,
                'number_residence' => $this->faker->buildingNumber(),
                'building' => $this->faker->company(),
                'block' => $this->faker->word(),
                'livingapartmentroom' => $this->faker->buildingNumber(),
                'reference_point' => $this->faker->streetName(),
            ];
        }

        return [
            'zipcode_id' => Zipcode::factory(),
            'type_residence' => $typeResidence,
            'number_residence' => $this->faker->buildingNumber(),
            'building' => null,
            'block' => null,
            'livingapartmentroom' => null,
            'reference_point' => $this->faker->streetName(),
        ];
    }
}