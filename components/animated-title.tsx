"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className }) => {
  const letterDelay = 0.05;

  return (
    <div className={className} style={{ display: "flex", overflow: "hidden" }}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -10, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: index * letterDelay,
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
          }}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
