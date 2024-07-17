import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
import { formatDate } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { BackButton } from "@/components/go-back-button";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import Image from "next/image";
import PostInfos from "@/components/post-infos";
import BlurImage from "@/components/blur-image";
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
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
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="flex default-layout p-5 pt-0 md:pt-5">
      <article className="container py-6 prose dark:prose-invert max-w-3xl m-0 p-0">
        <div className="grid gap-7 mb-12">
          <BackButton />
          {post.image && (
            <div className="w-full h-[300px] relative m-0 rounded-md">
              <BlurImage
                src={post.image}
                className="rounded-xl"
                style={{
                  objectFit: "cover",
                  margin: "0",
                }}
              />
            </div>
          )}
          <PostInfos category={post.category} date={post.date} />
          <h1 className="mb-0 text-[40px] font-bold leading-[3.25rem]">
            {post.title}
          </h1>
          <div className="flex gap-2">
            {post.tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          <hr className="m-0" />
        </div>

        <MDXContent code={post.body} />
      </article>
      {/* <aside></aside> */}
      <ScrollToTopButton />
    </div>
  );
}
