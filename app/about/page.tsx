import AboutHero from "@/components/about-hero";
import AboutTheBlog from "@/components/about-the-blog";
import AboutTheMotionLab from "@/components/about-the-motion-lab";
import MyBackground from "@/components/my-background";
import PersonalPortrait from "@/components/personal-portrait";
import TechnicalPortrait from "@/components/technical-portrait";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <TechnicalPortrait />
      <MyBackground />
      <PersonalPortrait />
      <AboutTheBlog />
      <AboutTheMotionLab />
    </>
  );
};

export default AboutPage;
