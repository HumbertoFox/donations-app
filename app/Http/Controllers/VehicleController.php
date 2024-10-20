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
                'plate' => 'required|string|uppercase|max:50|unique:vehicles,plate',
                'km' => 'required|string|max:255',
                'model' => 'required|string|uppercase|max:150',
                'Automaker' => 'required|string|upupercase|max:100'
            ]
        );

        $userId = Auth::id();

        Vehicle::create(
            [
                'chassi' => $request->chassi,
                'plate' => $request->plate,
                'model' => $request->model,
                'km' => $request->km,
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

    public function edit()
    {
        return Inertia::render('Vehicle/EditVehicle');
    }
}