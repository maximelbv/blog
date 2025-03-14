import AboutHero from "@/components/about-hero";
import AboutMeCTASection from "@/components/about-me-cta-section";
import AnimatedText from "@/components/animated-text";
import Divider from "@/components/divider";
import LatestArticles from "@/components/latest-articles";
import LatestProjects from "@/components/latest-projects";
import LatestSnippets from "@/components/latest-snippets";
import TechnicalPortrait from "@/components/technical-portrait";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[20px] lg:mt-[50px]">
        <h1 className="flex !m-0">
          <AnimatedText
            text="maxime"
            className="text-[45px] sm:text-[70px] font-dahliaBold text-foreground !m-0 !mr-[-0.25em]"
          />
          <AnimatedText
            text="lefebvre"
            className="text-[45px] sm:text-[70px] font-dahliaLight text-foreground !m-0 "
          />
        </h1>

        <AnimatedText
          text="UI Engineer"
          delay={0.5}
          className="text-foregroundAlt text-[14px] sm:text-[17px] mt-[-5px]"
        />
      </div>
      <TechnicalPortrait />
      <div className="default-layout px-5 py-10 mt-[60px] md:mt-[30px] ">
        <LatestProjects />
      </div>
      <div className="default-layout px-5 mt-[30px]">
        <LatestArticles />
      </div>
      <div className="default-layout px-5 mt-[30px]">
        <LatestSnippets />
      </div>
      <div className="mt-[100px]">
        <AboutMeCTASection />
      </div>
    </div>
  );
}
