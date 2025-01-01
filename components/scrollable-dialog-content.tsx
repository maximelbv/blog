"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

export default function ScrollableDialogContent({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <DialogContent
      className={`${className} h-[90svh] md:max-h-[80svh] min-w-[100svw] md:min-w-[600px] mx-auto overflow-y-auto pointer-events-auto !p-0`}
    >
      <DialogHeader className="!text-start relative">
        <DialogTitle className="flex items-end justify-start !m-0 sticky top-0 left-0 bg-background p-[20px]">
          <span className="text-[26px]">{title}</span>
        </DialogTitle>
        <div
          className="max-h-[80vh] p-[20px] pt-0 !mt-0"
          onWheel={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
