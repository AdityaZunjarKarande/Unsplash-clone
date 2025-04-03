import React from "react";
import { useDispatch } from "react-redux";
import { BsBellFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";

import SearchBar from "./SearchBar";
import { fetchImages } from "../redux/unsplashSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  let debounceTimer;

  const handleSearch = (query) => {
    const debounceTimeout = 500;

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
  		dispatch(fetchImages(query));
    }, debounceTimeout);
  };

  return (
    <nav className="sticky top-0 bg-white text-gray-800 px-4 py-3 flex flex-col items-center gap-4 shadow-md">
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-4 flex-grow">
					<img src={logo} alt="Logo" className="w-8 h-8" />
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-sm font-medium cursor-pointer hover:text-black">
            Get Unsplash+
          </span>
          <button className="hidden md:block border border-gray-500 text-gray-500 font-semibold px-3 py-2 rounded-lg text-sm hover:border-gray-800 hover:text-black transition duration-200 ease-in-out">
            Submit an image
          </button>

          <BsBellFill className="hidden md:block w-6 h-6 text-gray-500 cursor-pointer hover:text-black transition duration-200 ease-in-out" />

          <span className="bg-gray-200 rounded-full p-1.5 text-gray-500 cursor-pointer">
            <FaUserLarge className="w-5 h-5" />
          </span>

          <GiHamburgerMenu className="w-6 h-6 text-gray-500  cursor-pointer hover:text-black transition duration-200 ease-in-out" />
        </div>
      </div>

      <div className="w-full flex gap-6 text-sm font-medium hidden-scrollbar overflow-x-auto whitespace-nowrap">
        <span className="cursor-pointer hover:text-black">Photos</span>
        <span className="cursor-pointer hover:text-black">Illustrations</span>
        <span className="cursor-pointer hover:text-black">Unsplash+</span>
        <span className="cursor-pointer hover:text-black">Wallpapers</span>
        <span className="cursor-pointer hover:text-black">Nature</span>
        <span className="cursor-pointer hover:text-black">3D Renders</span>
        <span className="cursor-pointer hover:text-black">Textures</span>
        <span className="cursor-pointer hover:text-black">
          Architecture & Interiors
        </span>
        <span className="cursor-pointer hover:text-black">Travel</span>
        <span className="cursor-pointer hover:text-black">Film</span>
        <span className="cursor-pointer hover:text-black">
          Street Photography
        </span>
        <span className="cursor-pointer hover:text-black">People</span>
        <span className="cursor-pointer hover:text-black">Animals</span>
        <span className="cursor-pointer hover:text-black">Experimental</span>
        <span className="cursor-pointer hover:text-black">
          Fashion & Beauty
        </span>
        <span className="cursor-pointer hover:text-black">Travel</span>
        <span className="cursor-pointer hover:text-black">Film</span>
        <span className="cursor-pointer hover:text-black">
          Street Photography
        </span>
        <span className="cursor-pointer hover:text-black">People</span>
        <span className="cursor-pointer hover:text-black">Animals</span>
        <span className="cursor-pointer hover:text-black">Experimental</span>
        <span className="cursor-pointer hover:text-black">
          Fashion & Beauty
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
