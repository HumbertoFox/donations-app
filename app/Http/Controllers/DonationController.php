<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\Donor;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $validatedData = $request->validate([
            'donorcode' => 'required|integer|exists:donors,id',
            'donationcode' => 'nullable|integer',
        ]);

        $objectRules = [];
        for ($i = 1; $i <= 20; $i++) {
            $objectRules["object{$i}"] = 'nullable|string|max:255';
            $objectRules["quant{$i}"] = 'nullable|integer|min:1';
        }

        $validatedData = array_merge($validatedData, $request->validate($objectRules));

        $userId = Auth::id();

        $donation = new Donation();
        $donation->user_id = $userId;
        $donation->donor_id = $validatedData['donorcode'];
        $donation->save();

        for ($i = 1; $i <= 20; $i++) {
            $objectName = $validatedData["object{$i}"] ?? null;
            $objectQuantity = $validatedData["quant{$i}"] ?? null;

            if (!empty($objectName) && !empty($objectQuantity)) {
                $item = Item::where('item', $objectName)->first();

                if (!$item) {
                    $item = Item::create([
                        'item' => $objectName,
                        'user_id' => $userId
                    ]);
                }

                $donation->donation_item()->create([
                    'item_id' => $item->id,
                    'quantity' => $objectQuantity,
                    'user_id' => $userId
                ]);
            }
        }
    }

    public function edit()
    {
        return Inertia::render('Menu/EditDonation');
    }
}