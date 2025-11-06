import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { chartData } from './form.state';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VirtualPricingSummary = () => {
  const data = {
    labels: chartData.map(item => item.category),
    datasets: [
      {
        label: 'AWS',
        data: chartData.map(item => item.aws),
        backgroundColor: '#FF9900',
        borderColor: '#FF9900',
        borderWidth: 1,
      },
      {
        label: 'Azure',
        data: chartData.map(item => item.azure),
        backgroundColor: '#0078D4',
        borderColor: '#0078D4',
        borderWidth: 1,
      },
      {
        label: 'Google Cloud',
        data: chartData.map(item => item.googleCloud),
        backgroundColor: '#4285F4',
        borderColor: '#4285F4',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      title: {
        display: true,
        text: 'Visual Pricing Summary',
        font: {
          size: 18,
          weight: 'bold' as const,
        },
      },
      subtitle: {
        display: true,
        text: 'Average monthly cost by category',
        font: {
          size: 14,
        },
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monthly Cost ($)',
        },
        grid: {
          display: true,
          color: '#f0f0f0',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Service Categories',
        },
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white rounded-[1rem] p-[1rem]">
      <div className="h-[400px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default VirtualPricingSummary;
