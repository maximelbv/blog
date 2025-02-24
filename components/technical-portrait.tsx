import Image from "next/image";
import { Icons } from "./icons";
// import LeetcodeStats from "./leetcode-stats";
import { socials } from "@/config/socials";
import Link from "next/link";
import ResumeBlock from "./resume-block";
import StackBlock from "./stack-block";
import { Button } from "./ui/button";
import CustomLink from "./custom-link";

const TechnicalPortrait = async () => {
  return (
    <div className="default-layout px-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] mt-[50px]">
      <div className="aspect-square grid grid-cols-2 grid-rows-2 gap-[15px]">
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center p-[10px] group">
          <Icons.location />
        </div>
        <div className="relative bg-secondary !aspect-square rounded-lg flex flex-col !items-center !justify-center !p-[20px] !h-full">
          <div className="relative w-full h-full">
            <Image
              alt="emoji victory sign"
              fill
              src="/images/site/emoji-victory-sign.svg"
            />
          </div>
        </div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center ">
          <div className="grid grid-cols-2 gap-8 flex-wrap p-[20px]">
            {socials &&
              socials.map((social) => (
                <Link key={social.name} target="_blank" href={social.route}>
                  <social.icon />
                </Link>
              ))}
          </div>
        </div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center gap-2 p-2">
          {/* <LeetcodeStats /> */}
          <span>Current project</span>
          <a
            href="https://github.com/maximelbv/popkit"
            target="blank_"
            className="hover:bg-muted-foreground/10 p-2 rounded-md w-full flex items-center justify-center"
          >
            <Icons.popkit />
          </a>
        </div>
      </div>
      <ResumeBlock />
      <StackBlock />
    </div>
  );
};

export default TechnicalPortrait;
