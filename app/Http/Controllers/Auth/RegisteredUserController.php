<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\Address;
use App\Models\Cpf;
use App\Models\Phone;
use App\Models\User;
use App\Models\Zipcode;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function store(UserRequest $request): RedirectResponse
    {
        $request->validated();

        $cpf = Cpf::firstOrCreate(
            ['cpf' => $request->cpf],
            [
                'name' => $request->name,
                'birthdate' => $request->birthdate,
            ]
        );

        $zipcode = Zipcode::firstOrCreate(
            ['zipcode' => $request->zipcode],
            [
                'city' => $request->city,
                'district' => $request->district,
                'street' => $request->street,
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
                'livingapartmentroom' => $request->livingapartmentroom,
            ]
        );

        $phone = Phone::firstOrCreate(
            ['phone' => $request->phone],
            ['email' => $request->email],
        );

        $user = User::create(
            [
                'name' => $request->name,
                'cpf_id' => $cpf->id,
                'address_id' => $address->id,
                'email' => $request->email,
                'phone_id' => $phone->id,
                'password' => Hash::make($request->password),
            ]
        );

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}