"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShopContext } from "../store/ShopContext";

const ProductItem = ({ id, name, title, price, image }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link href={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <Image
          src={image[0]}
          alt={"Product Image"}
          width={300}
          height={300}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>

      {/* <p className="pt-3 pb-1 text-xs">{title}</p> */}
      <div className="text-sm font-medium">
        {name}
        <p className="mt-2">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
