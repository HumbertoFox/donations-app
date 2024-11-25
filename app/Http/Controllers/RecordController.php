<?php

namespace App\Http\Controllers;

use App\Enums\DonationStatus;
use App\Models\Donation;
use App\Models\Driver;
use App\Models\Helper;
use App\Models\Record;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class RecordController extends Controller
{
    public function index(): Response
    {
        $donations = Donation::with([
            'donor.phone',
            'donor.address.zipcode',
            'donation_items.item',
        ])
            ->where('status', DonationStatus::PENDING->value)
            ->paginate(10);

        return Inertia::render('Menu/Donations', [
            'donations' => $donations,
        ]);
    }

    public function confirmed(): Response
    {
        $records = Record::with([
            'donation',
            'donor.phone',
            'donor.address.zipcode',
            'vehicle',
            'driver.cnh.cpf',
            'driver.phone',
            'helper.cpf',
            'helper.phone',
            'helper_two.cpf',
            'helper_two.phone',
        ])
            ->whereHas('donation', function ($query) {
                $query->where('status', DonationStatus::SCHEDULED->value);
            })
            ->paginate();

        return Inertia::render('Menu/ConfirmCollection', [
            'records' => $records,
        ]);
    }

    public function create($id): Response
    {
        $donation = Donation::with(['donor', 'donation_items.item', 'user'])->find($id);
        $vehicles = Vehicle::all();
        $drivers = Driver::with('cnh.cpf')->get();
        $helpers = Helper::with('cpf')->get();

        if (!$donation) {
            return redirect()->back()->with('error', 'Doação não encontrada.');
        }

        return Inertia::render('Menu/RegisterRecord', [
            'vehicles' => $vehicles,
            'donation' => $donation,
            'drivers' => $drivers,
            'helpers' => $helpers,
            'donor' => [
                'id' => $donation->donor->id,
                'name' => $donation->donor->name,
                'phone' => $donation->donor->phone,
                'address' => $donation->donor->address,
                'zipcode' => $donation->donor->address->zipcode
            ],
            'user' => [
                'id' => Auth::id(),
                'name' => Auth::user()->name,
            ],
        ]);
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'donorcode' => 'required|integer|exists:donors,id',
                'donationcode' => 'required|integer|exists:donations,id',
                'vehicle' => 'required|integer|exists:vehicles,id',
                'driver' => 'required|integer|exists:drivers,id',
                'helperone' => 'required|integer|exists:helpers,id',
                'helpertwo' => 'nullable|integer|exists:helpers,id',
                'observation' => 'required|string|max:255',
                'colleted_date' => 'required|date',
            ]
        );

        Record::create(
            [
                'donor_id' => $request->donorcode,
                'donation_id' => $request->donationcode,
                'vehicle_id' => $request->vehicle,
                'driver_id' => $request->driver,
                'helper_id' => $request->helperone,
                'helper_two_id' => $request->helpertwo,
                'observation' => $request->observation,
                'colleted_date' => $request->colleted_date,
                'user_id' => Auth::id(),
            ]
        );

        $donation = Donation::find($request->donationcode);
        if ($donation) {
            $donation->status = DonationStatus::SCHEDULED;
            $donation->save();
        }

        session()->flash('success', 'Doação Agendada com Sucesso!');
    }
}