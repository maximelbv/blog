import AboutHero from "@/components/about-hero";
import AboutMeCTASection from "@/components/about-me-cta-section";
import LatestArticles from "@/components/latest-articles";
import LatestProjects from "@/components/latest-projects";
import LatestSnippets from "@/components/latest-snippets";

export default function Home() {
  return (
    <div>
      <AboutHero />
      <div className="default-layout px-5 mt-[30px]">
        <LatestProjects />
      </div>
      <div className="default-layout px-5 mt-[30px]">
        <LatestSnippets />
      </div>
      <div className="default-layout px-5 mt-[30px]">
        <LatestArticles />
      </div>
      <div className="mt-[100px]">
        <AboutMeCTASection />
      </div>
    </div>
  );
}
