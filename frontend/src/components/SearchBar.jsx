"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { assets } from "../assests/assets";
import { ShopContext } from "../store/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("collection")) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [pathname, setShowSearch]);

  return showSearch ? (
    <div className="px-6 sm:px-22">
      <div className="border-t border-b bg-gray-50 py-3">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-3/4 sm:w-1/2 bg-white">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-sm"
              type="text"
              placeholder="Search"
            />

            <Image
              src={assets.search_icon}
              alt="search icon"
              width={15}
              height={15}
              className="cursor-pointer"
            />
          </div>

          <Image
            onClick={() => setShowSearch(false)}
            src={assets.cross_icon}
            alt="close icon"
            width={10}
            height={10}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
