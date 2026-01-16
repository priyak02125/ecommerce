"use client";
import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import { toast } from "react-toastify";
import Image from "next/image";
import { currency } from "../app/admin/layout";
const List = ({ token }) => {
  const [list, setList] = useState([]);
  console.log("data", list);

  const fetchList = async () => {
    try {
      const response = await api.get("/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    console.log(id);
    try {
      const res = await fetch("http://localhost:4000/api/product/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: id }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      {/* Heading */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border bg-gray-200 text-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* Rows */}
      {list.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border border-gray-300 text-sm"
        >
          {/* Image column */}
          <div className="flex gap-2 overflow-x-auto">
            <Image
              src={item.image[0]}
              alt="product"
              width={48}
              height={48}
              className="object-cover rounded"
            />
          </div>

          {/* Name column */}
          <p>{item.name}</p>

          {/* Category column */}
          <p className="capitalize">{item.category}</p>

          {/* Price column */}
          <p>
            {currency}
            {item.price}
          </p>

          {/* Action column */}
          <p
            onClick={() => removeProduct(item._id)}
            className="text-center cursor-pointer"
          >
            X
          </p>
        </div>
      ))}
    </>
  );
};

export default List;
