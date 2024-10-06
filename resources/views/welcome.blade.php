<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <title>Donations-App</title>

</head>

<body class="font-sans antialiased">
    <div class="relative w-full min-h-screen max-w-2xl lg:max-w-7xl flex justify-between flex-col mx-auto">
        <header>
            @if (Route::has('login'))
                <nav class="-mx-3 pr-3 flex flex-1 justify-end">
                    @auth
                        <a href="{{ url('/dashboard') }}"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                            Dashboard
                        </a>
                    @else
                        <a href="{{ route('login') }}"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                            Log in
                        </a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                                Register
                            </a>
                        @endif
                    @endauth
                </nav>
            @endif
        </header>

        <h1 class="text-center text-3xl font-bold">Bem vindo ao Programa de Gestão de Doações</h1>

        <main class="w-full min-h-full p-[10px] text-center">
            <div class="flex justify-between">
                <a href="https://betofoxnet-info.vercel.app/" target="_blank" rel="">
                    <img src="{{ Vite::asset('resources/images/LOGO_BFN.png') }}" width="150" alt="Logo BetoFoxNet_Info">
                </a>
                <a href="https://betofoxnet-info.vercel.app/" target="_blank" rel="">
                    <img class="bg-cyan-300 rounded-full" src="{{ Vite::asset('resources/images/LOGO_BFN.png') }}" width="150"
                        alt="Logo BetoFoxNet_Info">
                </a>
                <a href="https://betofoxnet-info.vercel.app/" target="_blank" rel="">
                    <img src="{{ Vite::asset('resources/images/LOGO_BFN.png') }}" width="150" alt="Logo BetoFoxNet_Info">
                </a>
            </div>
        </main>

        <footer class="py-16 text-center text-sm text-black dark:text-white/70">
            Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})
        </footer>
    </div>
</body>

</html>
