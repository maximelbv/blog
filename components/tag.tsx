import { badgeVariants } from "./ui/badge";
import { Button } from "./ui/button";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Button
      className={badgeVariants({
        variant: current ? "default" : "secondary",
      })}
    >
      #{tag} {count ? `(${count})` : null}
    </Button>
  );
}
