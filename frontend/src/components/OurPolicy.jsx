import React from "react";
import Image from "next/image";
import { assets } from "../assests/assets.js";
function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 sm:py-12 lg:py-20 text-xs sm:text-sm md:text-sm text-gray-700 ">
      <div>
        <Image
          src={assets.exchange_icon}
          alt="exchange_icon"
          width={35}
          height={35}
          className="m-auto mb-2"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer hassle free Exchange Policy</p>
      </div>

       <div>
        <Image
          src={assets.quality_icon}
          alt="quality_icon"
          width={35}
          height={35}
          className="m-auto mb-2"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide a 7-day return policy</p>
      </div>

       <div>
        <Image
          src={assets.support_img}
          alt="exchange_icon"
          width={35}
          height={35}
          className="m-auto mb-2"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;
