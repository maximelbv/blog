import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
import { formatDate } from "@/lib/utils";
import { Icons } from "@/components/icons";
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

const categoryIcons = {
  figma: Icons.figma,
  react: Icons.react,
};

type Category = keyof typeof categoryIcons;

function isCategory(category: string): category is Category {
  return category in categoryIcons;
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  const category = post.category.toLowerCase();
  const CategoryIcon = isCategory(category) ? categoryIcons[category] : null;

  return (
    <div className="flex default-layout pt-16">
      <article className="container py-6 prose dark:prose-invert max-w-3xl m-0 p-0">
        <div className="grid gap-7 mb-12">
          <div className="flex items-center justify-start gap-4 mb-[-18px]">
            <div className="flex items-center justify-center gap-2.5">
              {CategoryIcon ? <CategoryIcon /> : null}
              <span className="uppercase font-semibold tracking-[7px]">
                {post.category}
              </span>
            </div>

            <div className="w-1.5 h-1.5 bg-secondary-foreground rounded-full" />
            <span className="text-secondary-foreground">
              last updated :{" "}
              <strong className="text-secondary-foreground">
                {formatDate(post.date)}
              </strong>
            </span>
          </div>
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
    </div>
  );
}
