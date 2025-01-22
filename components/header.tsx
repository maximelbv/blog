"use client";

import { navigation } from "@/config/navigation";
import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import AnimatedButon from "./animated-buton";
import { useEffect, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 230 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-background z-50 ${
        isVisible && "border-b-[1px] border-border"
      }`}
    >
      <header
        className={`flex w-full justify-between default-layout px-5 pb-5 pt-5 `}
      >
        <Link href="/" className="flex items-center">
          <Icons.logo />
        </Link>
        <div className="hidden sm:flex items-center justify-center gap-2">
          {navigation.map((nav) => (
            <AnimatedButon key={nav.route} nav={nav} />
          ))}
          <ModeToggle />
        </div>
        <MobileNav />
      </header>
    </div>
  );
}
