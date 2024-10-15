import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Accordian = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mt-5">
      <div className="w-1/2 mx-auto ">
        <div
          className="flex justify-between items-center bg-gray-200 p-2 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <h4 className="text-lg font-medium  ">
            How to become a web developer
          </h4>
          {toggle === false && <FaAngleDown />}
          {toggle === true && <FaAngleUp />}
        </div>
        {toggle && (
          <p className="text-md bg-gray-100 p-2">
            Lorem ipsum dolor sit amet consectetur, adipisic Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Debitis, aperiam! ing elit.
            Vero expedita voluptatem quos velit excepturi modi asperiores ea
            quia enim eveniet?
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordian;
