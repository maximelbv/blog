import React from "react";
import FadeIn from "./fade-in";
import DraggableScrollContainer from "./draggable-scroll-container";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { ARTICLE_TYPE_CONSTANTS } from "@/constants/article-type-constants";
import CustomLink from "./custom-link";
import SnippetCard from "./snippet-card";

const LatestSnippets = () => {
  const publishedLatestSnippets = sortPosts(
    posts
      .filter(
        (post) => post.published && post.type === ARTICLE_TYPE_CONSTANTS.snippet
      )
      .slice(0, 6)
  );

  return (
    <div className="relative flex flex-col gap-[15px] responsive-carousel">
      <FadeIn>
        <div className="flex justify-between items-end">
          <span className="text-[20px] px-[10px] py-[5px] bg-secondary w-fit rounded-lg">
            Latest Snippets
          </span>
        </div>
      </FadeIn>
      <div className="relative">
        <FadeIn delay={1} className="z-50">
          <div className="absolute z-50 right-0 top-1/2 h-[100%] w-[5px] bg-border transform -translate-y-1/2 rounded-full" />
        </FadeIn>
        <DraggableScrollContainer>
          <div className="flex gap-[15px] items-stretch">
            {publishedLatestSnippets.map((snippet, index) => (
              <FadeIn
                key={index}
                delay={(index + 1) * 0.2}
                className="flex items-stretch"
              >
                <SnippetCard
                  key={snippet.slug}
                  post={snippet}
                  className="min-w-[300px]"
                />
              </FadeIn>
            ))}
          </div>
        </DraggableScrollContainer>
      </div>

      <div className="flex justify-end items-center">
        <FadeIn>
          <CustomLink href="/blog/snippets" className="text-[18px]">
            View all snippets →
          </CustomLink>
        </FadeIn>
      </div>
    </div>
  );
};

export default LatestSnippets;
