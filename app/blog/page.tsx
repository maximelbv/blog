import { posts } from "#site/content";
import PageHeader from "@/components/page-header";
import PostCard from "@/components/post-card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Maxime Lefebvre",
  description:
    "Collection of tutorials / snippets focused on coding and graphic design",
};

export default async function BlogPage() {
  const publishedPosts = sortPosts(posts.filter((post) => post.published));
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="default-layout px-5 grid gap-[32px]">
      <PageHeader
        title="Blog"
        subtitle="Collection of tutorials / snippets focused on coding and graphic
          design"
      />
      <div className="grid gap-[20px] lg:gap-[30px] lg:gap-y-[50px] row-gap w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {publishedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
