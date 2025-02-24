"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const calculateRetention = (t: number) => {
  const S = 1.84;
  return 100 * Math.exp(-t / S);
};

const generateChartData = (hours: number) => {
  const data = [];
  const labels = [];
  for (let i = 0; i <= hours; i++) {
    labels.push(i.toString());
    data.push(calculateRetention(i));
  }
  return { labels, data };
};

export default function EnhancedForgettingCurve() {
  const [hours, setHours] = useState(24);
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      fill: boolean;
      tension: number;
      pointRadius: number;
    }[];
  }>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const { labels, data } = generateChartData(hours);
    setChartData({
      labels,
      datasets: [
        {
          label: "Memory Retention",
          data: data,
          borderColor: "#3c83f6",
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    });
  }, [hours]);

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Hours",
        },
        ticks: {
          callback: (
            value: string | number,
            index: number
          ): string | undefined => {
            if (index % Math.ceil(hours / 6) === 0) {
              return String(value);
            }
            return undefined;
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Retention (%)",
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (context: any) => `Hour ${context[0].label}`,
          label: (context: any) => `Retention: ${context.parsed.y.toFixed(2)}%`,
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart" as const,
    },
  };

  return (
    <div className="article-layout my-6">
      <div className="h-auto md:h-[400px] w-full mb-6">
        <Line options={options} data={chartData} />
      </div>
      <div className="flex items-center space-x-4">
        <Slider
          value={[hours]}
          onValueChange={(value) => setHours(value[0])}
          max={72}
          min={1}
          step={1}
          className="flex-grow"
        />
        <span className="font-semibold text-foreground-alt">{hours} hours</span>
      </div>
    </div>
  );
}
