import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { Header } from "@/components/header";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dahliaLight = localFont({
  src: "../public/fonts/dahlia/dahlia-regular.otf",
  variable: "--font-dahlia-light",
});

const dahlia = localFont({
  src: "../public/fonts/dahlia/dahlia-medium.otf",
  variable: "--font-dahlia",
});

const dahliaBold = localFont({
  src: "../public/fonts/dahlia/dahlia-bold.otf",
  variable: "--font-dahlia-bold",
});

const gelica = localFont({
  src: "../public/fonts/gelica/regular.otf",
  variable: "--font-gelica",
});

const monoLisa = localFont({
  src: "../public/fonts/monoLisa/MonoLisaRegular.ttf",
  variable: "--font-monolisa",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[1.5rem]">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          gelica.variable,
          jakarta.variable,
          dahliaLight.variable,
          dahlia.variable,
          dahliaBold.variable,
          monoLisa.variable
        )}
      >
        <Providers>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-grow">{children}</main>
            <SiteFooter />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
