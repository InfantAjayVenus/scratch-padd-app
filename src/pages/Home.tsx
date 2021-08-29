import React, { useState, useEffect } from "react";
import {FiSmile} from 'react-icons/fi';
import {Card} from '../components/Card';
import { Loader } from "../components/Loader/Loader";
import {getList} from "../utils/api";
import {Padd} from '../models/Padd'

interface HomeProps {}

export const Home = (props: HomeProps) => {
  const [list, setList] = useState<Padd[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getList()
    .then((data: Padd[]) => {
      setList(data);
      setIsLoading(false);
    }).catch(error => {
      console.error(error);
      setIsLoading(false);
    })
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <Loader />
        </div>
      )}

      {(!isLoading && list.length === 0) && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <FiSmile className="text-6xl font-thin text-paddBlueDark"/> 
          <h1 className="text-paddBlack text-center font-bold text-3xl">You haven't created any Padds yet</h1>
          <a href="#/new-padd" className="bg-paddBlueDark text-paddLight p-3 my-8 rounded font-bold">Create New Padd</a>
        </div>
      )}
      {list.length > 0 && list.map((item: Padd) => <Card paddData={item} redirectUrl="#"/>)}
    </>
  );
};
