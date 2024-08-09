"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="w-fit p-0 ml-[-5px] flex gap-1 hover:bg-transparent text-muted-foreground hover:text-secondary-foreground"
    >
      <ChevronLeft className="scale-90" />
      Blog
    </Button>
  );
}
