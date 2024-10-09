<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100">
        <nav
            class="w-[200px] h-full flex flex-col fixed border-r-[3px] border-[#79D1FF] bg-[#AAF998] duration-[400ms] overflow-hidden max-[1080px]:w-[70px]">
            <a class="max-w-[150px] mx-auto duration-[400ms]" href="{{ url('/dashboard') }}">
                <img src="{{ URL::asset('images/LOGO_BFN.png') }}" class="w-full" alt="Logo Empresa">
            </a>
            <ul>
                <li title="Cadastrar Doação">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white {{ Route::is('donation.create') ? 'bg-[#79D1FF] text-white hover:text-[black]' : '' }}"
                        href="{{ route('donation.create') }}">
                        <i class="fa-solid fa-pen-to-square text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Cadastrar Doação</span>
                    </a>
                </li>
                <li title="Cadastrar Doador">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white {{ Route::is('donor.create') ? 'bg-[#79D1FF] text-white hover:text-[black]' : '' }}"
                        href="{{ route('donor.create') }}">
                        <i class="fa-solid fa-user-plus text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Cadastrar Doador</span>
                    </a>
                </li>
                <li title="Editar Doação">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white {{ Route::is('donation.edit') ? 'bg-[#79D1FF] text-white hover:text-[black]' : '' }}"
                        href="{{ route('donation.edit') }}">
                        <i class="fa-regular fa-pen-to-square text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Editar Doação</span>
                    </a>
                </li>
                <li title="Editar Doador">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white {{ Route::is('donor.edit') ? 'bg-[#79D1FF] text-white hover:text-[black]' : '' }}"
                        href="{{ route('donor.edit') }}">
                        <i class="fa-solid fa-user-pen text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Editar Doador</span>
                    </a>
                </li>
                <li title="Agendar Coleta">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white"
                        href="/">
                        <i class="fa-solid fa-file-circle-plus text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Agendar Coleta</span>
                    </a>
                </li>
                <li title="Confirmar Coleta">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white"
                        href="/">
                        <i class="fa-solid fa-file-circle-check text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Confirmar Coleta</span>
                    </a>
                </li>
                <li title="Relatório">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white"
                        href="/">
                        <i class="fa-solid fa-file-lines text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Gerar Relatório</span>
                    </a>
                </li>
                <li title="Agenda">
                    <a class="flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white {{ Route::is('agenda.agenda') ? 'bg-[#79D1FF] text-white hover:text-[black]' : '' }}"
                        href="{{ route('agenda.agenda') }}">
                        <i class="fa-solid fa-calendar-days text-[2rem]"></i>
                        <span class="text-sm max-[1080px]:hidden">Agenda</span>
                    </a>
                </li>
                <li class="duration-[400ms] mt-4" title='Sair/Logout'>
                    <form method="POST" action="{{ route('logout') }}"
                        class="flex items-center p-2.5 gap-[15px] duration-[400ms] hover:text-[white] active:bg-[#79D1FF]">
                        @csrf
                        <button type="submit" class="flex items-center gap-[15px]">
                            <i class="fa-solid fa-right-from-bracket text-[2rem] rotate-180"></i>
                            <span class="text-sm max-[1080px]:hidden">Sair do Sistema</span>
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
        <main
            class="relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin max-[1080px]:left-[70px] duration-[400ms]">
            @yield('content')
        </main>
    </div>
</body>

</html>