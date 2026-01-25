import React from "react";
import Image from "next/image";
import { assets } from "../assests/assets.js";

function Footer() {
  return (
    <div className="px-6 sm:px-20">
      {" "}
      {/* overall padding */}
      <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 md:mt-40 text-sm">
        {/* Logo & Description */}
        <div>
          {/* <Image
            src={assets.logo}
            alt="Hero Image"
            width={50}
            height={50}
            className="mb-5 w-32"
          /> */}
          <Image
            src="/logo1.png"
            alt="Logo Image"
            width={120}
            height={200}
            className="cursor-pointer"
          />
          <p className="w-full md:w-2/3 text-gray-600">
          Rivio is your destination for quality fashion, curated with style and care to bring you the best in clothing and accessories.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>1234567890</li>
            <li>contact@ecommerce.com</li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-300" />
      {/* Copyright */}
      <div className="text-center mt-5 text-gray-600">
        © 2026 Ecommerce. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
