import React from "react";
import { FaStar } from "react-icons/fa";

export function Checkreview({ rev }) {
    let badrev = Math.round(5-rev);
    
    return (
    <>
      {rev ? (
        <>
            
          <div className="flex text-2xl text-center md:text-4xl p-5 pb-2">
            {Array.from({ length: rev }, (_, i) => (
              <span key={i}>
                <FaStar className="text-yellow-500 sm:m-1.5 md:m-2" />
              </span>
            ))}
            {Array.from({ length: badrev }, (_, i) => (
              <span key={i}>
                <FaStar className="text-green-950 sm:m-1.5 md:m-2" />
              </span>
            ))}
          </div>
          <p className="font-inter text-xl md:text-2xl  tracking-wider text-white font-bold">
            Rating: {Math.floor(rev)}
          </p>
        </>
      ) : (
        <p className="font-inter text-xl text-center md:text-2xl p-5 font-bold text-white ">
          Review Not Available
        </p>
      )}
    </>
  );
}

export function Checklength({ name }) {
  if (name.length <= 34) {
    return <p className="font-inter font-normal pt-2 text-center">{name}</p>;
  } else {
    name = name.slice(0, 30);
    name = name + " ...";
    return <p className="font-inter font-medium pt-2 text-center">{name}</p>;
  }
}

export default Checkreview;
