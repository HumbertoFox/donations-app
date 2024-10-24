<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleCollectionController extends Controller
{
    public function register()
    {
        $donations = Donation::with([
            'donor.phone',
            'donor.address.zipcode',
            'donation_items.item'
        ])->get();

        return Inertia::render('Menu/ScheduleCollection', [
            'donations' => $donations
        ]);
    }
}