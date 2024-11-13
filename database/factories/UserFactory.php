<?php

namespace Database\Factories;

use App\Models\Address;
use App\Models\Cpf;
use App\Models\Phone;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserFactory extends Factory
{

    protected static ?string $password;

    public function definition(): array
    {
        $cpf = Cpf::factory()->create();

        return [
            'name' => $cpf->name,
            'cpf_id' => $cpf->id,
            'phone_id' => Phone::factory(),
            'email' => fake()->unique()->safeEmail(),
            'address_id' => Address::factory(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}