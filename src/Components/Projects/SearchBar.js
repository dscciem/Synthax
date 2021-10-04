import React from "react";
import SearchIcon from "./search.svg";

const SearchBar = () => {
  return (
    <div className="py-14 px-20 bg-gray-light">
      <div
        className="flex items-center rounded-full shadow-xl"
        style={{ backgroundColor: "#FFE8B6" }}
      >
        <input
          className="rounded-l-full w-full py-4 px-6 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          style={{ backgroundColor: "#FFE8B6" }}
        />

        <div className="p-4">
          <button className="rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
            <img src={SearchIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
