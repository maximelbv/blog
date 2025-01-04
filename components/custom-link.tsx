import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const CustomLink = ({
  href,
  children,
  isExternal,
  isDefaultColor,
  className,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  className?: string;
  isDefaultColor?: boolean;
}) => {
  return (
    <span className={`${className} mx-0.5 inline-flex items-center gap-0.5`}>
      <Link
        target={isExternal ? "_blank" : ""}
        href={href}
        className={`${
          isDefaultColor && "!text-foreground"
        } underline-offset-10 hover:underline no-underline text-link`}
      >
        {children}
      </Link>
      {isExternal && isDefaultColor && <Icons.arrowExternalLinkDefault />}
      {isExternal && !isDefaultColor && <Icons.arrowExternalLink />}
    </span>
  );
};

export default CustomLink;
