"use client";

import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggleAlt = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup.Root
      className="flex w-full rounded-lg p-4"
      type="single"
      defaultValue={theme}
      aria-label="Light theme"
      onValueChange={(value) => setTheme(value)}
    >
      <ToggleGroup.Item
        className="w-[50%] h-16 flex items-center justify-center bg-muted/75 hover:bg-muted data-[state=on]:bg-primary text-primary-foreground rounded-l-lg"
        value="light"
        aria-label="Light theme"
      >
        <Sun className="h-[30px] w-[30px]" />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="w-[50%] h-16 flex items-center justify-center bg-muted/75 hover:bg-muted data-[state=on]:bg-primary text-primary-foreground rounded-r-lg"
        value="dark"
        aria-label="Dark theme"
      >
        <Moon className="absolute h-[30px] w-[30px]" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
export default ModeToggleAlt;
