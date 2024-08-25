"use client";

import { useEffect, useState } from "react";
import { posts } from "#site/content";
import AnimatedButon from "@/components/animated-buton";
import { Icons } from "@/components/icons";
import PostInfos from "@/components/post-infos";
import { sortPosts } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);
  const publishedPosts = sortPosts(posts.filter((post) => post.published));
  const lastPost = publishedPosts[0];
  const nextToLastPost = publishedPosts[1];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    const targetElement = document.getElementById(targetId || "");

    if (targetElement) {
      const offset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        className="relative w-full flex flex-col items-center justify-center"
        style={{
          height: "calc(100svh - 80px)",
          ...(window.innerWidth < 640 && {
            height: "calc(100svh - 101px)",
          }),
        }}
      >
        <div className="mb-[20svh] flex flex-col items-center">
          <h1 className="scale-[70%] sm:scale-[85%] md:scale-100 text-[80px] font-dahliaLight text-foreground ">
            <span className="font-dahliaBold mr-1">maxime</span>lefebvre
          </h1>
          <span className="text-[18px] text-foregroundAlt uppercase">
            web · 3d · data · motion
          </span>
        </div>
        <a
          href="#latest-posts"
          className="absolute bottom-10 text-[18px] text-foregroundAlt uppercase"
          onClick={handleSmoothScroll}
          style={{ opacity: showArrow ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icons.arrowDown />
          </motion.div>
        </a>
      </div>
      <div
        id="latest-posts"
        className="relative w-full flex flex-col  justify-between items-center py-[5svh]"
        style={{
          height: "calc(100svh - 224px)",
          ...(window.innerWidth < 640 && {
            height: "calc(100svh - 333px)",
          }),
        }}
      >
        <span className="font-dahlia text-[50px] text-foreground z-10">
          Latest Posts
        </span>
        <div className="scale-[70%] sm:scale-[85%] md:scale-90 lg:scale-100 flex items-end">
          <div className="relative group">
            <Link href={nextToLastPost.slug}>
              <div className="p-4 flex flex-col justify-between w-[210px] md:h-[210px] bg-secondary border-[1px] border-border rounded-[20px] -rotate-3 hover:rotate-0 mr-[-30px] transition-transform duration-500 cubic-bezier(.73,-0.01,.01,1)">
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
              className="absolute w-[350px] h-[350px] bg-secondary border-[1px] border-border rounded-[20px] rotate-[14deg] group-hover:rotate-0 transition-transform duration-500 cubic-bezier(.73,-0.01,.01,1)"
              style={{ zIndex: 0 }}
            ></div>

            <Link href={lastPost.slug}>
              <div
                className="p-7 flex flex-col justify-between gap-2 relative w-[350px] h-[350px] bg-secondary border-[1px] border-border rounded-[20px] rotate-6 hover:rotate-0 mb-16 transition-transform duration-500 cubic-bezier(.73,-0.01,.01,1)"
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
        <AnimatedButon
          nav={{
            route: "/blog",
            name: "View all",
          }}
          duration={0.5}
          stagger={0.019}
          className="!bg-blue-500 !rounded-full !text-[#fff] !font-semibold !text-[15px]"
        />
      </div>
    </div>
  );
}
