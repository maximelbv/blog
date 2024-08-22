import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="default-layout px-5 grid gap-[32px]">
      <PageHeader title="About me" />
    </div>
  );
}
