import DonorForm from '@/Components/DonorForm';
import DonationForm from '@/Components/DonationForm';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function EditDonation({ donor, donation }) {
    return (
        <div className='max-w-full'>
            <Head title='Edição de Doação' />
            <SideBar>
                <div className='flex duration-500 max-md:flex-col ease-in-out'>
                    <DonorForm donor={donor} point={null} valueButton={null} />
                    <div className='duration-500 ease-in-out'>
                        <DonationForm donation={donation} point={'donation.update'} valueButton={'Editar'} />
                    </div>
                </div>
            </SideBar>
        </div>
    );
}