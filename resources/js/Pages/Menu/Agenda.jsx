import { Head } from '@inertiajs/react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import SideBar from '@/Layouts/Sidebar';
import CustomToolbar from '@/Components/ToolBar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'moment/dist/locale/pt-br';
import Swal from 'sweetalert2';
moment.locale('pt-br');
const localizer = momentLocalizer(moment);

export default function Agenda({ records }) {
    const styleColor = (record) => ({ style: { backgroundColor: record.color } });

    const handleSelectClick = (record) => {
        Swal.fire({
            title: record.title,
            html: `<p><strong>Contato do Doador:</strong> ${record.phone}</p>
                   <p><strong>Placa:</strong> ${record.vehicle}</p>
                   <p><strong>Motorista:</strong> ${record.driver}</p>
                   <p><strong>Status da Coleta:</strong> ${record.status}</p><br>
                   <p><strong>Início:</strong> ${record.start.toLocaleString()}</p>
                   <p><strong>Termino:</strong> ${record.end.toLocaleString()}</p><br>
                   <p><strong>Obs:</strong> ${record.desc}</p>`,
            icon: 'info',
            confirmButtonText: 'Ok',
        });
    };

    const events = records.map(record => {
        const startDate = moment(record.colleted_date).set({ hour: 8, minute: 0, second: 0 }).toDate();
        const endDate = moment(record.colleted_date).set({ hour: 17, minute: 0, second: 0 }).toDate();

        return {
            phone: record.donor.phone.phone,
            title: record.donor.name,
            vehicle: record.vehicle.plate,
            driver: record.driver.cnh.cpf.name,
            start: startDate,
            end: endDate,
            status: record.donation.status,
            desc: record.observation,
            color: record.vehicle.id === 1 ? '#3c91e6' : '#19cc19',
        };
    });

    return (
        <div className='max-w-[1440px] flex justify-start items-start'>
            <Head title='BetoFoxNet_Info' />
            <SideBar />
            <main className='relative left-[200px] w-calc-sidebarfull max-[1080px]:w-calc-sidebarmin min-h-screen bg-gray-100 max-[1080px]:left-[70px] duration-[400ms]'>
                <div className='duration-[400ms]'>
                    <Calendar
                        className='p-1 min-h-screen'
                        localizer={localizer}
                        events={events}
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