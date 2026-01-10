"use client";
import React, { useContext } from "react";
import { ShopContext } from "../../app/context/ShopContext";
import Title from "../Title";
import Image from "next/image";
import { assets } from "../../assests/assets";
import CartTotal from "./CartTotal";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);

  const router = useRouter();

  const cartData = React.useMemo(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    return tempData;
  }, [cartItems]);

  return (
    <div className="px-22">
      <div className="text-2xl mb-3 border-t pt-14 border-gray-300">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center justify-between gap-4"
            >
              <div className="flex items-center gap-6">
                <Image
                  src={productData.image[0]}
                  alt={productData.name}
                  width={600}
                  height={600}
                  className="w-16 object-cover"
                />

                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <input
                  className="border max-w-10 sm:max-w-10 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                />
              </div>

              <div>
                <Image
                  src={assets.bin_icon}
                  alt="bin_icon"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  width={15}
                  height={15}
                  className="cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-[30%]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => router.push("/place-order")}
              className="bg-black text-white text-xs my-6 px-4 py-2 rounded-sm"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
