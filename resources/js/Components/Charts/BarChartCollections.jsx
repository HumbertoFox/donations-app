import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChartCollections({ data, datacollecteds, datanotcollecteds }) {
    const monthNames = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];

    const monthsBackgroundsColors = [
        'rgba(127, 255, 127, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(255, 255, 127, 0.2)',
        'rgba(255, 255, 0, 0.2)',
        'rgba(0, 127, 255, 0.2)',
        'rgba(127, 255, 255, 0.2)',
        'rgba(255, 127, 127, 0.2)',
        'rgba(255, 127, 255, 0.2)',
        'rgba(255, 0, 127, 0.2)',
        'rgba(255, 0, 255, 0.2)',
        'rgba(0, 0, 255, 0.2)',
        'rgba(255, 0, 0, 0.2)',
    ];

    const monthsBordersColors = [
        'rgb(127, 255, 127)',
        'rgb(0, 255, 0)',
        'rgb(255, 255, 127)',
        'rgb(255, 255, 0)',
        'rgb(0, 127, 255)',
        'rgb(127, 255, 255)',
        'rgb(255, 127, 127)',
        'rgb(255, 127, 255)',
        'rgb(255, 0, 127)',
        'rgb(255, 0, 255)',
        'rgb(0, 0, 255)',
        'rgb(255, 0, 0)',
    ];

    const labels = (data?.labels || []).map(month => {
        if (month >= 1 && month <= 12) {
            return monthNames[month - 1];
        }
        return null;
    }).filter(Boolean);

    const chartData = {
        ...data,
        labels: labels,
        axis: 'y',
        datasets: [
            {
                label: 'Total de Doacões',
                data: data.datasets[0].data,
                hoverBackgroundColor: labels.map((_, index) => monthsBordersColors[index]),
                backgroundColor: labels.map((_, index) => monthsBackgroundsColors[index]),
                borderColor: labels.map((_, index) => monthsBordersColors[index]),
                borderWidth: 1,
            }, {
                label: 'Total de Doações coletadas',
                data: datacollecteds.datasets[0].data,
                hoverBackgroundColor: labels.map((_, index) => monthsBordersColors[index]),
                backgroundColor: labels.map((_, index) => monthsBackgroundsColors[index]),
                borderColor: labels.map((_, index) => monthsBordersColors[index]),
                borderWidth: 1,
            }, {
                label: 'Total de Doações não coletadas',
                data: datanotcollecteds.datasets[0].data,
                hoverBackgroundColor: labels.map((_, index) => monthsBordersColors[index]),
                backgroundColor: labels.map((_, index) => monthsBackgroundsColors[index]),
                borderColor: labels.map((_, index) => monthsBordersColors[index]),
                borderWidth: 1,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem) {
                        const label = tooltipItem.dataset.label || '';
                        const value = tooltipItem.raw;
                        return `${label}: ${value}`;
                    },
                },
            },
        },
    };

    return (
        <>
            {data?.labels ? (
                <Bar
                    data={chartData}
                    options={options}
                />
            ) : (
                <p>Nehum dado Encontrado!</p>
            )}
        </>
    );
};