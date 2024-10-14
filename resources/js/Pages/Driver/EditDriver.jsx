import DriverForm from '@/Components/DriverForm';
import Icon from '@/Components/Icon';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditDriver() {
    const { data, setData, post, processing, errors } = useForm({
        cnh: ''
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-xl font-semibold leading-tight text-gray-800'>
                    Editar Motorista
                </h2>
            }
        >
            <Head title='Motorista' />

            <div className='pt-12'>
                <div className='mx-auto max-w-xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <h1 className='text-center'>Pesquisar Motorista por CNH</h1>
                        <form className='max-w-xl' onSubmit={submit}>
                            <div className='mt-4'>
                                <InputLabel htmlFor='cnh' value='CNH' />

                                <TextInput
                                    id='cnh'
                                    name='cnh'
                                    type='number'
                                    value={data.cnh}
                                    className='mt-1 block w-full'
                                    autoComplete='cnh'
                                    isFocused={true}
                                    onChange={(e) => setData('cnh', e.target.value)}
                                    required
                                />

                                <InputError message={errors.cnh} className='mt-2' />
                            </div>

                            <div className='flex justify-around pt-4 sm:pt-8 duration-[400ms]'>
                                <PrimaryButton disabled={processing}>
                                    Pesquisar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='py-12'>
                <div className='mx-auto max-w-xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <div className='w-full flex justify-center pb-4 sm:pb-8'>
                            <Icon
                                className='fa-solid fa-address-card text-[45px] text-[blue]'
                            />
                        </div>
                        <DriverForm point={''} valueButton={'Editar'} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}