<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ReportController extends Controller
{
    public function index(): Response
    {
        $months = array_fill(1, 12, 0);

        $records = Record::whereYear('colleted_date', now()->year)
            ->groupBy(DB::raw('EXTRACT(MONTH FROM colleted_date)'))
            ->selectRaw('count(*) as total, EXTRACT(MONTH FROM colleted_date) as month')
            ->get();

        foreach ($records as $record) {
            $months[$record->month] = $record->total;
        }

        $data = [
            'labels' => array_keys($months),
            'datasets' => [
                [
                    'data' => array_values($months),
                ],
            ],
        ];

        return Inertia::render('Menu/Report', ['data' => $data]);
    }
}