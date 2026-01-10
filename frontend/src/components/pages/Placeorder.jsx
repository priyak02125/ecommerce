"use client"
import React, { useState } from "react";
import Title from "../Title";
import CartTotal from "./CartTotal";
import Image from "next/image";
import { assets } from "../../assests/assets";
import { useRouter } from "next/navigation";
function Placeorder() {
  const [method,setMethod] = useState('cod');
  // console.log("method",method)

   const router = useRouter();

  return (
    <div className="px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col sm:flex-row justify-between gap-12 pt-5 sm:pt-14 border-t">
        {/* LEFT FORM */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="First name"
            />
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="Last name"
            />
          </div>

          <input
            className="border border-gray-300 rounded py-1 px-2 "
            type="email"
            placeholder="Email address"
          />

          <input
            className="border border-gray-300 rounded py-1 px-2 "
            type="text"
            placeholder="Street address"
          />

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="State"
            />
          </div>

          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="Zipcode"
            />
            <input
              className="border border-gray-300 rounded py-1 px-2"
              type="text"
              placeholder="Country"
            />
          </div>

          <input
            className="border border-gray-300 rounded py-1 px-2 "
            type="number"
            placeholder="Phone number"
          />
        </div>

        {/* RIGHT - CART TOTAL */}
        <div>
          <div className="mt-20 min-w-[320px]">
            <CartTotal />
          </div>
          <div className="text-xl sm:text-2xl my-8">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="flex gap-3 flex-col lg:flex-row">
              <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <input className={`w-4 h-4 border rounded-full focus:outline-none ${method === 'stripe' ? 'bg-green-400 border' : ''}`}></input>
                <Image
                  src={assets.stripe_logo}
                  alt="stripe_logo"
                  width={50}
                  height={50}
                />
              </div>
                <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                 <input className={`w-4 h-4 border rounded-full focus:outline-none ${method === 'razorpay' ? 'bg-green-400' : ''}`}></input>
                <Image
                  src={assets.razorpay_logo}
                  alt="razorpay_logo"
                  width={50}
                  height={50}
                />
              </div>
                <d  onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <inpu className={`w-4 h-4 border rounded-full focus:outline-none ${method === 'cod' ? 'bg-green-400' : ''}`}></inpu>
                <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
              </d>
            </div>
          </div>
          <div className="w-full text-end mt-8">
           <button  onClick={() => router.push("/orders")} className="bg-black  cursor-pointer text-white px-2 py-2 text-sm rounded-sm">PLACE  ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
