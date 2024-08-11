"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/blog")}
      variant="ghost"
      className="w-fit p-0 flex gap-[2px] hover:bg-transparent text-muted-foreground hover:text-secondary-foreground"
    >
      <ChevronLeft className="scale-75" />
      Blog
    </Button>
  );
}
