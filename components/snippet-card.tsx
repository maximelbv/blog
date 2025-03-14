import { Post } from "@/.velite";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ScrollableDialogContent from "@/components/scrollable-dialog-content";
import { MDXContent } from "./mdx-components";
import "@/styles/mdx.css";
import PostInfos from "./post-infos";
const SnippetCard = ({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="flex-1 w-full">
        <div
          className={`${className} w-full text-start flex flex-col gap-2 no-underline p-4 bg-secondary rounded-lg border-2 border-transparent h-full`}
        >
          <PostInfos
            className=""
            variant="small"
            category={post.category}
            // date={post.date}
          />
          <h3 className="text-[18px] font-bold m-0">{post.title}</h3>
          <span className="text-muted-foreground text-[15px]">
            {post.description}
          </span>
        </div>
      </DialogTrigger>

      <ScrollableDialogContent post={post} className="prose dark:prose-invert">
        <MDXContent code={post.body} />
      </ScrollableDialogContent>
    </Dialog>
  );
};

export default SnippetCard;
