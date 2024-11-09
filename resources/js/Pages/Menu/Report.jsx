import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function Report() {
    return (
        <div className='max-w-full'>
            <Head title='Relatório' />
            <SideBar>
                <h1>Gerar Relatório</h1>
            </SideBar>
        </div>
    );
}