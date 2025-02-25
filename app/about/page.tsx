import AboutHero from "@/components/about-hero";
import AnimatedText from "@/components/animated-text";
import Divider from "@/components/divider";
import MyBackground from "@/components/my-background";
import PersonalPortrait from "@/components/personal-portrait";
import TechnicalPortrait from "@/components/technical-portrait";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <PersonalPortrait />
      <div className="default-layout px-[20px]">
        <Divider />
      </div>
      <MyBackground />
    </>
  );
};

export default AboutPage;
