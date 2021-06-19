import React from "react";
import { motion } from "framer-motion";

interface HomeProps {}

export const Home = (props: HomeProps) => {
  return (
    <motion.main
      key="page.home"
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%" }}
      transition={{
        duration: 0.7,
      }}
    >
      Home
    </motion.main>
  );
};
