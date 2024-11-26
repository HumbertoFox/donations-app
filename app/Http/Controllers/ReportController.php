<?php

namespace App\Http\Controllers;

use App\Enums\DonationStatus;
use App\Models\Record;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function index(): Response
    {
        $months = array_fill(1, 12, 0);
        $collectionmonths = array_fill(1, 12, 0);
        $notcollectionmonths = array_fill(1, 12, 0);

        $records = Record::whereYear('colleted_date', now()->year)
            ->groupBy(DB::raw('EXTRACT(MONTH FROM colleted_date)'))
            ->selectRaw('count(*) as total, EXTRACT(MONTH FROM colleted_date) as month')
            ->get();

        foreach ($records as $record) {
            $months[$record->month] = $record->total;
        }

        $collecteds = Record::whereHas('donation', function ($query) {
            $query->where('status', DonationStatus::COLLECTED);
        })
            ->whereYear('colleted_date', now()->year)
            ->groupBy(DB::raw('EXTRACT(MONTH FROM colleted_date)'))
            ->selectRaw('count(*) as total, EXTRACT(MONTH FROM colleted_date) as month')
            ->get();

        foreach ($collecteds as $collected) {
            $collectionmonths[$collected->month] = $collected->total;
        }

        $notcollecteds = Record::whereHas('donation', function ($query) {
            $query->where('status', DonationStatus::CANCELED);
        })
            ->whereYear('colleted_date', now()->year)
            ->groupBy(DB::raw('EXTRACT(MONTH FROM colleted_date)'))
            ->selectRaw('count(*) as total, EXTRACT(MONTH FROM colleted_date) as month')
            ->get();

        foreach ($notcollecteds as $collected) {
            $notcollectionmonths[$collected->month] = $collected->total;
        }

        $data = [
            'labels' => array_keys($months),
            'datasets' => [
                [
                    'data' => array_values($months),
                ],
            ],
        ];

        $datacollecteds = [
            'labels' => array_keys($collectionmonths),
            'datasets' => [
                [
                    'data' => array_values($collectionmonths),
                ],
            ],
        ];

        $datanotcollecteds = [
            'labels' => array_keys($notcollectionmonths),
            'datasets' => [
                [
                    'data' => array_values($notcollectionmonths),
                ],
            ],
        ];

        return Inertia::render('Menu/Report', [
            'data' => $data,
            'datacollecteds' => $datacollecteds,
            'datanotcollecteds' => $datanotcollecteds,
        ]);
    }
}