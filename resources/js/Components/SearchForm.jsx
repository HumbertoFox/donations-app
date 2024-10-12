import { useForm } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton';

export default function SearchForm({ point, valueButton }) {
    const { data, setData, post, processing, errors } = useForm({
        donorcodephone: ''
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form className='p-1 w-[280px] text-sm' onSubmit={submit}>
            <fieldset className='flex flex-col gap-[5px]'>
                <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>Pesquisar por Código ou Telefone</legend>
                <label className='flex flex-col' htmlFor="donorcodephone">Código ou Telefone do Doador
                    <input
                        id="donorcodephonephone"
                        className='rounded py-0.5'
                        type="search"
                        value={data.donorcodephone}
                        onChange={e => setData('donorcodephone', e.target.value)}
                        required
                        autoComplete='donorcodephone'
                    />
                    {errors.donorcodephone && <div>{errors.donorcodephone}</div>}
                </label>

            </fieldset>
            <div className="flex justify-center py-4">
                <PrimaryButton title={valueButton} disabled={processing}>
                    {valueButton}
                </PrimaryButton>
            </div>
        </form>
    );
}