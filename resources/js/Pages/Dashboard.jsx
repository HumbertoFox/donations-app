import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-xl font-semibold leading-tight text-gray-800'>
                    Dashboard
                </h2>
            }
        >
            <Head title='Dashboard' />

            <div className='w-full h-full py-12'>
                <div className='max-w-7xl h-full flex flex-col-reverse gap-20 mx-auto sm:flex-col sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                        <div className='flex flex-wrap justify-center items-center gap-8 p-8 text-gray-900'>

                            <Link href={route('menu.agenda')} title='Início'>
                                <Icon icon='fa-solid fa-house' className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                            </Link>

                            <Link href={''} title='Cadastrar Usuário'>
                                <Icon icon='fa-solid fa-user-check' className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                            </Link>

                            <Link href={route('profile.edit')} title='Editar Usuário'>
                                <Icon icon='fa-solid fa-user-pen' className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
                            </Link>

                            <Link href={''} title='Excluir Usuário'>
                                <Icon icon='fa-solid fa-user-lock' className='text-[95px] text-[green] duration-[400ms] hover:text-[red]' />
                            </Link>

                            <Link href={route('vehicle.registervehicle')} title='Cadastrar Veículo'>
                                <Icon icon='fa-solid fa-truck-medical' className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                            </Link>

                            <Link href={route('vehicle.all')} title='Veículos Cadastrados'>
                                <Icon icon='fa-solid fa-truck' className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
                            </Link>

                            <Link href={route('driver.registerdriver')} title='Cadastrar Motorista'>
                                <Icon icon='fa-solid fa-address-card' className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                            </Link>

                            <Link href={route('driver.all')} title='Motoristas Cadastrados'>
                                <Icon icon='fa-regular fa-address-card' className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
                            </Link>

                            <Link href={route('helper.registerhelper')} title='Cadastrar Ajudante'>
                                <Icon icon='fa-solid fa-id-card' className='text-[95px] text-[green] duration-[400ms] hover:text-[blue]' />
                            </Link>

                            <Link href={route('helper.all')} title='Ajudantes Cadastrados'>
                                <Icon icon='fa-regular fa-id-card' className='text-[95px] text-[green] duration-[400ms] hover:text-[orange]' />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className='py-12'>
                <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                    <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
                        <div className='p-6 text-gray-900'>
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}