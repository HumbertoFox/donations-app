<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Cpf;
use App\Models\Phone;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Humberto Ribeiro',
            'cpf_id' => Cpf::factory()->create()->id,
            'phone_id' => Phone::factory()->create()->id,
            'address_id' => Address::factory()->create()->id,
            'email' => 'betofoxnet.info@betofoxnet.com.br',
            'password' => Hash::make('Betofoxnet@Laravel'),
        ]);
    }
}