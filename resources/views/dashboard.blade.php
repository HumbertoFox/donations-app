<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="w-full h-full py-12">
        <div class="max-w-7xl h-full flex flex-col-reverse gap-20 mx-auto sm:flex-col sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="flex flex-wrap justify-center items-center gap-8 p-8 text-gray-900">

                    <a href="/" title="Início">
                        <i class="fa-solid fa-house text-[95px] text-[green] duration-[400ms] hover:text-[blue]"></i>
                    </a>
                    <a href="/" title="Cadastrar Usuário">
                        <i
                            class="fa-solid fa-user-check text-[95px] text-[green] duration-[400ms] hover:text-[blue]"></i>
                    </a>

                    <a href="/" title="Editar Usuário">
                        <i
                            class="fa-solid fa-user-pen text-[95px] text-[green] duration-[400ms] hover:text-[orange]"></i>
                    </a>

                    <a href="/" title="Excluir Usuário">
                        <i class="fa-solid fa-user-lock text-[95px] text-[green] duration-[400ms] hover:text-[red]"></i>
                    </a>

                    <a href="/" title="Cadastrar Veículo">
                        <i
                            class="fa-solid fa-truck-medical text-[95px] text-[green] duration-[400ms] hover:text-[blue]"></i>
                    </a>

                    <a href="/" title="Editar Veículo">
                        <i class="fa-solid fa-truck text-[95px] text-[green] duration-[400ms] hover:text-[orange]"></i>
                    </a>

                    <a href="/" title="Cadastrar Motorista">
                        <i
                            class="fa-solid fa-address-card text-[95px] text-[green] duration-[400ms] hover:text-[blue]"></i>
                    </a>

                    <a href="/" title="Cadastrar Motorista">
                        <i
                            class="fa-regular fa-address-card text-[95px] text-[green] duration-[400ms] hover:text-[orange]"></i>
                    </a>

                    <a href="/" title="Cadastrar Ajudante">
                        <i class="fa-solid fa-id-card text-[95px] text-[green] duration-[400ms] hover:text-[blue]"></i>
                    </a>

                    <a href="/" title="Editar Ajudante">
                        <i
                            class="fa-regular fa-id-card text-[95px] text-[green] duration-[400ms] hover:text-[orange]"></i>
                    </a>
                </div>
            </div>
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("You're logged in!") }}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
