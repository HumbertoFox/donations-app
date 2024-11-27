<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Models\Vehicle;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class VehicleController extends Controller
{
    public function index(): Response
    {
        $vehicles = Vehicle::paginate(10);

        return Inertia::render('Vehicle/ShowVehicle', [
            'vehicles' => $vehicles,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Vehicle/RegisterVehicle');
    }

    public function store(VehicleRequest $request)
    {
        $validatedData = $request->validated();

        $validatedData['user_id'] = Auth::id();

        Vehicle::create($validatedData);

        session()->flash('success', 'Veículo cadastrado com sucesso!');

        return Redirect::route('vehicle.all');
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
        $validatedData = $request->validated();

        $vehicle = Vehicle::findOrFail($id);

        $vehicle->update($validatedData);

        session()->flash('success', 'Veículo Atualizado com sucesso!');
    }

    public function destroy($id)
    {
        $vehicle = Vehicle::findOrFail($id);

        $vehicle->delete();

        session()->flash('success', 'Veículo Excluído com Sucesso!');
    }
}