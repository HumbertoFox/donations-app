<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('agenda/agenda', [AgendaController::class, 'agenda'])->name('agenda.agenda');

    Route::get('/donor/create', [DonorController::class, 'create'])->name('donor.create');
    Route::get('/donor/edit', [DonorController::class, 'edit'])->name('donor.edit');
    Route::get('/donor', [DonorController::class, 'store'])->name('donor.store');

    Route::get('/donation/create', [DonationController::class, 'create'])->name('donation.create');
    Route::get('/donation/edit', [DonationController::class, 'edit'])->name('donation.edit');
    Route::get('/donation', [DonationController::class, 'store'])->name('donation.store');
});

require __DIR__ . '/auth.php';