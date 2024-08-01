import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
  children?: ReactNode;
  type?: "default" | "success" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border boder-l-4 p-4 w-full dark:max-w-none bg-secondary text-secondary-foreground/70 font-medium ",
        {
          " bg-green-50 dark:bg-green-300/10 text-green-500":
            type === "success",
          " bg-yellow-50 dark:bg-yellow-300/10 text-yellow-500":
            type === "warning",
          " bg-red-50 dark:bg-red-300/10 text-red-500": type === "danger",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
