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
    <div className="default-layout px-5">
      <PageHeader
        title="Blog"
        subtitle="Collection of tutorials / snippets focused on coding and graphic
          design"
      />
      <div>
        {publishedPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
