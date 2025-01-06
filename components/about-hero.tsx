import { socials } from "@/config/socials";
import CustomLink from "./custom-link";
import Link from "next/link";
import FadeIn from "./fade-in";
import AnimatedText from "./animated-text";
import AnimatedElement from "./animated-element";

const AboutHero = () => {
  return (
    <div className="default-layout px-[20px] flex flex-col-reverse lg:flex-row items-center justify-center mt-[50px]">
      <div className="flex flex-col gap-[10px] max-w-[600px]">
        <AnimatedElement>
          <span className="text-[24px] md:text-[28px]">
            Hi, i’m Maxime, a 
            <span className="bg-gradient-to-r from-pigment-blue to-pigment-blueLighter bg-clip-text text-transparent">
              web developer
            </span>
             with a passion for Data, 3D and Motion design
          </span>
        </AnimatedElement>
        <div className="flex flex-col gap-[3px]">
          <AnimatedElement delay={0.2}>
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
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            {" "}
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
          </AnimatedElement>
        </div>
        <AnimatedElement delay={0.6}>
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
        </AnimatedElement>
      </div>
      <div className="w-full max-w-full aspect-square bg-secondary"></div>
    </div>
  );
};

export default AboutHero;
