import { Post } from "@/.velite";
import React from "react";
import Link from "next/link";
import PostInfos from "./post-infos";

const PostCardAlternative = ({ post }: { post: Post }) => {
  const sanitizedSlug = post.slug.replace("blog/", "");
  return (
    <>
      <Link
        href={sanitizedSlug}
        className="flex flex-col gap-2 no-underline p-5 bg-secondary rounded-lg border-2 border-transparent hover:border-primary "
      >
        <div className="scale-90 ml-[-16px]">
          <PostInfos
            className=""
            variant="small"
            category={post.category}
            date={post.date}
          />
        </div>

        <h3 className="text-[20px] font-bold m-0">{post.title}</h3>
        <span className="text-muted-foreground text-[15px]">
          {post.description}
        </span>

        <div className="flex gap-[5px]">
          {post.tags &&
            post.tags.map((tag) => (
              <span
                className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 no-underline border-transparent bg-secondary text-muted-foreground"
                key={tag}
              >
                {tag}
              </span>
            ))}
        </div>
      </Link>
    </>
  );
};

export default PostCardAlternative;
