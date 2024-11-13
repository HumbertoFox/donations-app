<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        if ($this->app->environment('production', 'staging')) {
            URL::forceScheme('https');
        }
    }

    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}