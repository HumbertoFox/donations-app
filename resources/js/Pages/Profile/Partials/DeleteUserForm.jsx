import DangerButton from '@/Components/DangerButton';
import Icon from '@/Components/Icon';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [isVisibledPassword, setIsVisibledPassword] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const togglePasswordVisibility = () => setIsVisibledPassword(!isVisibledPassword);

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Excluir conta
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Depois que sua conta for excluída, todos os seus recursos e dados
                    serão excluídos permanentemente. Antes de excluir sua conta,
                    baixe quaisquer dados ou informações que você deseja
                    reter.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Excluir conta
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Tem certeza de que deseja excluir sua conta?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Depois que sua conta for excluída, todos os seus recursos e
                        dados serão excluídos permanentemente. Insira sua
                        senha para confirmar que você gostaria de excluir permanentemente
                        sua conta.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Senha"
                        />
                        <div className="relative w-3/4">
                            <TextInput
                                id="password"
                                type={isVisibledPassword ? "text" : "password"}
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                className="mt-1 block w-full"
                                isFocused
                                placeholder="Senha"
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

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancelar
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Excluir conta
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}