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

// Implémentation douce du bruit de Perlin
const fade = (t: number): number => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a: number, b: number, t: number): number => a + t * (b - a);
const grad = (hash: number, x: number): number => {
  const h = hash & 15;
  const grad = 1 + (h & 7); // Gradient entre 1 et 8
  return (h & 8 ? -grad : grad) * x;
};

const generatePermutation = (): number[] => {
  const p = new Array(256).fill(0).map((_, i) => i);
  for (let i = p.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return [...p, ...p];
};

const generateNewPermutation = (): number[] => {
  const p = new Array(256).fill(0).map((_, i) => i);
  for (let i = p.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  return [...p, ...p];
};

let permutation = generatePermutation();

const perlinNoise = (x: number): number => {
  const X = Math.floor(x) & 255;
  x -= Math.floor(x);
  const u = fade(x);

  const g0 = grad(permutation[X], x);
  const g1 = grad(permutation[X + 1], x - 1);

  return lerp(g0, g1, u);
};

const generatePerlinValues = (count: number, scale = 0.1): number[] => {
  return Array.from({ length: count }, (_, i) => {
    return Math.abs(perlinNoise(i * scale)) * 100;
  });
};

const BarChartProcedural: React.FC<BarChartProps> = ({ barCount = 25 }) => {
  const [barValues, setBarValues] = useState<number[]>(
    generatePerlinValues(barCount)
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
    permutation = generateNewPermutation();
    const newValues = generatePerlinValues(barCount);
    setBarValues([...newValues]);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto mt-4">
      <div className="w-full p-4">
        <Bar data={data} options={options} height={100} />
      </div>
      <button
        onClick={handleReload}
        className="mx-[20px] px-3 py-1 bg-[#8263FD] text-white rounded shadow hover:bg-[#7458e4]"
      >
        Regenerate Values
      </button>
    </div>
  );
};

export default BarChartProcedural;
