import { useForm } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton';

export default function DonorForm({ point, valueButton }) {
    const { data, setData, post, processing, errors } = useForm({
        donorcode: '',
        name: '',
        phone: '',
        contact: '',
        contact_old: '',
        zipcode: '',
        street: '',
        district: '',
        city: '',
        type_residence: 'house',
        number_residence: '',
        cnpj: '',
        corporatename: '',
        building: '',
        block: '',
        livingapartmentroom: '',
        reference_point: ''
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form className='p-1 w-[280px] text-sm' onSubmit={submit}>
            <fieldset className='flex flex-col gap-[5px] duration-[400ms]' disabled={valueButton ? false : true}>
                <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>Informações do Doador</legend>

                {valueButton !== 'Cadastrar' && (
                    <label className='flex flex-col' htmlFor='donorcode'>Código do Doador
                        <input
                            id='donorcode'
                            className='rounded py-0.5 cursor-not-allowed'
                            type='number'
                            value={data.donorcode}
                            onChange={e => setData('donorcode', e.target.value)}
                            required
                            disabled
                        />
                        {errors.donorcode && <div>{errors.donorcode}</div>}
                    </label>
                )}

                <label className='flex flex-col' htmlFor='name'>Nome do Doador
                    <input
                        id='name'
                        className='rounded py-0.5'
                        type='text'
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        required
                        autoComplete='name'
                    />
                    {errors.name && <div>{errors.name}</div>}
                </label>

                <label className='flex flex-col' htmlFor='phone'>Contato do Responsável
                    <input
                        id='phone'
                        className='rounded py-0.5'
                        type='tel'
                        value={data.phone}
                        onChange={e => setData('phone', e.target.value)}
                        minLength={11}
                        required
                        autoComplete='phone'
                    />
                    {errors.phone && <div>{errors.phone}</div>}
                </label>

                <label className='flex flex-col' htmlFor='contact'>Contato/Ramal
                    <input
                        id='contact'
                        className='rounded py-0.5'
                        type='tel'
                        value={data.contact}
                        onChange={e => setData('contact', e.target.value)}
                        required
                        autoComplete='contact'
                    />
                    {errors.contact && <div>{errors.contact}</div>}
                </label>

                <label className='flex flex-col' htmlFor='contact_old'>Contato do Responsável
                    <input
                        id='contact_old'
                        className='rounded py-0.5'
                        type='tel'
                        value={data.contact_old}
                        onChange={e => setData('contact_old', e.target.value)}
                        required
                        autoComplete='contact_old'
                    />
                    {errors.contact_old && <div>{errors.contact_old}</div>}
                </label>

                <label className='flex flex-col' htmlFor='zipcode'>CEP
                    <input
                        id='zipcode'
                        className='rounded py-0.5'
                        type='number'
                        value={data.zipcode}
                        onChange={e => setData('zipcode', e.target.value)}
                        required
                        autoComplete='zipcode'
                    />
                    {errors.zipcode && <div>{errors.zipcode}</div>}
                </label>

                <label className='flex flex-col' htmlFor='street'>Logradouro: Av/Rua/Trav
                    <input
                        id='street'
                        className='rounded py-0.5'
                        type='text'
                        value={data.street}
                        onChange={e => setData('street', e.target.value)}
                        required
                        autoComplete='street'
                    />
                    {errors.street && <div>{errors.street}</div>}
                </label>

                <label className='flex flex-col' htmlFor='district'>Bairro/Distrito
                    <input
                        id='district'
                        className='rounded py-0.5'
                        type='text'
                        value={data.district}
                        onChange={e => setData('district', e.target.value)}
                        required
                        autoComplete='district'
                    />
                    {errors.district && <div>{errors.district}</div>}
                </label>

                <label className='flex flex-col' htmlFor='city'>Cidade
                    <input
                        id='city'
                        className='rounded py-0.5'
                        type='text'
                        value={data.city}
                        onChange={e => setData('city', e.target.value)}
                        required
                        autoComplete='city'
                    />
                    {errors.city && <div>{errors.city}</div>}
                </label>

                <div className='flex gap-5 justify-center p-1'>
                    <label className={valueButton ? 'flex items-center cursor-pointer' : 'flex items-center cursor-default'} htmlFor='house'>
                        <input
                            id='house'
                            name='type_residence'
                            className='mr-1.5'
                            type='radio'
                            value='house'
                            onChange={e => setData('type_residence', e.target.value)}
                            defaultChecked
                        />
                        Casa
                    </label>

                    <label className={valueButton ? 'flex items-center cursor-pointer' : 'flex items-center cursor-default'} htmlFor='buildings'>
                        <input
                            id='buildings'
                            name='type_residence'
                            className='mr-1.5'
                            type='radio'
                            value='buildings'
                            onChange={e => setData('type_residence', e.target.value)}
                        />
                        Edifício
                    </label>

                    <label className={valueButton ? 'flex items-center cursor-pointer' : 'flex items-center cursor-default'} htmlFor='enterprise'>
                        <input
                            id='enterprise'
                            name='type_residence'
                            className='mr-1.5'
                            type='radio'
                            value='enterprise'
                            onChange={e => setData('type_residence', e.target.value)}
                        />
                        Empresa
                    </label>
                </div>

                <label className='flex flex-col' htmlFor='number_residence'>Nº Casa/Edifício
                    <input
                        id='number_residence'
                        className='rounded py-0.5'
                        type='text'
                        value={data.number_residence}
                        onChange={e => setData('number_residence', e.target.value)}
                        required
                        autoComplete='number_residence'
                    />
                    {errors.number_residence && <div>{errors.number_residence}</div>}
                </label>

                {data.type_residence === 'enterprise' && (
                    <div>
                        <label className='flex flex-col' htmlFor='cnpj'>CNPJ
                            <input
                                id='cnpj'
                                className='rounded py-0.5'
                                type='text'
                                value={data.cnpj}
                                onChange={e => setData('cnpj', e.target.value)}
                                required
                                autoComplete='cnpj'
                            />
                            {errors.cnpj && <div>{errors.cnpj}</div>}
                        </label>

                        <label className='flex flex-col' htmlFor='corporatename'>Razão Social
                            <input
                                id='corporatename'
                                className='rounded py-0.5'
                                type='text'
                                value={data.corporatename}
                                onChange={e => setData('corporatename', e.target.value)}
                                required
                                autoComplete='corporatename'
                            />
                            {errors.corporatename && <div>{errors.corporatename}</div>}
                        </label>
                    </div>
                )}

                {data.type_residence !== 'house' && (
                    <div>
                        <label className='flex flex-col' htmlFor='building'>Nome do Edifício
                            <input
                                id='building'
                                className='rounded py-0.5'
                                type='text'
                                value={data.building}
                                onChange={e => setData('building', e.target.value)}
                                required
                                autoComplete='building'
                            />
                            {errors.building && <div>{errors.building}</div>}
                        </label>

                        <label className='flex flex-col' htmlFor='block'>Bloco
                            <input
                                id='block'
                                className='rounded py-0.5'
                                type='text'
                                value={data.block}
                                onChange={e => setData('block', e.target.value)}
                                required
                                autoComplete='block'
                            />
                            {errors.block && <div>{errors.block}</div>}
                        </label>

                        <label className='flex flex-col' htmlFor='livingapartmentroom'>Apartamento/Sala
                            <input
                                id='livingapartmentroom'
                                className='rounded py-0.5'
                                type='text'
                                value={data.livingapartmentroom}
                                onChange={e => setData('livingapartmentroom', e.target.value)}
                                required
                                autoComplete='livingapartmentroom'
                            />
                            {errors.livingapartmentroom && <div>{errors.livingapartmentroom}</div>}
                        </label>
                    </div>
                )}

                <label className='flex flex-col' htmlFor='reference_point'>Ponto de Referência
                    <textarea
                        id='reference_point'
                        className='rounded py-0.5'
                        value={data.reference_point}
                        onChange={e => setData('reference_point', e.target.value)}
                        required
                        autoComplete='reference_point'
                    />
                    {errors.reference_point && <div>{errors.reference_point}</div>}
                </label>

            </fieldset>
            {valueButton && (
                <div className='flex justify-around py-4 duration-[400ms]'>
                    {valueButton === 'Cadastrar' && (
                        <PrimaryButton title='Cadastrar e Ir para Doação' disabled={processing}>
                            Cadastrar Ir
                        </PrimaryButton>
                    )}

                    <PrimaryButton title={valueButton} disabled={processing}>
                        {valueButton}
                    </PrimaryButton>
                </div>
            )}
        </form>
    );
}