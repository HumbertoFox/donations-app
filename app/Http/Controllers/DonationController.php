<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DonationController extends Controller
{
    public function create()
    {
        return view('donations.create');
    }

    public function store()
    {
        return view('donations.store');
    }

    public function edit()
    {
        return view('donations.edit');
    }
}