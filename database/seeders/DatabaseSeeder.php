<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Cpf;
use App\Models\Donor;
use App\Models\Driver;
use App\Models\Helper;
use App\Models\Phone;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(2)->create();

        User::firstOrCreate(
            ['email' => 'betofoxnet.info@betofoxnet.com.br'],
            [
                'name' => 'Humberto Ribeiro',
                'cpf_id' => Cpf::factory()->create()->id,
                'phone_id' => Phone::factory()->create()->id,
                'address_id' => Address::factory()->create()->id,
                'password' => Hash::make('Betofoxnet@Laravel'),
            ]
        );

        Vehicle::factory()->count(5)->create();
        Driver::factory()->count(5)->create();
        Helper::factory()->count(10)->create();
        Donor::factory()->count(20)->create();
    }
}