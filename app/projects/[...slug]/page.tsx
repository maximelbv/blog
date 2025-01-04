import { projects } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
import { BackButton } from "@/components/go-back-button";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import PostInfos from "@/components/post-infos";
import PostCardAlternative from "@/components/post-card-alternative";
import TableOfContents from "@/components/table-of-contents";
import BlurImage from "@/components/blur-image";
import { formatDateToMonthYear } from "@/lib/utils";
import AnimatedTitle from "@/components/animated-title";
import SlideIn from "@/components/slide-in";
import AnimatedText from "@/components/animated-text";
import FadeIn from "@/components/fade-in";
import Image from "next/image";

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: ProjectPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const project = projects.find((project) => project.slugAsParams === slug);

  return project;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  ProjectPageProps["params"][]
> {
  return projects.map((project, index) => ({
    slug: project.slugAsParams.split("/"),
    key: `project-${index}`,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getPostFromParams(params);

  const otherProjects = projects
    .filter((p) => p.slug !== project?.slug && p.published === true)
    .sort((a, b) => {
      if (
        a.category === project?.category &&
        b.category !== project?.category
      ) {
        return -1;
      } else if (
        a.category !== project?.category &&
        b.category === project?.category
      ) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, 3);

  if (!project || !project.published) {
    notFound();
  }

  return (
    <div>
      <div className="default-layout m-auto w-full px-5">
        <BackButton href="/projects" label="Projects" />
      </div>

      <div className="grid gap-20 p-0 py-0 my-[40px]">
        <div className="grid items-center justify-center">
          {project.logo && (
            <FadeIn>
              <div className="flex items-center justify-center">
                <Image
                  priority
                  src={project.logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className="!relative !h-fit"
                />
              </div>
            </FadeIn>
          )}
          <AnimatedText
            text={project.title}
            className="text-center font-dahliaBold lg:text-[120px] lg:mb-0 mb-2 text-[50px] m-0"
          />
          {project.description && (
            <AnimatedText
              delay={0.5}
              className="text-[18px] text-center !mt-[-10px] text-foregroundAlt"
              text={project.description}
            ></AnimatedText>
          )}
          <FadeIn>
            <div className="mt-20 flex justify-between gap-6">
              {project.category && (
                <div className="grid gap-3">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    category
                  </span>
                  <span className="text-[18px]">{project.category}</span>
                </div>
              )}
              {project.roles && (
                <div className="grid gap-3">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    {project.roles.length > 1 ? "roles" : "role"}
                  </span>
                  <span className="text-[18px]">
                    {project.roles.join(", ")}
                  </span>
                </div>
              )}
              {project.date && (
                <div className="grid gap-3">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    completed
                  </span>
                  <span className="text-[18px]">
                    {formatDateToMonthYear(project.date)}
                  </span>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        <div className="project-layout !w-full m-auto">
          <MDXContent code={project.body} />
        </div>

        <ScrollToTopButton />
      </div>

      {otherProjects.length > 0 && (
        <div className="my-5 grid gap-2 default-layout p-5 mt-0">
          <span className="text-[28px]">More projects</span>
          <div className="my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((post) => (
              <PostCardAlternative key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
