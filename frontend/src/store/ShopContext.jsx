// "use client";
// import { createContext, useState, useEffect, useCallback, useMemo } from "react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// export const ShopContext = createContext(null);

// const ShopContextProvider = ({ children }) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

//   const router = useRouter();

//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [token,setToken] = useState('')

//   /* ---------------- FETCH PRODUCTS ---------------- */
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${backendUrl}/api/product/list`
//         );

//         if (data.success) {
//           setProducts(data.products);
//         } else {
//           toast.error(data.message);
//         }
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to load products");
//       }
//     };

//     if (backendUrl) fetchProducts();
//   }, [backendUrl]);

//   /* ---------------- CART HELPERS ---------------- */
//   const addToCart = useCallback((itemId, size) => {
//     if (!size) {
//       toast.error("Select product size");
//       return;
//     }

//     setCartItems((prev) => {
//       const cart = structuredClone(prev);

//       if (!cart[itemId]) cart[itemId] = {};
//       cart[itemId][size] = (cart[itemId][size] || 0) + 1;

//       return cart;
//     });
//   }, []);

//   const updateQuantity = useCallback((itemId, size, quantity) => {
//     if (quantity < 0) return;

//     setCartItems((prev) => {
//       const cart = structuredClone(prev);

//       if (!cart[itemId]) return prev;

//       cart[itemId][size] = quantity;

//       if (quantity === 0) {
//         delete cart[itemId][size];
//         if (Object.keys(cart[itemId]).length === 0) {
//           delete cart[itemId];
//         }
//       }

//       return cart;
//     });
//   }, []);

//   /* ---------------- DERIVED VALUES ---------------- */
//   const getCartCount = useMemo(() => {
//     return Object.values(cartItems).reduce(
//       (total, sizes) =>
//         total +
//         Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
//       0
//     );
//   }, [cartItems]);

//   const getCartAmount = useMemo(() => {
//     return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
//       const product = products.find((p) => p._id === itemId);
//       if (!product) return total;

//       return (
//         total +
//         Object.values(sizes).reduce(
//           (sum, qty) => sum + product.price * qty,
//           0
//         )
//       );
//     }, 0);
//   }, [cartItems, products]);

//  useEffect(() => {
//   const storedToken = localStorage.getItem('token')

//   if (storedToken) {
//     setToken(storedToken)
//   }
// }, [])
//   /* ---------------- CONTEXT VALUE ---------------- */
//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//     updateQuantity,
//     getCartCount,
//     getCartAmount,
//     backendUrl,
//     setToken,token
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


// "use client";
// import { createContext, useState, useEffect, useCallback, useMemo } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { headers } from "next/headers";

// export const ShopContext = createContext(null);

// const ShopContextProvider = ({ children }) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState({});
//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [token, setToken] = useState("");

//   /* ---------------- FETCH PRODUCTS ---------------- */
//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     try {
//   //       const { data } = await axios.get(`${backendUrl}/api/product/list`);

//   //       if (data.success) {
//   //         setProducts(data.products);
//   //       } else {
//   //         toast.error(data.message);
//   //       }
//   //     } catch (error) {
//   //       console.error(error);
//   //       toast.error("Failed to load products");
//   //     }
//   //   };

//   //   if (backendUrl) fetchProducts();
//   // }, [backendUrl]);

// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/product/list`);
//       console.log("API response:", data);

//       if (data.success && Array.isArray(data.products)) {
//         setProducts(data.products);
//       } else {
//         console.log("No products returned");
//         toast.error(data.message || "No products found");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       toast.error("Failed to load products");
//     }
//   };

//   if (backendUrl) fetchProducts();
// }, [backendUrl]);


//   /* ---------------- CART HELPERS ---------------- */
// //   const addToCart = useCallback((itemId, size) => {
// //     if (!size) {
// //       toast.error("Select product size");
// //       return;
// //     }

// //     setCartItems((prev) => {
// //       const cart = structuredClone(prev);

// //       if (!cart[itemId]) cart[itemId] = {};
// //       cart[itemId][size] = (cart[itemId][size] || 0) + 1;
// //       return cart;
// //     });

// //     if (token) {
// //     try {
// //       await axios.post(
// //         backendUrl + "/api/cart/add",
// //         { itemId, size },
// //         { headers: { token } }
// //       );
// //     } catch (error) {
// //       toast.error(error.message);
// //     }
// //   }
// // }, [backendUrl, token]);

// const addToCart = useCallback((itemId, size) => {
//   if (!size) {
//     toast.error("Select product size");
//     return;
//   }

//   // Update state synchronously
//   setCartItems((prev) => {
//     const cart = structuredClone(prev);
//     if (!cart[itemId]) cart[itemId] = {};
//     cart[itemId][size] = (cart[itemId][size] || 0) + 1;
//     return cart;
//   });

//   // Fire-and-forget API call
//   if (token) {
//     (async () => {
//       try {
//        const res =  await axios.post(
//           `${backendUrl}/api/cart/add`,
//           { itemId, size },
//           { headers: { token } }
//         );

//         console.log("res", res)
//       } catch (error) {
//         toast.error(error.message);
//       }
//     })(); // ✅ IIFE ends here
//   }
// }, [backendUrl, token]); // ✅ dependency array is correct

//   const updateQuantity = useCallback((itemId, size, quantity) => {
//     if (quantity < 0) return;

//     setCartItems((prev) => {
//       const cart = structuredClone(prev);

//       if (!cart[itemId]) return prev;

//       cart[itemId][size] = quantity;

//       if (quantity === 0) {
//         delete cart[itemId][size];
//         if (Object.keys(cart[itemId]).length === 0) {
//           delete cart[itemId];
//         }
//       }

//       return cart;
//     });

//    if (token) {
//   (async () => {
//     try {
//       await axios.post(
//         backendUrl + '/api/cart/update',
//         { itemId, size, quantity },
//         { headers: { token } }
//       );
//     } catch (error) {
//       toast.error(error.message);
//     }
//   }, []);

//   /* ---------------- DERIVED VALUES ---------------- */
//   const getCartCount = useMemo(() => {
//     return Object.values(cartItems).reduce(
//       (total, sizes) =>
//         total +
//         Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
//       0
//     );
//   }, [cartItems]);

//   const getCartAmount = useMemo(() => {
//     return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
//       const product = products.find((p) => p._id === itemId);
//       if (!product) return total;

//       return (
//         total +
//         Object.values(sizes).reduce(
//           (sum, qty) => sum + product.price * qty,
//           0
//         )
//       );
//     }, 0);
//   }, [cartItems, products]);

//   /* ---------------- TOKEN RESTORE ---------------- */
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   /* ---------------- CONTEXT VALUE ---------------- */
//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     addToCart,
//     updateQuantity,
//     getCartCount,
//     getCartAmount,
//     backendUrl,
//     token,
//     setToken,
//     setCartItems,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

"use client";
import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/product/list`);
        if (data.success && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          toast.error(data.message || "No products found");
        }
      } catch (error) {
        toast.error("Failed to load products");
      }
    };
    if (backendUrl) fetchProducts();
  }, [backendUrl]);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = useCallback(
    (itemId, size) => {
      if (!size) {
        toast.error("Select product size");
        return;
      }

      setCartItems((prev) => {
        const cart = structuredClone(prev);
        if (!cart[itemId]) cart[itemId] = {};
        cart[itemId][size] = (cart[itemId][size] || 0) + 1;
        return cart;
      });

      if (token && userId) {
        axios
          .post(`${backendUrl}/api/cart/add`, { itemId, size, userId }, { headers: { token } })
          .catch((error) => toast.error(error.message));
      }
    },
    [backendUrl, token, userId]
  );

  /* ---------------- UPDATE QUANTITY ---------------- */
  const updateQuantity = useCallback(
    (itemId, size, quantity) => {
      if (quantity < 0) return;

      setCartItems((prev) => {
        const cart = structuredClone(prev);
        if (!cart[itemId]) return prev;

        cart[itemId][size] = quantity;

        if (quantity === 0) {
          delete cart[itemId][size];
          if (Object.keys(cart[itemId]).length === 0) {
            delete cart[itemId];
          }
        }
        return cart;
      });

      if (token && userId) {
        axios
          .post(`${backendUrl}/api/cart/update`, { itemId, size, quantity, userId }, { headers: { token } })
          .catch((error) => toast.error(error.message));
      }
    },
    [backendUrl, token, userId]
  );

  /* ---------------- DERIVED VALUES ---------------- */
  const getCartCount = useMemo(() => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0
    );
  }, [cartItems]);

  const getCartAmount = useMemo(() => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (!product) return total;

      return (
        total +
        Object.values(sizes).reduce((sum, qty) => sum + product.price * qty, 0)
      );
    }, 0);
  }, [cartItems, products]);

  /* ---------------- GET USER CART ---------------- */
  const getUserCart = async (token, userId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        { userId },
        { headers: { token } }
      );
      if (response.data.success) setCartItems(response.data.cartData || {});
    } catch (error) {
      toast.error(error.message);
    }
  };

  /* ---------------- RESTORE TOKEN & USERID ---------------- */
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken && storedUserId) {
      setToken(storedToken);
      setUserId(storedUserId);
    }
  }, []);

  /* ---------------- FETCH CART AFTER TOKEN ---------------- */
  useEffect(() => {
    if (token && userId) {
      getUserCart(token, userId);
    }
  }, [token, userId]);

  /* ---------------- CONTEXT VALUE ---------------- */
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    updateQuantity,
    getCartCount,
    getCartAmount,
    backendUrl,
    token,
    setToken,
    userId,
    setUserId,
    setCartItems,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
