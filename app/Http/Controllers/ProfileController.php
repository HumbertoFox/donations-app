<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use App\Models\Zipcode;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function index(): Response
    {
        $users = User::with([
            'cpf',
            'phone',
            'address.zipcode',
        ])
            ->where('id', '!=', Auth::user()->id)
            ->paginate(10);

        return Inertia::render('Profile/Index', [
            'users' => $users
        ]);
    }

    public function edit(Request $request): Response
    {
        $user = $request->user();
        $cpf = $user->cpf;
        $address = $user->address;
        $zipcode = $address->zipcode;
        $phone = $user->phone;

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'cpf' => $cpf,
            'address' => $address,
            'zipcode' => $zipcode,
            'phone' => $phone
        ]);
    }

    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user();

        $user->fill($request->validated());

        $user->cpf()->update(
            [
                'name' => $request->input('name'),
                'birthdate' => $request->input('birthdate')
            ]
        );

        $user->phone()->updateOrCreate(
            ['id' => $user->phone_id],
            [
                'phone' => $request->input('phone'),
                'email' => $request->input('email')
            ]
        );

        $zipcodeData = [
            'zipcode' => $request->input('zipcode'),
            'city' => $request->input('city'),
            'district' => $request->input('district'),
            'street' => $request->input('street')
        ];
        $zipcode = Zipcode::updateOrCreate(
            ['id' => $user->address->zipcode_id],
            $zipcodeData
        );

        $addressData = [
            'zipcode_id' => $zipcode->id,
            'number_residence' => $request->input('number_residence'),
            'type_residence' => $request->input('type_residence'),
            'building' => $request->input('building'),
            'block' => $request->input('block'),
            'livingapartmentroom' => $request->input('livingapartmentroom'),
            'reference_point' => $request->input('reference_point')
        ];

        $user->address()->updateOrCreate(
            ['id' => $user->address_id],
            $addressData
        );


        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        };

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}