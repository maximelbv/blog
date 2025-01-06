import AboutHero from "@/components/about-hero";
import AnimatedText from "@/components/animated-text";
import MyBackground from "@/components/my-background";
import PersonalPortrait from "@/components/personal-portrait";
import TechnicalPortrait from "@/components/technical-portrait";

const AboutPage = () => {
  return (
    <>
      {/* <AboutHero /> */}
      <div className="flex flex-col items-center justify-center mt-[50px]">
        <h1 className="flex !m-0">
          <AnimatedText
            text="maxime"
            className="text-[50px] sm:text-[70px] font-dahliaBold text-foreground !m-0 !mr-[-0.25em]"
          />
          <AnimatedText
            text="lefebvre"
            className="text-[50px] sm:text-[70px] font-dahliaLight text-foreground !m-0 "
          />
        </h1>

        <AnimatedText
          text="web developer · motion designer · 3d artist"
          delay={0.5}
          className="text-foregroundAlt lowercase text-[17px] mt-[-5px]"
        />
      </div>
      <TechnicalPortrait />
      <MyBackground />
      <PersonalPortrait />
    </>
  );
};

export default AboutPage;
