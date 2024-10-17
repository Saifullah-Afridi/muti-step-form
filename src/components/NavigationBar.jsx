import React from "react";
import { NavLink } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
const NavigationBar = () => {
  return (
    <header>
      <nav className="h-[60px] bg-green-300">
        <div className="w-[90%] mx-auto flex items-center  justify-between h-full ">
          <div className="  flex justify-between gap-1 items-center">
            <h2 className="text-3xl font-bold ">Logo</h2>
            <h2 className="text-3xl font-bold">PDMS</h2>
          </div>
          <div className="hidden md:flex justify-between gap-3 ">
            <NavLink to="#" className="p-2 text-lg">
              Home
            </NavLink>
            <NavLink to="#" className="p-2 text-lg">
              About Us
            </NavLink>
            <NavLink to="#" className="p-2 text-lg  ">
              Contact Us
            </NavLink>
          </div>
          <div className="md:hidden p-2 ">
            <button className="text-3xl">
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="hidden md:block">
            <form>
              <div className="border-2 p-2 rounded-md ">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none h-8"
                />
                <button className="text-gray-500">
                  <FaMagnifyingGlass />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
