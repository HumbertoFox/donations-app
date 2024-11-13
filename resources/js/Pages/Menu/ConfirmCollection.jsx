import Swal from 'sweetalert2';
import Icon from '@/Components/Icon';
import SideBar from '@/Layouts/Sidebar';
import Pagination from '@/Components/Pagination';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { formatPhone } from '@/utils/phoneFormat';
import { formatCep } from '@/utils/cepFormat';
import { formatDate, formatDateToLocal } from '@/utils/dataFormat';
import { formatCpf } from '@/utils/cpfFormat';
import { Toast } from '@/utils/sweetAlert';

export default function ConfirmCollection({ records, flash }) {
    const [hoveredIcon, setHoveredIcon] = useState({});

    const handleMouseEnter = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: true }));
    const handleMouseLeave = (id, action) => setHoveredIcon((prev) => ({ ...prev, [`${id}-${action}`]: false }));
    const showRecordDetails = (record) => {
        Swal.fire({
            title: `Detalhes da Doação - Cód. ${record.id}`,
            html: `
                <strong>Nome do Doador:</strong> ${record.donor.name}<br>
                <strong>Telefone:</strong> ${formatPhone(record.donor.phone.phone)}<br>
                <strong>CEP:</strong> ${formatCep(record.donor.address.zipcode.zipcode)}<br>
                <strong>Rua:</strong> ${record.donor.address.zipcode.street}<br>
                <strong>Bairro:</strong> ${record.donor.address.zipcode.district}<br>
                <strong>Cidade:</strong> ${record.donor.address.zipcode.city}<br>
                <strong>Número:</strong> ${record.donor.address.number_residence}<br>
                <strong>Data de Cadastro:</strong> ${formatDate(record.created_at)}<br>
                <strong>Data de Agendamento:</strong> ${formatDateToLocal(record.colleted_date)}<br>
                <strong>Status:</strong> ${record.donation.status}<br>
            `,
            icon: 'info',
            confirmButtonText: 'Ok',
        });
    };

    const showRecordDetailsVehicle = (record) => {
        Swal.fire({
            title: `Detalhes do Veículo - Cód. ${record.vehicle.id}`,
            html: `
                <strong>Montadora do Veículo:</strong> ${record.vehicle.automaker}<br>
                <strong>Modelo:</strong> ${record.vehicle.model}<br>
                <strong>Placa:</strong> ${record.vehicle.plate}<br>
                <strong>RENAVAM:</strong> ${record.vehicle.renavam}<br><br>
                <strong>Motorista:</strong> ${record.driver.cnh.cpf.name}<br>
                <strong>CNH:</strong> ${record.driver.cnh.cnh}<br>
                <strong>CPF:</strong> ${formatCpf(record.driver.cnh.cpf.cpf)}<br>
                <strong>Telefone:</strong> ${formatPhone(record.driver.phone.phone)}<br><br>
                <strong>Ajudante 1:</strong> ${record.helper.cpf.name}<br>
                <strong>CPF:</strong> ${formatCpf(record.helper.cpf.cpf)}<br>
                <strong>Telefone:</strong> ${formatPhone(record.helper.phone.phone)}<br><br>
                <strong>Ajudante 2:</strong> ${record.helper_two.cpf.name}<br>
                <strong>CPF:</strong> ${formatCpf(record.helper_two.cpf.cpf)}<br>
                <strong>Telefone:</strong> ${formatPhone(record.helper_two.phone.phone)}<br>
            `,
            icon: 'info',
            confirmButtonText: 'Ok',
        });
    };

    const showRecordDetailsDonor = (record) => {
        Swal.fire({
            title: `Detalhes do Doador - Cód. ${record.donor.id}`,
            html: `
                <strong>Nome do Doador:</strong> ${record.donor.name}<br>
                <strong>Telefone:</strong> ${record.donor.phone.phone}<br>
                <strong>Contato 01:</strong> ${record.donor.phone.contact}<br>
                <strong>Contato 02:</strong> ${record.donor.phone.contact_old || 'N/A'}<br>
                <strong>Cadastrado em:</strong> ${formatDate(record.donor.created_at)}<br><br>
                <strong>CEP:</strong> ${record.donor.address.zipcode.zipcode}<br>
                <strong>Rua:</strong> ${record.donor.address.zipcode.street}<br>
                <strong>Bairro:</strong> ${record.donor.address.zipcode.district}<br>
                <strong>Cidade:</strong> ${record.donor.address.zipcode.city}<br>
                <strong>Número:</strong> ${record.donor.address.number_residence}<br>
                <strong>Edifício:</strong> ${record.donor.address.building || 'N/A'}<br>
                <strong>Apartamento:</strong> ${record.donor.address.block || 'N/A'}<br>
                <strong>Edifício:</strong> ${record.donor.address.livingapartmentroom || 'N/A'}<br><br>
                <strong>Ponto de Referência:</strong> ${record.donor.address.reference_point}<br>
            `,
            icon: 'info',
            confirmButtonText: 'Ok',
        });
    };

    useEffect(() => {
        if (flash.success) {
            Toast.fire({
                icon: 'success',
                title: flash.success,
            });
        };
    }, [flash]);

    return (
        <div className='max-w-full'>
            <Head title='Conformar Coleta' />
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
                                    <th title='Caminhão da Coleta'>Placa</th>
                                    <th title='Cep do Doador'>CEP</th>
                                    <th title='Data de Cadastro da Doação'>Data Cad.</th>
                                    <th title='Data do Agendamento da Coleta'>Data Age.</th>
                                    <th title='Status da Doação'>Status</th>
                                    <th title='Ação'>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.data.length === 0 && (
                                    <tr className='text-red-600 cursor-default'>
                                        <td colSpan={10}>Não Existe Doação Cadastrada</td>
                                    </tr>
                                )}
                                {records.data.map((record, index) => {
                                    return (
                                        <tr key={index} className='border-b-[1px] border-gray-400'>
                                            <td className='border-r-[1px] border-gray-400'>
                                                {index + 1 + (records.current_page - 1) * records.per_page}
                                            </td>
                                            <td
                                                onClick={() => showRecordDetails(record)}
                                                className='cursor-pointer hover:text-blue-500 duration-500'
                                            >
                                                {record.id}
                                            </td>
                                            <td
                                                onClick={() => showRecordDetailsDonor(record)}
                                                className='cursor-pointer hover:text-blue-500 duration-500'
                                            >
                                                {record.donor.name}
                                            </td>
                                            <td
                                                onClick={() => showRecordDetailsDonor(record)}
                                                className='cursor-pointer hover:text-blue-500 duration-500'
                                            >
                                                {formatPhone(record.donor.phone.phone)}
                                            </td>
                                            <td
                                                onClick={() => showRecordDetailsVehicle(record)}
                                                className='cursor-pointer hover:text-blue-500 duration-500'
                                            >{record.vehicle.plate}</td>
                                            <td>{formatCep(record.donor.address.zipcode.zipcode)}</td>
                                            <td>{formatDate(record.created_at)}</td>
                                            <td>{formatDateToLocal(record.colleted_date)}</td>
                                            <td>{record.donation.status}</td>
                                            <td className='flex justify-evenly items-center my-1'>
                                                <Link href={route('donation.update.status.confirmed', record.donation.id)} method="put">
                                                    <Icon
                                                        icon={hoveredIcon[`${record.id}-show`] ? 'fa-solid fa-file-circle-plus' : 'fa-solid fa-file-circle-check'}
                                                        title={`Confirmar Doação de ${record.donor.name}`}
                                                        aria-label={`Confirmar Doação de ${record.donor.name}`}
                                                        className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-green-600'
                                                        onMouseEnter={() => handleMouseEnter(record.id, 'show')}
                                                        onMouseLeave={() => handleMouseLeave(record.id, 'show')}
                                                    />
                                                </Link>

                                                <Link href={route('donation.update.status.pending', record.donation.id)} method="put">
                                                    <Icon
                                                        icon={hoveredIcon[`${record.id}-pending`] ? 'fa-solid fa-file-circle-plus' : 'fa-solid fa-file-circle-exclamation'}
                                                        title={`Ré-marcar Doação de ${record.donor.name}`}
                                                        aria-label={`Confirmar Doação de ${record.donor.name}`}
                                                        className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-orange-400'
                                                        onMouseEnter={() => handleMouseEnter(record.id, 'pending')}
                                                        onMouseLeave={() => handleMouseLeave(record.id, 'pending')}
                                                    />
                                                </Link>

                                                <Link href={route('donation.update.status.canceled', record.donation.id)} method="put">
                                                    <Icon
                                                        icon={hoveredIcon[`${record.id}-cancelled`] ? 'fa-solid fa-file-circle-plus' : 'fa-solid fa-file-circle-xmark'}
                                                        title={`Cancelar Doação de ${record.donor.name}`}
                                                        aria-label={`Confirmar Doação de ${record.donor.name}`}
                                                        className='text-[25px] text-[blue] duration-500 cursor-pointer hover:text-red-600'
                                                        onMouseEnter={() => handleMouseEnter(record.id, 'cancelled')}
                                                        onMouseLeave={() => handleMouseLeave(record.id, 'cancelled')}
                                                    />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {records.last_page > 1 && (
                            <Pagination
                                links={records.links}
                                currentPage={records.current_page}
                            />
                        )}
                    </div>
                </div>
            </SideBar>
        </div>
    );
}