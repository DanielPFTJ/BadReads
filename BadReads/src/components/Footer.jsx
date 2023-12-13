import React from "react";

export function Footer() {
  return (
    <>
      <div className=" flex flex-col md:flex-row h-fit w-auto bg-[#184D47] p-10 text-center items-center justify-center">
        <a
          href="https://badreads.netlify.app/"
          alt="Logo"
          className="hover:scale-105 transition-transform bg-[#C64756] shadow-lg w-10 h-10 p-16  lg:mr-5 rounded-full border-solid border-8 border-[#FAD586] flex flex-col justify-center items-center text-white"
        >
          <span className="font-logo text-5xl pt-8 -mb-3">BR</span>
          <span className="font-logo text-lg pb-2.5">BadReads</span>
        </a>
        <p className="text-3xl p-5 text-[#FAD586] text-center font-logo">
          by Daniel Pedroza
        </p>
      </div>
    </>
  );
}

export default Footer;
