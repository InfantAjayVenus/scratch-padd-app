import React from "react";
import { Editor } from "../components/Editor";

interface NewPaddProps {}
export const NewPadd = (props: NewPaddProps) => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/padds`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        title: `Title@${Date.now()}`,
        content: `This content was created in ${new Date().toString()}`,
      }),
    });
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="w-full rounded bg-paddBlueDark text-paddBlueLight"
      >
        Post Notes
      </button>
      <Editor />
    </>
  );
};
