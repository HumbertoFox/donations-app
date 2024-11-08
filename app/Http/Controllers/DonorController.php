<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Cnpj;
use App\Models\Donor;
use App\Models\Phone;
use App\Models\Zipcode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DonorController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Menu/RegisterDonor');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'phone' => 'required|string|max:15|unique:phones,phone',
                'contact' => 'required|string|max:30',
                'contact_old' => 'nullable|string|max:30',
                'cnpj' => 'nullable|string|max:255|unique:cnpjs,cnpj',
                'corporatename' => 'nullable|string|max:255',
                'zipcode' => 'required|string|max:9',
                'city' => 'required|string|max:255',
                'district' => 'required|string|max:255',
                'street' => 'required|string|max:255',
                'number_residence' => 'required|string|max:50',
                'type_residence' => 'required|string|max:10',
                'building' => 'nullable|string|max:255',
                'block' => 'nullable|string|max:50',
                'livingapartmentroom' => 'nullable|string|max:50',
                'reference_point' => 'nullable|string|max:255'
            ]
        );

        $userId = Auth::id();

        $cnpjId = null;
        if ($request->cnpj) {
            $cnpj = Cnpj::firstOrCreate(
                ['cnpj' => $request->cnpj],
                ['corporatename' => $request->corporatename]
            );
            $cnpjId = $cnpj->id;
        }

        $zipcode = Zipcode::firstOrCreate(
            ['zipcode' => $request->zipcode],
            [
                'city' => $request->city,
                'district' => $request->district,
                'street' => $request->street
            ]
        );

        $address = Address::firstOrCreate(
            [
                'zipcode_id' => $zipcode->id,
                'number_residence' => $request->number_residence,
                'building' => $request->building,
                'block' => $request->block,
                'livingapartmentroom' => $request->livingapartmentroom
            ],
            [
                'type_residence' => $request->type_residence,
                'reference_point' => $request->reference_point
            ]
        );

        $phone = Phone::firstOrCreate(
            ['phone' => $request->phone],
            [
                'contact' => $request->contact,
                'contact_old' => $request->contact_old
            ]
        );

        $donor = Donor::create(
            [
                'name' => $request->name,
                'phone_id' => $phone->id,
                'cnpj_id' => $cnpjId,
                'address_id' => $address->id,
                'user_id' => $userId
            ]
        );

        session()->flash('success', 'Doador ' . $donor->name . ' Cadastrado com Sucesso!');
        session()->flash('donor_id', $donor->id);
    }

    public function index(): Response
    {
        $donors = Donor::with([
            'phone',
            'address.zipcode'
        ])
            ->paginate(10);

        return Inertia::render('Menu/Donors', [
            'donors' => $donors,
        ]);
    }

    public function edit($id): Response
    {
        $donor = Donor::findOrFail($id);
        $cnpj = $donor->cnpj;
        $phone = $donor->phone;
        $address = $donor->address;
        $zipcode = $address->zipcode;

        return Inertia::render('Menu/EditDonor', [
            'donor' => $donor,
            'cnpj' => $cnpj,
            'phone' => $phone,
            'address' => $address,
            'zipcode' => $zipcode
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:15|exists:phones,phone',
            'contact' => 'required|string|max:30',
            'contact_old' => 'nullable|string|max:30',
            'cnpj' => 'nullable|string|max:255|exists:cnpjs,cnpj',
            'corporatename' => 'nullable|string|max:255',
            'zipcode' => 'required|string|max:9',
            'city' => 'required|string|max:255',
            'district' => 'required|string|max:255',
            'street' => 'required|string|max:255',
            'number_residence' => 'required|string|max:50',
            'type_residence' => 'required|string|max:10',
            'building' => 'nullable|string|max:255',
            'block' => 'nullable|string|max:50',
            'livingapartmentroom' => 'nullable|string|max:50',
            'reference_point' => 'nullable|string|max:255'
        ]);

        $cnpjId = null;
        if ($request->cnpj) {
            $cnpj = Cnpj::updateOrCreate(
                ['cnpj' => $request->cnpj],
                ['corporatename' => $request->corporatename]
            );
            $cnpjId = $cnpj->id;
        }

        $zipcode = Zipcode::updateOrCreate(
            ['zipcode' => $request->zipcode],
            [
                'city' => $request->city,
                'district' => $request->district,
                'street' => $request->street
            ]
        );

        $address = Address::updateOrCreate(
            [
                'zipcode_id' => $zipcode->id,
                'number_residence' => $request->number_residence,
                'building' => $request->building,
                'block' => $request->block,
                'livingapartmentroom' => $request->livingapartmentroom
            ],
            [
                'reference_point' => $request->reference_point,
                'type_residence' => $request->type_residence
            ]
        );

        $phone = Phone::updateOrCreate(
            ['phone' => $request->phone],
            [
                'contact' => $request->contact,
                'contact_old' => $request->contact_old
            ]
        );

        $donor = Donor::find($id);

        $donor->update(
            [
                'name' => $request->name,
                'cnpj_id' => $cnpjId,
                'address_id' => $address->id,
                'phone_id' => $phone->id,
                'address_id' => $address->id,
            ]
        );

        session()->flash('success', 'Doador Atualizado com Sucesso!');
    }
}