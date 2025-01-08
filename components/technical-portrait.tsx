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
        <div className="relative bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center">
          <Image
            alt="profile-picture"
            layout="fill"
            src="/images/profile-pic.png"
          />
        </div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center "></div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center hover:bg-muted-foreground/10">
          <LeetcodeStats />
        </div>
      </div>
      <div className="bg-secondary aspect-square rounded-lg"></div>
      <div className="bg-secondary aspect-square rounded-lg overflow-hidden relative group flex items-start p-[20px]">
        <span className="text-[36px]">Resume</span>
        <div className="z-10 absolute top-[35%] left-5 rotate-[30deg] group-hover:rotate-0 transition-rotate duration-300 ease-[cubic-bezier(0.17, 0.67, 0.1, 1)]">
          <Icons.resume />
        </div>
        <div className="absolute top-[35%] left-5 rotate-[15deg] group-hover:rotate-0 transition-rotate duration-300 ease-[cubic-bezier(0.17, 0.67, 0.1, 1)]">
          <Icons.resume2 />
        </div>
      </div>
    </div>
  );
};

export default TechnicalPortrait;
