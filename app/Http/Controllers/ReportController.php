<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function show()
    {
        return Inertia::render('Menu/Report');
    }
}