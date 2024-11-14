import HelperForm from '@/Components/HelperForm';
import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Toast } from '@/utils/sweetAlert';
import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function RegisterHelper({ flash }) {

    useEffect(() => {
        if (flash[0]) {
            Toast.fire({
                icon: flash[0],
                title: flash[1],
            })
        };
    }, [flash]);

    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                        Cadastrar Ajudante
                    </h2>

                    <nav className='text-sm text-gray-500 dark:text-gray-400'>
                        <Link
                            href={route('dashboard')}
                            className='hover:text-gray-700 dark:text-gray-300'
                        >
                            Painel
                        </Link>
                        <span className='mx-1'>/</span>
                        <span className='cursor-default'>Ajudante</span>
                    </nav>
                </div>
            }
        >
            <Head title='Ajudante' />

            <div className='py-3'>
                <div className='mx-auto max-w-xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <div className='w-full flex justify-center pb-4 sm:pb-8'>
                            <Icon
                                icon='fa-solid fa-address-card'
                                className='text-[45px] text-[blue]'
                            />
                        </div>
                        <HelperForm
                            point='helper.store'
                            valueButton={'Cadastrar'}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}