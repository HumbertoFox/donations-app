<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DonorController extends Controller
{
    public function create()
    {
        return view('donors.create');
    }

    public function store()
    {
        return view('donors.store');
    }

    public function edit()
    {
        return view('donors.edit');
    }
}