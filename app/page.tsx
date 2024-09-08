import { posts } from "#site/content";
import AnimatedButon from "@/components/animated-buton";
import PostCard from "@/components/post-card";
import PostCardAlternative from "@/components/post-card-alternative";
import { sortPosts } from "@/lib/utils";

export default function Home() {
  const publishedPosts = sortPosts(posts.filter((post) => post.published));
  const lastThreePosts = publishedPosts.slice(0, 3);

  return (
    <div className="default-layout p-5 flex flex-col gap-10">
      <div className="relative w-full flex flex-col items-start justify-center gap-2 md:mt-4">
        <div className="flex flex-col items-start">
          <h1 className="text-[50px] sm:text-[60px] font-dahliaLight text-foreground !m-0 !mb-[-6px] ">
            <span className="font-dahliaBold mr-1">maxime</span>lefebvre
          </h1>
        </div>
        <div className="max-w-[750px] text-[16px] text-foregroundAlt">
          Hi, welcome to my personnal website, i am a web developer and designer
          based in Paris. <br />
          🚧 Currently, the site is under construction, but you can still check
          out my blog posts. It covers topics like programming, graphic design,
          and 3D.
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[20px] italic text-foreground">Latest Posts</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lastThreePosts.map((post) => (
            <PostCard key={post.slug} post={post} homePageCard />
          ))}
        </div>

        {/* <div className="grid grid-cols-1">
          {lastThreePosts.map((post) => (
            <PostCardAlternative
              key={post.slug}
              post={post}
              className="bg-transparent pl-0 border-none hover:border-none"
            />
          ))}
        </div> */}

        <AnimatedButon
          className="mt-4 bg-blue-500 rounded-full hover:bg-blue-500 text-[#fff]"
          nav={{ route: "/blog", name: "View all posts" }}
        />
      </div>
    </div>
  );
}
