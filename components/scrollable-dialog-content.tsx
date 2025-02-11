"use client";

import { Post } from "@/.velite";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import PostInfos from "./post-infos";
import { cn } from "@/lib/utils";

export default function ScrollableDialogContent({
  post,
  children,
  className,
}: {
  post: Post;
  children: ReactNode;
  className?: string;
}) {
  return (
    <DialogContent
      // style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      className={cn(
        "!fixed !top-1/2 !left-1/2 !translate-x-[-50%] !translate-y-[-50%] !w-auto !max-w-none",
        "!w-[90%] !max-w-[700px]",
        "!h-[90svh] md:!h-[90svh] md:!max-h-[90svh]",
        "!p-0",
        "!block",
        "overflow-y-auto pointer-events-auto gap-0",
        "!rounded-lg",
        // "!bg-secondary",
        className
      )}
    >
      <DialogHeader className="!text-start relative w-full">
        <DialogTitle className="!m-0 p-[20px] md:p-[50px] !pb-[0px] leading-[1.3] w-full">
          <div className="flex flex-col gap-[15px] bg-secondary w-full p-[20px] rounded-md">
            <PostInfos
              className="mb-[-5px]"
              variant="small"
              category={post.category}
              date={post.date}
            />
            <span className="text-[26px]">{post.title}</span>
            {/* <div className="flex gap-[5px]">
              {post.tags &&
                post.tags.map((tag) => (
                  <span
                    className="inline-flex items-center rounded-full border px-2.5 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 no-underline border-transparent bg-highlighted text-muted-foreground"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
            </div> */}
          </div>
        </DialogTitle>
      </DialogHeader>
      <div
        className="max-h-[80vh] p-[20px] md:p-[50px] !pt-0 !mt-0 "
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="h-[1px] w-full bg-border article-layout my-[15px]" />

        {children}
      </div>
    </DialogContent>
  );
}
