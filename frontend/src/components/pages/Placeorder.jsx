import React from "react";
import Title from "../Title";
import CartTotal from "./CartTotal";

function Placeorder() {
  return (
    <div className="px-5 sm:px-10 lg:px-20 ">
      <div className="flex flex-col sm:flex-row justify-between gap-10 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* LEFT FORM */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          {/* First + Last name */}
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="First name"
            />
            <input
              className="border border-gray-300 rounded py-1 px-2"
              type="text"
              placeholder="Last name"
            />
          </div>

          <input
            className="border border-gray-300 rounded py-1 px-2"
            type="email"
            placeholder="Email address"
          />

          <input
            className="border border-gray-300 rounded py-1 px-2"
            type="text"
            placeholder="Street address"
          />

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1 px-2"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded py-1 px-2"
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="zipcode"
            />
            <input
              className="border border-gray-300 rounded py-1 px-2"
              type="text"
              placeholder="Country"
            />
          </div>
          <input
            className="border border-gray-300 rounded py-1 px-2"
            type="number"
            placeholder="Phone number"
          />
        </div>
         <div className="mt-8 min-w-80">
       <CartTotal/>
      </div>
      </div>
    </div>
  );
}

export default Placeorder;
