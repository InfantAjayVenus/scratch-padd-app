<<<<<<< HEAD
import React, { useState } from "react";
import className from "classnames";
import { Padd } from "../models/Padd";
import {
  FiChevronDown,
  FiChevronUp,
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
=======
import React, {useEffect, useRef} from "react";
import className from "classnames";
import { Padd } from "../models/Padd";
import 'long-press-event';
>>>>>>> 4720011 (WIP [home] feat: Fetch and List)

interface CardProps {
  redirectUrl: string;
  paddData: Padd;
}

export const Card = (props: CardProps) => {
<<<<<<< HEAD
  const [isSelected, setIsSelected] = useState(false);
  return (
    <li className=" my-1">
      <article
        className={className(
          "flex flex-col relative justify-between border border-paddBlueLight bg-paddLight px-2 py-4 lg:py-2 transition-all duration-500",
          {
            rounded: !isSelected,
            "rounded-t": isSelected
          }
        )}
      >
        <button
          className={className("absolute right-0 top-0 w-8 h-8 p-1 m-2")}
          onClick={setIsSelected.bind(this, !isSelected)}
        >
          {isSelected ? (
            <FiChevronUp className="w-full h-full" />
          ) : (
            <FiChevronDown className="w-full h-full" />
          )}
        </button>
        <h1 className="text-2xl font-bold max-w-prose">
          {props.paddData.title}
        </h1>
        <p className="max-w-prose">{props.paddData.description}</p>
      </article>
      <ul
        className={className(
          "relative flex block w-full bg-paddBlueLight items-center justify-around border border-paddBlueLight rounded-b lg:w-24 transform transition-transform duration-500 -z-1",
          {
            "-translate-y-full": !isSelected,
            "translate-y-0": isSelected
          }
        )}
      >
        <li key="preview" className="h-full w-full text-center">
          <button>
            <FiEye />
          </button>
        </li>
        <li key="editor" className="h-full w-full text-center">
          <button>
            <FiEdit2 />
          </button>
        </li>
        <li key="delete" className="h-full w-full text-center">
          <button>
            <FiTrash2 />
          </button>
        </li>
      </ul>
=======
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if(rootRef.current){
      rootRef.current.addEventListener("long-press", (e) => console.log('long-presses', e))
    }
  }, [rootRef])

  return (
    <li className=" mb-1" ref={rootRef}>
      <article
        className={className(
          "flex flex-col relative justify-between border border-paddBlueLight rounded bg-white hover:bg-paddLight px-2 pt-4 pb-2 lg:py-2 transition-all duration-500",
        )}
      >
        <h1 className="text-xl font-bold max-w-prose">
          {props.paddData.title}
        </h1>
        <p className="max-w-prose text-xs text-paddBlueSecondary">{props.paddData.description}</p>
      </article>
>>>>>>> 4720011 (WIP [home] feat: Fetch and List)
    </li>
  );
};
