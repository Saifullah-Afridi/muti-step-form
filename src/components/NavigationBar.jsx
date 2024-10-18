import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaClosedCaptioning,
  FaCross,
  FaMagnifyingGlass,
  FaX,
} from "react-icons/fa6";
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
import { FaCut } from "react-icons/fa";
const NavigationBar = () => {
  const [openHam, setOpenHam] = useState();

  const handleOpenHamburgur = () => {
    setOpenHam(true);
    console.log("hello");
  };

  const handleCloseHamburger = () => {
    setOpenHam(false);
  };
  return (
    <header>
      <nav className="h-[60px] bg-green-300">
        <div className="w-[90%] mx-auto flex items-center  justify-between h-full ">
          <div className="  flex justify-between gap-1 items-center">
            <h2 className="text-3xl font-bold ">Logo</h2>
            <h2 className="text-3xl font-bold">PDMS</h2>
          </div>
          <div className="hidden md:flex justify-between gap-3 ">
            <NavLink to="#" className="p-2 text-lg hover:bg-green-500 ">
              Home
            </NavLink>
            <NavLink to="#" className="p-2 text-lg  hover:bg-green-500 ">
              About Us
            </NavLink>
            <NavLink to="#" className="p-2 text-lg    hover:bg-green-500">
              Contact Us
            </NavLink>
          </div>
          <div className="md:hidden p-2 ">
            <button className="text-3xl" onClick={handleOpenHamburgur}>
              <GiHamburgerMenu />
            </button>
            <div
              className={`fixed top-0 right-0 h-full w-1/3 bg-green-400 shadow-lg transform transition-transform  duration-300 ease-in-out ${
                openHam ? "translate-x-0" : "translate-x-full"
              } `}
            >
              <button
                className="ml-2 bg-red-200 p-1 "
                onClick={handleCloseHamburger}
                type="button"
              >
                <FaX />
              </button>
              <div>
                <div className=" flex justify-center gap-1 items-center">
                  <h2 className="text-2xl font-bold ">Logo</h2>
                  <h2 className="text-2xl font-bold">PDMS</h2>
                </div>
                <div className="flex flex-col gap-1  ">
                  <NavLink to="#" className="p-1 text-lg  hover:bg-green-600">
                    Home
                  </NavLink>
                  <NavLink to="#" className="p-1 text-lg  hover:bg-green-600">
                    About Us
                  </NavLink>
                  <NavLink to="#" className="p-1 text-lg    hover:bg-green-600">
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
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
