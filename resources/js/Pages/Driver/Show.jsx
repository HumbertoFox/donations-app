import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatCpf } from '@/utils/cpfFormat';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function ShowDriver({ drivers }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id) => {
        setHoveredIcon((prev) => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setHoveredIcon((prev) => ({ ...prev, [id]: false }));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className='text-xl font-semibold leading-tight text-gray-800'>
                    Editar Motorista
                </h2>
            }
        >
            <Head title='Motoristas' />

            <div className='py-12'>
                <div className='mx-auto max-w-3xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <div className='w-full flex justify-center pb-4 sm:pb-8'>
                            <table className='w-full text-center'>
                                <thead>
                                    <tr className='border-b-[1px] border-gray-600'>
                                        <th>Nº</th>
                                        <th>Cód.</th>
                                        <th>CNH</th>
                                        <th>CPF</th>
                                        <th>Nome</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {drivers.length === 0 && (
                                        <tr className='text-red-600'>
                                            <td colSpan={6}>Não Existe Motorista Cadastrado</td>
                                        </tr>
                                    )}
                                    {drivers.map((driver, index) => (
                                        <tr key={index} className='border-b-[1px] border-gray-400'>
                                            <td className='border-r-[1px] border-gray-400'>{index + 1}</td>
                                            <td>{driver.id}</td>
                                            <td>{driver.cnh.cnh}</td>
                                            <td>{formatCpf(driver.cnh.cpf.cpf)}</td>
                                            <td>{driver.cnh.cpf.name}</td>
                                            <td className='flex justify-center items-center my-1'>
                                                <Link href={`/driver/${driver.id}/edit`}>
                                                    <Icon
                                                        icon={hoveredIcon[driver.id] ? 'fa-solid fa-address-card' : 'fa-regular fa-address-card'}
                                                        title={`Editar ${driver.cnh.id}`}
                                                        className='text-[25px] text-[blue] duration-[400ms] cursor-pointer hover:text-orange-600'
                                                        onMouseEnter={() => handleMouseEnter(driver.id)}
                                                        onMouseLeave={() => handleMouseLeave(driver.id)}
                                                    />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}