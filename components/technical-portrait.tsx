import Image from "next/image";
import { Icons } from "./icons";
import LeetcodeStats from "./leetcode-stats";
import { socials } from "@/config/socials";
import Link from "next/link";
import ResumeBlock from "./resume-block";

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
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center ">
          <div className="grid grid-cols-2 gap-8 flex-wrap p-[20px]">
            {socials &&
              socials.map((social) => (
                <Link target="_blank" href={social.route}>
                  <social.icon />
                </Link>
              ))}
          </div>
        </div>
        <div className="bg-secondary aspect-square rounded-lg flex flex-col items-center justify-center hover:bg-muted-foreground/10">
          <LeetcodeStats />
        </div>
      </div>
      <ResumeBlock />
      <div className="bg-secondary aspect-square rounded-lg p-[20px] pt-[10px] flex flex-col">
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
              <Icons.neovim className="scale-125" />
              <Icons.notion className="scale-125" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalPortrait;
