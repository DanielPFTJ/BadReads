import React, { useState } from "react";
import NoBook from "../assets/NoBook.jpg";
import BookInfo from "./BookInfo";
import { Checklength } from "./Checkreview";

export function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item, i) => {
        let id = item.id;
        let title = item.volumeInfo && item.volumeInfo.title;

        let imgURL =
          "https://books.google.com/books/publisher/content/images/frontcover/" +
          id +
          "?fife=w400-h600&source=gbs_api";

        let description = item.volumeInfo && item.volumeInfo.description;

        if (description !== undefined) {
          return (
            <>
            <div key={i}>
              <div
                className=" transition-transform hover:scale-105 text-gray-600 hover:bg-[#184D47] hover:text-white rounded-md hover:shadow-inner p-5 w-56 cursor-pointer "
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={imgURL}
                    onError={(e) => {
                      e.target.src = NoBook;
                    }}
                    alt={"Image not Available. "+ title}
                    className=" w-52 h-64 rounded-md shadow-md transform "
                  />
                  <Checklength name={title} />
                </div>
              </div>
              <BookInfo
                item={bookItem}
                show={show}
                onClose={() => setShow(false)}
                
              />
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
