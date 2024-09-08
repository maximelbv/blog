"use client";
import { AnimatePresence } from "framer-motion";

const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default RootTemplate;
