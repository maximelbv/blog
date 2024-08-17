import { posts } from "#site/content";
import GoBlogButton from "@/components/go-blog-button";
import PostInfos from "@/components/post-infos";
import { sortPosts } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const publishedPosts = sortPosts(posts.filter((post) => post.published));
  const lastPost = publishedPosts[0];
  const nextToLastPost = publishedPosts[1];

  return (
    <div>
      <div
        className="w-full flex flex-col items-center justify-end"
        style={{ height: "calc(100svh - 80px)" }}
      >
        <div className="mb-14 flex flex-col items-center">
          <h1 className="text-[80px] font-dahliaLight text-foreground !mb-[-10px]">
            <span className="font-dahliaBold mr-1">maxime</span>lefebvre
          </h1>
          <span className="font-dahlia text-[32px] text-foregroundAlt">
            design engineer
          </span>
        </div>
        <div className="w-[2px] h-[45svh] bg-border"></div>
      </div>
      <div
        className="relative w-full flex flex-col gap-20 justify-center items-center"
        style={{ height: "calc(100svh - 80px)" }}
      >
        <span className="font-dahlia text-[50px] text-foregroundz-10">
          Latest Posts
        </span>
        <div className="flex items-end">
          <div className="relative group">
            {/* <div
              className="absolute w-[210px] h-[210px] bg-secondary border-[1px] border-border rounded-[20px] rotate-[-10deg] group-hover:rotate-0 transition-transform duration-500 ease-in-out"
              style={{ zIndex: 0 }}
            ></div> */}
            <Link href={nextToLastPost.slug}>
              <div className="p-4 flex flex-col justify-between w-[210px] h-[210px] bg-secondary border-[1px] border-border rounded-[20px] -rotate-3 hover:rotate-0 mr-[-30px] transition-transform duration-500 ease-in-out">
                <div className="flex flex-col gap-2">
                  <PostInfos
                    className=""
                    variant="small"
                    category={nextToLastPost.category}
                    date={nextToLastPost.date}
                  />
                  <span className="text-[20px] font-dahlia font-bold">
                    {nextToLastPost.title}
                  </span>
                  {/* <span>{nextToLastPost.description}</span> */}
                </div>

                <div className="flex gap-2">
                  {nextToLastPost.tags &&
                    nextToLastPost.tags.map((tag) => (
                      <span
                        className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 no-underline border-transparent bg-highlighted text-muted-foreground"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group">
            <div
              className="absolute w-[350px] h-[350px] bg-secondary border-[1px] border-border rounded-[20px] rotate-[14deg] group-hover:rotate-0 transition-transform duration-500 ease-in-out"
              style={{ zIndex: 0 }}
            ></div>

            <Link href={lastPost.slug}>
              <div
                className="p-7 flex flex-col justify-between gap-2 relative w-[350px] h-[350px] bg-secondary border-[1px] border-border rounded-[20px] rotate-6 hover:rotate-0 mb-16 transition-transform duration-500 ease-in-out"
                style={{ zIndex: 1 }}
              >
                <div className="flex flex-col gap-2">
                  <PostInfos
                    className=""
                    variant="small"
                    category={lastPost.category}
                    date={lastPost.date}
                  />
                  <span className="font-dahlia text-[30px] font-bold">
                    {lastPost.title}
                  </span>
                  <span className="text-foregroundAlt">
                    {lastPost.description}
                  </span>
                </div>

                <div className="flex gap-2">
                  {lastPost.tags &&
                    lastPost.tags.map((tag) => (
                      <span
                        className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 no-underline border-transparent bg-highlighted text-muted-foreground"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <GoBlogButton />
      </div>
    </div>
  );
}
