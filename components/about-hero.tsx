import BlurImage from "./blur-image";
import CustomLink from "./custom-link";

const AboutHero = () => {
  return (
    <div className="border-2 border-purple-500 default-layout px-[20px] flex flex-col-reverse lg:flex-row items-center justify-center">
      <div className="flex flex-col gap-[15px] max-w-[600px]">
        <span className="text-[24px] md:text-[28px]">
          Hi, i’m Maxime, a 
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            web developer
          </span>
           with a passion for Data, 3D and Motion design
        </span>
        <div className="flex flex-col gap-[3px]">
          <span className="text-[17px] text-foregroundAlt">
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
          <span className="text-[17px] leading-[1.8] text-foregroundAlt">
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
      </div>
      <div className="w-full max-w-full aspect-square bg-secondary"></div>
    </div>
  );
};

export default AboutHero;
