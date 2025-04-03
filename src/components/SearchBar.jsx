import { IoSearchOutline } from "react-icons/io5";
import React from "react";

const SearchBar = ({ onSearch }) => {

  const handleSearch = (query) => {
    onSearch(query);
  };

  return (
    <div className="relative flex items-center w-full">
      <IoSearchOutline className="w-5 h-5 text-gray-500 absolute left-3" />
      <input
        type="text"
        placeholder="Search photos and illustrations"
        className="bg-gray-100 text-gray-800 pl-10 pr-4 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
