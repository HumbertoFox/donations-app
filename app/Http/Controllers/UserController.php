<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Zipcode;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function edit($id): Response
    {
        $user = User::findOrFail($id);
        $cpf = $user->cpf;
        $address = $user->address;
        $zipcode = $address->zipcode;
        $phone = $user->phone;
        return Inertia::render('User/Edit', [
            'user' => $user,
            'cpf' => $cpf,
            'address' => $address,
            'zipcode' => $zipcode,
            'phone' => $phone,
        ]);
    }

    public function update(UserRequest $request): RedirectResponse
    {
        $user = User::findOrFail($request->id);

        $request->validated();

        $user->cpf()->update(
            [
                'name' => $request->input('name'),
                'birthdate' => $request->input('birthdate'),
            ]
        );

        $user->phone()->updateOrCreate(
            ['id' => $user->phone_id],
            [
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
            ]
        );

        $zipcodeData = [
            'zipcode' => $request->input('zipcode'),
            'city' => $request->input('city'),
            'district' => $request->input('district'),
            'street' => $request->input('street'),
        ];
        $zipcode = Zipcode::updateOrCreate(
            ['id' => $user->address->zipcode_id],
            $zipcodeData,
        );

        $addressData = [
            'zipcode_id' => $zipcode->id,
            'number_residence' => $request->input('number_residence'),
            'type_residence' => $request->input('type_residence'),
            'building' => $request->input('building'),
            'block' => $request->input('block'),
            'livingapartmentroom' => $request->input('livingapartmentroom'),
            'reference_point' => $request->input('reference_point'),
        ];

        $user->address()->updateOrCreate(
            ['id' => $user->address_id],
            $addressData,
        );


        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        };

        $user->update(
            [
                'name' => $request->name,
                'email' => $request->email,
            ]
        );

        return Redirect::route('user.edit', [
            $user->id,
            session()->flash('success', 'Usuário atualizado com Sucesso!'),
        ]);
    }
}