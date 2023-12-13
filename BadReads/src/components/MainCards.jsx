import React, { useState } from "react";

import { IoBookSharp } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import ShowText1, { ShowText2, ShowText3 } from "./ShowText";

export function MainCards() {
  const [activeText, setActiveText] = useState(true);

  const handleToggleText = () => {
    setActiveText(!activeText);
  };

  return (
    <div className="flex md:flex-row  flex-col justify-evenly items-center h-fit mt-20 mb-20 text-center">
      <div
        className={
          "w-11/12 md:w-3/12 flex flex-col items-center " +
          (activeText ? "animate-none" : "sm:animate-none md:animate-bounce")
        }
      >
        <span
          className={
            "relative z-10 items-center justify-center h-10 w-10 top-14 left-16 " +
            (activeText ? "hidden" : "flex")
          }
        >
          <span className="absolute inline-flex rounded-full h-10 w-10 bg-[#FAD586]"></span>
          <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#C64756] opacity-75"></span>
          <span className="relative z-10 inline-flex rounded-full h-5 w-5 bg-[#C64756]"></span>
        </span>

        <button
          onClick={handleToggleText}
          className="w-40 h-40 relative z-0 flex justify-center items-center rounded-full bg-[#FAD586]   hover:scale-105 transition-all hover:text-[#FAD586] text-[#C64756] hover:bg-[#C64756] "
        >
          <IoBookSharp alt="Book" className={"w-20 h-20 "} />
        </button>

        <ShowText1 show={activeText} />
      </div>

      <div className="bg-gray-500 h-56 w-1 rounded-xl hidden md:flex"></div>
      <div className={"bg-gray-500 h-1 w-3/12 rounded-xl flex md:hidden mt-7 "+ (activeText ? "mb-7":"-mb-2")}></div>

      <div
        className={
          "ww-11/12 md:w-3/12 flex flex-col items-center " +
          (activeText ? "animate-none" : "sm:animate-none md:animate-bounce-slow")
        }
      >
        <span
          className={
            "relative z-10 items-center justify-center h-10 w-10 top-14 left-16 " +
            (activeText ? "hidden" : "flex")
          }
        >
          <span className="absolute inline-flex rounded-full h-10 w-10 bg-[#FAD586]"></span>
          <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#C64756] opacity-75"></span>
          <span className="relative z-10 inline-flex rounded-full h-5 w-5 bg-[#C64756]"></span>
        </span>
        <button
          onClick={handleToggleText}
          className="bg-[#FAD586] w-40 h-40 flex justify-center items-center rounded-full  hover:scale-105 transition-all hover:text-[#FAD586] text-[#C64756] hover:bg-[#C64756]    "
        >
          <FaStar alt="Star" className={"w-20 h-20 "}/>
        </button>
        <ShowText2 show={activeText} />
        <br className="hidden md:flex"></br>
      </div>

      <div className="bg-gray-500 h-56 w-1 rounded-xl hidden md:flex"></div>
      <div className={"bg-gray-500 h-1 w-3/12 rounded-xl flex md:hidden mt-7 "+ (activeText ? "mb-7":"-mb-2")}></div>

      <div
        className={
          "w-11/12 md:w-3/12 flex flex-col  items-center " +
          (activeText ? "animate-none" : "sm:animate-none md:animate-bounce-slower")
        }
      >
        <span
          className={
            "relative z-10 items-center justify-center h-10 w-10 top-14 left-16 " +
            (activeText ? "hidden" : "flex")
          }
        >
          <span className="absolute inline-flex rounded-full h-10 w-10 bg-[#FAD586]"></span>
          <span className="animate-ping absolute inline-flex h-7 w-7 rounded-full bg-[#C64756] opacity-75"></span>
          <span className="relative z-10 inline-flex rounded-full h-5 w-5 bg-[#C64756]"></span>
        </span>
        <button
          onClick={handleToggleText}
          className="bg-[#FAD586] w-40 h-40 flex justify-center items-center rounded-full  hover:scale-105 transition-all hover:text-[#FAD586] text-[#C64756] hover:bg-[#C64756] "
        >
          <BiSearchAlt alt="Search" className={"w-20 h-20 "} />
        </button>
        <ShowText3 show={activeText} />
      </div>
    </div>
  );
}

export default MainCards;
