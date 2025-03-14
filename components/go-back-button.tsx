"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label: string;
  className?: string;
}

export function BackButton({ href, label, className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push(href)}
      variant="ghost"
      className={`${className} w-fit p-0 flex gap-[2px] hover:bg-transparent text-muted-foreground hover:text-secondary-foreground ml-[-6px] text-[16px]`}
    >
      <ChevronLeft className="scale-75" />
      {label}
    </Button>
  );
}
