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
      <DialogTrigger>
        <div
          className={`${className} w-fit flex flex-col gap-1 no-underline p-3 bg-secondary rounded-lg border-2 border-transparent text-start`}
        >
          <PostInfos
            className=""
            variant="small"
            category={post.category}
            // date={post.date}
          />
          <h3 className="text-[18px] font-bold m-0">{post.title}</h3>
          {/* <div className="flex gap-[10px]">
            {post.tags &&
              post.tags.map((tag) => (
                <span
                  className="lowercase inline-flex text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 no-underline border-transparent text-muted-foreground"
                  key={tag}
                >
                  <span className="font-mono mr-[1.5px]">#</span>
                  {tag}
                </span>
              ))}
          </div> */}
        </div>
      </DialogTrigger>

      <ScrollableDialogContent post={post} className="prose dark:prose-invert">
        <MDXContent code={post.body} />
      </ScrollableDialogContent>
    </Dialog>
  );
};

export default SnippetCard;
