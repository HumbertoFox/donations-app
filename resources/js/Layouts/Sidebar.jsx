import Icon from '@/Components/Icon';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

const classLinks = 'flex items-center p-2.5 gap-[15px] duration-500 text-black hover:bg-[#79D1FF] hover:text-white ease-in-out';

const menuItems = [
    { title: 'Cadastrar Doação', icon: 'fa-solid fa-pen-to-square', route: route('menu.donors'), url: 'donation.register' },
    { title: 'Cadastrar Doador', icon: 'fa-solid fa-user-plus', route: route('donor.register'), url: 'donor.register' },
    { title: 'Editar Doação', icon: 'fa-regular fa-pen-to-square', route: route('menu.donations'), url: 'donation.edit' },
    { title: 'Editar Doador', icon: 'fa-solid fa-user-pen', route: route('menu.donors'), url: 'donor.edit' },
    { title: 'Agendar Coleta', icon: 'fa-solid fa-file-circle-plus', route: route('menu.donations'), url: 'menu.record' },
    { title: 'Confirmar Coleta', icon: 'fa-solid fa-file-circle-check', route: route('menu.confirmed'), url: 'menu.confirmed' },
    { title: 'Relatório', icon: 'fa-solid fa-file-lines', route: route('menu.report'), url: 'menu.report' },
    { title: 'Agenda', icon: 'fa-solid fa-calendar-days', route: route('menu.agenda'), url: 'menu.agenda' }
];

export default function SideBar({ children }) {
    const [isUrlCurrent, setIsUrlCurrent] = useState('');

    useEffect(() => {
        const currentRoute = route().current();
        setIsUrlCurrent(currentRoute);
    }, []);

    return (
        <div className='max-w-[1440px] h-dvh flex justify-start items-start'>

            <nav className='w-[200px] h-full flex flex-col fixed border-r-[3px] border-[#79D1FF] bg-[#AAF998] duration-500 overflow-hidden max-[1080px]:w-[70px] ease-in-out'>
                <Link className='max-w-[110px] mx-auto duration-500 ease-in-out' href={'/dashboard'}>
                    <ApplicationLogo />
                </Link>

                <ul>

                    {menuItems.map(({ title, icon, route, url }, index) => (
                        <li key={index} title={title}>
                            <Link className={`${classLinks} ${isUrlCurrent === url && 'bg-[#79D1FF] text-black hover:text-white'}`}
                                href={route}
                                aria-label={title}
                                role='menuitem'
                            >
                                <Icon icon={icon} className='text-[2rem]' />
                                <span className='text-sm max-[1080px]:hidden'>{title}</span>
                            </Link>
                        </li>
                    ))}

                    <li className='duration-500 mt-4 ease-in-out' title='Sair/Logout'>
                        <Link
                            className='flex items-center p-2.5 gap-[15px] duration-500 hover:text-red-600 active:bg-[#79D1FF] ease-in-out'
                            href={route('logout')}
                            method='post'
                        >
                            <Icon icon='fa-solid fa-right-from-bracket' className='text-[2rem] rotate-180' />
                            <span className='text-sm max-[1080px]:hidden'>Sair do Sistema</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <main className='relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-500 ease-in-out'>
                {children}
            </main>
        </div>
    );
}