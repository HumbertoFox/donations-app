import Icon from '@/Components/Icon';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const [isVisibledPasswordCurrent, setIsVisibledPasswordCurrent] = useState(false);
    const [isVisibledPassword, setIsVisibledPassword] = useState(false);
    const [isVisibledPasswordConfirm, setIsVisibledPasswordConfirm] = useState(false);

    const togglePasswordCurrentVisibility = () => setIsVisibledPasswordCurrent(!isVisibledPasswordCurrent);
    const togglePasswordVisibility = () => setIsVisibledPassword(!isVisibledPassword);
    const togglePasswordConfirmVisibility = () => setIsVisibledPasswordConfirm(!isVisibledPasswordConfirm);

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Atualizar senha
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Certifique-se de que sua conta esteja usando uma senha longa e aleatória para permanecer
                    segura.
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Senha atual"
                    />

                    <div className="relative">
                        <TextInput
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) =>
                                setData('current_password', e.target.value)
                            }
                            type={isVisibledPasswordCurrent ? "text" : "password"}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <button
                            type="button"
                            className='absolute right-2 top-[10px] hover:opacity-70 duration-500'
                            onClick={togglePasswordCurrentVisibility}
                        >
                            {isVisibledPasswordCurrent ? (
                                <Icon icon="fa-regular fa-eye-slash" />
                            ) : (
                                <Icon icon="fa-regular fa-eye" />
                            )}
                        </button>
                    </div>

                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Nova Senha" />
                    <div className="relative">
                        <TextInput
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type={isVisibledPassword ? "text" : "password"}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />

                        <button
                            type="button"
                            className='absolute right-2 top-[10px] hover:opacity-70 duration-500'
                            onClick={togglePasswordVisibility}
                        >
                            {isVisibledPassword ? (
                                <Icon icon="fa-regular fa-eye-slash" />
                            ) : (
                                <Icon icon="fa-regular fa-eye" />
                            )}
                        </button>
                    </div>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirme sua senha"
                    />

                    <div className="relative">
                        <TextInput
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            type={isVisibledPasswordConfirm ? "text" : "password"}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />

                        <button
                            type="button"
                            className='absolute right-2 top-[10px] hover:opacity-70 duration-500'
                            onClick={togglePasswordConfirmVisibility}
                        >
                            {isVisibledPasswordConfirm ? (
                                <Icon icon="fa-regular fa-eye-slash" />
                            ) : (
                                <Icon icon="fa-regular fa-eye" />
                            )}
                        </button>
                    </div>

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Salvo.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}