import { projects } from "#site/content";
import PageHeader from "@/components/page-header";
import ProjectCard from "@/components/project-card";
import { getAllTags, sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Maxime Lefebvre",
  description: "A showcase of my work in web development, design, and 3D",
};

export default async function ProjectsPage() {
  const publishedProjects = sortPosts(
    projects.filter((project) => project.published)
  );
  const tags = getAllTags(projects);

  return (
    <div className="default-layout px-5 grid gap-[32px] mb-[60px]">
      <PageHeader
        title="My latest Projects"
        subtitle="🚧 This part of the website is still under construction"
      />
      <div className="grid grid-cols-1 gap-14">
        {publishedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
