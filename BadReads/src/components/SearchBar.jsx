import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

import { Card } from "./Card";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  

  const searchBook = (event) => {
    
    if (event.key === "Enter") {

      const key ={'X-RapidAPI-Key':import.meta.env.VITE_SOME_KEY}
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key="+ key["X-RapidAPI-Key"] +
            "&maxResults=40"
        )
        .then((response) => setData(response.data.items))
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mb-10">
        <div
          id="search"
          className=" flex items-center justify-center bg-[#184D47] h-20 w-9/12 rounded-lg"
        >
          <FaSearch alt="Search" className="text-white mr-5 ml-9 text-3xl" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
            type="text"
            placeholder="Search..."
            className="font-inter mr-3 outline-none w-full bg-[#184D47] text-2xl text-white"
            value={search}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-auto items-center">
        <Card book={bookData} />
      </div>
    </>
  );
}

export default SearchBar;
