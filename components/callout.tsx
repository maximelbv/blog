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
        "my-6 items-start rounded-md border boder-l-4 p-4 w-full dark:max-w-none bg-secondary text-primary-foreground font-medium ",
        {
          "border-green-800/50 bg-green-50 dark:bg-green-50/10 text-green-600":
            type === "success",
          "border-yellow-800/50 bg-yellow-50 dark:bg-yellow-50/10 text-yellow-600":
            type === "warning",
          "border-red-800/50 bg-red-50 dark:bg-red-50/10 text-red-600":
            type === "danger",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
