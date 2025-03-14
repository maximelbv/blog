import { projects } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { BackButton } from "@/components/go-back-button";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import { formatDateToMonthYear } from "@/lib/utils";
import AnimatedText from "@/components/animated-text";
import FadeIn from "@/components/fade-in";
import Image from "next/image";
import { getIconFromString } from "@/lib/icon-helper";
import CustomLink from "@/components/custom-link";
import ShowcaseMenu from "@/components/ShowcaseMenu";

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

  const mappedOtherProjectsToShowcaseMenuProps = otherProjects.map(
    (project) => {
      const link = project.slug.replace("projects/", "");

      return {
        link: link,
        text: project.title,
        subtitle: project.description,
        image: project.image,
        logo: project.logo,
      };
    }
  );

  if (!project || !project.published) {
    notFound();
  }
  console.log(mappedOtherProjectsToShowcaseMenuProps);

  return (
    <div>
      <div className="default-layout m-auto w-full px-5">
        <BackButton href="/projects" label="Projects" />
      </div>

      <div className="grid gap-[50px] p-0 py-0 my-[40px]">
        <div className="grid items-center justify-center max-w-[100svw] pb-[20px]">
          <div>
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
          </div>
          <FadeIn className="default-layout">
            <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:flex flex-wrap items-center justify-between gap-[5px] sm:gap-[5svw]">
              {project.category && (
                <div className="min-h-full grid gap-2 sm:gap-3 p-[10px] sm:p-0 rounded-md bg-highlighted sm:bg-transparent text-start items-start sm:text-center sm:items-center lg:text-start lg:items-start">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    category
                  </span>
                  <span className="text-[18px]">{project.category}</span>
                </div>
              )}
              {project.roles && (
                <div className="min-h-full grid gap-2 sm:gap-3 p-[10px] sm:p-0 rounded-md bg-highlighted sm:bg-transparent text-start items-start sm:text-center sm:items-center lg:text-start lg:items-start">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    {project.roles.length > 1 ? "roles" : "role"}
                  </span>
                  <span className="text-[18px]">
                    {project.roles.join(", ")}
                  </span>
                </div>
              )}
              {project.stack && (
                <div className="min-h-full grid gap-2 sm:gap-3 h-full p-[10px] sm:p-0 rounded-md bg-highlighted sm:bg-transparent text-start justify-start sm:text-center sm:justify-center lg:text-start lg:justify-start">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    stack
                  </span>
                  <div className="text-[18px] flex gap-[5px]">
                    {project.stack.map((techno: string) => (
                      <div key={techno}>{getIconFromString(techno)}</div>
                    ))}
                  </div>
                </div>
              )}
              {project.date && (
                <div className="min-h-full grid gap-2 sm:gap-3 p-[10px] sm:p-0 rounded-md bg-highlighted sm:bg-transparent text-start items-start sm:text-center sm:items-center lg:text-start lg:items-start">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    completed
                  </span>
                  <span className="text-[18px]">
                    {formatDateToMonthYear(project.date)}
                  </span>
                </div>
              )}
              {project.link && (
                <div className="min-h-full grid gap-2 sm:gap-3 p-[10px] sm:p-0 rounded-md bg-highlighted sm:bg-transparent text-start justify-start sm:text-center sm:justify-center lg:text-start lg:justify-start">
                  <span className="text-foregroundAlt text-[18px] opacity-65">
                    link
                  </span>
                  <CustomLink
                    href={project.link}
                    isExternal={true}
                    className="text-[18px]"
                  >
                    {project.title}
                  </CustomLink>
                </div>
              )}
            </div>
          </FadeIn>
          {/* <FadeIn className="animate-bounce w-full flex items-center justify-center">
            <Icons.arrowDown />
          </FadeIn> */}
        </div>

        <div className="project-layout !w-full m-auto">
          <MDXContent code={project.body} />
        </div>

        <ScrollToTopButton />
      </div>

      {otherProjects.length > 0 && (
        <div className="my-5 grid gap-2 default-layout p-5 mt-0">
          <span className="text-[28px]">More projects</span>
          <FadeIn>
            <ShowcaseMenu
              items={mappedOtherProjectsToShowcaseMenuProps}
              backgroundAnimation={false}
              className="mb-4"
              itemClassName="!text-6xl"
              size="lg"
            />
          </FadeIn>
        </div>
      )}
    </div>
  );
}
