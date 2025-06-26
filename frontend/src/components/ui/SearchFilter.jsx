import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const SearchFilter = ({ keyword, onChange }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>
      {/* Search icon in navbar */}
      <div className="relative z-50 rounded px-2 py-2 md:bg-[#F5F5F5] flex items-center md:w-[284px] m-4">
        {/* Input for desktop/tab */}
        <input
          type="text"
          placeholder="What are you looking for?"
          value={keyword}
          onChange={onChange}
          className="hidden md:block outline-0 w-full bg-transparent"
        />

        <FiSearch
          className="text-xl cursor-pointer md:mr-2"
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        />
      </div>

      {/* Mobile full search input */}
      {showMobileSearch && (
        <div className="md:hidden w-full px-4 py-3 bg-[#F5F5F5] flex absolute top-[70px] left-0 z-40 transition-all duration-300">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={keyword}
            onChange={onChange}
            className="w-full px-4 py-2 outline-none rounded "
          />
          <IoIosClose
            className="absolute right-4 top-5 cursor-pointer text-4xl text-[#DB4444]"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          />
        </div>
      )}
    </>
  );
};

export default SearchFilter;
