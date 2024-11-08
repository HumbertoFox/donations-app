import { useForm } from '@inertiajs/react'
import PrimaryButton from './PrimaryButton';

export default function SearchForm({ point, legend, labelText, valueButton }) {
    const { data, setData, post, processing, errors } = useForm({
        donorcodephone: ''
    });

    function submit(e) {
        e.preventDefault();
        console.log(data);
    };

    return (
        <form className='p-1 w-[280px] text-sm duration-[400ms]' onSubmit={submit}>
            <fieldset className='flex flex-col gap-[5px] duration-[400ms]'>
                <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>{legend}</legend>
                <label className='flex flex-col' htmlFor="donorcodephone">{labelText}
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