<div>
    <form class="flex flex-col gap-1 p-1 w-[280px] text-sm text-gray-600" method="POST"
        action="{{ Route::is('donor.create') ? route('donor.store') : route('donor.edit') }}">
        @csrf
        <legend class="mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]">
            Dados do Doador
        </legend>
        @if (!Route::is('donor.create'))
            @method('PUT')
            <label class="flex flex-col" for="iddonor">Código do Doador
                <input class="rounded-md p-[2px] cursor-not-allowed" type="number" name="iddonor" id="iddonor" disabled>
            </label>
        @endif
        <label class="flex flex-col" for="name">Nome do Doador
            <input class="rounded-md p-[2px]" type="text" name="name" id="name">
        </label>
        <label class="flex flex-col" for="phone">Contato do Responsável
            <input class="rounded-md p-[2px]" type="tel" name="phone" id="phone" minlength="11"
                maxlength="11">
        </label>
        <label class="flex flex-col" for="contacto1">Contato do Responsável/Opcional
            <input class="rounded-md p-[2px]" type="tel" name="contacto1" id="contacto1" minlength="11"
                maxlength="11">
        </label>
        <label class="flex flex-col" for="contacto2">Contato/Opcional ou Ramal
            <input class="rounded-md p-[2px]" type="tel" name="contacto2" id="contacto2">
        </label>
        <label class="flex flex-col" for="zipcode">CEP
            <input class="rounded-md p-[2px]" type="number" name="zipcode" id="zipcode" maxlength="9">
        </label>
        <label class="flex flex-col" for="street">Logradouro: Av/Rua/Trav
            <input class="rounded-md p-[2px]" type="text" name="street" id="street">
        </label>
        <label class="flex flex-col" for="district">Bairro/Distrito
            <input class="rounded-md p-[2px]" type="text" name="district" id="district">
        </label>
        <label class="flex flex-col" for="city">Cidade
            <input class="rounded-md p-[2px]" type="text" name="city" id="city">
        </label>
        <label class="flex flex-col" for="numresidence">Nº Casa/Edifício/Empresa
            <input class="rounded-md p-[2px]" type="text" name="numresidence" id="numresidence">
        </label>
        <div class="flex justify-center items-center gap-3 p-1">
            <label class="flex items-center gap-1 cursor-pointer" for="house">
                <input class="cursor-pointer" type="radio" name="typeresidence" id="house" value="house" checked
                    onclick="toggleSections()">
                Casa
            </label>
            <label class="flex items-center gap-1 cursor-pointer" for="buildings">
                <input class="cursor-pointer" type="radio" name="typeresidence" id="buildings" value="buildings"
                    onclick="toggleSections()">
                Edifício
            </label>
            <label class="flex items-center gap-1 cursor-pointer" for="enterprise">
                <input class="cursor-pointer" type="radio" name="typeresidence" id="enterprise" value="enterprise"
                    onclick="toggleSections()">
                Empresa
            </label>
        </div>
        <div id="enterpriseSection" style="display: none">
            <label class="flex flex-col" for="cnpj">CNPJ
                <input class="rounded-md p-[2px]" type="number" name="cnpj" id="cnpj">
            </label>
            <label class="flex flex-col" for="corporatename">Nome Empresa
                <input class="rounded-md p-[2px]" type="text" name="corporatename" id="corporatename">
            </label>
        </div>
        <div id="buildingSection" style="display: none">
            <label class="flex flex-col" for="building">Nome do Edifício/Empresa
                <input class="rounded-md p-[2px]" type="text" name="building" id="building">
            </label>
            <label class="flex flex-col" for="block">Bloco
                <input class="rounded-md p-[2px]" type="text" name="block" id="block">
            </label>
            <label class="flex flex-col" for="livingapartmentroom">Apartamento/Sala
                <input class="rounded-md p-[2px]" type="text" name="livingapartmentroom"
                    id="livingapartmentroom">
            </label>
        </div>
        <label class="flex flex-col" for="referencepoint">Ponto de Referência
            <textarea class="rounded-md p-[2px]" name="referencepoint" id="referencepoint"></textarea>
        </label>
        @if (Route::is('donor.create'))
            <div class="flex justify-around pt-3">
                <button
                    class="bg-green-600 px-2 py-1 rounded-md text-white font-bold duration-[400ms] hover:bg-green-800 active:text-black"
                    type="submit" title="Cadastrar Doador ir Cadastrar Doação" name="in_donation">Cadastrar
                    Ir</button>
                <button
                    class="bg-green-600 px-2 py-1 rounded-md text-white font-bold duration-[400ms] hover:bg-green-800 active:text-black"
                    type="submit" title="Cadastrar Doador" name="register_donor">Cadastrar</button>
            </div>
        @else
            <div class="flex justify-around pt-3">
                <button
                    class="bg-green-600 px-2 py-1 rounded-md text-white font-bold duration-[400ms] hover:bg-green-800 active:text-black"
                    type="submit" title="Cadastrar Doador ir Cadastrar Doação" name="in_donation">Editar</button>
        @endif
    </form>
</div>
<script>
    function toggleSections() {
        const buildingSection = document.getElementById('buildingSection');
        const enterpriseSection = document.getElementById('enterpriseSection');
        const buildingRadio = document.getElementById('buildings');
        const enterpriseRadio = document.getElementById('enterprise');

        if (buildingRadio.checked) {
            buildingSection.style.display = 'block';
            enterpriseSection.style.display = 'none';
        } else if (enterpriseRadio.checked) {
            enterpriseSection.style.display = 'block';
            buildingSection.style.display = 'none';
        } else {
            buildingSection.style.display = 'none';
            enterpriseSection.style.display = 'none';
        };
    };
</script>
