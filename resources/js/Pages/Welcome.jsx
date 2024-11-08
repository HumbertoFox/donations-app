import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="BetoFoxNet_Info" />
            <div className="relative w-full min-h-screen max-w-2xl lg:max-w-7xl flex justify-between flex-col mx-auto">
                <header>
                    <nav className="mx-3 flex flex-1 justify-end">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Painel
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Conecte-se
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Registrar
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <h1 className="text-center text-3xl font-bold">Bem-vindo ao Programa de Gestão de Doações</h1>

                <main className="w-full min-h-full p-[10px] text-center">
                    <div className="flex justify-between">
                        <a href={'https://betofoxnet-info.vercel.app/'} target="_blank" rel="">
                            <ApplicationLogo />
                        </a>
                        <a href={'https://betofoxnet-info.vercel.app/'} target="_blank" rel="">
                            <ApplicationLogo className="bg-cyan-300 rounded-full" />
                        </a>
                        <a href={'https://betofoxnet-info.vercel.app/'} target="_blank" rel="">
                            <ApplicationLogo />
                        </a>
                    </div>
                </main>

                <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </footer>
            </div>
        </>
    );
}