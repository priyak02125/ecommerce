import React from "react";
import Title from "../Title";
import Image from "next/image";
import { assets } from "../../assests/assets";
import NewsletterBox from "../NewsletterBox";
const Contact = () => {
  return (
    <div className="px-22 border-gray-300">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <Image
          src={assets.contact_img}
          alt="contact_img"
          width={400}
          height={300}
          className="cursor-pointer"
        />
        
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-600"> 54330 Willims Station<span className="block text-sm"> suite 30, Washington, USA</span>
          </p>
           <p className="text-gray-600"> Tel: (415) 555-0132  <span className="block text-sm"> Email: admin@foever.com   </span>
          </p>
          <p className="font-medium text-xl text-gray-600">Careers at Forever</p>
           <p className="text-lg text-gray-600">Learn more about our teams and job openings</p>
           <button className="border cursor-pointer border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all durantion-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default Contact;
