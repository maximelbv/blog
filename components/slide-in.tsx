"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
