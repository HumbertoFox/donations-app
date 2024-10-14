<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function register()
    {
        return Inertia::render('Vehicle/RegisterVehicle');
    }

    public function edit()
    {
        return Inertia::render('Vehicle/EditVehicle');
    }
}
