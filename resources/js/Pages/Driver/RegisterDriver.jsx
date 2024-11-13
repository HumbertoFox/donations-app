import DriverForm from '@/Components/DriverForm';
import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Toast } from '@/utils/sweetAlert';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function RegisterDriver({ flash }) {

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
                <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                    Cadastrar Motorista
                </h2>
            }
        >
            <Head title='Motorista' />

            <div className='py-3'>
                <div className='mx-auto max-w-xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <div className='w-full flex justify-center pb-4 sm:pb-8'>
                            <Icon
                                icon='fa-solid fa-address-card'
                                className='text-[45px] text-[blue]'
                            />
                        </div>
                        <DriverForm
                            point={'driver.store'}
                            valueButton={'Cadastrar'}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}