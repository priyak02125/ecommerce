'use client';
import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../store/ShopContext";
import ProductItem from "./ProductItem";
const Bestseller = () => {
  const { products } = useContext(ShopContext);
// console.log("products",products)
  const bestsellerProducts = products.filter((item) => item.bestseller)
  products.slice(0, 5);
// console.log("bestsellerProducts",bestsellerProducts)
  return (
    <div className="">
      <div className="text-center text-3xl lg:py-8 py-2">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 mb-5 lg:mb-0">
          Discover our best-selling collection that customers love and wear again and again. From timeless essentials to standout statement pieces, each item is crafted with comfort and quality in mind. Handpicked favorites that never go out of style and keep you looking your best every season.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 lg:px-22 px-4">
          {bestsellerProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              title={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
