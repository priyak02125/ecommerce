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
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          architecto molestias suscipit ut laudantium nam, enim possimus odio
          atque, placeat repudiandae, quis impedit accusamus voluptatem quisquam
          nihil! Quia, totam dolorem?
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 px-22">
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
