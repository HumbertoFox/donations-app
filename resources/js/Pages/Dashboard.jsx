import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="w-full h-full py-12">
                <div className="max-w-7xl h-full flex flex-col-reverse gap-20 mx-auto sm:flex-col sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-wrap justify-center items-center gap-8 p-8 text-gray-900">

                            <Link href={route('menu.agenda')} title="Início">
                                <i className="fa-solid fa-house text-[95px] text-[green] duration-[400ms] hover:text-[blue]" />
                            </Link>

                            <Link href={'/'} title="Cadastrar Usuário">
                                <i className="fa-solid fa-user-check text-[95px] text-[green] duration-[400ms] hover:text-[blue]" />
                            </Link>

                            <Link href={route('profile.edit')} title="Editar Usuário">
                                <i className="fa-solid fa-user-pen text-[95px] text-[green] duration-[400ms] hover:text-[orange]" />
                            </Link>

                            <Link href={'/'} title="Excluir Usuário">
                                <i className="fa-solid fa-user-lock text-[95px] text-[green] duration-[400ms] hover:text-[red]" />
                            </Link>

                            <Link href={"/"} title="Cadastrar Veículo">
                                <i className="fa-solid fa-truck-medical text-[95px] text-[green] duration-[400ms] hover:text-[blue]" />
                            </Link>

                            <Link href={'/'} title="Editar Veículo">
                                <i className="fa-solid fa-truck text-[95px] text-[green] duration-[400ms] hover:text-[orange]" />
                            </Link>

                            <Link href={'/'} title="Cadastrar Motorista">
                                <i className="fa-solid fa-address-card text-[95px] text-[green] duration-[400ms] hover:text-[blue]" />
                            </Link>

                            <Link href={'/'} title="Cadastrar Motorista">
                                <i className="fa-regular fa-address-card text-[95px] text-[green] duration-[400ms] hover:text-[orange]" />
                            </Link>

                            <Link href={'/'} title="Cadastrar Ajudante">
                                <i className="fa-solid fa-id-card text-[95px] text-[green] duration-[400ms] hover:text-[blue]" />
                            </Link>

                            <Link href={'/'} title="Editar Ajudante">
                                <i className="fa-regular fa-id-card text-[95px] text-[green] duration-[400ms] hover:text-[orange]" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}