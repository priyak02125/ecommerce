"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const { productId } = useParams();
   console.log("Product ID:", productId);
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}
