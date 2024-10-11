<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ConfirmCollectionController extends Controller
{
    public function register()
    {
        return Inertia::render('Menu/ConfirmCollection');
    }
}