"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { assets } from "../assests/assets.js";
import Image from "next/image";
import { useContext } from "react";
import { ShopContext } from "../store/ShopContext.jsx";
export default function Header() {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between px-4 sm:px-8 lg:px-24 py-4 text-gray-600 font-semibold max-w-7xl mx-auto">
      <div className="">
        <Image
          // onClick={() => setShowSearch(true)}
          src="/logo1.png"
          alt="Logo Image"
          width={100}
          height={200}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden sm:flex gap-6 cursor-pointer text-sm">
        <Link href = "/">
        <div>HOME</div>
        </Link>
        <Link href = "/collection">
        <div>COLLECTION</div>
        </Link>
        <Link href = "/about">
        <div>ABOUT</div>
        </Link>
          <Link href = "/contact">
        <div>CONTACT</div>
        </Link>
      </div>
      <div className="flex gap-4 sm:gap-5 items-center text-xl">
        <Image
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Hero Image"
          width={15}
          height={15}
          className="cursor-pointer"
        />
        {/* PROFILE */}
        <div className="relative group">
          <Image
            src={assets.profile_icon}
            alt="Hero Image"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <div className="absolute right-0 mt-2 rounded group-hover:block hidden">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-normal">
                My Profile
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-normal">
                Orders
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-normal">
                Logout
              </p>
            </div>
          </div>
        </div>

        {/* CART */}
        <Link href="/cart" className="relative">
          <Image
            src={assets.cart_icon}
            alt="cart_icon"
            width={15}
            height={15}
            className="cursor-pointer"
          />
          <p className="absolute -top-1 -right-1 w-4 h-4 text-center leading-4 bg-black text-white rounded-full text-[10px]">
           {getCartCount}
          </p>
        </Link>

        {/* MOBILE MENU ICON */}
        <div className="sm:hidden">
          <IoIosMenu
            onClick={() => setVisible(true)}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 ${
          visible ? "w-full sm:w-80" : "w-0"
        }`}
      >
        {/* sidebar content */}
       <div className="flex flex-col text-gray-600 p-5">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 text-xl cursor-pointer"
          >
            <div className="rotate-180 mt-2">
              <IoIosArrowForward />
            </div>
            <p className="mt-2">Back</p>
          </div>
          <Link
            href="/"
            onClick={() => setVisible(false)}
            className="border-b border-gray-200 px-4 py-3"
          >
            HOME
          </Link>

          <Link
            href="/collection"
            onClick={() => setVisible(false)}
            className="border-b border-gray-200 pl-4 py-2"
          >
            COLLECTION
          </Link>

          <Link
            href="/about"
            onClick={() => setVisible(false)}
            className="border-b border-gray-200 pl-4 py-2"
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            onClick={() => setVisible(false)}
            className="border-b border-gray-200 pl-4 py-2"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}
