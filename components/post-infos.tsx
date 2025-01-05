import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn, formatDate } from "@/lib/utils";
import { Icons } from "./icons";

const categoryIcons = {
  html: Icons.html,
  javascript: Icons.javascript,
  typescript: Icons.typescript,
  threejs: Icons.threejs,
  git: Icons.git,
  nestjs: Icons.nestjs,
  nextjs: Icons.nextjs,
  docker: Icons.docker,
  python: Icons.python,
  blender: Icons.blender,
  nodejs: Icons.nodejs,
  unreal: Icons.unreal,
  tools: Icons.tools,
  computerGraphics: Icons.computerGraphics,
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
  date?: string;
}

function PostInfos({
  className,
  variant = "default",
  category,
  date,
  ...props
}: PostInfosProps) {
  const formatedCategoryString = category
    .toLowerCase()
    .replace(/ (\w)/g, (_, c) => c.toUpperCase());
  const CategoryIcon = isCategory(formatedCategoryString)
    ? categoryIcons[formatedCategoryString]
    : null;
  return (
    <div
      className={cn(postInfosVariants({ variant }), className, "gap-2")}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {CategoryIcon && <CategoryIcon />}
        <span className="uppercase text-foregroundAlt font-semibold tracking-[1px]">
          {category}
        </span>
      </div>
      {date && (
        <>
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
          <span className="text-muted-foreground flex gap-1">
            <span className="text-muted-foreground whitespace-nowrap">
              {formatDate(date)}
            </span>
          </span>
        </>
      )}
    </div>
  );
}

export default PostInfos;
