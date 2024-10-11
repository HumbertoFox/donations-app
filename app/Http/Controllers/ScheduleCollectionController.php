<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleCollectionController extends Controller
{
    public function register()
    {
        return Inertia::render('Menu/ScheduleCollection');
    }
}