import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { formatCpf } from '@/utils/cpfFormat';

export default function ShowHelper({ helpers }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id) => setHoveredIcon((prev) => ({ ...prev, [id]: true }));
    const handleMouseLeave = (id) => setHoveredIcon((prev) => ({ ...prev, [id]: false }));

    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                    Lista de Ajudantes
                </h2>
            }
        >
            <Head title='Ajudantes' />

            <div className='py-3'>
                <div className='mx-auto max-w-3xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600 cursor-default'>
                                    <th>Nº</th>
                                    <th>Cód.</th>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {helpers.data.length === 0 && (
                                    <tr className='text-red-600 cursor-default'>
                                        <td colSpan={5}>Não Existe Ajudante Cadastrado</td>
                                    </tr>
                                )}
                                {helpers.data.map((helper, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>
                                            {index + 1 + (helpers.current_page - 1) * helpers.per_page}
                                        </td>
                                        <td>{helper.id}</td>
                                        <td>{formatCpf(helper.cpf?.cpf)}</td>
                                        <td>{helper.cpf?.name}</td>
                                        <td className='flex justify-center items-center my-1'>
                                            <Link href={`/helper/${helper.id}/edit`}>
                                                <Icon
                                                    icon={hoveredIcon[helper.id] ? 'fa-solid fa-id-card' : 'fa-regular fa-id-card'}
                                                    title={`Editar ${helper.cpf?.name}`}
                                                    className='text-[25px] text-[blue] duration-[400ms] cursor-pointer hover:text-orange-600'
                                                    onMouseEnter={() => handleMouseEnter(helper.id)}
                                                    onMouseLeave={() => handleMouseLeave(helper.id)}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {helpers.last_page > 1 && (
                            <Pagination
                                links={helpers.links}
                                currentPage={helpers.current_page}
                            />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}