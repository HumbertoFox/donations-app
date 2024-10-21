<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function register()
    {
        return Inertia::render('Vehicle/RegisterVehicle');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'chassi' => 'required|string|max:100|unique:vehicles,chassi',
                'plate' => 'required|string|uppercase|max:10|unique:vehicles,plate',
                'km' => 'required|string|min:0',
                'model' => 'required|string|uppercase|max:150',
                'automaker' => 'required|string|uppercase|max:100'
            ]
        );

        $userId = Auth::id();

        Vehicle::create(
            [
                'chassi' => $request->chassi,
                'plate' => $request->plate,
                'km' => $request->km,
                'model' => $request->model,
                'automaker' => $request->automaker,
                'user_id' => $userId
            ]
        );
    }

    public function index()
    {
        $vehicles = Vehicle::all();
        return Inertia::render('Vehicle/Show', [
            'vehicles' => $vehicles
        ]);
    }

    public function edit($id)
    {
        $vehicle = Vehicle::findOrFail($id);
        return Inertia::render('Vehicle/EditVehicle', [
            'vehicle' => $vehicle
        ]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'chassi' => 'required|string|max:100',
            'plate' => 'required|string|uppercase|max:50',
            'model' => 'required|string|uppercase|max:150',
            'automaker' => 'required|string|uppercase|max:100'
        ]);

        $vehicle = Vehicle::findOrFail($id);
        $vehicle->update($validatedData);
    }
}