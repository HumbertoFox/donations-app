import DonorForm from '@/Components/DonorForm';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function EditDonor({ donor }) {
    return (
        <div className='max-w-full'>
            <Head title='Edição de Doador' />
            <SideBar>
                <DonorForm donor={donor} point={'donor.update'} valueButton={'Editar'} />
            </SideBar>
        </div>
    );
}