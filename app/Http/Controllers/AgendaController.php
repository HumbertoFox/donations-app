<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AgendaController extends Controller
{
    public function agenda()
    {
        return view('agenda.agenda');
    }
}