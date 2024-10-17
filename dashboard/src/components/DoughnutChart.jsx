// DoughnutChart.js

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register necessary components for chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Define and export the DoughnutChart component
export function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}
