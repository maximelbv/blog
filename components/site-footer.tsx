import { Icons } from "./icons";
import Link from "next/link";
import { socials } from "@/config/socials";
import { navigation } from "@/config/navigation";
import { Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <div
      className="relative h-[415px] md:h-[284px]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <footer className="fixed w-full bottom-0">
        {/* <div className="default-layout px-5 py-[50px] md:mb-0 mb-[100px] flex items-center justify-between flex-col gap-5 md:flex-row md:items-end md:gap-0">
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
        </div> */}
        <div className="default-layout px-5 py-10 flex flex-col-reverse sm:flex-row justify-between gap-16">
          <div className="flex flex-col items-center sm:items-start sm: justify-between gap-8 w-fill-available">
            <div className="flex flex-col gap-1">
              <div className="scale-75 ml-[-5px] sm:ml-[-25px]">
                <Icons.logo />
              </div>
              <div className="max-w-[200px] sm:text-center">
                <span className="text-foregroundAlt text-[15px] font-semibold">
                  Personnal blog & portfolio
                </span>
              </div>
            </div>
            {/* <div className="w-full h-[200px] p-5 rounded-lg border-[1px] border-dotted border-border">
              <span className="font-dahlia text-[20px]">Contact</span>
              <form action="post" className="flex flex-col gap-3">
                <input placeholder="Email" className="p-2 rounded-lg" />
                <textarea placeholder="Subject" className="p-2 rounded-lg" />
              </form>
            </div> */}
            {/* <div className="flex gap-1 ml-[-5px]">
              <Mail className="scale-[60%] stroke-foregroundAlt" />
              <Link
                className="text-[15px] text-foregroundAlt hover:underline"
                href="mailto:lefebvremaxime00@gmail.com"
              >
                lefebvremaxime00@gmail.com
              </Link>
            </div> */}
            <div>
              <span className="font-light text-[14px] text-foregroundAlt">
                © Copyright Maxime Lefebvre 2024
              </span>
            </div>
          </div>
          <div className="flex gap-20 justify-center sm:justify-start">
            <div className="flex flex-col gap-2 text-[15px]">
              <span className="text-foregroundAlt mb-1 text-center sm:text-start">
                SITEMAP
              </span>
              {navigation.map((nav) => (
                <Link
                  className="hover:underline text-center sm:text-start"
                  href={nav.route}
                  key={nav.route}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-[15px]">
              <span className="text-foregroundAlt mb-1 text-center sm:text-start">
                SOCIALS
              </span>
              {socials.map((social) => (
                <Link
                  className="hover:underline text-center sm:text-start"
                  href={social.route}
                  key={social.route}
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
