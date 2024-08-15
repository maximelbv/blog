import { Post } from "@/.velite";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "./tag";
import PostInfos from "./post-infos";
import ImagePlaceholder from "./image-placeholder";
import BlurImage from "./blur-image";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Link href={post.slug} className="flex flex-col gap-4">
        <div className="w-full aspect-video relative m-0">
          {post.image ? (
            <BlurImage
              src={post.image}
              className="rounded-[6px]"
              style={{
                objectFit: "cover",
                margin: "0",
              }}
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
        <div className="grid gap-[5px]">
          <PostInfos
            className=""
            variant="small"
            category={post.category}
            date={post.date}
          />
          <h3 className="text-[20px] font-bold">{post.title}</h3>
          <span className="text-foregroundAlt font-normal">
            {post.description}
          </span>
        </div>
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

export default PostCard;
