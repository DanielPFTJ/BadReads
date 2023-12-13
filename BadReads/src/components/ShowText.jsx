import React from "react";

export function ShowText1({ show }) {
  return (
    <>
      {show ? (
        <>
          <p className="pt-5 font-inter text-xl font-light w-11/12  lg:w-80 md:text-base pb-0 p-2">
            Join the exploration of captivating stories and endless knowledge as
            you embark on a delightful quest for your next favorite book!
          </p>
        </>
      ) : (
        <p className="hidden"></p>
      )}
    </>
  );
}

export function ShowText2({ show }) {
  return (
    <>
      {show ? (
        <>
          <p className="pt-5 font-inter text-xl font-light w-11/12 lg:w-80 md:text-base pb-0 p-2">
            Type the title of your book into the search bar to access reviews
            from readers.
          </p>
        </>
      ) : (
        <p className="hidden"></p>
      )}
    </>
  );
}

export function ShowText3({ show }) {
  return (
    <>
      {show ? (
        <>
          <p className="pt-5 font-inter text-xl font-light w-11/12 lg:w-80 md:text-base pb-0 p-2">
            Our search engine utilizes Google's Books API to deliver accurate
            and efficient results!
          </p>
          <a
          className="text-[#C64756] font-inter font-bold transition-transform hover:scale-105"
          href="https://developers.google.com/books?hl=en"
        >
          Learn more...
        </a>
        </>
      ) : (
        <p className="hidden"></p>
      )}
    </>
  );
}

export default ShowText1;
