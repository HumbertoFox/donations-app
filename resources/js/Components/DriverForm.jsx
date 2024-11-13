import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { calculateAge } from '@/utils/calcAge';
import { getCheckedCpf } from '@/utils/cpfValidation';
import { Toast } from '@/utils/sweetAlert';
import { checkedZipCode } from '@/utils/viaCep';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DriverForm({ driver = {}, point, valueButton }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: driver.cnh?.cpf?.name ?? '',
        cpf: driver.cnh?.cpf?.cpf ?? '',
        cnh: driver.cnh?.cnh ?? '',
        birthdate: driver.cnh?.cpf?.birthdate ?? '',
        phone: driver.phone?.phone ?? '',
        email: driver.phone?.email ?? '',
        zipcode: driver.address?.zipcode?.zipcode ?? '',
        street: driver.address?.zipcode?.street ?? '',
        district: driver.address?.zipcode?.district ?? '',
        city: driver.address?.zipcode?.city ?? '',
        number_residence: driver.address?.number_residence ?? '',
        type_residence: driver.address?.type_residence ?? 'house',
        building: driver.address?.building ?? '',
        block: driver.address?.block ?? '',
        livingapartmentroom: driver.address?.livingapartmentroom ?? '',
        reference_point: driver.address?.reference_point ?? ''
    });

    const cpfRef = useRef(null);
    const zipCodeRef = useRef(null);
    const numberResidenceRef = useRef(null);
    const [age, setAge] = useState(0);

    const submit = (e) => {
        e.preventDefault();

        if (!getCheckedCpf(data.cpf)) {
            return cpfRef.current.focus();
        };

        switch (point) {
            case 'driver.store':
                post(route(point, driver.id), {
                    onSuccess: ({ props }) => {
                        Toast.fire({
                            icon: 'success',
                            title: props.flash.success,
                        }).then(() => {
                            reset();
                        });
                    }
                });
                break;
            case 'driver.update':
                put(route(point, driver.id), {
                    onSuccess: ({ props }) => {
                        Toast.fire({
                            icon: 'success',
                            title: props.flash.success,
                        }).then(() => {
                            window.location.reload()
                        });
                    }
                });
                break;
            default:
                break;
        };
    };

    const handleZipCodeChange = (e) => {
        const newZipCode = e.target.value;
        setData('zipcode', newZipCode);
        checkedZipCode(e, setData, errors, zipCodeRef, numberResidenceRef);
    };

    const handleBirthdateChange = (e) => {
        const birthdate = e.target.value;
        setData('birthdate', birthdate);
        const age = calculateAge(birthdate);
        setAge(isNaN(age) ? 0 : age);
    };

    return (
        <form className='max-w-xl' onSubmit={submit}>
            <div>
                <InputLabel htmlFor='name' value='Nome' />

                <TextInput
                    id='name'
                    name='name'
                    value={data.name}
                    className='mt-1 block w-full'
                    autoComplete='name'
                    isFocused={valueButton === 'Cadastrar' ? true : false}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='cpf' value='CPF' />

                <TextInput
                    id='cpf'
                    name='cpf'
                    type='number'
                    value={data.cpf}
                    className={`mt-1 block w-full ${valueButton === 'Editar' ? 'cursor-not-allowed' : ''}`}
                    autoComplete='cpf'
                    onChange={(e) => {
                        const newCpf = e.target.value
                        setData('cpf', newCpf);
                        !getCheckedCpf(newCpf)
                            ?
                            errors.cpf = 'CPF Inválido!'
                            :
                            errors.cpf = null;
                    }}
                    required
                    disabled={valueButton === 'Editar' ? true : false}
                    ref={cpfRef}
                />

                <InputError message={errors.cpf} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='cnh' value='CNH' />

                <TextInput
                    id='cnh'
                    name='cnh'
                    type='number'
                    value={data.cnh}
                    className={`mt-1 block w-full ${valueButton === 'Editar' ? 'cursor-not-allowed' : ''}`}
                    autoComplete='cnh'
                    onChange={(e) => setData('cnh', e.target.value)}
                    required
                    disabled={valueButton === 'Editar' ? true : false}
                />

                <InputError message={errors.cnh} className='mt-2' />
            </div>

            <div className='flex items-end'>
                <div className='w-full mt-4'>
                    <InputLabel htmlFor='birthdate' value='Data de Nascimento' />

                    <TextInput
                        id='birthdate'
                        name='birthdate'
                        type={'date'}
                        value={data.birthdate}
                        className='mt-1 block w-full'
                        autoComplete='birthdate'
                        onChange={handleBirthdateChange}
                        required
                    />

                    <InputError message={errors.birthdate} className='mt-2' />
                </div>
                <div className='px-2 text-center'>
                    <p>{age}</p>
                    <p>anos</p>
                </div>
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='phone' value='Phone' />

                <TextInput
                    id='phone'
                    name='phone'
                    type='tel'
                    value={data.phone}
                    className='mt-1 block w-full'
                    autoComplete='phone'
                    onChange={(e) => setData('phone', e.target.value)}
                    required
                />

                <InputError message={errors.phone} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='email' value='Email' />

                <TextInput
                    id='email'
                    name='email'
                    type='email'
                    value={data.email}
                    className='mt-1 block w-full'
                    autoComplete='email'
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />

                <InputError message={errors.email} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='zipcode' value='CEP' />

                <TextInput
                    id='zipcode'
                    name='zipcode'
                    type='number'
                    value={data.zipcode}
                    className='mt-1 block w-full'
                    autoComplete='zipcode'
                    onChange={(e) => setData('zipcode', e.target.value)}
                    onBlur={handleZipCodeChange}
                    required
                    ref={zipCodeRef}
                />

                <InputError message={errors.zipcode} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='street' value='Logradouro: Av/Rua/Trav' />

                <TextInput
                    id='street'
                    name='street'
                    value={data.street}
                    className='mt-1 block w-full'
                    autoComplete='street'
                    onChange={(e) => setData('street', e.target.value)}
                    required
                />

                <InputError message={errors.street} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='district' value='Bairro/Distrito' />

                <TextInput
                    id='district'
                    name='district'
                    value={data.district}
                    className='mt-1 block w-full'
                    autoComplete='district'
                    onChange={(e) => setData('district', e.target.value)}
                    required
                />

                <InputError message={errors.district} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='city' value='Cidade' />

                <TextInput
                    id='city'
                    name='city'
                    value={data.city}
                    className='mt-1 block w-full'
                    autoComplete='city'
                    onChange={(e) => setData('city', e.target.value)}
                    required
                />

                <InputError message={errors.city} className='mt-2' />
            </div>

            <div className='flex gap-3 justify-center items-center text-center mt-4'>
                <div className='flex items-center gap-1'>
                    <input
                        className='border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer'
                        id='house'
                        name='type_residence'
                        type='radio'
                        value='house'
                        onChange={e => setData('type_residence', e.target.value)}
                        checked={data.type_residence === 'house'}
                    />
                    <InputLabel className='cursor-pointer' htmlFor='house' value='Casa' />
                </div>
                <div className='flex items-center gap-1'>
                    <input
                        className='border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 cursor-pointer'
                        id='buildings'
                        name='type_residence'
                        type='radio'
                        value='buildings'
                        onChange={e => setData('type_residence', e.target.value)}
                        checked={data.type_residence === 'buildings'}
                    />
                    <InputLabel className='cursor-pointer' htmlFor='buildings' value='Edifício' />
                </div>
            </div>

            <div>
                <InputLabel htmlFor='number_residence' value='Nº Casa/Edifício' />

                <TextInput
                    id='number_residence'
                    name='number_residence'
                    value={data.number_residence}
                    className='mt-1 block w-full'
                    autoComplete='number_residence'
                    onChange={(e) => setData('number_residence', e.target.value)}
                    required
                    ref={numberResidenceRef}
                />

                <InputError message={errors.number_residence} className='mt-2' />
            </div>

            {data.type_residence === 'buildings' && (
                <div>
                    <div className='mt-4'>
                        <InputLabel htmlFor='building' value='Nome do Edifício' />

                        <TextInput
                            id='building'
                            name='building'
                            value={data.building}
                            className='mt-1 block w-full'
                            autoComplete='building'
                            onChange={(e) => setData('building', e.target.value)}
                            required
                        />

                        <InputError message={errors.building} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor='block' value='Bloco' />

                        <TextInput
                            id='block'
                            name='block'
                            value={data.block}
                            className='mt-1 block w-full'
                            autoComplete='block'
                            onChange={(e) => setData('block', e.target.value)}
                            required
                        />

                        <InputError message={errors.block} className='mt-2' />
                    </div>

                    <div className='mt-4'>
                        <InputLabel htmlFor='livingapartmentroom' value='Apartamento/Sala' />

                        <TextInput
                            id='livingapartmentroom'
                            name='livingapartmentroom'
                            value={data.livingapartmentroom}
                            className='mt-1 block w-full'
                            autoComplete='livingapartmentroom'
                            onChange={(e) => setData('livingapartmentroom', e.target.value)}
                            required
                        />

                        <InputError message={errors.livingapartmentroom} className='mt-2' />
                    </div>
                </div>
            )}

            <div className='mt-4'>
                <InputLabel htmlFor='reference_point' value='Ponto de Referência' />

                <textarea
                    id='reference_point'
                    name='reference_point'
                    value={data.reference_point}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                    autoComplete='reference_point'
                    onChange={(e) => setData('reference_point', e.target.value)}
                    required
                />

                <InputError message={errors.reference_point} className='mt-2' />
            </div>

            <div className='flex justify-around pt-4 sm:pt-8 duration-[400ms]'>
                <PrimaryButton
                    type='submit'
                    disabled={processing}
                >
                    {valueButton}
                </PrimaryButton>
            </div>
        </form>
    );
}