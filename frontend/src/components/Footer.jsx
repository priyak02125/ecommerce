import React from "react";
import Image from "next/image";
import { assets } from "../assests/assets.js";

function Footer() {
  return (
    <div className="px-6 sm:px-20"> {/* overall padding */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo & Description */}
        <div>
          <Image
            src={assets.logo}
            alt="Hero Image"
            width={50}
            height={50}
            className="mb-5 w-32"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
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
        © 2024 Ecommerce. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
