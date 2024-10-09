<div>
    <form class="w-[750px] p-1 text-sm text-gray-600 max-xl:w-[380px] max-md:w-[280px]" method="POST"
        action="{{ Route::is('donation.create') ? route('donation.store') : route('donation.edit') }}">
        @csrf
        @if (!Route::is('donation.create'))
            @method('PUT')
        @endif
        <fieldset class="flex flex-col gap-1">
            <legend class="mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]">
                Lista de Objetos a Serem Doados
            </legend>
            <div class="flex gap-1 max-xl:flex-col">
                @if (!Route::is('donation.create'))
                    <label class="flex flex-col" for="coddonation">Código da Doação
                        <input class="rounded-md p-[2px] cursor-not-allowed duration-[400ms]" type="number"
                            name="coddonation" id="coddonation" disabled>
                    </label>
                @endif
                <label class="flex flex-col" for="donorcode">Código do Doador
                    <input class="rounded-md p-[2px] cursor-not-allowed duration-[400ms]" type="number"
                        name="donorcode" id="donorcode" disabled>
                </label>
            </div>
            <div class="flex gap-[5px] duration-[400ms] max-xl:flex-wrap">
                <div class="w-full flex flex-col gap-1 duration-[400ms]">
                    <label class="flex flex-col" for="objeto1">objeto 1
                        <input class="rounded-md p-[2px]" type="text" name="objeto1" id="objeto1">
                    </label>
                    <label class="flex flex-col" for="quant1">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant1" id="quant1">
                    </label>
                    <label class="flex flex-col" for="objeto2">objeto 2
                        <input class="rounded-md p-[2px]" type="text" name="objeto2" id="objeto2">
                    </label>
                    <label class="flex flex-col" for="quant2">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant2" id="quant2">
                    </label>
                    <label class="flex flex-col" for="objeto3">objeto 3
                        <input class="rounded-md p-[2px]" type="text" name="objeto3" id="objeto3">
                    </label>
                    <label class="flex flex-col" for="quant3">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant3" id="quant3">
                    </label>
                    <label class="flex flex-col" for="objeto4">objeto 4
                        <input class="rounded-md p-[2px]" type="text" name="objeto4" id="objeto4">
                    </label>
                    <label class="flex flex-col" for="quant4">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant4" id="quant4">
                    </label>
                    <label class="flex flex-col" for="objeto5">objeto 5
                        <input class="rounded-md p-[2px]" type="text" name="objeto5" id="objeto5">
                    </label>
                    <label class="flex flex-col" for="quant5">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant5" id="quant5">
                    </label>
                    <label class="flex flex-col" for="objeto6">objeto 6
                        <input class="rounded-md p-[2px]" type="text" name="objeto6" id="objeto6">
                    </label>
                    <label class="flex flex-col" for="quant6">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant6" id="quant6">
                    </label>
                    <label class="flex flex-col" for="objeto7">objeto 7
                        <input class="rounded-md p-[2px]" type="text" name="objeto7" id="objeto7">
                    </label>
                    <label class="flex flex-col" for="quant7">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant7" id="quant7">
                    </label>
                </div>
                <div class="w-full flex flex-col gap-1 duration-[400ms]">
                    <label class="flex flex-col" for="objeto8">objeto 8
                        <input class="rounded-md p-[2px]" type="text" name="objeto8" id="objeto8">
                    </label>
                    <label class="flex flex-col" for="quant8">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant8" id="quant8">
                    </label>
                    <label class="flex flex-col" for="objeto9">objeto 9
                        <input class="rounded-md p-[2px]" type="text" name="objeto9" id="objeto9">
                    </label>
                    <label class="flex flex-col" for="quant9">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant9" id="quant9">
                    </label>
                    <label class="flex flex-col" for="objeto10">objeto 10
                        <input class="rounded-md p-[2px]" type="text" name="objeto10" id="objeto10">
                    </label>
                    <label class="flex flex-col" for="quant10">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant10" id="quant10">
                    </label>
                    <label class="flex flex-col" for="objeto11">objeto 11
                        <input class="rounded-md p-[2px]" type="text" name="objeto11" id="objeto11">
                    </label>
                    <label class="flex flex-col" for="quant11">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant11" id="quant11">
                    </label>
                    <label class="flex flex-col" for="objeto12">objeto 12
                        <input class="rounded-md p-[2px]" type="text" name="objeto12" id="objeto12">
                    </label>
                    <label class="flex flex-col" for="quant12">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant12" id="quant12">
                    </label>
                    <label class="flex flex-col" for="objeto13">objeto 13
                        <input class="rounded-md p-[2px]" type="text" name="objeto13" id="objeto13">
                    </label>
                    <label class="flex flex-col" for="quant13">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant13" id="quant13">
                    </label>
                    <label class="flex flex-col" for="objeto14">objeto 14
                        <input class="rounded-md p-[2px]" type="text" name="objeto14" id="objeto14">
                    </label>
                    <label class="flex flex-col" for="quant14">Qant/Caixa/Sacola
                        <input class="w-[150px] rounded-md p-[2px]" type="text" name="quant14" id="quant14">
                    </label>
                </div>
            </div>
            <label class="flex flex-col" for="obs">Observações
                <textarea class="rounded-md p-[2px]" name="obs" id="obs"></textarea>
            </label>
        </fieldset>
        @if (Route::is('donation.create'))
            <div class="flex justify-around pt-3">
                <button
                    class="bg-green-600 px-2 py-1 rounded-md text-white font-bold duration-[400ms] hover:bg-green-800 active:text-black"
                    type="submit" title="Cadastrar Doação e ir para Agendamento" name="in_agender">
                    Cadastrar Ir
                </button>
                <button
                    class="bg-green-600 px-2 py-1 rounded-md text-white font-bold duration-[400ms] hover:bg-green-800 active:text-black"
                    type="submit" title="Cadastrar Doação" name="register_donation">
                    Cadastrar
                </button>
            </div>
        @else
            <div class="flex justify-around pt-3">
                <button
                    class="bg-green-600 px-2 py-1 rounded-md text-white font-bold duration-[400ms] hover:bg-green-800 active:text-black"
                    type="submit" title="Editar Doação" name="in_agender">Editar</button>
        @endif
    </form>
</div>