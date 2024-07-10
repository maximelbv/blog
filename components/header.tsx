import Link from "next/link";
import { navigation } from "@/config/navigation";
import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex w-full justify-between default-layout">
      <Link href="/">
        <Icons.logo />
      </Link>
      <div className="flex items-center justify-center">
        {navigation.map((nav) => (
          <Button key={nav.name} variant={"ghost"}>
            <Link href={nav.route}>{nav.name}</Link>
          </Button>
        ))}
        <ModeToggle />
      </div>

      <MobileNav />
    </header>
  );
}
