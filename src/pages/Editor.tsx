import React, {useCallback, useState} from "react";
import { motion } from "framer-motion";

interface EditorProps {}


export const Editor = (props: EditorProps) => {
  const [content, setContent] = useState('');
  const autoResizeHeight = useCallback((e) => {
    e.target.style.height = e.target.scrollHeight + 'px';
  }, [content]);

  return (
    <motion.main
      key="page.editor"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.7,
      }}
      className="h-full w-full"
    >
      <textarea
        className="p-2 rounded outline-none border-0 w-full max-h-full bg-paddBlueLight"
        placeholder="Write your notes here"
        onInput={autoResizeHeight}
        onChange={e => setContent.bind(this, e.target.value)}
      />
      <ul className="fixed bottom-0 bg-paddBlack h-4 w-full"></ul>
    </motion.main>
  );
};
