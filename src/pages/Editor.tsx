import React from "react";
import { motion } from "framer-motion";

interface EditorProps {}
export const Editor = (props: EditorProps) => {
  return (
    <motion.main
      key="page.editor"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.7,
      }}
    >
      Editor
    </motion.main>
  );
};
