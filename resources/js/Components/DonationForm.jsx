import { useForm } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';

export default function DonationForm({ point, valueButton }) {
    const initialData = {
        donorcode: '',
        donationcode: ''
    };

    for (let i = 1; i <= 14; i++) {
        initialData[`object${i}`] = '';
        initialData[`quant${i}`] = '';
    }

    const { data, setData, post, processing, errors } = useForm(initialData);

    const createInputsFields = (count, startIndex) => (
        Array.from({ length: count }, (_, index) => (
            <div className='w-full flex gap-[5px] max-md:flex-col' key={index}>
                <label className='flex flex-col' htmlFor={`object${startIndex + index}`}>{`Objeto ${startIndex + index}`}
                    <input
                        id={`object${startIndex + index}`}
                        className='rounded py-0.5'
                        type='text'
                        value={data[`object${startIndex + index}`]}
                        onChange={e => setData(`object${startIndex + index}`, e.target.value)}
                    />
                    {errors[`object${startIndex + index}`] && <div>{errors[`object${startIndex + index}`]}</div>}
                </label>

                <label className='flex flex-col' htmlFor={`quant${startIndex + index}`}>Qant/Caixa/Sacola
                    <input
                        id={`quant${startIndex + index}`}
                        className='w-[150px] rounded py-0.5 max-md:w-full'
                        type='text'
                        value={data[`quant${startIndex + index}`]}
                        onChange={e => setData(`quant${startIndex + index}`, e.target.value)}
                    />
                    {errors[`quant${startIndex + index}`] && <div>{errors[`quant${startIndex + index}`]}</div>}
                </label>
            </div>
        ))
    );

    function submit(e) {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form className='w-[750px] p-1 text-sm max-xl:w-[380px] max-md:w-[280px] duration-[400ms]' onSubmit={submit}>
            <fieldset className='flex flex-col gap-[5px] duration-[400ms]'>
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
                            <label className='flex flex-col' htmlFor='object1'>Objeto 1
                                <input
                                    id='object1'
                                    className='rounded py-0.5'
                                    type='text'
                                    value={data.object1}
                                    onChange={e => setData('object1', e.target.value)}
                                    required
                                />
                                {errors.object1 && <div>{errors.object1}</div>}
                            </label>

                            <label className='flex flex-col' htmlFor='quant1'>Qant/Caixa/Sacola
                                <input
                                    id='quant1'
                                    className='w-[150px] rounded py-0.5 max-md:w-full'
                                    type='text'
                                    value={data.quant1}
                                    onChange={e => setData('quant1', e.target.value)}
                                    required
                                />
                                {errors.quant1 && <div>{errors.quant1}</div>}
                            </label>
                        </div>

                        {createInputsFields(6, 2)}
                    </div>

                    <div className='w-full flex flex-col gap-[5px] duration-[400ms]'>
                        {createInputsFields(7, 8)}
                    </div>
                </div>
            </fieldset>
            <div className='flex justify-around py-4 duration-[400ms]'>
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