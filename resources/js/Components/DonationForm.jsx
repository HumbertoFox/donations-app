import { useForm } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';

export default function DonationForm({ point, valueButton }) {
    const { data, setData, post, processing, errors } = useForm({
        donorcode: '',
        donationcode: '',
        objet1: '',
        quant1: '',
        objet2: '',
        quant2: '',
        objet3: '',
        quant3: '',
        objet4: '',
        quant4: '',
        objet5: '',
        quant5: '',
        objet6: '',
        quant6: '',
        objet7: '',
        quant7: '',
        objet8: '',
        quant8: '',
        objet9: '',
        quant9: '',
        objet10: '',
        quant10: '',
        objet11: '',
        quant11: '',
        objet12: '',
        quant12: '',
        objet13: '',
        quant13: '',
        objet14: '',
        quant14: '',
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form className='w-[750px] p-1 text-sm max-xl:w-[380px] max-md:w-[280px] duration-[400ms]' onSubmit={submit}>
            <fieldset className='flex flex-col gap-[5px]'>
                <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>Informações da Doação</legend>

                <div className='flex gap-[5px] max-xl:flex-col'>
                    <label className='flex flex-col' htmlFor='donorcode'>Código do Doador
                        <input
                            id='donorcode'
                            className='rounded py-0.5 cursor-not-allowed'
                            type='number'
                            value={data.donorcode}
                            onChange={e => setData('donorcode', e.target.value)}
                            required
                            disabled
                        />
                        {errors.donorcode && <div>{errors.donorcode}</div>}
                    </label>

                    {valueButton === 'Editar' && (
                        <label className='flex flex-col' htmlFor='donationcode'>Código da Doação
                            <input
                                id='donationcode'
                                className='rounded py-0.5 cursor-not-allowed'
                                type='number'
                                value={data.donationcode}
                                onChange={e => setData('donationcode', e.target.value)}
                                required
                                disabled
                            />
                            {errors.donationcode && <div>{errors.donationcode}</div>}
                        </label>
                    )}
                </div>

                <div className='flex gap-[5px] duration-[400ms] max-xl:flex-wrap'>
                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet1'>Objeto 1
                                <input
                                    id='objet1'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet1}
                                    onChange={e => setData('objet1', e.target.value)}
                                    required
                                />
                                {errors.objet1 && <div>{errors.objet1}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant1'>Qant/Caixa/Sacola
                                <input
                                    id='quant1'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant1}
                                    onChange={e => setData('quant1', e.target.value)}
                                    required
                                />
                                {errors.quant1 && <div>{errors.quant1}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet2'>Objeto 2
                                <input
                                    id='objet2'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet2}
                                    onChange={e => setData('objet2', e.target.value)}
                                />
                                {errors.objet2 && <div>{errors.objet2}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant2'>Qant/Caixa/Sacola
                                <input
                                    id='quant2'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant2}
                                    onChange={e => setData('quant2', e.target.value)}
                                />
                                {errors.quant2 && <div>{errors.quant2}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet3'>Objeto 3
                                <input
                                    id='objet3'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet3}
                                    onChange={e => setData('objet3', e.target.value)}
                                />
                                {errors.objet3 && <div>{errors.objet3}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant3'>Qant/Caixa/Sacola
                                <input
                                    id='quant3'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant3}
                                    onChange={e => setData('quant3', e.target.value)}
                                />
                                {errors.quant3 && <div>{errors.quant3}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet4'>Objeto 4
                                <input
                                    id='objet4'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet4}
                                    onChange={e => setData('objet4', e.target.value)}
                                />
                                {errors.objet4 && <div>{errors.objet4}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant4'>Qant/Caixa/Sacola
                                <input
                                    id='quant4'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant4}
                                    onChange={e => setData('quant4', e.target.value)}
                                />
                                {errors.quant4 && <div>{errors.quant4}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet5'>Objeto 5
                                <input
                                    id='objet5'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet5}
                                    onChange={e => setData('objet5', e.target.value)}
                                />
                                {errors.objet5 && <div>{errors.objet5}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant5'>Qant/Caixa/Sacola
                                <input
                                    id='quant5'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant5}
                                    onChange={e => setData('quant5', e.target.value)}
                                />
                                {errors.quant5 && <div>{errors.quant5}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet6'>Objeto 6
                                <input
                                    id='objet6'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet6}
                                    onChange={e => setData('objet6', e.target.value)}
                                />
                                {errors.objet6 && <div>{errors.objet6}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant6'>Qant/Caixa/Sacola
                                <input
                                    id='quant6'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant6}
                                    onChange={e => setData('quant6', e.target.value)}
                                />
                                {errors.quant6 && <div>{errors.quant6}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet7'>Objeto 7
                                <input
                                    id='objet7'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet7}
                                    onChange={e => setData('objet7', e.target.value)}
                                />
                                {errors.objet7 && <div>{errors.objet7}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant7'>Qant/Caixa/Sacola
                                <input
                                    id='quant7'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant7}
                                    onChange={e => setData('quant7', e.target.value)}
                                />
                                {errors.quant7 && <div>{errors.quant7}</div>}
                            </label>
                        </div>
                    </div>

                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet8'>Objeto 8
                                <input
                                    id='objet8'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet8}
                                    onChange={e => setData('objet8', e.target.value)}
                                />
                                {errors.objet8 && <div>{errors.objet8}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant8'>Qant/Caixa/Sacola
                                <input
                                    id='quant8'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant8}
                                    onChange={e => setData('quant8', e.target.value)}
                                />
                                {errors.quant8 && <div>{errors.quant8}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet9'>Objeto 9
                                <input
                                    id='objet9'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet9}
                                    onChange={e => setData('objet9', e.target.value)}
                                />
                                {errors.objet9 && <div>{errors.objet9}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant9'>Qant/Caixa/Sacola
                                <input
                                    id='quant9'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant9}
                                    onChange={e => setData('quant9', e.target.value)}
                                />
                                {errors.quant9 && <div>{errors.quant9}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet10'>Objeto 10
                                <input
                                    id='objet10'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet10}
                                    onChange={e => setData('objet10', e.target.value)}
                                />
                                {errors.objet10 && <div>{errors.objet10}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant10'>Qant/Caixa/Sacola
                                <input
                                    id='quant10'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant10}
                                    onChange={e => setData('quant10', e.target.value)}
                                />
                                {errors.quant10 && <div>{errors.quant10}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet11'>Objeto 11
                                <input
                                    id='objet11'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet11}
                                    onChange={e => setData('objet11', e.target.value)}
                                />
                                {errors.objet11 && <div>{errors.objet11}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant11'>Qant/Caixa/Sacola
                                <input
                                    id='quant11'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant11}
                                    onChange={e => setData('quant11', e.target.value)}
                                />
                                {errors.quant11 && <div>{errors.quant11}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet12'>Objeto 12
                                <input
                                    id='objet12'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet12}
                                    onChange={e => setData('objet12', e.target.value)}
                                />
                                {errors.objet12 && <div>{errors.objet12}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant12'>Qant/Caixa/Sacola
                                <input
                                    id='quant12'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant12}
                                    onChange={e => setData('quant12', e.target.value)}
                                />
                                {errors.quant12 && <div>{errors.quant12}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet13'>Objeto 13
                                <input
                                    id='objet13'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet13}
                                    onChange={e => setData('objet13', e.target.value)}
                                />
                                {errors.objet13 && <div>{errors.objet13}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant13'>Qant/Caixa/Sacola
                                <input
                                    id='quant13'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant13}
                                    onChange={e => setData('quant13', e.target.value)}
                                />
                                {errors.quant13 && <div>{errors.quant13}</div>}
                            </label>
                        </div>

                        <div className='w-full flex gap-[5px] max-md:flex-col'>
                            <label className='flex flex-col' htmlFor='objet14'>Objeto 14
                                <input
                                    id='objet14'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.objet14}
                                    onChange={e => setData('objet14', e.target.value)}
                                />
                                {errors.objet14 && <div>{errors.objet14}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant14'>Qant/Caixa/Sacola
                                <input
                                    id='quant14'
                                    className='w-[150px] rounded py-0.5'
                                    type='text'
                                    value={data.quant14}
                                    onChange={e => setData('quant14', e.target.value)}
                                />
                                {errors.quant14 && <div>{errors.quant14}</div>}
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div className='flex justify-around py-4'>
                {valueButton === 'Cadastrar' && (
                    <PrimaryButton title='Cadastrar e Ir para Confirma' disabled={processing}>
                        Cadastrar Ir
                    </PrimaryButton>
                )}

                <PrimaryButton title={valueButton} disabled={processing}>
                    {valueButton}
                </PrimaryButton>
            </div>
        </form>
    );
}