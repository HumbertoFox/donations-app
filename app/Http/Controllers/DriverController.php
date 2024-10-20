<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Cnh;
use App\Models\Cpf;
use App\Models\Driver;
use App\Models\Phone;
use App\Models\Zipcode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DriverController extends Controller
{
    public function register()
    {
        return Inertia::render('Driver/RegisterDriver');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'cpf' => 'required|string|max:11',
                'birthdate' => 'required|date',
                'cnh' => 'required|string|max:11|unique:cnhs,cnh',
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

        $cnh = Cnh::firstOrCreate(
            [
                'cnh' => $request->cnh,
                'cpf_id' => $cpf->id
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

        Driver::create(
            [
                'cnh_id' => $cnh->id,
                'phone_id' => $phone->id,
                'address_id' => $address->id,
                'user_id' => $userId
            ]
        );
    }

    public function index()
    {
        $drivers = Driver::with('cnh.cpf')->get();
        return Inertia::render('Driver/Show', [
            'drivers' => $drivers
        ]);
    }

    public function edit()
    {
        return Inertia::render('Driver/EditDriver');
    }
}