"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const LeetcodeStats = ({ solved = 18, total = 50 }) => {
  const data = {
    datasets: [
      {
        data: [18, 10, 8],
        backgroundColor: ["#4caf50", "#FFB700", "#F53837"],
        borderRadius: 8,
        borderWidth: 0,
        spacing: 5,
        cutout: "75%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    rotation: -135,
    circumference: 270,
  };

  return (
    <Link
      target="_blank"
      href="https://leetcode.com/u/maximelbv/"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col w-[85%] h-[85%] aspect-square items-center justify-center">
        <Doughnut
          className="w-full h-full mb-[10%]"
          data={data}
          options={options}
        />
        <div className="absolute text-center">
          <span className="text-[40px] leading-[1] font-bold">{solved}</span>
          <p className="text-[14px] text-muted-foreground">solved</p>
        </div>
      </div>
      <div className="mt-[-10%] text-[18px] text-foregroundAlt">
        Leetcode Stats
      </div>
    </Link>
  );
};

export default LeetcodeStats;
