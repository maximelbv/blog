"use client";

import { motion } from "framer-motion";

const PopAnimWraper = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.17, 0.67, 0.1, 1],
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PopAnimWraper;
