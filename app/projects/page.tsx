import { projects } from "#site/content";
import ShowcaseMenu from "@/components/ShowcaseMenu";
import FadeIn from "@/components/fade-in";
import PageHeader from "@/components/page-header";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Maxime Lefebvre",
  description: "A showcase of my work in web development, design, and 3D",
};

export default async function ProjectsPage() {
  const publishedProjects = sortPosts(
    projects.filter((project) => project.published)
  );

  const mappedProjectsToShowcaseMenuProps = publishedProjects.map((project) => {
    return {
      link: project.slug,
      text: project.title,
      subtitle: project.description,
      image: project.image,
      logo: project.logo,
    };
  });

  return (
    <div className="default-layout px-5 grid gap-[10px] mb-[60px]">
      <PageHeader title="Selected Projects" />
      <FadeIn>
        <ShowcaseMenu
          items={mappedProjectsToShowcaseMenuProps}
          backgroundAnimation={false}
          className="mb-4"
          itemClassName="!text-6xl"
          size="lg"
        />
      </FadeIn>
    </div>
  );
}
