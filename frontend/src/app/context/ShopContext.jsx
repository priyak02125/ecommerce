'use client';
import { createContext } from "react"
import {products} from "../../assests/assets.js"
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 5;

  const value = {
    products,
    currency,
    delivery_fee,
  };
// console.log("ShopContextProvider rendered with products:", products);
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
