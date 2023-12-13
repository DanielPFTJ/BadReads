import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Checkreview from "./Checkreview";

const BookInfo = ({ item, show, onClose }) => {
  if (!show) {
    return null;
  }

  let id = item.id;
  let title = item.volumeInfo && item.volumeInfo.title;
  let imgURL =
    "https://books.google.com/books/publisher/content/images/frontcover/" +
    id +
    "?fife=w400-h600&source=gbs_api";

  let review = item.volumeInfo.averageRating;

  return (
    <>
      <div className="flex justify-center items-center w-screen h-full fixed z-30 left-0 top-0 bottom-0 right-0 bg-opacity-5  bg-black ">
        <div className="flex flex-col bg-white w-11/12 h-5/6 m-6 overflow-scroll items-center  rounded-md p-7">
          <div className="w-full flex justify-center lg:justify-end">
            <button
              onClick={onClose}
              className="p-5 m-7 hover:scale-110 transition-transform shadow-lg hover:bg-[#C64756] hover:text-[#FAD586] bg-[#FAD586] rounded-full font-bold text-4xl text-[#C64756]"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center">
            <div className="flex flex-col rounded-md shadow-md bg-[#184D47] justify-center p-5 items-center w-3/12 min-w-max md:w-3/12">
              <img
                src={imgURL}
                onError={(e) => {
                  e.target.src = NoBook;
                }}
                alt={"Image not Available. " + title}
                className="w-56  md:w-[230px] md:h-[345px] rounded-md"
              />

              <Checkreview rev={review} />
            </div>

            <div className="flex flex-col items-center lg:items-start font-inter w-11/12 lg:w-8/12 pt-10 text-center lg:text-start lg:pl-10 lg:p-0">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide first-letter:capitalize">
                {title}
              </h2>
              <p className="pt-5  font-bold text-lg lg:text-xl">
                {"Author: " + item.volumeInfo.authors}
              </p>
              <p className="pt-2 pb-5 font-bold text-base md:text-lg lg:text-xl">
                {"Publication Date: " + item.volumeInfo.publishedDate}
              </p>
              <p className="pt-5 pb-5 font-light text-xl first-letter:capitalize ">
                {item.volumeInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
