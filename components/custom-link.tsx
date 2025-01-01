import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const CustomLink = ({
  href,
  children,
  isExternal,
  className,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}) => {
  return (
    <span className={`${className} mx-0.5 inline-flex items-center gap-0.5`}>
      <Link
        target={isExternal ? "_blank" : ""}
        href={href}
        className="underline-offset-10 hover:underline no-underline text-link"
      >
        {children}
      </Link>
      {isExternal && <Icons.arrowExternalLink />}
    </span>
  );
};

export default CustomLink;
