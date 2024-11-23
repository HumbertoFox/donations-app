import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import UpdateUserForm from '@/Components/UpdateUserForm';
import { Toast } from '@/utils/sweetAlert';
import { useEffect } from 'react';

export default function Edit({ user, flash }) {

    useEffect(() => {
        if (flash.success) {
            Toast.fire({
                icon: 'success',
                title: flash.success,
            })
        };
    }, [flash]);
    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between'>
                    <h2 className="text-lg font-semibold leading-tight text-gray-800">
                        Perfil
                    </h2>

                    <nav className='text-sm text-gray-500 dark:text-gray-400'>
                        <Link
                            href={route('dashboard')}
                            className='hover:text-gray-700 dark:text-gray-300'
                        >
                            Painel
                        </Link>

                        <span className='mx-1'>/</span>

                        <Link
                            href={route('profile.all')}
                            className='hover:text-gray-700 dark:text-gray-300'
                        >
                            Usuários
                        </Link>

                        <span className='mx-1'>/</span>

                        <span className='cursor-default'>Usuário</span>
                    </nav>
                </div>
            }
        >
            <Head title="Edite" />

            <div className="py-3">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateUserForm className="max-w-xl" user={user} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}