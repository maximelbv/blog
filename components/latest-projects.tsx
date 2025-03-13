import { projects } from "#site/content";
import FadeIn from "@/components/fade-in";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import { sortPosts } from "@/lib/utils";
import CustomLink from "./custom-link";
import ShowcaseMenu from "./ShowcaseMenu";

export default async function LatestProjects() {
  const publishedProjects = sortPosts(
    projects
      .filter(
        (project) =>
          project.published && project.type === ARTICLE_TYPE_CONSTANTS.article
      )
      .slice(0, 3)
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
    <div className="flex flex-col gap-[15px]">
      <FadeIn>
        <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
          Latest Projects
        </span>
      </FadeIn>
      <FadeIn>
        <ShowcaseMenu
          items={mappedProjectsToShowcaseMenuProps}
          backgroundAnimation={false}
          className="mb-4"
          itemClassName="!text-6xl"
          size="lg"
        />
      </FadeIn>

      <div className="flex justify-end items-center">
        <FadeIn>
          <CustomLink href="/projects" className="text-[18px]">
            View all projects →
          </CustomLink>
        </FadeIn>
      </div>
    </div>
  );
}
