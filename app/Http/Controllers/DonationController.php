<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DonationController extends Controller
{
    public function register($id)
    {
        $donor = Donor::findOrFail($id);
        $cnpj = $donor->cnpj;
        $phone = $donor->phone;
        $address = $donor->address;
        $zipcode = $address->zipcode;

        return Inertia::render('Menu/RegisterDonation', [
            'donor' => $donor,
            'cnpj' => $cnpj,
            'phone' => $phone,
            'address' => $address,
            'zipcode' => $zipcode
        ]);
    }

    public function store(Request $request)
    {
        $request->validate(
            []
        );
    }

    public function edit()
    {
        return Inertia::render('Menu/EditDonation');
    }
}