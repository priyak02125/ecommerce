"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShopContext } from "../app/context/ShopContext";

const ProductItem = ({ id, title, price, image }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      href={`/product/${id}`}
      className="text-gray-700 cursor-pointer"
    >
      <div className="overflow-hidden">
        <Image
          src={image[0]}
          alt={title}
          width={300}
          height={300}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>

      <p className="pt-3 pb-1 text-xs">{title}</p>
      <p className="text-sm font-medium">{currency}{price}
      </p>
    </Link>
  );
};

export default  ProductItem;
