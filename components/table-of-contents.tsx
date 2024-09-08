"use client";

import { useEffect, useState } from "react";

interface TableOfContentsProps {
  index: {
    link: string;
    name: string;
  }[];
}

export default function TableOfContents({ index }: TableOfContentsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(
        window.scrollY > 230 &&
          window.scrollY < document.body.scrollHeight - window.innerHeight - 230
          ? true
          : false
      );
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
    <div
      className={`${
        isVisible ? "opacity-100 transition-opacity duration-300" : "opacity-0"
      } hidden min-[1100px]:grid sticky top-[120px] !overflow-y-auto h-fit max-h-[80svh] w-full gap-2`}
    >
      {/* <span className="uppercase font-bold tracking-widest text-foreground text-[14px] mb-1">
        Table of content
      </span> */}
      {index.map((item) => (
        <a
          href={item.link}
          key={item.name}
          className="no-underline hover:text-blue-400 text-foregroundAlt text-[14px]"
          onClick={handleSmoothScroll}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
