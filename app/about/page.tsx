import BlurImage from "@/components/blur-image";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="default-layout flex p-5 gap-[32px]">
      <div className="py-10">
        <span className="flex text-foreground font-bold text-[24px] mb-4">
          👋 Hi, i'm Maxime
        </span>
        <p className="text-foregroundAlt text-[20px]">
          I am a web developer based in Paris. I started my journey into web
          development four years ago after a career retraining, and since then,
          I have built a solid foundation in creating complete, dynamic web
          solutions.
          <br />
          <br />
          Currently, I am nearing the completion of a work-study program, where
          I have gained valuable experience in building web applications that
          seamlessly integrate design with functionality. My expertise lies in
          designing and implement full-stack applications that are both robust
          and scalable.
          <br />
          <br />I am dedicated to continuous learning and sharing my knowledge
          with others, which is why I’ve decided to start this blog—to
          contribute to the web development community and help others on their
          journey.
        </p>
      </div>
    </div>
  );
}
