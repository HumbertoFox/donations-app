<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\ConfirmCollectionController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ScheduleCollectionController;
use App\Http\Controllers\VehicleController;
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

    Route::get('/registerdonor', [DonorController::class, 'register'])->name('donor.register');
    Route::post('/donor/store', [DonorController::class, 'store'])->name('donor.store');
    Route::get('/donor/{id}/edit', [DonorController::class, 'edit'])->name('donor.edit');
    Route::post('/donor/{id}', [DonorController::class, 'update'])->name('donor.update');
    Route::get('/donors', [DonorController::class, 'index'])->name('menu.donors');

    Route::get('/donation/{id}/register', [DonationController::class, 'register'])->name('donation.register');
    Route::post('/donation/store', [DonationController::class, 'store'])->name('donation.store');
    Route::get('/donation/{id}/edit', [DonationController::class, 'edit'])->name('donation.edit');

    Route::get('/report', [ReportController::class, 'index'])->name('menu.report');

    Route::get('/schedulecollection', [ScheduleCollectionController::class, 'register'])->name('menu.schedulecollection');

    Route::get('/confirmcollection', [ConfirmCollectionController::class, 'register'])->name('menu.confirmcollection');

    Route::get('/registervehicle', [VehicleController::class, 'register'])->name('vehicle.registervehicle');
    Route::post('/vehicle/store', [VehicleController::class, 'store'])->name('vehicle.register');
    Route::get('/vehicle/{id}/edit', [VehicleController::class, 'edit'])->name('vehicle.edit');
    Route::post('/vehicle/{id}', [VehicleController::class, 'update'])->name('vehicle.update');
    Route::get('/vehicles', [VehicleController::class, 'index'])->name('vehicle.all');

    Route::get('/registerdriver', [DriverController::class, 'register'])->name('driver.registerdriver');
    Route::post('/driver/store', [DriverController::class, 'store'])->name('driver.register');
    Route::get('/driver/{id}/edit', [DriverController::class, 'edit'])->name('driver.edit');
    Route::post('/driver/{id}', [DriverController::class, 'update'])->name('driver.update');
    Route::get('/drivers', [DriverController::class, 'index'])->name('driver.all');

    Route::get('/registerhelper', [HelperController::class, 'register'])->name('helper.registerhelper');
    Route::post('/helper/store', [HelperController::class, 'store'])->name('helper.register');
    Route::get('/helper/{id}/edit', [HelperController::class, 'edit'])->name('helper.edit');
    Route::post('/helper/{id}', [HelperController::class, 'update'])->name('helper.update');
    Route::get('/helpers', [HelperController::class, 'index'])->name('helper.all');
});

require __DIR__ . '/auth.php';