"use client";

import React, { useContext } from "react";
import { ShopContext } from "../app/context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  //   console.log("LatestCollection :: ",products);
  const { products } = useContext(ShopContext);
  const latestProducts = products.slice(0, 10);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam
          hic vero animi fuga enim recusandae voluptatibus, cum reprehenderit
          nesciunt nulla est natus ullam possimus, excepturi illum rem laborum
          inventore.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-22 ">
        {latestProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
