import Icon from '@/Components/Icon';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatCep } from '@/utils/cepFormat';
import { formatCpf } from '@/utils/cpfFormat';
import { formatPhone } from '@/utils/phoneFormat';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Index({ users }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id) => setHoveredIcon((prev) => ({ ...prev, [id]: true }));
    const handleMouseLeave = (id) => setHoveredIcon((prev) => ({ ...prev, [id]: false }));

    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-lg font-semibold leading-tight text-gray-800'>
                    Lista de Usuários
                </h2>
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
                                {users.data.length === 0 && (
                                    <tr className='text-red-600 cursor-default'>
                                        <td colSpan={7}>Não Existe Usuário Cadastrado</td>
                                    </tr>
                                )}
                                {users.data.map((user, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>
                                            {index + 1 + (users.current_page - 1) * users.per_page}
                                        </td>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{formatCpf(user.cpf.cpf)}</td>
                                        <td>{formatPhone(user.phone.phone)}</td>
                                        <td>{formatCep(user.address.zipcode.zipcode)}</td>
                                        <td className='flex justify-center items-center my-1'>
                                            <Link href={route('profile.all')}>
                                                <Icon
                                                    icon={hoveredIcon[user.id] ? 'fa-solid fa-user-gear' : 'fa-solid fa-user-pen'}
                                                    title={`Editar ${user.name}`}
                                                    aria-label={`Editar ${user.name}`}
                                                    className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-orange-600'
                                                    onMouseEnter={() => handleMouseEnter(user.id)}
                                                    onMouseLeave={() => handleMouseLeave(user.id)}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {users.last_page > 1 && (
                            <Pagination
                                links={users.links}
                                currentPage={users.current_page}
                            />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}