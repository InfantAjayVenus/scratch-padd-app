import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <section className="flex flex-row-reverse items-center justify-between fixed bottom-1 bg-paddBlueDark text-paddLight h-12 w-11/12 mx-auto inset-x-0 rounded-md md:w-8/12 md:h-10 lg:mx-0 lg:flex-col lg:h-full lg:w-12 lg:left-0 overflow-hidden box-border p-1 ">
      <nav className="flex flex-row-reverse justify-between items-center h-full bg-paddBlueDark text-paddLight lg:flex-col lg:justify-start lg:h-2/3 lg:w-full overflow-hidden box-border">
        <NavLink
          exact
          to="/"
          className="flex items-center justify-center text-white text-2xl transition-all duration-500 h-full w-12 md:w-14 lg:w-full lg:h-10 lg:mx-0 lg:my-2 rounded"
          activeClassName="bg-paddBlueLight text-paddBlueDark"
        >
          <FiHome />
        </NavLink>
        <NavLink
          to="/new-padd"
          className="flex items-center justify-center text-white text-2xl transition-all duration-500 h-full w-12 mr-2 md:w-14 lg:w-full lg:h-10 lg:mx-0 lg:my-2 rounded"
          activeClassName="bg-paddBlueLight text-paddBlueDark"
        >
          <FiPlusCircle />
        </NavLink>
      </nav>
      <ul></ul>
    </section>
  );
};
