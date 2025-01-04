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
        "my-6 items-start rounded-md p-3 w-full bg-blue-400/10 dark:bg-blue-500/20 font-medium text-blue-500 max-w-[750px] mx-auto text-[19px] leading-[1.8rem]",
        {
          " bg-green-400/10 dark:bg-green-300/10 text-green-500":
            type === "success",
          " bg-yellow-400/10 dark:bg-yellow-300/10 text-yellow-500":
            type === "warning",
          " bg-red-400/10 dark:bg-red-300/10 text-red-500": type === "danger",
        }
      )}
      {...props}
    >
      <div className="max-w-[750px] mx-auto">{children}</div>
    </div>
  );
}
