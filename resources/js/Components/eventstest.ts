const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const eventsTest = [{
    id: 1,
    title: 'Doador Ciclano',
    start: new Date(currentYear, currentMonth, currentDay, 14, 0),
    end: new Date(currentYear, currentMonth, currentDay, 14, 30),
    status: 'Coletada',
    desc: 'Horário pela Manhã',
    color: '#90EE90',
    tipo: 'activity'
},
{
    id: 2,
    title: 'Doador Fulano',
    start: new Date(currentYear, currentMonth, currentDay, 7, 0),
    end: new Date(currentYear, currentMonth, currentDay, 7, 10),
    status: 'Na Rota',
    desc: 'Horário da tarde',
    color: '#3C91E6',
    tipo: 'activity'
}];
export default eventsTest;