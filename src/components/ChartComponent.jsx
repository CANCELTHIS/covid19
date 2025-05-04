import React, { useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ data }) => {
    // Log the incoming data to debug
    useEffect(() => {
    }, [data]);

    if (!data || Object.keys(data).length === 0) {
        return <p>No data available to display the chart.</p>;
    }

    // Line Chart Data (Historical Overview)
    const lineChartData = {
        labels: ['Active', 'Recovered', 'Deaths', 'Critical'],
        datasets: [
            {
                label: 'COVID-19 Data',
                data: [data.active, data.recovered, data.deaths, data.critical],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    // Bar Chart Data (Today's Overview)
    const barChartData = {
        labels: ['Today Cases', 'Today Deaths', 'Today Recovered'],
        datasets: [
            {
                label: 'Today\'s Data',
                data: [data.todayCases, data.todayDeaths, data.todayRecovered],
                backgroundColor: [
                    'rgba(54,162,235,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(75,192,192,0.6)',
                ],
                borderColor: [
                    'rgba(54,162,235,1)',
                    'rgba(255,99,132,1)',
                    'rgba(75,192,192,1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Pie Chart Data (Proportional Overview)
    const pieChartData = {
        labels: ['Active', 'Recovered', 'Deaths'],
        datasets: [
            {
                label: 'Proportional Data',
                data: [data.active, data.recovered, data.deaths],
                backgroundColor: [
                    'rgba(255,206,86,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(255,99,132,0.6)',
                ],
                borderColor: [
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `COVID-19 Data for ${data.country || 'Global'}`,
            },
        },
    };

    return (
        <div>
            <h2 style={{color:"#4476aa"}}>COVID-19 Data Visualization</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div style={{ width: '30%', marginBottom: '1rem' }}>
                    <h3>Historical Overview (Line Chart)</h3>
                    <Line data={lineChartData} options={options} />
                </div>
                <div style={{ width: '30%', marginBottom: '1rem' }}>
                    <h3>Today's Overview (Bar Chart)</h3>
                    <Bar data={barChartData} options={options} />
                </div>
                <div style={{ width: '17%', marginBottom: '1rem' }}>
                    <h3>Proportional Overview (Pie Chart)</h3>
                    <Pie data={pieChartData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Chart;