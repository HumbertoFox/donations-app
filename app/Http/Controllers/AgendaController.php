<?php

namespace App\Http\Controllers;

use App\Enums\DonationStatus;
use App\Models\Driver;
use App\Models\Helper;
use App\Models\Record;
use App\Models\Vehicle;
use Inertia\Inertia;
use Inertia\Response;

class AgendaController extends Controller
{
    public function show(): Response
    {
        $vehicleExist = Vehicle::exists();
        $driverExist = Driver::exists();
        $helperExist = Helper::exists();

        if (!$vehicleExist) {
            return Inertia::render('Vehicle/RegisterVehicle', [
                'flash' => [
                    'warning',
                    'Não existe veículo cadastrado!',
                ],
            ]);
        }

        if (!$driverExist) {
            return Inertia::render('Driver/RegisterDriver', [
                'flash' => [
                    'warning',
                    'Não existe Motorista Cadastrado!',
                ],
            ]);
        }

        if (!$helperExist) {
            return Inertia::render('Helper/RegisterHelper', [
                'flash' => [
                    'warning',
                    'Não existe Ajudante Cadastrado!',
                ],
            ]);
        }

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
            ->get();

        return Inertia::render('Menu/Agenda', [
            'records' => $records,
        ]);
    }
}