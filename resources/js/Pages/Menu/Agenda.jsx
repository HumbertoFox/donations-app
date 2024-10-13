import { Head } from '@inertiajs/react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import SideBar from '@/Layouts/Sidebar';
import CustomToolbar from '@/Components/ToolBar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import ActiveEvents from '@/Components/eventstest';
import Swal from 'sweetalert2';
import 'moment/dist/locale/pt-br';
moment.locale('pt-br');
const localizer = momentLocalizer(moment);

export default function Agenda() {
    const styleColor = (element) => ({ style: { backgroundColor: element.color } });
    const handleSelectClick = (element) => {
        Swal.fire({
            title: element.title,
            html: `<p><strong>Status:</strong> ${element.id}</p>
                <p><strong>Início:</strong> ${element.start.toLocaleString()}</p>
                <p><strong>Termino:</strong> ${element.end.toLocaleString()}</p>
                <p><strong>Obs:</strong> ${element.desc}</p>`,
            icon: 'info',
            confirmButtonText: 'Ok'
        });
    };
    return (
        <div className="max-w-[1440px] flex justify-start items-start">
            <Head title="BetoFoxNet_Info" />
            <SideBar />
            <main className="relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]">
                <div className='duration-[400ms]'>
                    <Calendar
                        className='p-1 min-h-screen'
                        localizer={localizer}
                        events={ActiveEvents}
                        eventPropGetter={styleColor}
                        onSelectEvent={handleSelectClick}
                        startAccessor='start'
                        endAccessor='end'
                        components={{ toolbar: CustomToolbar }}
                    />
                </div>
            </main>
        </div>
    );
}