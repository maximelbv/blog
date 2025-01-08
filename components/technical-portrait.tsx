import Image from "next/image";
import { Icons } from "./icons";
import LeetcodeStats from "./leetcode-stats";
import ThemeColorsList from "./theme-colors-list";

const TechnicalPortrait = async () => {
  return (
    <div className="default-layout px-[20px] grid grid-cols-1 md:grid-cols-3 gap-[15px] mt-[50px]">
      <div className="aspect-square grid grid-cols-2 grid-rows-2 gap-[15px]">
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center p-[10px] group">
          <Icons.location />
        </div>
        <div className="relative bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center p-[20px]">
          <div className="relative w-full h-full">
            <Image
              alt="profile-picture"
              layout="fill"
              src="/images/profile-pic.svg"
            />
          </div>
        </div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center "></div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center hover:bg-muted-foreground/10">
          <LeetcodeStats />
        </div>
      </div>
      <div className="bg-secondary aspect-square rounded-lg p-[20px] flex flex-col">
        <span className="text-[36px] flex flex-col">My Stack</span>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[7px] bg-highlighted p-[10px] rounded-md">
            <span className="text-[16px] text-foregroundAlt">Tech</span>
            <div className="flex gap-[12px] flex-wrap">
              <Icons.html className="scale-125" />
              <Icons.javascript className="scale-125" />
              <Icons.typescript className="scale-125" />
              <Icons.react className="scale-125" />
              <Icons.nextjs className="scale-125" />
              <Icons.threejs className="scale-125" />
              <Icons.nodejs className="scale-125" />
              <Icons.nestjs className="scale-125" />
              <Icons.git className="scale-125" />
              <Icons.docker className="scale-110" />
            </div>
          </div>
          <div className="flex flex-col gap-[7px] bg-highlighted p-[10px] rounded-md">
            <span className="text-[16px] text-foregroundAlt">Design</span>
            <div className="flex gap-[12px] flex-wrap">
              <Icons.figma className="scale-125" />
              <Icons.blender className="scale-125" />
              {/* <Icons.spline className="scale-150" />
              <Icons.webflow className="scale-150" /> */}
            </div>
          </div>
          <div className="flex flex-col gap-[7px] bg-highlighted p-[10px] rounded-md">
            <span className="text-[16px] text-foregroundAlt">Misc</span>
            <div className="flex gap-[12px] flex-wrap">
              <Icons.git className="scale-125" />
              <Icons.docker className="scale-125" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary aspect-square rounded-lg overflow-hidden relative group flex items-start p-[20px]">
        <span className="text-[36px]">Resume</span>
        <div className="z-10 absolute top-[40%] left-5 rotate-[25deg] group-hover:rotate-0 transition-rotate duration-300 ease-[cubic-bezier(0.17, 0.67, 0.1, 1)]">
          <Icons.resume />
        </div>
        <div className="absolute top-[40%] left-5 rotate-[10deg] group-hover:rotate-0 transition-rotate duration-300 ease-[cubic-bezier(0.17, 0.67, 0.1, 1)]">
          <Icons.resume2 />
        </div>
      </div>
    </div>
  );
};

export default TechnicalPortrait;
