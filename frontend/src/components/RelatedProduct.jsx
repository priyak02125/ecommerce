"use client";
import React, { useContext, useMemo } from "react";
import { ShopContext } from "../store/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory, currentProductID }) => {
  const { products } = useContext(ShopContext);
  // Derive related products without calling setState in useEffect
  const related = useMemo(() => {
    if (!products || products.length === 0) return [];
    return products
      .filter((item) => item.category === category)
      .filter((item) => item.subCategory === subCategory)
      .filter((item) => item._id !== currentProductID)
      .slice(0, 5); // only first 5
  }, [products, category, subCategory,currentProductID]); // recompute only if these change
  console.log("product list", related);
  return (
    <div className="my-12">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, i) => (
          <ProductItem
            key={item._id || i}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
