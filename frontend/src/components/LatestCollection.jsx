"use client";

import React, { useContext } from "react";
import { ShopContext } from "../store/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const LatestCollection = () => {
  //   console.log("LatestCollection :: ",products);
  const { products } = useContext(ShopContext);
  const latestProducts = products.slice(0, 10);

  return (
    <div className="lg:my-10 my-5 mx-2">
      <div className="text-center lg:py-8 text-2xl md:text-3xl mb-5 lg:mb-0">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
         Explore our latest fashion collection designed to keep you stylish and confident every day. From trendy tops and chic dresses to comfortable loungewear and statement pieces, each item is crafted with quality fabrics and modern silhouettes. Refresh your wardrobe with pieces that blend timeless style and everyday comfort, curated just for you.
        </p>
      </div>
      <div className="px-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 lg:px-22 ">
        {latestProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
