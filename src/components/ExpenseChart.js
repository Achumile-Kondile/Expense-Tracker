import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ExpenseChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the existing chart instance
    }

    chartInstance.current = new ChartJS(chartRef.current, {
      type: 'line',
      data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Expense Over Time'
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `R${tooltipItem.raw}`;
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Clean up chart instance on unmount
      }
    };
  }, [data]); // Re-render the chart whenever `data` changes

  return <canvas ref={chartRef}></canvas>;
}

export default ExpenseChart;
