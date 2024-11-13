import { Head, Link, useForm } from '@inertiajs/react';
import { formatPhone } from '@/utils/phoneFormat';
import { formatCep } from '@/utils/cepFormat';
import { useState } from 'react';
import Icon from '@/Components/Icon';
import SideBar from '@/Layouts/Sidebar';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import WarningButton from '@/Components/Buttons/WarningButton';

export default function ShowDonors({ donors, filters }) {
    const [hoveredIcon, setHoveredIcon] = useState({});
    const { data, setData, get } = useForm({
        name: filters?.name || '',
        phone: filters?.phone || '',
        zipcode: filters?.zipcode || '',
        district: filters?.district || '',
    })

    const handleMouseEnter = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: true }));
    const handleMouseLeave = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: false }));

    const handleSearch = (e) => {
        e.preventDefault();

        get(route('menu.donors'))
    }

    return (
        <div className='max-w-full'>
            <Head title='Doadores' />
            <SideBar>
                <div className='flex flex-col gap-2 w-full p-1'>
                    <form
                        onSubmit={handleSearch}
                        className='w-full flex flex-col gap-2 p-2 bg-white shadow sm:rounded-lg'
                    >
                        <div className='flex flex-col gap-2 md:flex-row'>
                            <input
                                type="text"
                                value={data.name}
                                autoComplete='name'
                                placeholder='Nome do Doador'
                                onChange={(e) => setData('name', e.target.value)}
                                className='px-2 py-0 text-sm md:w-1/4 rounded'
                            />

                            <input
                                type="number"
                                value={data.phone}
                                autoComplete='phone'
                                placeholder='Telefone'
                                onChange={(e) => setData('phone', e.target.value)}
                                className='px-2 py-0 text-sm md:w-1/4 rounded'
                            />

                            <input
                                type="number"
                                value={data.zipcode}
                                autoComplete='zipcode'
                                placeholder='CEP'
                                onChange={(e) => setData('zipcode', e.target.value)}
                                className='px-2 py-0 text-sm md:w-1/4 rounded'
                            />

                            <input
                                type="text"
                                value={data.district}
                                autoComplete='district'
                                placeholder='Bairro'
                                onChange={(e) => setData('district', e.target.value)}
                                className='px-2 py-0 text-sm md:w-1/4 rounded'
                            />
                        </div>

                        <div className='flex justify-center gap-2'>
                            <PrimaryButton
                                type="submit"
                            >
                                Pesquisar
                            </PrimaryButton>

                            <Link href={route('menu.donors')}>
                                <WarningButton>
                                    Limpar
                                </WarningButton>
                            </Link>
                        </div>
                    </form>
                    <div className='bg-white p-4 shadow sm:rounded-lg'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600'>
                                    <th>Nº</th>
                                    <th>Cód.</th>
                                    <th>Nome</th>
                                    <th>Telefone</th>
                                    <th>CEP</th>
                                    <th>Bairro</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donors.data.length === 0 && (
                                    <tr className='text-red-600'>
                                        <td colSpan={7}>Não Existe Doador Cadastrada</td>
                                    </tr>
                                )}
                                {donors.data.map((donor, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>
                                            {index + 1 + (donors.current_page - 1) * donors.per_page}
                                        </td>
                                        <td>{donor.id}</td>
                                        <td>{donor.name}</td>
                                        <td>{formatPhone(donor.phone?.phone)}</td>
                                        <td>{formatCep(donor.address?.zipcode?.zipcode)}</td>
                                        <td>{donor.address?.zipcode?.district}</td>
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
                        {donors.last_page > 1 && (
                            <Pagination
                                links={donors.links}
                                currentPage={donors.current_page}
                            />
                        )}
                    </div>
                </div>
            </SideBar>
        </div>
    );
}
