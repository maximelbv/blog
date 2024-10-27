import { posts } from "#site/content";
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

  const otherPosts = posts
    .filter((p) => p.slug !== post?.slug && p.published === true)
    .sort((a, b) => {
      if (a.category === post?.category && b.category !== post?.category) {
        return -1;
      } else if (
        a.category !== post?.category &&
        b.category === post?.category
      ) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, 3);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div>
      <div className="flex article-layout p-5 py-0">
        <article className="container py-6 prose dark:prose-invert w-full m-0 p-0 max-w-full">
          <div className="gap-0 mb-8 flex flex-col">
            <BackButton href="/blog" label="blog" />
            {/* {post.image && (
              <div className="w-full aspect-video md:aspect-21/9 relative rounded-md my-4">
                <BlurImage
                  src={post.image}
                  className="rounded-xl"
                  style={{
                    objectFit: "cover",
                    margin: "0",
                  }}
                />
              </div>
            )} */}
            <div className="flex flex-col gap-[1.2rem] w-full mt-4">
              <PostInfos
                className="scale-90 w-max ml-[-10px]"
                category={post.category}
                date={post.date}
              />
              <h1 className="!mt-0 !mb-[-2px] text-[38px] font-bold leading-[3.25rem]">
                {post.title}
              </h1>
              <div className="flex gap-2 mt-[-8px]">
                {post.tags?.map((tag) => (
                  <Tag tag={tag} key={tag} />
                ))}
              </div>
              <hr className="m-0 mt-2 border-border" />
            </div>
          </div>
          <div className="flex justify-between !w-full min-[900px]:gap-6 lg:gap-20">
            <div className="article-layout !w-full m-0">
              <MDXContent code={post.body} />
            </div>
            <div className="fixed left-10 top-[40svh]">
              {post.index && <TableOfContents index={post.index} />}
            </div>
          </div>
          <hr className="m-0 mt-14" />
        </article>

        <ScrollToTopButton />
      </div>

      {otherPosts.length > 0 && (
        <div className="my-5 grid gap-2 default-layout p-5 mt-0">
          <span className="text-[28px]">More posts</span>
          <div className="my-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <PostCardAlternative key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
