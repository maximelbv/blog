import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <div
      className="relative h-[800px]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <footer className=" flex items-end p-10 bg-primary h-[800px] fixed w-full bottom-0">
        <span className="text-white font-extrabold text-9xl">
          Maxime Lefebvre
        </span>
      </footer>
    </div>
  );
}
