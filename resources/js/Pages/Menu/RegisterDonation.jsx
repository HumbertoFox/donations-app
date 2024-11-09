import DonationForm from '@/Components/DonationForm';
import DonorForm from '@/Components/DonorForm';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function RegisterDonation({ donor }) {

    return (
        <div className='max-w-full'>
            <Head title='Cadastrar Doação' />
            <SideBar>
                <div className='flex duration-500 max-md:flex-col ease-in-out'>
                    <div className='duration-500 ease-in-out'>
                        <DonorForm donor={donor} point={null} valueButton={null} />
                    </div>
                    <DonationForm donor={donor.id} point={'donation.store'} valueButton={'Cadastrar'} />
                </div>
            </SideBar>
        </div>
    );
}