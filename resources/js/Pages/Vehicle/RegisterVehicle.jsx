import Icon from '@/Components/Icon';
import VehicleForm from '@/Components/VehicleForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function RegisterVehicle() {

    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-xl font-semibold leading-tight text-gray-800'>
                    Cadastrar Veículo
                </h2>
            }
        >
            <Head title='Veículo' />

            <div className='py-12'>
                <div className='mx-auto max-w-xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <div className='w-full flex justify-center pb-4 sm:pb-8'>
                            <Icon
                                className='fa-solid fa-truck-medical text-[45px] text-[blue]'
                            />
                        </div>
                        <VehicleForm point={'vehicle.register'} valueButton={'Cadastrar'} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}