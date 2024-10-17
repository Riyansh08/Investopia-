import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the chart options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

// Define the VerticalGraph component
const VerticalGraph = ({ data }) => {
  return <Bar options={options} data={data} />;
};

// Default export of VerticalGraph component
export default VerticalGraph;
