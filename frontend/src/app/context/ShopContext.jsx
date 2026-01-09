// 'use client';
// import { useState,createContext } from "react"
// import {products} from "../../assests/assets.js"
// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 5;
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems,setCartItems]=useState({});

//   const addTocart = async (itemId,size)=> {

//     let cartData = structuredClone (cartItems)
//     if (cartData[itemId]) {
//       if(cartData[itemId][size]){
//       if(cartData[itemId][size]+=)
//       }

//     }

//   }
//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
