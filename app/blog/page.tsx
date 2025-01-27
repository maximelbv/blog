import { posts } from "#site/content";
import FadeIn from "@/components/fade-in";
import LatestSnippets from "@/components/latest-snippets";
import PageHeader from "@/components/page-header";
import PostCard from "@/components/post-card";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Maxime Lefebvre",
  description:
    "Hands-on tutorials and snippets to explore coding and graphic design through interactive experiences.",
};

export default async function BlogPage() {
  const publishedPosts = sortPosts(
    posts.filter(
      (post) => post.published && post.type === ARTICLE_TYPE_CONSTANTS.article
    )
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="default-layout px-5 grid gap-[32px]">
      <PageHeader
        title="Blog"
        className="mb-[-5px]"
        subtitle="Hands-on tutorials and snippets to explore coding and graphic design through interactive experiences"
      />
      <LatestSnippets />

      {publishedPosts.length > 0 && (
        <div className="flex flex-col gap-[15px]">
          <FadeIn>
            <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
              Articles
            </span>
          </FadeIn>

          <div className="grid row-gap w-full grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.map((post, index) => (
              <FadeIn key={post.slug} delay={(index + 1) * 0.2}>
                <PostCard key={post.slug} post={post} />
              </FadeIn>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
