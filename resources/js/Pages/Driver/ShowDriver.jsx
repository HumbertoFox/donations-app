import ConfirmDelete from '@/Components/Delete/ConfirmDelete';
import Icon from '@/Components/Icon';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatCpf } from '@/utils/cpfFormat';
import { Toast } from '@/utils/sweetAlert';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function ShowDriver({ drivers, flash }) {
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
                        Lista de Motoristas
                    </h2>

                    <nav className='text-sm text-gray-500 dark:text-gray-400'>
                        <Link
                            href={route('dashboard')}
                            className='hover:text-gray-700 dark:text-gray-300'
                        >
                            Painel
                        </Link>
                        <span className='mx-1'>/</span>
                        <span className='cursor-default'>Motoristas</span>
                    </nav>
                </div>
            }
        >
            <Head title='Motoristas' />

            <div className='py-3'>
                <div className='mx-auto max-w-3xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600 cursor-default'>
                                    <th>Nº</th>
                                    <th>Cód.</th>
                                    <th>CNH</th>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drivers?.data?.length === 0 && (
                                    <tr className='text-red-600 cursor-default'>
                                        <td colSpan={6}>Não Existe Motorista Cadastrado</td>
                                    </tr>
                                )}
                                {drivers?.data?.map((driver, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>
                                            {index + 1 + (drivers?.current_page - 1) * drivers?.per_page}
                                        </td>
                                        <td>{driver.id}</td>
                                        <td>{driver.cnh.cnh}</td>
                                        <td>{formatCpf(driver.cnh.cpf.cpf)}</td>
                                        <td>{driver.cnh.cpf.name}</td>
                                        <td className='flex justify-center items-center gap-3 my-1'>
                                            <Link href={`/driver/${driver.id}/edit`}>
                                                <Icon
                                                    icon={hoveredIcon[`${driver.id}-edit`]
                                                        ? 'fa-solid fa-address-card'
                                                        : 'fa-regular fa-address-card'
                                                    }
                                                    title={`Editar ${driver.cnh.cpf.name}`}
                                                    className='text-[25px] text-[blue] duration-[400ms] cursor-pointer hover:text-orange-600'
                                                    onMouseEnter={() => handleMouseEnter(driver.id, 'edit')}
                                                    onMouseLeave={() => handleMouseLeave(driver.id, 'edit')}
                                                />
                                            </Link>

                                            <ConfirmDelete
                                                id={driver.id}
                                                routeName={'driver.destroy'}
                                            >
                                                <Icon
                                                    icon={hoveredIcon[`${driver.id}-delete`]
                                                        ? 'fa-solid fa-trash-can'
                                                        : 'fa-regular fa-trash-can'
                                                    }
                                                    title={`Exculir ${driver.cnh.cpf.name}`}
                                                    aria-label={`Excluir ${driver.cnh.cpf.name}`}
                                                    className='text-[25px] text-[blue] duration-[400ms] cursor-pointer hover:text-red-600'
                                                    onMouseEnter={() => handleMouseEnter(driver.id, 'delete')}
                                                    onMouseLeave={() => handleMouseLeave(driver.id, 'delete')}
                                                />
                                            </ConfirmDelete>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {drivers?.last_page > 1 && (
                            <Pagination
                                links={drivers?.links}
                                currentPage={drivers?.current_page}
                            />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}