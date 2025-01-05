"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className,
  duration = 1,
}) => {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
