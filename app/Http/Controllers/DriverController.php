<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DriverController extends Controller
{
    public function register()
    {
        return Inertia::render('Driver/RegisterDriver');
    }

    public function edit()
    {
        return Inertia::render('Driver/EditDriver');
    }
}
