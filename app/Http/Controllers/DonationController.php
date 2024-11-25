<?php

namespace App\Http\Controllers;

use App\Enums\DonationStatus;
use App\Models\Donation;
use App\Models\Donor;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DonationController extends Controller
{
    public function index(Request $request): Response
    {
        $donations = Donation::with([
            'donor.phone',
            'donor.address.zipcode',
            'donation_items.item',
        ])
            ->when($request->has('phone'), function ($query) use ($request) {
                $query->whereHas('donor.phone', function ($query) use ($request) {
                    $query->where('phone', 'like', '%' . $request->phone . '%');
                });
            })
            ->when($request->has('zipcode'), function ($query) use ($request) {
                $query->whereHas('donor.address.zipcode', function ($query) use ($request) {
                    $query->where('zipcode', 'like', '%' . $request->zipcode . '%');
                });
            })
            ->when($request->filled('date_start'), function ($whenQuery) use ($request) {
                $whenQuery->where('created_at', '>=', \Carbon\Carbon::parse($request->date_start)->format('Y-m-d H:i:s'));
            })
            ->when($request->filled('date_end'), function ($whenQuery) use ($request) {
                $whenQuery->where('created_at', '<=', \Carbon\Carbon::parse($request->date_end)->format('Y-m-d H:i:s'));
            })
            ->where('status', DonationStatus::PENDING->value)
            ->paginate(10);

        return Inertia::render('Menu/Donations', [
            'donations' => $donations,
            'filters' => [
                'phone' => $request->phone,
                'zipcode' => $request->zipcode,
                'date_start' => $request->date_start,
                'date_end' => $request->date_end,
            ],
        ]);
    }

    public function create($id): Response
    {
        $donor = Donor::findOrFail($id);
        $cnpj = $donor->cnpj;
        $phone = $donor->phone;
        $address = $donor->address;
        $zipcode = $address->zipcode;

        return Inertia::render('Menu/RegisterDonation', [
            'donor' => $donor,
            'cnpj' => $cnpj,
            'phone' => $phone,
            'address' => $address,
            'zipcode' => $zipcode,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'donorcode' => 'required|integer|exists:donors,id',
        ]);

        $hasPendingDonation = Donation::where('donor_id', $validatedData['donorcode'])
            ->whereIn('status', [
                DonationStatus::PENDING->value,
                DonationStatus::SCHEDULED->value,
            ])
            ->exists();

        if ($hasPendingDonation) {
            return session()->flash('warning', 'Existe uma doação pendente ou agendada deste doador!');
        }

        $objectRules = [];
        for ($i = 1; $i <= 20; $i++) {
            $objectRules["object{$i}"] = 'nullable|string|max:255';
            $objectRules["quant{$i}"] = 'nullable|integer|min:1';
        }

        $validatedData = array_merge($validatedData, $request->validate($objectRules));

        $donation = new Donation();
        $donation->user_id = Auth::id();
        $donation->donor_id = $validatedData['donorcode'];
        $donation->save();

        for ($i = 1; $i <= 20; $i++) {
            $objectName = $validatedData["object{$i}"] ?? null;
            $objectQuantity = $validatedData["quant{$i}"] ?? null;

            if (!empty($objectName) && !empty($objectQuantity)) {
                $item = Item::where('item', $objectName)->first();

                if (!$item) {
                    $item = Item::create([
                        'item' => $objectName,
                        'user_id' => Auth::id(),
                    ]);
                }

                $donation->donation_items()->create([
                    'item_id' => $item->id,
                    'quantity' => $objectQuantity,
                    'user_id' => Auth::id(),
                ]);
            }
        }

        session()->flash('success', 'Doação Cadastrada com Sucesso!');
    }

    public function edit($id): Response
    {
        $donation = Donation::with(['donation_items.item'])->findOrFail($id);
        $donor = Donor::findOrFail($donation->donor_id);

        return Inertia::render('Menu/EditDonation', [
            'donation' => $donation,
            'donor' => $donor,
            'phone' => $donor->phone,
            'address' => $donor->address->zipcode,
            'donation_item' => $donation->donation_items,
        ]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'donorcode' => 'required|integer|exists:donors,id',
            'donationcode' => 'required|integer|exists:donations,id',
        ]);

        $hasPendingDonation = Donation::where('donor_id', $validatedData['donorcode'])
            ->where('status', DonationStatus::PENDING->value)
            ->where('id', '!=', $id)
            ->exists();

        if ($hasPendingDonation) {
            return session()->flash('warning', 'Existe uma doação pendente deste doador.');
        }

        $objectRules = [];
        for ($i = 1; $i <= 20; $i++) {
            $objectRules["object{$i}"] = 'nullable|string|max:255';
            $objectRules["quant{$i}"] = 'nullable|integer|min:1';
        }

        $validatedData = array_merge($validatedData, $request->validate($objectRules));

        $donation = Donation::findOrFail($id);

        $donation->donor_id = $validatedData['donorcode'];
        $donation->save();

        $donation->donation_items()->delete();

        for ($i = 1; $i <= 20; $i++) {
            $objectName = $validatedData["object{$i}"] ?? null;
            $objectQuantity = $validatedData["quant{$i}"] ?? null;

            if (!empty($objectName) && !empty($objectQuantity)) {
                $item = Item::where('item', $objectName)->first();

                if (!$item) {
                    $item = Item::create([
                        'item' => $objectName,
                        'user_id' => Auth::id(),
                    ]);
                }

                $donation->donation_items()->create([
                    'item_id' => $item->id,
                    'quantity' => $objectQuantity,
                    'user_id' => Auth::id(),
                ]);
            }
        }

        session()->flash('success', 'Doação Atualizada com Sucesso!');
    }

    public function updateStatus($id, $status)
    {
        Donation::where('id', $id)->update(['status' => $status]);

        session()->flash('success', 'Status da Doação Atualizada com Sucesso!');

        return redirect()->route('menu.confirmed');
    }

    public function updateStatusConfirmed($id)
    {
        return $this->updateStatus($id, DonationStatus::COLLECTED);
    }

    public function updateStatusPending($id)
    {
        return $this->updateStatus($id, DonationStatus::PENDING);
    }

    public function updateStatusCanceled($id)
    {
        return $this->updateStatus($id, DonationStatus::CANCELED);
    }
}
