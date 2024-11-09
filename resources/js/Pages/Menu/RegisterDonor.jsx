import DonorForm from '@/Components/DonorForm';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function RegisterDonor() {
    return (
        <div className='max-w-full'>
            <Head title='Cadastrar Doador' />
            <SideBar>
                <DonorForm point={'donor.store'} valueButton={'Cadastrar'} />
            </SideBar>
        </div>
    );
}