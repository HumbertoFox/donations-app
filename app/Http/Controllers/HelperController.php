<?php

namespace App\Http\Controllers;

use App\Http\Requests\HelperRequest;
use App\Models\Address;
use App\Models\Cpf;
use App\Models\Helper;
use App\Models\Phone;
use App\Models\Zipcode;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HelperController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Helper/RegisterHelper');
    }

    public function store(HelperRequest $request)
    {
        $request->validate();

        $userId = Auth::id();

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

        Helper::create(
            [
                'cpf_id' => $cpf->id,
                'phone_id' => $phone->id,
                'address_id' => $address->id,
                'user_id' => $userId,
            ]
        );

        session()->flash('success', 'Ajudante Cadastrado com Sucesso!');
    }

    public function index(): Response
    {
        $helpers = Helper::with('cpf')->paginate(10);
        return Inertia::render('Helper/ShowHelper', [
            'helpers' => $helpers,
        ]);
    }

    public function edit($id): Response
    {
        $helper = Helper::findOrFail($id);
        $cpf = $helper->cpf;
        $phone = $helper->phone;
        $address = $helper->address;
        $zipcode = $address->zipcode;

        return Inertia::render('Helper/EditHelper', [
            'helper' => $helper,
            'cpf' => $cpf,
            'phone' => $phone,
            'address' => $address,
            'zipcode' => $zipcode,
        ]);
    }

    public function update(HelperRequest $request, $id)
    {
        $request->validate();

        $cpf = Cpf::where('cpf', $request->cpf)->first();

        $cpf->update(
            [
                'name' => $request->name,
                'birthdate' => $request->birthdate,
            ]
        );

        $zipcode = Zipcode::updateOrCreate(
            ['zipcode' => $request->zipcode],
            [
                'city' => $request->city,
                'district' => $request->district,
                'street' => $request->street,
            ]
        );

        $address = Address::updateOrCreate(
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

        $phone = Phone::updateOrCreate(
            ['phone' => $request->phone],
            ['email' => $request->email],
        );

        $helper = Helper::find($id);

        $helper->update(
            [
                'phone_id' => $phone->id,
                'address_id' => $address->id,
            ]
        );

        session()->flash('success', 'Ajudante Atualizado com Sucesso!');
    }
}