import ApplicationLogo from '@/Components/ApplicationLogo';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import { Link } from '@inertiajs/react';

const classLinks = 'flex items-center p-2.5 gap-[15px] duration-[400ms] text-[black] hover:bg-[#79D1FF] hover:text-white';

export default function SideBar() {
    return (
        <nav className="w-[200px] h-full flex flex-col fixed border-r-[3px] border-[#79D1FF] bg-[#AAF998] duration-[400ms] overflow-hidden max-[1080px]:w-[70px]">
            <Link className="max-w-[150px] mx-auto duration-[400ms]" href={'/dashboard'}>
                <ApplicationLogo />
            </Link>
            <ul>
                <li title="Cadastrar Doação">
                    <Link className={classLinks}
                        href={route('menu.registerdonation')}>
                        <i className="fa-solid fa-pen-to-square text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Cadastrar Doação</span>
                    </Link>
                </li>
                <li title="Cadastrar Doador">
                    <Link className={classLinks}
                        href={route('menu.registerdonor')}>
                        <i className="fa-solid fa-user-plus text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Cadastrar Doador</span>
                    </Link>
                </li>
                <li title="Editar Doação">
                    <Link className={classLinks}
                        href={route('menu.editdonation')}>
                        <i className="fa-regular fa-pen-to-square text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Editar Doação</span>
                    </Link>
                </li>
                <li title="Editar Doador">
                    <Link className={classLinks}
                        href={route('menu.editdonor')}>
                        <i className="fa-solid fa-user-pen text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Editar Doador</span>
                    </Link>
                </li>
                <li title="Agendar Coleta">
                    <Link className={classLinks}
                        href={route('menu.schedulecollection')}>
                        <i className="fa-solid fa-file-circle-plus text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Agendar Coleta</span>
                    </Link>
                </li>
                <li title="Confirmar Coleta">
                    <Link className={classLinks}
                        href={route('menu.confirmcollection')}>
                        <i className="fa-solid fa-file-circle-check text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Confirmar Coleta</span>
                    </Link>
                </li>
                <li title="Relatório">
                    <Link className={classLinks}
                        href={route('menu.report')}>
                        <i className="fa-solid fa-file-lines text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Gerar Relatório</span>
                    </Link>
                </li>
                <li title="Agenda">
                    <Link className={classLinks}
                        href={route('menu.agenda')}>
                        <i className="fa-solid fa-calendar-days text-[2rem]" />
                        <span className="text-sm max-[1080px]:hidden">Agenda</span>
                    </Link>
                </li>
                <li className="duration-[400ms] mt-4" title='Sair/Logout'>
                    <Link className="flex items-center p-2.5 gap-[15px] duration-[400ms] hover:text-[white] active:bg-[#79D1FF]"
                        href={route('logout')}
                        method='post'
                    >
                        <i className="fa-solid fa-right-from-bracket text-[2rem] rotate-180" />
                        <span className="text-sm max-[1080px]:hidden">Sair do Sistema</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}