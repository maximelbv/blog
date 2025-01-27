import { posts } from "#site/content";
import FadeIn from "@/components/fade-in";
import PostCard from "@/components/post-card";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import { sortPosts } from "@/lib/utils";
import CustomLink from "./custom-link";

export default async function LatestArticles() {
  const publishedPosts = sortPosts(
    posts
      .filter(
        (post) => post.published && post.type === ARTICLE_TYPE_CONSTANTS.article
      )
      .slice(0, 3)
  );

  return (
    <>
      {publishedPosts.length > 0 && (
        <div className="flex flex-col gap-[15px]">
          <FadeIn>
            <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
              Latest Articles
            </span>
          </FadeIn>

          <div className="grid row-gap w-full grid-cols-1 md:grid-cols-3 gap-6">
            {publishedPosts.map((post, index) => (
              <FadeIn key={index} delay={(index + 1) * 0.2}>
                <PostCard key={post.slug} post={post} />
              </FadeIn>
            ))}
          </div>
          <div className="flex justify-end items-center">
            <FadeIn>
              <CustomLink href="/blog" className="text-[18px]">
                View all articles →
              </CustomLink>
            </FadeIn>
          </div>
        </div>
      )}
    </>
  );
}
