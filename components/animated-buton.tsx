"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

interface AnimatedButonProps {
  nav: {
    route: string;
    name: string;
  };
}

const DURATION = 0.25;
const STAGGER = 0.02;

const AnimatedButon = ({ nav }: AnimatedButonProps) => {
  return (
    <Link href={nav.route}>
      <motion.div key={nav.name} initial="initial" whileHover="animate">
        <Button variant={"ghost"}>
          <Link
            href={nav.route}
            className="block relative overflow-hidden whitespace-nowrap w-fit"
          >
            <span className="block w-fit">
              {nav.name.split("").map((l, i) => {
                return (
                  <motion.span
                    style={{ width: l === " " ? "0.5em" : "auto" }}
                    key={i}
                    className="inline-block"
                    variants={{
                      initial: { y: 0 },
                      animate: { y: "-100%" },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
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
                    style={{ width: l === " " ? "0.5em" : "auto" }}
                    key={i}
                    className="inline-block"
                    variants={{
                      initial: { y: "100%" },
                      animate: { y: 0 },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
                    }}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </span>
          </Link>
        </Button>
      </motion.div>
    </Link>
  );
};

export default AnimatedButon;
