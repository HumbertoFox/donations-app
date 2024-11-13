import Icon from '@/Components/Icon';
import SideBar from '@/Layouts/Sidebar';
import Pagination from '@/Components/Pagination';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { formatPhone } from '@/utils/phoneFormat';
import { formatCep } from '@/utils/cepFormat';
import { formatDate } from '@/utils/dataFormat';
import { daysSince } from '@/utils/Sincedays';

export default function ScheduleCollection({ donations }) {
    const [hoveredIcon, setHoveredIcon] = useState({});
    const [hoveredDaysIndex, setHoveredDaysIndex] = useState(null);

    const handleMouseEnter = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: true }));
    const handleMouseLeave = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: false }));
    const handleMouseEnterDays = (index) => setHoveredDaysIndex(index);
    const handleMouseLeaveDays = () => setHoveredDaysIndex(null);

    return (
        <div className='max-w-full'>
            <Head title='Doações' />
            <SideBar>
                <div className='w-full p-1'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600 cursor-default'>
                                    <th title='Quantidade'>Nº</th>
                                    <th title='Código da Doação'>Cód.</th>
                                    <th title='Nome do Doador'>Nome</th>
                                    <th title='Contato do Doador'>Telefone</th>
                                    <th title='Cep do Doador'>CEP</th>
                                    <th title='Data de Cadastro da Doação'>Data Cad.</th>
                                    <th title='Dias após Cadastro'>Há Dias</th>
                                    <th title='Ação'>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.data.length === 0 && (
                                    <tr className='text-red-600 cursor-default'>
                                        <td colSpan={8}>Não Existe Doação Cadastrada</td>
                                    </tr>
                                )}
                                {donations.data.map((donation, index) => {
                                    const days = daysSince(donation.created_at);
                                    const dayClass = days <= 5 ? 'text-green-600' : days <= 10 ? 'text-orange-600' : 'text-red-600';
                                    const dayIcon = days <= 5 ? 'fa-solid fa-heart-circle-check' : days <= 10 ? 'fa-solid fa-heart-circle-exclamation' : 'fa-solid fa-heart-circle-xmark';
                                    return (
                                        <tr key={index} className='border-b-[1px] border-gray-400'>
                                            <td className='border-r-[1px] border-gray-400'>
                                                {index + 1 + (donations.current_page - 1) * donations.per_page}
                                            </td>
                                            <td>{donation.id}</td>
                                            <td>{donation.donor?.name}</td>
                                            <td>{formatPhone(donation.donor?.phone?.phone)}</td>
                                            <td>{formatCep(donation.donor?.address?.zipcode?.zipcode)}</td>
                                            <td>{formatDate(donation.created_at)}</td>
                                            <td
                                                className={`${dayClass} cursor-help`}
                                                onMouseEnter={() => handleMouseEnterDays(index)}
                                                onMouseLeave={handleMouseLeaveDays}
                                            >
                                                {hoveredDaysIndex === index ? days : <Icon icon={dayIcon} className='text-[25px]' />}
                                            </td>
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
                                                <Link href={`/record/${donation.id}/register`}>
                                                    <Icon
                                                        icon={hoveredIcon[`${donation.id}-show`] ? 'fa-solid fa-check-double' : 'fa-solid fa-check'}
                                                        title={`Agendar Doação de ${donation.donor?.name}`}
                                                        aria-label={`Agendar Doação de ${donation.donor?.name}`}
                                                        className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-green-600'
                                                        onMouseEnter={() => handleMouseEnter(donation.id, 'show')}
                                                        onMouseLeave={() => handleMouseLeave(donation.id, 'show')}
                                                    />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {donations.last_page > 1 && (
                            <Pagination
                                links={donations.links}
                                currentPage={donations.current_page}
                            />
                        )}
                    </div>
                </div>
            </SideBar>
        </div>
    );
}