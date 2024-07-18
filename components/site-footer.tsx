import { Icons } from "./icons";
import Link from "next/link";
import { socials } from "@/config/socials";

export function SiteFooter() {
  return (
    <div
      className="relative h-[415px] md:h-[200px]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <footer className="fixed w-full bottom-0 bg-secondary">
        <div className="default-layout px-5 py-[50px] md:mb-0 mb-[100px] flex items-center justify-between flex-col gap-5 md:flex-row md:items-end md:gap-0">
          <div className="flex items-center justify-center gap-3">
            <Icons.logoFooter />
            <div className="grid font-bold text-primary text-[20px]">
              <span>© {new Date().getFullYear()}</span>
              <span>Maxime Lefebvre</span>
            </div>
          </div>
          <div className="flex gap-7 items-center justify-center m-0 scale-[85%]">
            {socials.map((Social) => (
              <Link key={Social.name} target="_blank" href={Social.route}>
                <Social.icon />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
