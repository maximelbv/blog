"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { navigation } from "@/config/navigation";

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className="font-semibold text-xl p-5 rounded-md hover:bg-secondary"
      {...props}
    >
      <div className="">{children}</div>
    </Link>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-full w-[60px] h-[60px] px-0 sm:hidden"
        >
          <Icons.burgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="rounded-t-xl grid gap-2">
        <MobileLink onOpenChange={setOpen} href={"/"}>
          Home
        </MobileLink>
        {navigation.map((nav) => (
          <MobileLink onOpenChange={setOpen} href={nav.route} key={nav.route}>
            {nav.name}
          </MobileLink>
        ))}
      </SheetContent>
    </Sheet>
  );
}
