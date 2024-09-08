"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const textVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`${className} overflow-hidden`}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.2,
        ease: [0.17, 0.67, 0.1, 1],
        staggerChildren: 0.1,
        delay: delay,
      }}
    >
      {typeof text === "string" ? (
        text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={textVariants}
            style={{
              display: "inline-block",
              marginRight: "0.25em",
            }}
            transition={{
              duration: 1.2,
              ease: [0.17, 0.67, 0.1, 1],
              delay: delay,
            }}
          >
            {word}
          </motion.span>
        ))
      ) : (
        <motion.div
          variants={textVariants}
          transition={{
            duration: 1.2,
            ease: [0.83, -0.01, 0.09, 0.99],
            delay: delay,
          }}
        >
          {text}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedText;
