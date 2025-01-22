"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  barCount?: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderRadius: number;
  }[];
}

const generateRandomValues = (count: number, min = 1, max = 100): number[] => {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

const BarChartRandom: React.FC<BarChartProps> = ({ barCount = 25 }) => {
  const [barValues, setBarValues] = useState<number[]>(
    generateRandomValues(barCount)
  );

  const labels: string[] = Array.from(
    { length: barCount },
    (_, i) => `Bar ${i + 1}`
  );

  const data: ChartData = {
    labels,
    datasets: [
      {
        label: "",
        data: barValues,
        backgroundColor: "#8263FD",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  const handleReload = () => {
    setBarValues(generateRandomValues(barCount));
  };

  return (
    <div className="flex flex-col w-full mx-auto mt-4 !article-layout">
      <div className="w-full p-0 pb-4">
        <Bar data={data} options={options} height={100} />
      </div>
      <button
        onClick={handleReload}
        className="px-3 py-1 bg-[#8263FD] text-white rounded shadow hover:bg-[#7458e4]"
      >
        Regenerate Values
      </button>
    </div>
  );
};

export default BarChartRandom;
