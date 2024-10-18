<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Cpf;
use App\Models\Phone;
use App\Models\User;
use App\Models\Zipcode;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'cpf' => 'required|string|max:11|unique:cpfs,cpf',
                'birthdate' => 'required|date',
                'phone' => 'required|string|max:15|unique:phones,phone',
                'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
                'zipcode' => 'required|string|max:9',
                'city' => 'required|string|max:255',
                'district' => 'required|string|max:255',
                'street' => 'required|string|max:255',
                'number_residence' => 'required|string|max:50',
                'type_residence' => 'required|string|max:10',
                'building' => 'nullable|string|max:255',
                'block' => 'nullable|string|max:50',
                'livingapartmentroom' => 'nullable|string|max:50',
                'reference_point' => 'nullable|string|max:255',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]
        );

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