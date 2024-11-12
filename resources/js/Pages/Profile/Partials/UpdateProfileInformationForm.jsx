import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { getCheckedCpf } from '@/utils/cpfValidation';
import { checkedZipCode } from '@/utils/viaCep';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;
    const zipCodeRef = useRef(null);
    const numberResidenceRef = useRef(null);

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user?.name ?? '',
        cpf: user?.cpf?.cpf ?? '',
        birthdate: user?.cpf?.birthdate ?? '',
        phone: user?.phone?.phone ?? '',
        email: user?.email ?? '',
        zipcode: user?.address?.zipcode?.zipcode ?? '',
        street: user?.address?.zipcode?.street ?? '',
        district: user?.address?.zipcode?.district ?? '',
        city: user?.address?.zipcode?.city ?? '',
        number_residence: user?.address?.number_residence ?? '',
        type_residence: user?.address?.type_residence ?? '',
        building: user?.address?.building ?? '',
        block: user?.address?.block ?? '',
        livingapartmentroom: user?.address?.livingapartmentroom ?? '',
        reference_point: user?.address?.reference_point ?? ''
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    const handleZipCodeChange = (e) => {
        const newZipCode = e.target.value;
        setData('zipcode', newZipCode);
        checkedZipCode(e, setData, errors, zipCodeRef, numberResidenceRef);
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Informações do perfil
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Atualize as informações do perfil e o endereço de e-mail da sua conta.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Nome" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="cpf" value="CPF" />

                    <TextInput
                        id="cpf"
                        type="number"
                        name="cpf"
                        value={data.cpf}
                        className="mt-1 block w-full cursor-not-allowed"
                        autoComplete="cpf"
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
                        disabled
                    />

                    <InputError message={errors.cpf} className="mt-2" />
                </div>

                <div className='mt-4'>
                    <InputLabel htmlFor='birthdate' value='Data de Nascimento' />

                    <TextInput
                        id='birthdate'
                        name='birthdate'
                        type={'date'}
                        value={data.birthdate}
                        className='mt-1 block w-full'
                        autoComplete='birthdate'
                        onChange={(e) => setData('birthdate', e.target.value)}
                        required
                    />

                    <InputError message={errors.birthdate} className='mt-2' />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Telefone" />

                    <TextInput
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                        autoComplete="phone"
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="zipcode" value="CEP" />

                    <TextInput
                        id="zipcode"
                        type="number"
                        name="zipcode"
                        value={data.zipcode}
                        className="mt-1 block w-full"
                        autoComplete="zipcode"
                        onChange={(e) => setData('zipcode', e.target.value)}
                        onBlur={handleZipCodeChange}
                        required
                        ref={zipCodeRef}
                    />

                    <InputError message={errors.zipcode} className="mt-2" />
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

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Seu endereço de e-mail não foi verificado.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 no-underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:underline"
                            >
                                Clique aqui para reenviar o e-mail de verificação.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Um novo link de verificação foi enviado para seu
                                endereço de e-mail.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Salvo.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}