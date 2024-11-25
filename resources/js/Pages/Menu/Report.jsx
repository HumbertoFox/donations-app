import BarChartCollections from '@/Components/Charts/BarChartCollections';
import SideBar from '@/Layouts/Sidebar';
import { Head } from '@inertiajs/react';

export default function Report({ data }) {
    return (
        <div className='max-w-full'>
            <Head title='Relatório' />
            <SideBar>
                <div className='w-full flex flex-col gap-2 p-1'>
                    <div className='h-[49vh] bg-white rounded-lg'>
                        <BarChartCollections data={data} />
                    </div>
                </div>
            </SideBar>
        </div>
    );
}