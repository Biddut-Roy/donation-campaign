import { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const fixedValue = 12;
  const dynamicValue = 5;

  const chartRef = useRef(null); // To store a reference to the chart instance

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chartInstance.destroy(); // Destroy the previous chart
    }
  }, []);

  // Calculate percentages
  const total = fixedValue + dynamicValue;
  const fixedPercentage = ((fixedValue / total) * 100).toFixed(2);
  const dynamicPercentage = ((dynamicValue / total) * 100).toFixed(2);

  // Data for the pie chart
  const data = {
    labels: ['Fixed', 'Dynamic'],
    datasets: [
      {
        data: [fixedPercentage, dynamicPercentage],
        backgroundColor: ['#FF6384', '#36A2EB'], // Customize colors as needed
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      <Pie data={data} ref={chartRef} />
    </div>
  );
};

export default PieChart;
