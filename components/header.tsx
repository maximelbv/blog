import { navigation } from "@/config/navigation";
import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import AnimatedButon from "./animated-buton";

export function Header() {
  return (
    <>
      <header className="flex w-full justify-between default-layout px-5 pb-5 pt-7">
        <Link href="/" className="flex items-center">
          <Icons.logo />
        </Link>
        <div className="hidden sm:flex items-center justify-center">
          {navigation.map((nav) => (
            <AnimatedButon key={nav.route} nav={nav} />
          ))}
          <ModeToggle />
        </div>
        <MobileNav />
      </header>
      {/* <div className="h-[.5px] w-full bg-muted-foreground px-5 default-layout max-w-[1187px]"></div> */}
      {/* <hr className="m-0" /> */}
    </>
  );
}
