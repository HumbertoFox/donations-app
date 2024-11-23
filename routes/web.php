<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::get('/profiles', [ProfileController::class, 'index'])->name('profile.all');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/user/{id}/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/user/{id}/update', [UserController::class, 'update'])->name('user.update');

    Route::get('/agenda', [AgendaController::class, 'show'])->name('menu.agenda');

    Route::get('/registerdonor', [DonorController::class, 'create'])->name('donor.register');
    Route::post('/donor/store', [DonorController::class, 'store'])->name('donor.store');
    Route::get('/donor/{id}/edit', [DonorController::class, 'edit'])->name('donor.edit');
    Route::put('/donor/{id}', [DonorController::class, 'update'])->name('donor.update');
    Route::get('/donors', [DonorController::class, 'index'])->name('menu.donors');

    Route::put('/donation/{id}/status/collected', [DonationController::class, 'updateStatusConfirmed'])->name('donation.update.status.confirmed');
    Route::put('/donation/{id}/status/pending', [DonationController::class, 'updateStatusPending'])->name('donation.update.status.pending');
    Route::put('/donation/{id}/status/canceled', [DonationController::class, 'updateStatusCanceled'])->name('donation.update.status.canceled');
    Route::get('/donation/{id}/register', [DonationController::class, 'create'])->name('donation.register');
    Route::post('/donation/store', [DonationController::class, 'store'])->name('donation.store');
    Route::get('/donation/{id}/edit', [DonationController::class, 'edit'])->name('donation.edit');
    Route::put('/donation/{id}', [DonationController::class, 'update'])->name('donation.update');
    Route::get('/donations', [DonationController::class, 'index'])->name('menu.donations');

    Route::get('/report', [ReportController::class, 'index'])->name('menu.report');

    Route::get('/record/{id}/register', [RecordController::class, 'create'])->name('menu.register');
    Route::post('/record/store', [RecordController::class, 'store'])->name('menu.store');
    Route::get('/record', [RecordController::class, 'confirmed'])->name('menu.confirmed');

    Route::get('/registervehicle', [VehicleController::class, 'create'])->name('vehicle.register');
    Route::post('/vehicle/store', [VehicleController::class, 'store'])->name('vehicle.store');
    Route::get('/vehicle/{id}/edit', [VehicleController::class, 'edit'])->name('vehicle.edit');
    Route::put('/vehicle/{id}', [VehicleController::class, 'update'])->name('vehicle.update');
    Route::get('/vehicles', [VehicleController::class, 'index'])->name('vehicle.all');

    Route::get('/registerdriver', [DriverController::class, 'create'])->name('driver.register');
    Route::post('/driver/store', [DriverController::class, 'store'])->name('driver.store');
    Route::get('/driver/{id}/edit', [DriverController::class, 'edit'])->name('driver.edit');
    Route::put('/driver/{id}', [DriverController::class, 'update'])->name('driver.update');
    Route::get('/drivers', [DriverController::class, 'index'])->name('driver.all');

    Route::get('/registerhelper', [HelperController::class, 'create'])->name('helper.register');
    Route::post('/helper/store', [HelperController::class, 'store'])->name('helper.store');
    Route::get('/helper/{id}/edit', [HelperController::class, 'edit'])->name('helper.edit');
    Route::put('/helper/{id}', [HelperController::class, 'update'])->name('helper.update');
    Route::get('/helpers', [HelperController::class, 'index'])->name('helper.all');
});

require __DIR__ . '/auth.php';