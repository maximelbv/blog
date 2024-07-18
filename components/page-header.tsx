"use client";

import { motion } from "framer-motion";
interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div>
      <motion.div
        initial="initial"
        animate="animate"
        className="block relative overflow-hidden whitespace-nowrap"
      >
        <h1 className="block font-dahliaBold text-[80px] text-secondary-foreground">
          {title.split("").map((l, i) => {
            return (
              <motion.span
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
        </h1>
        <h1 className="block font-dahliaBold text-[80px] text-secondary-foreground absolute inset-0">
          {title.split("").map((l, i) => {
            return (
              <motion.span
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
        </h1>
      </motion.div>

      <span className="inline-block text-secondary-foreground max-w-[400px]">
        {subtitle}
      </span>
    </div>
  );
};

export default PageHeader;
