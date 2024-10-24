import SideBar from "@/Layouts/Sidebar";
import Icon from '@/Components/Icon';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { formatPhone } from "@/utils/phoneFormat";
import { formatCep } from "@/utils/cepFormat";

export default function ScheduleCollection({ donations }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id, action) => {
        setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: true }));
    };

    const handleMouseLeave = (id, action) => {
        setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: false }));
    };

    return (
        <div className="max-w-[1440px] flex justify-start items-start">
            <Head title="BetoFoxNet_Info" />
            <SideBar />
            <main className="relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]">
                <div className='w-full p-1'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600'>
                                    <th className='cursor-default' title='Quantidade'>Nº</th>
                                    <th className='cursor-default' title='Código da Doação'>Cód.</th>
                                    <th className='cursor-default' title='Nome do Doador'>Nome</th>
                                    <th className='cursor-default' title='Contato do Doador'>Telefone</th>
                                    <th className='cursor-default' title='Cep do Doador'>CEP</th>
                                    <th className='cursor-default' title='Ação'>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.length === 0 && (
                                    <tr className='text-red-600'>
                                        <td colSpan={6}>Não Existe Veículo Cadastrado</td>
                                    </tr>
                                )}
                                {donations.map((donation, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>{index + 1}</td>
                                        <td>{donation.id}</td>
                                        <td>{donation.donor?.name}</td>
                                        <td>{formatPhone(donation.donor?.phone?.phone)}</td>
                                        <td>{formatCep(donation.donor?.address?.zipcode?.zipcode)}</td>
                                        <td className='flex justify-evenly items-center my-1'>
                                            <Link href={`/donation/${donation.id}/edit`}>
                                                <Icon
                                                    icon={hoveredIcon[`${donation.id}-edit`] ? 'fa-regular fa-address-book' : 'fa-solid fa-address-book'}
                                                    title={`Editar doação de ${donation.donor?.name}`}
                                                    aria-label={`Editar doação de ${donation.donor?.name}`}
                                                    className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-orange-600'
                                                    onMouseEnter={() => handleMouseEnter(donation.id, 'edit')}
                                                    onMouseLeave={() => handleMouseLeave(donation.id, 'edit')}
                                                />
                                            </Link>
                                            <Link href={``}>
                                                <Icon
                                                    icon={hoveredIcon[`${donation.id}-show`] ? 'fa-regular fa-circle-check' : 'fa-solid fa-circle-check'}
                                                    title={`Agendar Doação de ${donation.donor?.name}`}
                                                    aria-label={`Agendar Doação de ${donation.donor?.name}`}
                                                    className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-green-600'
                                                    onMouseEnter={() => handleMouseEnter(donation.id, 'show')}
                                                    onMouseLeave={() => handleMouseLeave(donation.id, 'show')}
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