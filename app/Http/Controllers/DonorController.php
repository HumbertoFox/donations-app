<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DonorController extends Controller
{
    public function register()
    {
        return Inertia::render('Menu/RegisterDonor');
    }

    public function edit()
    {
        return Inertia::render('Menu/EditDonor');
    }
}