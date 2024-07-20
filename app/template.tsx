"use client";
import { AnimatePresence, motion } from "framer-motion";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default RootTemplate;
