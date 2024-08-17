"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const GoBlogButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/blog")}
      className="!bg-blue-500 !rounded-full !text-[#fff]"
    >
      View all
    </Button>
  );
};

export default GoBlogButton;
