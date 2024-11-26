import ConfirmDelete from '@/Components/Delete/ConfirmDelete';
import Icon from '@/Components/Icon';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatCep } from '@/utils/cepFormat';
import { formatCpf } from '@/utils/cpfFormat';
import { formatPhone } from '@/utils/phoneFormat';
import { Toast } from '@/utils/sweetAlert';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Index({ users, flash }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: true }));
    const handleMouseLeave = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: false }));

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
                    <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                        Lista de Usuários
                    </h2>

                    <nav className='text-sm text-gray-500 dark:text-gray-400'>
                        <Link
                            href={route('dashboard')}
                            className='hover:text-gray-700 dark:text-gray-300'
                        >
                            Painel
                        </Link>
                        <span className='mx-1'>/</span>
                        <span className='cursor-default'>Usuários</span>
                    </nav>
                </div>
            }
        >
            <Head title='Usuários' />

            <div className='py-3'>
                <div className='mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600 cursor-default'>
                                    <th>Nº</th>
                                    <th>Cód.</th>
                                    <th>Name</th>
                                    <th>CPF</th>
                                    <th>Phone</th>
                                    <th>CEP</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.data?.length === 0 && (
                                    <tr className='text-red-600 cursor-default'>
                                        <td colSpan={7}>Não Existe Usuário Cadastrado</td>
                                    </tr>
                                )}
                                {users?.data?.map((user, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>
                                            {index + 1 + (users.current_page - 1) * users.per_page}
                                        </td>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{formatCpf(user.cpf.cpf)}</td>
                                        <td>{formatPhone(user.phone.phone)}</td>
                                        <td>{formatCep(user.address.zipcode.zipcode)}</td>
                                        <td className='flex justify-center items-center gap-3 my-1'>
                                            <Link href={route('user.edit', { id: user.id })}>
                                                <Icon
                                                    icon={hoveredIcon[`${user.id}-edit`]
                                                        ? 'fa-solid fa-user-gear'
                                                        : 'fa-solid fa-user-pen'
                                                    }
                                                    title={`Editar ${user.name}`}
                                                    aria-label={`Editar ${user.name}`}
                                                    className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-orange-600'
                                                    onMouseEnter={() => handleMouseEnter(user.id, 'edit')}
                                                    onMouseLeave={() => handleMouseLeave(user.id, 'edit')}
                                                />
                                            </Link>

                                            <ConfirmDelete
                                                id={user.id}
                                                routeName={'user.destroy'}
                                            >
                                                <Icon
                                                    icon={hoveredIcon[`${user.id}-delete`]
                                                        ? 'fa-solid fa-trash-can'
                                                        : 'fa-regular fa-trash-can'
                                                    }
                                                    title={`Exculir ${user.name}`}
                                                    aria-label={`Excluir ${user.name}`}
                                                    className='text-[25px] text-[blue] duration-[400ms] cursor-pointer hover:text-red-600'
                                                    onMouseEnter={() => handleMouseEnter(user.id, 'delete')}
                                                    onMouseLeave={() => handleMouseLeave(user.id, 'delete')}
                                                />
                                            </ConfirmDelete>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {users?.last_page > 1 && (
                            <Pagination
                                links={users?.links}
                                currentPage={users?.current_page}
                            />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}