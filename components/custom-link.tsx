import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

const CustomLink = ({
  href,
  children,
  isExternal,
}: {
  href: string;
  children: React.ReactNode;
  isExternal: boolean;
}) => {
  return (
    <span className="mx-0.5 inline-flex items-center gap-0.5">
      <Link
        target={isExternal ? "_blank" : ""}
        href={href}
        className="underline-offset-10 hover:underline no-underline text-blue-500"
      >
        {children}
      </Link>
      {isExternal && <Icons.arrowExternalLink />}
    </span>
  );
};

export default CustomLink;
