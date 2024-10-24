import DonorForm from '@/Components/DonorForm';
import DonationForm from '@/Components/DonationForm';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function EditDonation({ donor ,donation }) {
    return (
        <div className='max-w-[1440px] flex justify-start items-start'>
            <Head title='BetoFoxNet_Info' />
            <SideBar />
            <main className='relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]'>
                <div className='flex duration-[400ms] max-md:flex-col'>
                    <DonorForm donor={donor} point={null} valueButton={null} />
                    <div className='duration-[400ms]'>
                        <DonationForm donation={donation} point={'donation.update'} valueButton={'Editar'} />
                    </div>
                </div>
            </main>
        </div>
    );
}