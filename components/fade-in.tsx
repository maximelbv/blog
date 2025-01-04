"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className,
  once = true,
  threshold = 0.1,
  duration = 1,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration, delay }}
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
