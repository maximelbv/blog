"use client";

import React from "react";
import { Icons } from "./icons";

const ResumeBlock = () => {
  const openResumePDF = () => {
    window.open("/docs/resume.pdf", "_blank");
  };

  return (
    <div
      onClick={openResumePDF}
      className="!cursor-pointer bg-secondary aspect-square rounded-lg overflow-hidden relative group flex items-start p-[20px] pt-[10px]"
    >
      <span className="text-[36px]">Resume</span>
      <div className="z-10 absolute top-[40%] left-5 rotate-[25deg] group-hover:rotate-0 transition-rotate duration-300 ease-[cubic-bezier(0.17, 0.67, 0.1, 1)] w-[70%] h-[70%]">
        <Icons.resume />
      </div>
      <div className="absolute top-[40%] left-5 rotate-[10deg] group-hover:rotate-0 transition-rotate duration-300 ease-[cubic-bezier(0.17, 0.67, 0.1, 1)] w-[70%] h-[70%]">
        <Icons.resume2 />
      </div>
    </div>
  );
};

export default ResumeBlock;
