import Image from "next/image";
import CustomImage from "./custom-image";
import { Icons } from "./icons";
import LeetcodeStats from "./leetcode-stats";

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
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center hover:bg-muted-foreground">
          <LeetcodeStats />
        </div>
      </div>
      <div className="bg-secondary aspect-square rounded-lg"></div>
      <div className="bg-secondary aspect-square rounded-lg"></div>
    </div>
  );
};

export default TechnicalPortrait;
