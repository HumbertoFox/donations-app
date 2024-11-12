import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const linksItems = [
    { href: route('menu.agenda'), icon: 'fa-solid fa-house', title: 'Início', hover: 'hover:text-[blue]' },
    { href: route('register'), icon: 'fa-solid fa-user-plus', title: 'Cadastrar Usuário', hover: 'hover:text-[blue]' },
    { href: route('profile.all'), icon: 'fa-solid fa-users-gear', title: 'Usuários Cadastrados', hover: 'hover:text-[orange]' },
    { href: route('vehicle.register'), icon: 'fa-solid fa-truck-medical', title: 'Cadastrar Veículo', hover: 'hover:text-[blue]' },
    { href: route('vehicle.all'), icon: 'fa-solid fa-truck', title: 'Veículos Cadastrados', hover: 'hover:text-[orange]' },
    { href: route('driver.register'), icon: 'fa-solid fa-address-card', title: 'Cadastrar Motorista', hover: 'hover:text-[blue]' },
    { href: route('driver.all'), icon: 'fa-regular fa-address-card', title: 'Motoristas Cadastrados', hover: 'hover:text-[orange]' },
    { href: route('helper.register'), icon: 'fa-solid fa-id-card', title: 'Cadastrar Ajudante', hover: 'hover:text-[blue]' },
    { href: route('helper.all'), icon: 'fa-regular fa-id-card', title: 'Ajudantes Cadastrados', hover: 'hover:text-[orange]' }
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                    Painel
                </h2>
            }
        >
            <Head title='Painel' />

            <div className='w-full h-full py-3'>
                <div className='max-w-7xl h-full flex flex-col-reverse gap-20 mx-auto sm:flex-col sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                        <nav className='flex flex-wrap justify-center items-center gap-8 p-8 text-gray-900'>

                            {linksItems.map(({ href, icon, title, hover }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    title={title}
                                    aria-label={title}
                                >
                                    <Icon
                                        icon={icon}
                                        className={`text-[95px] text-[green] duration-[400ms] ${hover}`}
                                    />
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='overflow-hidden bg-white shadow-sm sm:rounded-lg'>
                    <div className='p-6 text-gray-900'>
                        Você está logado!
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}