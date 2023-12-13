import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import MainCards from "../../components/MainCards";
import Footer from "../../components/Footer";
import { HashLink } from 'react-router-hash-link';

export function Home() {
  return (
    <>
    
      <div className="fixed w-full z-20 top-0">
        <NavBar />
      </div>

      
      <div className="bg-[#96BB7C] mt-20 h-[550px] pt-10 pb-10 lg:h-96 flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="text-center lg:text-left pr-5 pl-5">
          <p className="font-inter font-semibold text-2xl md:text-3xl lg:text-4xl pl-5 pr-5 text-white tracking-tight">
            Dive into the vast universe of books waiting to be discovered!
          </p>
          <p className=" pl-5 pr-5 font-inter font-light text-lg md:text-xl lg:text-2xl text-white  pt-3 pb-6">
            Start your reading journey today!
          </p>
          <HashLink alt="Explore" smooth to='/#search' className="pl-5 pr-5 font-inter font-semibold md:text-lg text-xl text-[#184D47] pt-6" > Explore</HashLink>
        </div>
        <a href="https://badreads.netlify.app/" alt="Logo" className="hover:scale-105 transition-transform bg-[#C64756] shadow-lg w-60 h-60 p-16 lg:mr-5 rounded-full border-solid border-8 border-[#FAD586] flex flex-col justify-center items-center text-white">
          <span className="font-logo text-8xl pt-8 -mb-8 ">BR</span>
          <span className="font-logo text-2xl">BadReads</span>
        </a>
      </div>

      
      <MainCards/>
      <SearchBar/>
      <Footer/>


        
    </>
  );
}

export default Home;
