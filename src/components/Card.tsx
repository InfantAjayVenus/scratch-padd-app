import React from 'react';
import {Padd} from '../models/Padd'
import {FiMaximize2, FiEdit2, FiTrash2} from 'react-icons/fi';

interface CardProps {
  redirectUrl: string,
  paddData: Padd
};

export const Card = (props: CardProps) => {
  return (
    <a href={props.redirectUrl} className="flex justify-between rounded shadow-xl border border-paddBlueLight my-4 px-2 py-4 lg:py-2">
      <h1 className="text-2xl font-bold max-w-prose">{props.paddData.title}</h1>
      <ul className="flex flex-col items-center justify-around border border-paddBlueLight rounded w-8 lg:flex-row lg:w-24">
        <li className="border-b border-paddBlueLight w-full text-center lg:border-0 lg:border-r"><button><FiMaximize2/></button></li>
        <li className="border-b border-paddBlueLight w-full text-center lg:border-0 lg:border-r"><button><FiEdit2/></button></li>
        <li className="text-center w-full bg-paddBlueLight text-paddRedAccent lg:h-full"><button><FiTrash2/></button></li>
      </ul>
    </a>
  )
}
