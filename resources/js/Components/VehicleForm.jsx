import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Toast } from '@/utils/sweetAlert';
import { useForm } from '@inertiajs/react';

export default function VehicleForm({ vehicle = {}, point, valueButton }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        model: vehicle.model ?? '',
        automaker: vehicle.automaker ?? '',
        renavam: vehicle.renavam ?? '',
        plate: vehicle.plate ?? '',
        km: vehicle.km ?? ''
    });

    const submit = async (e) => {
        e.preventDefault();

        switch (point) {
            case 'vehicle.store':
                post(route(point, vehicle.id), {
                    onSuccess: ({ props }) => {
                        Toast.fire({
                            icon: 'success',
                            title: props.flash.success,
                        }).then(() => {
                            reset();
                        });
                    }
                });
                break;
            case 'vehicle.update':
                put(route(point, vehicle.id), {
                    onSuccess: ({ props }) => {
                        Toast.fire({
                            icon: 'success',
                            title: props.flash.success,
                        }).then(() => {
                            window.location.reload()
                        });
                    }
                });
                break;
            default:
                break;
        };
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
                <InputLabel htmlFor='renavam' value='Renavam' />

                <TextInput
                    id='renavam'
                    name='renavam'
                    value={data.renavam}
                    className='mt-1 block w-full'
                    autoComplete='renavam'
                    onChange={(e) => setData('renavam', e.target.value)}
                    required
                />

                <InputError message={errors.renavam} className='mt-2' />
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