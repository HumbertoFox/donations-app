import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function Report() {
    return (
        <div className='max-w-[1440px] flex justify-start items-start'>
            <Head title='BetoFoxNet_Info' />
            <SideBar />
            <main className='relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]'>
            <h1>Gerar Relatório</h1>
            </main>
        </div>
    );
}