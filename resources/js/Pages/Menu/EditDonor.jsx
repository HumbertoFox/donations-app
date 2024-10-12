import DonorForm from "@/Components/DonorForm";
import SearchForm from "@/Components/SearchForm";
import SideBar from "@/Layouts/Sidebar";
import { Head } from "@inertiajs/react";

export default function EditDonor() {
    return (
        <div className="w-full flex justify-start items-start">
            <Head title="BetoFoxNet_Info" />
            <SideBar />
            <main className="relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]">
                <SearchForm point={''} valueButton={'Pesquisar'} />
                <DonorForm point={''} valueButton={'Editar'} />
            </main>
        </div>
    );
}