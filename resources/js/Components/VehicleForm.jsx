import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function VehicleForm({ point, valueButton }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        model: '',
        chassi: '',
        plate: '',
        km: ''
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <form className='max-w-xl' onSubmit={submit}>
            <div>
                <InputLabel htmlFor='model' value='Modelo' />

                <TextInput
                    id='model'
                    name='model'
                    value={data.model}
                    className='mt-1 block w-full'
                    autoComplete='model'
                    isFocused={valueButton === 'Cadastrar' ? true : false}
                    onChange={(e) => setData('model', e.target.value)}
                    required
                />

                <InputError message={errors.model} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='chassi' value='Chassi' />

                <TextInput
                    id='chassi'
                    name='chassi'
                    value={data.chassi}
                    className='mt-1 block w-full'
                    autoComplete='chassi'
                    onChange={(e) => setData('chassi', e.target.value)}
                    required
                />

                <InputError message={errors.chassi} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='plate' value='Placa' />

                <TextInput
                    id='plate'
                    name='plate'
                    value={data.plate}
                    className='mt-1 block w-full'
                    autoComplete='plate'
                    onChange={(e) => setData('plate', e.target.value)}
                    required
                />

                <InputError message={errors.plate} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='km' value='Km' />

                <TextInput
                    id='km'
                    name='km'
                    value={data.km}
                    className='mt-1 block w-full'
                    autoComplete='km'
                    onChange={(e) => setData('km', e.target.value)}
                    required
                />

                <InputError message={errors.km} className='mt-2' />
            </div>

            <div className='flex justify-around pt-4 sm:pt-8 duration-[400ms]'>
                <PrimaryButton disabled={processing}>
                    {valueButton}
                </PrimaryButton>
            </div>
        </form>
    );
}