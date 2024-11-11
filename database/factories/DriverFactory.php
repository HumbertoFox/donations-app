<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Cnh;
use App\Models\Driver;
use App\Models\Phone;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DriverFactory extends Factory
{
    protected $model = Driver::class;

    public function definition(): array
    {
        $user = User::inRandomOrder()->first();

        return [
            'cnh_id' => Cnh::factory(),
            'phone_id' => Phone::factory()->withEmail(),
            'address_id' => Address::factory(),
            'user_id' => $user->id,
        ];
    }
}