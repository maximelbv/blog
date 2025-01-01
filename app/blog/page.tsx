import { Post, posts } from "#site/content";
import CustomLink from "@/components/custom-link";
import FadeIn from "@/components/fade-in";
import PageHeader from "@/components/page-header";
import PostCard from "@/components/post-card";
import SnippetCard from "@/components/snippet-card";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Maxime Lefebvre",
  description:
    "Collection of tutorials / snippets focused on coding and graphic design",
};

export default async function BlogPage() {
  const publishedPosts = sortPosts(
    posts.filter(
      (post) => post.published && post.type === ARTICLE_TYPE_CONSTANTS.article
    )
  );
  const publishedSnippets = sortPosts(
    posts.filter(
      (post) => post.published && post.type === ARTICLE_TYPE_CONSTANTS.snippet
    )
  );
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="default-layout px-5 grid gap-[32px]">
      <PageHeader
        title="Blog"
        className="mb-[-5px]"
        // subtitle="Collection of tutorials / snippets focused on coding, graphic
        //   design and 3D"
      />
      <div className="flex flex-col gap-[15px]">
        <div className="flex justify-between items-end">
          <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
            Snippets
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[15px]">
          {publishedSnippets.map((snippet, index) => (
            <FadeIn key={index} delay={(index + 1) * 0.2}>
              <SnippetCard key={snippet.slug} post={snippet} />
            </FadeIn>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <CustomLink href="#" className="text-[18px]">
            See all snippets →
          </CustomLink>
        </div>
      </div>

      <div className="flex flex-col gap-[15px]">
        <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
          Articles
        </span>
        <div className="grid row-gap w-full grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedPosts.map((post, index) => (
            <FadeIn key={index} delay={(index + 1) * 0.2}>
              <PostCard key={post.slug} post={post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
