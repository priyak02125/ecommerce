"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {assets} from "../assests/assets.js";
import Image from "next/image";
export default function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between px-28 py-5 text-gray-600 font-semibold">
      <div className="w-24"></div>

      <div className="flex gap-5 cursor-pointer">
        <p>HOME</p>
        <p>COLLECTION</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>

      <div className="flex gap-5 items-center text-2xl">
          <Image
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
            width={15}
            height={15}
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
            alt="Hero Image"
            width={15}
            height={15}
            className="cursor-pointer"
          />
          <p className="absolute top-2 left-2 w-3 h-3 text-center leading-3 bg-black text-white aspect-square rounded-full text-[6px]">
            10
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
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        {/* sidebar content */}
        <div className="flex flex-col text-gray-600 ">
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
            className="block border-t border-b border-gray-200 pl-4 py-2 mt-5"
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
