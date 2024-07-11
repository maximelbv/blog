"use client";

import { useRouter } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="ghost"
      className="w-fit h-9 py-0 px-[10px] rounded-full bg-secondary"
    >
      <Icons.arrowBack />
    </Button>
  );
}
