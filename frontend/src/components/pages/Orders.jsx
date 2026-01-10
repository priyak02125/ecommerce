"use client"
import React, { useContext } from "react";
import Title from "../Title";
import Image from "next/image";
import { ShopContext } from "../../app/context/ShopContext";
const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="px-22">
    <div className="border-t border-gray-300">
      <div className="text-2xl">
        <div className="text-xl sm:text-2xl mt-8">
          <Title text1={"MY"} text2={"ORDERS"} />
        </div>
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b border-gray-300 text-gray-700 flex justify-between"
          >
            <div className="flex gap-2 w-96" >
              <Image
                src={item.image[0]}
                width={100}
                height={100}
                alt="product_image"
                className="w-16 sm:w-20"
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-3 text-base text-gray-700">
                <p className="text-lg">{currency}{item.price}</p>
                <p>Quantity:1</p>
                <p>Size:M</p>
                </div>
                <p className="mt-2">Date:<span className="text-gray-400">25, jul, 2024</span></p>
              </div>
            </div>
           
             <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base ">Ready to Ship</p>
             </div>
             <div className="flex items-center">
             <button className="border border-gray-300 px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
             </div>
            </div>
         
        ))}
      </div>
    </div>
    </div>
  );
};

export default Orders;
