import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiPlusCircle } from "react-icons/fi";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <section className="flex flex-row-reverse items-center justify-between absolute bottom-0 bg-paddBlueDark text-paddLight h-12 w-full md:h-10 lg:flex-col lg:h-full lg:w-12 lg:left-0 lg:top-10">
      <nav className="flex flex-row-reverse justify-between items-center h-full max-w-2/3 bg-paddBlueDark text-paddLight lg:flex-col lg:justify-start lg:h-2/3 lg:w-full">
        <NavLink
          exact
          to="/"
          className="flex items-center justify-center text-white text-2xl transition-all duration-500 h-full w-12 mr-2 md:w-14 lg:w-12 lg:h-12 lg:m-0 "
          activeClassName="bg-paddBlueLight text-paddBlueDark"
        >
          <FiHome />
        </NavLink>
        <NavLink
          to="/new-padd"
          className="flex items-center justify-center text-white text-2xl transition-all duration-500 h-full w-12 mr-2 md:w-14 lg:w-12 lg:h-12 lg:m-0 "
          activeClassName="bg-paddBlueLight text-paddBlueDark"
        >
          <FiPlusCircle />
        </NavLink>
      </nav>
      <ul></ul>
    </section>
  );
};
