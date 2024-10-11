<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\ConfirmCollectionController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ScheduleCollectionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/agenda', [AgendaController::class, 'show'])->name('menu.agenda');

    Route::get('/registerdonor', [DonorController::class, 'register'])->name('menu.registerdonor');
    Route::get('/editdonor', [DonorController::class, 'edit'])->name('menu.editdonor');

    Route::get('/registerdonation', [DonationController::class, 'register'])->name('menu.registerdonation');
    Route::get('/editdonation', [DonationController::class, 'edit'])->name('menu.editdonation');

    Route::get('/report', [ReportController::class, 'show'])->name('menu.report');

    Route::get('/schedulecollection', [ScheduleCollectionController::class, 'register'])->name('menu.schedulecollection');

    Route::get('/confirmcollection', [ConfirmCollectionController::class, 'register'])->name('menu.confirmcollection');
});

require __DIR__ . '/auth.php';