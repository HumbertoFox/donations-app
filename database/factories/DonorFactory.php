<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Cnpj;
use App\Models\Donor;
use App\Models\Phone;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DonorFactory extends Factory
{
    protected $model = Donor::class;

    public function definition(): array
    {
        $user = User::inRandomOrder()->first();

        $cnpj = $this->faker->boolean(50) ? Cnpj::factory()->create() : null;

        return [
            'name' => $this->faker->name(),
            'phone_id' => Phone::factory()->withEmail(),
            'cnpj_id' => $cnpj ? $cnpj->id : null,
            'address_id' => Address::factory(),
            'user_id' => $user->id,
        ];
    }
}