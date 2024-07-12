"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="ghost"
      onClick={handleClick}
      className={`z-50 bg-secondary rounded-full px-8 py-10 fixed right-5 bottom-5 group transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-[120%]"
      }`}
    >
      <div className="relative h-6 overflow-hidden pt-1 grid gap-2">
        <div className="transition-transform duration-300 group-hover:transform group-hover:-translate-y-[24px]">
          <Icons.arrowTop />
        </div>
        <div className="transition-transform duration-300 group-hover:transform group-hover:-translate-y-[24px]">
          <Icons.arrowTop />
        </div>
      </div>
    </Button>
  );
};

export default ScrollToTopButton;
