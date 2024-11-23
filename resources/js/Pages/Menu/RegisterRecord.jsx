import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import TablePrint from '@/Components/TablePrint';
import SideBar from '@/Layouts/Sidebar';
import { Toast } from '@/utils/sweetAlert';
import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function RegisterRecord({ user, donor, donation, vehicles, drivers, helpers }) {
    const [selectedHelperone, setSelectedHelperone] = useState('');
    const [showSecondSelect, setShowSecondSelect] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        donorcode: donor?.id ?? '',
        donationcode: donation?.id ?? '',
        colleted_date: '',
        vehicle: '',
        driver: '',
        helperone: '',
        helpertwo: '',
        observation: '',
    });

    const today = new Date().toISOString().split('T')[0];

    const handleHelperoneChange = (e) => {
        const value = e.target.value;
        setSelectedHelperone(value);
        setShowSecondSelect(value !== '');
        setData('helperone', value);
    };

    const submit = async (e) => {
        e.preventDefault();

        post(route('menu.store'), {
            onSuccess: ({ props }) => {
                Toast.fire({
                    icon: 'success',
                    title: props.flash.success,
                }).then(() => {
                    window.location.href = `/donations`;
                });
            }
        });
    };

    const vehiclePlate = vehicles?.find(vehicle => vehicle.id === Number(data.vehicle));
    const filteredHelpers = helpers?.filter(helper => helper.id !== Number(selectedHelperone));

    return (
        <div className='max-w-full'>
            <Head title='Agendar Coleta' />
            <SideBar>
                <div className='flex flex-col duration-[400ms] p-1'>
                    <form className='flex flex-col gap-2 pb-5 text-sm' onSubmit={submit}>
                        <div className='flex flex-wrap gap-2'>
                            <div>
                                <label className='flex flex-col max-w-36' htmlFor='donorcode'>Código do Doador
                                    <input
                                        id='donorcode'
                                        className='rounded py-0.5 cursor-not-allowed'
                                        type='number'
                                        value={data.donorcode}
                                        onChange={(e) => setData('donorcode', e.target.value)}
                                        disabled
                                        required
                                    />
                                    {errors.donorcode && <div className='text-red-600'>{errors.donorcode}</div>}
                                </label>

                                <label className='flex flex-col max-w-36' htmlFor='donationcode'>Código da Doação
                                    <input
                                        id='donationcode'
                                        className='rounded py-0.5 cursor-not-allowed'
                                        type='number'
                                        value={data.donationcode}
                                        onChange={(e) => setData('donationcode', e.target.value)}
                                        disabled
                                        required
                                    />
                                    {errors.donationcode && <div className='text-red-600'>{errors.donationcode}</div>}
                                </label>
                            </div>

                            <label className='flex flex-col max-w-36' htmlFor='colleted_date'>Data da Coleta
                                <input
                                    id='colleted_date'
                                    className='rounded py-0.5'
                                    type='date'
                                    value={data.colleted_date}
                                    onChange={(e) => setData('colleted_date', e.target.value)}
                                    min={today}
                                    required
                                />
                                {errors.colleted_date && <div className='text-red-600'>{errors.colleted_date}</div>}
                            </label>

                            <label className='flex flex-col max-w-60' htmlFor='vehicle'>Selecionar Veículo
                                <select
                                    name='vehicle'
                                    id='vehicle'
                                    className='rounded py-0.5'
                                    onChange={(e) => setData('vehicle', e.target.value)}
                                    required
                                >
                                    <option value=''>Selecionar</option>
                                    {vehicles?.map((vehicle) => (
                                        <option key={vehicle.id} value={vehicle.id}>
                                            {vehicle.plate}
                                        </option>
                                    ))}
                                </select>
                                {errors.vehicle && <div className='text-red-600'>{errors.vehicle}</div>}
                            </label>

                            <label className='flex flex-col max-w-60' htmlFor='driver'>Selecionar Motorista
                                <select
                                    name='driver'
                                    id='driver'
                                    className='rounded py-0.5'
                                    onChange={(e) => setData('driver', e.target.value)}
                                    required
                                >
                                    <option value=''>Selecionar</option>
                                    {drivers?.map((driver) => (
                                        <option key={driver.id} value={driver.id}>
                                            {driver.cnh.cpf.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.driver && <div className='text-red-600'>{errors.driver}</div>}
                            </label>

                            <label className='flex flex-col max-w-60' htmlFor='helperone'>Selecionar Ajudante
                                <select
                                    name='helperone'
                                    id='helperone'
                                    className='rounded py-0.5'
                                    onChange={handleHelperoneChange}
                                    required
                                >
                                    <option value=''>Selecionar</option>
                                    {helpers?.map((helperone) => (
                                        <option key={helperone.id} value={helperone.id}>
                                            {helperone.cpf.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.helperone && <div className='text-red-600'>{errors.helperone}</div>}
                            </label>

                            {showSecondSelect && (
                                <label className='flex flex-col max-w-60' htmlFor='helpertwo'>Selecionar Ajudante
                                    <select
                                        name='helpertwo'
                                        id='helpertwo'
                                        className='rounded py-0.5'
                                        onChange={(e) => setData('helpertwo', e.target.value)}
                                        required
                                    >
                                        <option value=''>Selecionar</option>
                                        {filteredHelpers.map((helpertwo) => (
                                            <option key={helpertwo.id} value={helpertwo.id}>
                                                {helpertwo.cpf.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.helpertwo && <div className='text-red-600'>{errors.helpertwo}</div>}
                                </label>
                            )}
                        </div>
                        <label className='flex flex-col max-w-80' htmlFor='observation'>Observação
                            <textarea
                                id='observation'
                                className='rounded py-0.5'
                                type='text'
                                value={data.observation}
                                onChange={(e) => setData('observation', e.target.value)}
                                required
                            />
                        </label>

                        <PrimaryButton className='mr-auto ' disabled={processing}>
                            Agendar/Imprimir
                        </PrimaryButton>
                    </form>
                    <>
                        {[
                            'GUIA DO ATENDIMENTO',
                            'GUIA DO COORDENADOR DO BAZAR',
                            'GUIA DO MOTORISTA OPERADOR DE COLETA',
                        ].map((guide, index) => (
                            <TablePrint
                                key={index}
                                user={user}
                                donor={donor}
                                donation={donation}
                                guide={guide}
                                colleted_date={data.colleted_date}
                                sheetheader={index === 0}
                                vehiclePlate={vehiclePlate?.plate}
                                observation={data.observation}
                            />
                        ))}
                    </>
                </div>
            </SideBar>
        </div>
    );
}