import { posts } from "#site/content";
import PageHeader from "@/components/page-header";
import PopAnimWraper from "@/components/pop-anim-wraper";
import PostCard from "@/components/post-card";
import PostCardAlternative from "@/components/post-card-alternative";
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
        title="All Posts"
        subtitle="Collection of tutorials / snippets focused on coding and graphic
          design"
      />
      <div className="grid row-gap w-full grid-cols-1 mb-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publishedPosts.map((post, index) => (
          <PopAnimWraper key={index} delay={(index + 1) * 0.2}>
            <PostCard key={post.slug} post={post} />
          </PopAnimWraper>
        ))}
      </div>
    </div>
  );
}
