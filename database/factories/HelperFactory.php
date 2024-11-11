<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Cpf;
use App\Models\Helper;
use App\Models\Phone;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class HelperFactory extends Factory
{
    protected $model = Helper::class;

    public function definition(): array
    {
        $user = User::inRandomOrder()->first();

        return [
            'cpf_id' => Cpf::factory(),
            'phone_id' => Phone::factory()->withEmail(),
            'address_id' => Address::factory(),
            'user_id' => $user->id,
        ];
    }
}