"use client";

import { Post } from "@/.velite";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import PostInfos from "./post-infos";

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
      className={`${className} absolute h-[90svh] left-[50%] top-[30%] md:top-[50%] md:fixed md:h-[80svh] md:max-h-[80svh] min-w-[100svw] md:min-w-[750px] mx-auto overflow-y-auto pointer-events-auto !p-0 gap-0`}
    >
      <style>
        {`
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #3f3f3f;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      .scroll-container {
        padding-right: 14px;
        box-sizing: content-box;
      }
    `}
      </style>
      <DialogHeader className="!text-start relative">
        <DialogTitle className="!m-0 bg-background p-[20px] md:p-[50px] !pb-[15px]">
          <div className="flex flex-col gap-[15px]">
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
        className="max-h-[80vh] p-[20px] md:p-[50px] !pt-0 !mt-0"
        onWheel={(e) => e.stopPropagation()}
      >
        <div className="h-[1px] w-full bg-border article-layout my-[15px]" />

        {children}
      </div>
    </DialogContent>
  );
}
