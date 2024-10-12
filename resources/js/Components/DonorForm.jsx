import { useForm } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton';

export default function DonorForm({ point, valueButton }) {
    const { data, setData, post, processing, errors } = useForm({
        donorcode: '',
        name: '',
        phone: '',
        contact1: '',
        contact2: '',
        zipcode: '',
        street: '',
        district: '',
        city: '',
        typeresidence: 'house',
        numresidence: '',
        cnpj: '',
        corporatename: '',
        building: '',
        block: '',
        livingapartmentroom: ''
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form className='p-1 w-[280px] text-sm' onSubmit={submit}>
            <fieldset className='flex flex-col gap-[5px]' disabled={valueButton ? false : true}>
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

                <label className='flex flex-col' htmlFor='contact1'>Contato/Ramal
                    <input
                        id='contact1'
                        className='rounded py-0.5'
                        type='tel'
                        value={data.contact1}
                        onChange={e => setData('contact1', e.target.value)}
                        required
                        autoComplete='contact1'
                    />
                    {errors.contact1 && <div>{errors.contact1}</div>}
                </label>

                <label className='flex flex-col' htmlFor='contact2'>Contato do Responsável
                    <input
                        id='contact2'
                        className='rounded py-0.5'
                        type='tel'
                        value={data.contact2}
                        onChange={e => setData('contact2', e.target.value)}
                        required
                        autoComplete='contact2'
                    />
                    {errors.contact2 && <div>{errors.contact2}</div>}
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
                            name='typeresidence'
                            className='mr-1.5'
                            type='radio'
                            value='house'
                            onChange={e => setData('typeresidence', e.target.value)}
                            defaultChecked
                        />
                        Casa
                    </label>

                    <label className={valueButton ? 'flex items-center cursor-pointer' : 'flex items-center cursor-default'} htmlFor='buildings'>
                        <input
                            id='buildings'
                            name='typeresidence'
                            className='mr-1.5'
                            type='radio'
                            value='buildings'
                            onChange={e => setData('typeresidence', e.target.value)}
                        />
                        Edifício
                    </label>

                    <label className={valueButton ? 'flex items-center cursor-pointer' : 'flex items-center cursor-default'} htmlFor='enterprise'>
                        <input
                            id='enterprise'
                            name='typeresidence'
                            className='mr-1.5'
                            type='radio'
                            value='enterprise'
                            onChange={e => setData('typeresidence', e.target.value)}
                        />
                        Empresa
                    </label>
                </div>

                <label className='flex flex-col' htmlFor='numresidence'>Nº Casa/Edifício
                    <input
                        id='numresidence'
                        className='rounded py-0.5'
                        type='text'
                        value={data.numresidence}
                        onChange={e => setData('numresidence', e.target.value)}
                        required
                        autoComplete='numresidence'
                    />
                    {errors.numresidence && <div>{errors.numresidence}</div>}
                </label>

                {data.typeresidence === 'enterprise' && (
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

                {data.typeresidence !== 'house' && (
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

            </fieldset>
            {valueButton && (
                <div className='flex justify-around py-4'>
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