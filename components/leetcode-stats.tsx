"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IStats {
  total: null | number;
  easy: null | number;
  medium: null | number;
  hard: null | number;
}

const LeetcodeStats = () => {
  const [stats, setStats] = useState<IStats>({
    total: null,
    easy: null,
    medium: null,
    hard: null,
  });
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/leetcode");
      const data = await res.json();
      const submissions = data.matchedUser.submitStats.acSubmissionNum;
      setStats({
        total: submissions.find((sub: any) => sub.difficulty === "All").count,
        easy: submissions.find((sub: any) => sub.difficulty === "Easy").count,
        medium: submissions.find((sub: any) => sub.difficulty === "Medium")
          .count,
        hard: submissions.find((sub: any) => sub.difficulty === "Hard").count,
      });
    })();
  }, []);

  const data = {
    datasets: [
      {
        data: [stats.easy, stats.medium, stats.hard],
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
          {stats.total ? (
            <span className="text-[40px] leading-[1] font-bold">
              {stats.total}
            </span>
          ) : (
            <Icons.loading />
          )}
          <p className="text-[14px] text-muted-foreground">solved</p>
        </div>
      </div>
      <div className="mt-[-10%] text-[18px] text-foreground">
        Leetcode Stats
      </div>
    </Link>
  );
};

export default LeetcodeStats;
