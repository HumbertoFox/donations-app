<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Models\Vehicle;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class VehicleController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Vehicle/RegisterVehicle');
    }

    public function store(VehicleRequest $request)
    {
        $request->validate();

        $userId = Auth::id();

        Vehicle::create(
            [
                'renavam' => $request->renavam,
                'plate' => $request->plate,
                'km' => $request->km,
                'model' => $request->model,
                'automaker' => $request->automaker,
                'user_id' => $userId,
            ]
        );

        session()->flash('success', 'Veículo cadastrado com sucesso!');
    }

    public function index(): Response
    {
        $vehicles = Vehicle::paginate(10);
        return Inertia::render('Vehicle/ShowVehicle', [
            'vehicles' => $vehicles,
        ]);
    }

    public function edit($id): Response
    {
        $vehicle = Vehicle::findOrFail($id);
        return Inertia::render('Vehicle/EditVehicle', [
            'vehicle' => $vehicle,
        ]);
    }

    public function update(VehicleRequest $request, $id)
    {
        $validatedData = $request->validate();

        $vehicle = Vehicle::findOrFail($id);
        $vehicle->update($validatedData);

        session()->flash('success', 'Veículo Atualizado com sucesso!');
    }
}