import { Icons } from "./icons";
import Link from "next/link";
import { socials } from "@/config/socials";

export function SiteFooter() {
  return (
    <footer className="w-full bg-none z-50 flex-shrink-0">
      <div className="default-layout px-5 py-10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-16">
        <div className="flex flex-col gap-1 items-center sm:items-start ">
          <div className="scale-75 sm:ml-[-15px]">
            <Icons.logoMonochrome />
          </div>
          <div className="!text-center">
            <span className="text-foregroundAlt text-[15px] font-medium">
              © Copyright Maxime Lefebvre {new Date().getFullYear()}
            </span>
          </div>
        </div>
        <div className="flex gap-6">
          {socials &&
            socials.map((social) => (
              <Link key={social.name} target="_blank" href={social.route}>
                <social.icon />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
