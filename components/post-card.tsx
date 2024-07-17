import { Post } from "@/.velite";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "./tag";
import PostInfos from "./post-infos";
import { Icons } from "./icons";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Link href={post.slug} className="flex flex-col gap-4">
        <div className="w-full aspect-video relative m-0">
          {post.image ? (
            <Image
              src={post.image}
              alt="article illustration"
              fill
              className="rounded-[6px]"
              style={{
                objectFit: "cover",
                margin: "0",
              }}
            />
          ) : (
            <div className="rounded-md h-full w-full flex items-center justify-center bg-secondary">
              <Icons.logoWithoutBg />
            </div>
          )}
        </div>
        <div className="grid gap-[5px]">
          <PostInfos
            className=""
            variant="small"
            category={post.category}
            date={post.date}
          />
          <h3 className="text-[22px] font-bold">{post.title}</h3>
          <span className="text-muted-foreground">{post.description}</span>
        </div>
        <div className="flex gap-[5px]">
          {post.tags && post.tags.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
      </Link>
    </>
  );
};

export default PostCard;
