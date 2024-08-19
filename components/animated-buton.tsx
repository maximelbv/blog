"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

interface AnimatedButonProps {
  nav: {
    route: string;
    name: string;
  };
  className?: string;
  duration?: number;
  stagger?: number;
  ease?: number[] | string;
}

const AnimatedButon = ({
  nav,
  className,
  duration = 0.55,
  stagger = 0.019,
  ease = [0.73, -0.01, 0.01, 1],
}: AnimatedButonProps) => {
  return (
    <Link href={nav.route}>
      <motion.div key={nav.name} initial="initial" whileHover="animate">
        <Button variant={"ghost"} className={className}>
          <div className="block relative overflow-hidden whitespace-nowrap">
            <span className="block w-fit">
              {nav.name.split("").map((l, i) => {
                return (
                  <motion.span
                    style={{ width: l === " " ? "0.3em" : "auto" }}
                    key={i}
                    className="inline-block"
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
                    className="inline-block"
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
