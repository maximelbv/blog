"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: number[];
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 1.2,
  ease = [0.17, 0.67, 0.1, 1],
}) => {
  const containerVariants = {
    initial: {},
    animate: {},
  };

  const itemVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`${className} overflow-hidden`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{
        delay: delay,
      }}
    >
      <motion.div
        variants={itemVariants}
        transition={{
          duration,
          ease,
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedElement;
