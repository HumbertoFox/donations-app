<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DonationController extends Controller
{
    public function register()
    {
        return Inertia::render('Menu/RegisterDonation');
    }
    
    public function edit()
    {
        return Inertia::render('Menu/EditDonation');
    }
}