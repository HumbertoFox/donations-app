import DonorForm from '@/Components/DonorForm';
import DonationForm from '@/Components/DonationForm';
import SearchForm from '@/Components/SearchForm';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function EditDonation() {
    return (
        <div className='max-w-[1440px] flex justify-start items-start'>
            <Head title='BetoFoxNet_Info' />
            <SideBar />
            <main className='relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]'>
                <div className='flex duration-[400ms] max-md:flex-col'>
                    <DonorForm point={null} valueButton={null} />
                    <div className='duration-[400ms]'>
                        <SearchForm point={''} legend={'Pesquisar por Código da Doação'} labelText={'Código da Doação'} valueButton={'Pesquisar'} />
                        <DonationForm point={''} valueButton={'Editar'} />
                    </div>
                </div>
            </main>
        </div>
    );
}