"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

interface AnimatedButonProps {
  nav: {
    route: string;
    name: string;
    filled?: boolean;
  };
  className?: string;
  duration?: number;
  stagger?: number;
  ease?: number[] | string;
  icon?: React.ReactElement;
}

const AnimatedButon = ({
  nav,
  className,
  duration = 0.55,
  stagger = 0.019,
  ease = [0.73, -0.01, 0.01, 1],
  icon,
}: AnimatedButonProps) => {
  return (
    <Link href={nav.route}>
      <motion.div key={nav.name} initial="initial" whileHover="animate">
        <Button
          variant={"ghost"}
          className={`${className} ${
            nav.filled &&
            "font-semibold text-background hover:text-background bg-foreground rounded-full hover:bg-foreground"
          }`}
        >
          {icon && icon}
          <div className="block relative overflow-hidden whitespace-nowrap">
            <span className="block w-fit">
              {nav.name.split("").map((l, i) => {
                return (
                  <motion.span
                    style={{ width: l === " " ? "0.3em" : "auto" }}
                    key={i}
                    className="inline-block text-[16px]"
                    variants={{
                      initial: { y: 0 },
                      animate: { y: "-100%" },
                    }}
                    transition={{
                      duration: duration,
                      ease: ease,
                      delay: stagger * i,
                    }}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </span>
            <span className="block absolute inset-0 w-fit">
              {nav.name.split("").map((l, i) => {
                return (
                  <motion.span
                    style={{ width: l === " " ? "0.3em" : "auto" }}
                    key={i}
                    className="inline-block text-[16px]"
                    variants={{
                      initial: { y: "100%" },
                      animate: { y: 0 },
                    }}
                    transition={{
                      duration: duration,
                      ease: ease,
                      delay: stagger * i,
                    }}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </span>
          </div>
        </Button>
      </motion.div>
    </Link>
  );
};

export default AnimatedButon;
