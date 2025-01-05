import { socials } from "@/config/socials";
import CustomLink from "./custom-link";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="border-2 border-purple-500 default-layout px-[20px] flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="flex flex-col gap-[10px] max-w-[600px]">
        <span className="text-[24px] md:text-[28px]">
          Hi, i’m Maxime, a 
          <span className="bg-gradient-to-r from-pigment-blue to-pigment-blueLighter bg-clip-text text-transparent">
            web developer
          </span>
           with a passion for Data, 3D and Motion design
        </span>
        <div className="flex flex-col gap-[3px]">
          <span className="text-[17px] text-muted-foreground">
            Formerly at{" "}
            <CustomLink
              isExternal={true}
              isDefaultColor={true}
              href="https://www.welbees.com/"
              className=" !first:text-foregroundAlt hover:!text-foreground"
            >
              Welbees
            </CustomLink>
          </span>
          <span className="text-[17px] leading-[1.8] text-muted-foreground">
            Graduated from{" "}
            <CustomLink
              isExternal={true}
              isDefaultColor={true}
              href="https://www.ecole-multimedia.com/"
            >
              L'École Multimédia
            </CustomLink>
            ,{" "}
            <CustomLink
              isExternal={true}
              isDefaultColor={true}
              href="https://openclassrooms.com"
            >
              OpenClassrooms
            </CustomLink>
          </span>
        </div>
        <div className="flex items-center gap-[15px]">
          <div className="flex gap-6">
            {socials &&
              socials.map((social) => (
                <Link target="_blank" href={social.route}>
                  <social.icon />
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-full aspect-square bg-secondary"></div>
    </div>
  );
};

export default AboutHero;
