import DriverForm from '@/Components/DriverForm';
import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function EditDriver({ driver }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                    Editar Motorista
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
                            driver={driver}
                            point={'driver.update'}
                            valueButton={'Editar'}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}