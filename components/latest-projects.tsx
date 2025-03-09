import { projects } from "#site/content";
import FadeIn from "@/components/fade-in";
import PostCard from "@/components/post-card";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import { sortPosts } from "@/lib/utils";
import CustomLink from "./custom-link";
import ProjectCard from "./project-card";
import ShowcaseMenu from "./ShowcaseMenu";

export default async function LatestProjects() {
  const publishedPosts = sortPosts(
    projects
      .filter(
        (post) => post.published && post.type === ARTICLE_TYPE_CONSTANTS.article
      )
      .slice(0, 3)
  );

  const mappedProjectsToShowcaseMenuProps = publishedPosts.map((post) => {
    return { link: post.slug, text: post.title, image: post.image };
  });

  return (
    <div className="flex flex-col gap-[15px]">
      <FadeIn>
        <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
          Latest Projects
        </span>
      </FadeIn>

      {/* <div className="grid row-gap w-full grid-cols-1 md:grid-cols-3 gap-6">
        {publishedPosts.map((post, index) => (
          <FadeIn key={index} delay={(index + 1) * 0.2}>
            <ProjectCard key={post.slug} project={post} />
          </FadeIn>
        ))}
      </div> */}
      <ShowcaseMenu
        items={mappedProjectsToShowcaseMenuProps}
        className="mb-4 font-dahliaLight"
        itemClassName="!px-4 !py-6"
      />
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
