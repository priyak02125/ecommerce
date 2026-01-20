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

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/product/list`);

        if (data.success) {
          setProducts(data.products);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load products");
      }
    };

    if (backendUrl) fetchProducts();
  }, [backendUrl]);

  /* ---------------- CART HELPERS ---------------- */
  const addToCart = useCallback((itemId, size) => {
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
  }, []);

  const updateQuantity = useCallback((itemId, size, quantity) => {
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
  }, []);

  /* ---------------- DERIVED VALUES ---------------- */
  const getCartCount = useMemo(() => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total +
        Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0
    );
  }, [cartItems]);

  const getCartAmount = useMemo(() => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      const product = products.find((p) => p._id === itemId);
      if (!product) return total;

      return (
        total +
        Object.values(sizes).reduce(
          (sum, qty) => sum + product.price * qty,
          0
        )
      );
    }, 0);
  }, [cartItems, products]);

  /* ---------------- TOKEN RESTORE ---------------- */
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
