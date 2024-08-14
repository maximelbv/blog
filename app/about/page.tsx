import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="default-layout p-5">
      <PageHeader title="About me" />
      <span className="flex max-w-[500px] text-[18px]">
        Hi i'm Maxime,
        <br />a software developer based in Paris, dedicated to crafting
        intuitive and immersive digital solutions. <br />
        I specialize in frontend development and thrive on creating dynamic,
        interactive web experiences that combine aesthetic appeal with robust
        functionality.
        <br />
        Beyond coding, i’m an enthusiast of 3D design, Tinkering & Fitness
      </span>
    </div>
  );
}
