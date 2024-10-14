<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HelperController extends Controller
{
    public function register()
    {
        return Inertia::render('Helper/RegisterHelper');
    }

    public function edit()
    {
        return Inertia::render('Helper/EditHelper');
    }
}
