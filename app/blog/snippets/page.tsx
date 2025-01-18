import { posts } from "#site/content";
import FadeIn from "@/components/fade-in";
import PageHeader from "@/components/page-header";
import SnippetCard from "@/components/snippet-card";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snippets - Maxime Lefebvre",
  description:
    "A library of code snippets and techniques to speed up development and enhance your creations",
};

export default async function SnippetsPage() {
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
        title="Snippets"
        className="mb-[-5px]"
        subtitle="A library of code snippets and techniques to speed up development and enhance your creations"
      />
      <div className="flex flex-col gap-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
          {publishedSnippets.map((snippet, index) => (
            <FadeIn
              key={snippet.slug}
              delay={(index + 1) * 0.2}
              className="flex items-stretch"
            >
              <SnippetCard key={snippet.slug} post={snippet} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
