"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SmoothScrolling } from "./smooth-scrolling";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScrolling>{children}</SmoothScrolling>
    </ThemeProvider>
  );
}
