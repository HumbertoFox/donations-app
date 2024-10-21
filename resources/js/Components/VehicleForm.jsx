import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function VehicleForm({ vehicle = {}, point, valueButton }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        model: vehicle.model ?? '',
        automaker: vehicle.automaker ?? '',
        chassi: vehicle.chassi ?? '',
        plate: vehicle.plate ?? '',
        km: vehicle.km ?? ''
    });

    const submit = (e) => {
        e.preventDefault();

        post(route(point, vehicle.id), {
            onSuccess: () => reset()
        });
    };

    return (
        <form className='max-w-xl' onSubmit={submit}>
            <div>
                <InputLabel htmlFor='model' value='Modelo' />

                <TextInput
                    id='model'
                    name='model'
                    value={data.model}
                    className='mt-1 block w-full uppercase'
                    autoComplete='model'
                    isFocused={valueButton === 'Cadastrar' ? true : false}
                    onChange={(e) => setData('model', e.target.value.toUpperCase())}
                    required
                />

                <InputError message={errors.model} className='mt-2' />
            </div>

            <div className='mt-4'>
                <InputLabel htmlFor='automaker' value='Montadora' />

                <TextInput
                    id='automaker'
                    name='automaker'
                    value={data.automaker}
                    className='mt-1 block w-full uppercase'
                    autoComplete='automaker'
                    onChange={(e) => setData('automaker', e.target.value.toUpperCase())}
                    required
                />

                <InputError message={errors.automaker} className='mt-2' />
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
                    className='mt-1 block w-full uppercase'
                    autoComplete='plate'
                    onChange={(e) => setData('plate', e.target.value.toUpperCase())}
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
                    className={`mt-1 block w-full ${valueButton === 'Editar' ? 'cursor-not-allowed' : ''}`}
                    autoComplete='km'
                    onChange={(e) => setData('km', e.target.value)}
                    required
                    disabled={valueButton === 'Editar' ? true : false}
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