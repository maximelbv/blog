import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, formatDate } from "@/lib/utils";
import { Icons } from "./icons";

const categoryIcons = {
  figma: Icons.figma,
  react: Icons.react,
};

type Category = keyof typeof categoryIcons;

function isCategory(category: string): category is Category {
  return category in categoryIcons;
}

const postInfosVariants = cva(
  "flex items-center justify-start gap-4 mb-[-18px]",
  {
    variants: {
      variant: {
        small: "text-sm gap-2 mb-0",
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PostInfosProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof postInfosVariants> {
  category: string;
  date: string;
}

function PostInfos({
  className,
  variant = "default",
  category,
  date,
  ...props
}: PostInfosProps) {
  const lowerCat = category.toLowerCase();
  const CategoryIcon = isCategory(lowerCat) ? categoryIcons[lowerCat] : null;

  return (
    <div className={cn(postInfosVariants({ variant }), className)} {...props}>
      <div className="flex items-center justify-center gap-2.5">
        {CategoryIcon && <CategoryIcon />}
        <span className="uppercase font-semibold tracking-[7px]">
          {lowerCat}
        </span>
      </div>

      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
      <span className="text-muted-foreground flex gap-1">
        <span className="hidden sm:block whitespace-nowrap">
          last updated :{" "}
        </span>
        <strong className="text-muted-foreground whitespace-nowrap">
          {formatDate(date)}
        </strong>
      </span>
    </div>
  );
}

export default PostInfos;
