import React from "react";
import { Icons } from "./icons";

const StackBlock = () => {
  return (
    <div className="bg-secondary lg:aspect-square rounded-lg p-[20px] pt-[10px] flex flex-col aspect-auto col-span-1 md:col-span-2 lg:col-span-1">
      <span className="text-[36px] ">My Stack</span>
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[7px] bg-highlighted p-[10px] rounded-md">
          <span className="text-[16px] text-foregroundAlt">Tech</span>
          <div className="flex gap-[12px] flex-wrap">
            <Icons.html className="scale-125" />
            <Icons.css className="scale-125" />
            <Icons.tailwind className="scale-125" />
            <Icons.javascript className="scale-125" />
            <Icons.typescript className="scale-125" />
            <Icons.react className="scale-125" />
            <Icons.nextjs className="scale-125" />
            <Icons.threejs className="scale-125" />
            <Icons.gsap className="scale-125" />
            <Icons.d3 className="scale-125" />
            <Icons.nodejs className="scale-125" />
            <Icons.nestjs className="scale-125" />
            <Icons.jest className="scale-125" />
            <Icons.mongodb className="scale-110" />
            <Icons.postgres className="scale-110" />
          </div>
        </div>
        <div className="flex flex-col gap-[7px] bg-highlighted p-[10px] rounded-md">
          <span className="text-[16px] text-foregroundAlt">Design</span>
          <div className="flex gap-[12px] flex-wrap">
            <Icons.figma className="scale-125" />
            <Icons.blender className="scale-125" />
            <Icons.aftereffects className="scale-125" />
            <Icons.webflow className="scale-125" />
          </div>
        </div>
        <div className="flex flex-col gap-[7px] bg-highlighted p-[10px] rounded-md">
          <span className="text-[16px] text-foregroundAlt">Misc</span>
          <div className="flex gap-[12px] flex-wrap">
            <Icons.git className="scale-125" />
            <Icons.docker className="scale-125" />
            {/* <Icons.neovim className="scale-125" /> */}
            <Icons.notion className="scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackBlock;
