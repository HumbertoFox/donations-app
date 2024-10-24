import Icon from '@/Components/Icon';
import { Head, Link } from '@inertiajs/react';
import { formatPhone } from '@/utils/phoneFormat';
import { formatCep } from '@/utils/cepFormat';
import { useState } from 'react';
import SideBar from '@/Layouts/Sidebar';

export default function ShowDonors({ donors }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id, action) => {
        setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: true }));
    };

    const handleMouseLeave = (id, action) => {
        setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: false }));
    };

    return (
        <div className="max-w-[1440px] flex justify-start items-start">
            <Head title='Doadores' />
            <SideBar />
            <main className="relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]">
                <div className='w-full p-1'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600'>
                                    <th>Nº</th>
                                    <th>Cód.</th>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>CEP</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donors.length === 0 && (
                                    <tr className='text-red-600'>
                                        <td colSpan={6}>Não Existe Veículo Cadastrado</td>
                                    </tr>
                                )}
                                {donors.map((donor, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>{index + 1}</td>
                                        <td>{donor.id}</td>
                                        <td>{donor.name}</td>
                                        <td>{formatPhone(donor.phone?.phone)}</td>
                                        <td>{formatCep(donor.address?.zipcode)}</td>
                                        <td className='flex justify-evenly items-center my-1'>
                                            <Link href={`/donor/${donor.id}/edit`}>
                                                <Icon
                                                    icon={hoveredIcon[`${donor.id}-edit`] ? 'fa-solid fa-user-pen' : 'fa-solid fa-user-gear'}
                                                    title={`Editar ${donor.name}`}
                                                    aria-label={`Editar ${donor.name}`}
                                                    className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-orange-600'
                                                    onMouseEnter={() => handleMouseEnter(donor.id, 'edit')}
                                                    onMouseLeave={() => handleMouseLeave(donor.id, 'edit')}
                                                />
                                            </Link>
                                            <Link href={`/donation/${donor.id}/register`}>
                                                <Icon
                                                    icon={hoveredIcon[`${donor.id}-show`] ? 'fa-solid fa-person-circle-check' : 'fa-solid fa-person-circle-question'}
                                                    title={`Doação de ${donor.name}`}
                                                    aria-label={`Doação de ${donor.name}`}
                                                    className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-green-600'
                                                    onMouseEnter={() => handleMouseEnter(donor.id, 'show')}
                                                    onMouseLeave={() => handleMouseLeave(donor.id, 'show')}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}