<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Cpf;
use App\Models\Helper;
use App\Models\Phone;
use App\Models\Zipcode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HelperController extends Controller
{
    public function register()
    {
        return Inertia::render('Helper/RegisterHelper');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'cpf' => 'required|string|max:11',
                'birthdate' => 'required|date',
                'phone' => 'required|string|max:15',
                'email' => 'required|string|lowercase|email|max:255',
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

        $cpf = Cpf::firstOrCreate(
            ['cpf' => $request->cpf],
            [
                'name' => $request->name,
                'birthdate' => $request->birthdate
            ]
        );

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
                'type_residence' => $request->type_residence,
                'reference_point' => $request->reference_point,
                'building' => $request->building,
                'block' => $request->block,
                'livingapartmentroom' => $request->livingapartmentroom
            ]
        );

        $phone = Phone::firstOrCreate(
            ['phone' => $request->phone],
            ['email' => $request->email]
        );

        Helper::create(
            [
                'cpf_id' => $cpf->id,
                'phone_id' => $phone->id,
                'address_id' => $address->id,
                'user_id' => $userId
            ]
        );
    }

    public function index()
    {
        $helpers = Helper::with('cpf')->get();
        return Inertia::render('Helper/Show', [
            'helpers' => $helpers
        ]);
    }

    public function edit()
    {
        return Inertia::render('Helper/EditHelper');
    }
}