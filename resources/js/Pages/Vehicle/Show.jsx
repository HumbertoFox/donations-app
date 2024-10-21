import Icon from '@/Components/Icon';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function ShowVehicle({ vehicles }) {
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
                    Editar Veículo
                </h2>
            }
        >
            <Head title='Veículos' />

            <div className='py-12'>
                <div className='mx-auto max-w-3xl space-y-6 sm:px-6 lg:px-8'>
                    <div className='bg-white p-4 shadow sm:rounded-lg sm:p-8'>
                        <table className='w-full text-center'>
                            <thead>
                                <tr className='border-b-[1px] border-gray-600'>
                                    <th>Nº</th>
                                    <th>Cód.</th>
                                    <th>Chassi</th>
                                    <th>Placa</th>
                                    <th>Modelo</th>
                                    <th>Montadora</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehicles.length === 0 && (
                                    <tr className='text-red-600'>
                                        <td colSpan={6}>Não Existe Veículo Cadastrado</td>
                                    </tr>
                                )}
                                {vehicles.map((vehicle, index) => (
                                    <tr key={index} className='border-b-[1px] border-gray-400'>
                                        <td className='border-r-[1px] border-gray-400'>{index + 1}</td>
                                        <td>{vehicle.id}</td>
                                        <td>{vehicle.chassi}</td>
                                        <td>{vehicle.plate}</td>
                                        <td>{vehicle.model}</td>
                                        <td>{vehicle.automaker}</td>
                                        <td className='flex justify-center items-center my-1'>
                                            <Link href={`/vehicle/${vehicle.id}/edit`}>
                                                <Icon
                                                    title={`Editar ${vehicle.plate}`}
                                                    aria-label={`Editar ${vehicle.plate}`}
                                                    className={`${hoveredIcon[vehicle.id] ? 'fa-solid fa-truck' : 'fa-solid fa-truck-medical'} text-[25px] text-[blue] duration-[400ms] cursor-pointer hover:text-orange-600`}
                                                    onMouseEnter={() => handleMouseEnter(vehicle.id)}
                                                    onMouseLeave={() => handleMouseLeave(vehicle.id)}
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
        </AuthenticatedLayout>
    );
}