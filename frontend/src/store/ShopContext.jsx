"use client";
import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  // console.log("token", token);
  console.log("cartItems", cartItems);

  /* ---------------- RESTORE TOKEN ---------------- */
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  /* ---------------- RESTORE CART ---------------- */
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.log("Failed to parse cart from localStorage", error);
        setCartItems({});
      }
    }
  }, []);

  /* ---------------- SAVE CART TO LOCALSTORAGE ---------------- */
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    if (!backendUrl) return;

    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/product/list`);

        if (data.success) {
          setProducts(data.products);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Failed to load products");
      }
    };

    fetchProducts();
  }, [backendUrl]);

  /* ---------------- GET USER CART ---------------- */
  const getUserCart = useCallback(async () => {
    if (!token) return;

    try {
      const { data } = await axios.get(`http://localhost:4000/api/cart/get`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("data", data);

      if (data.success) {
        setCartItems(data.cartData || {});
      }
    } catch (error) {
      toast.error("Failed to load cart");
    }
  }, [backendUrl, token]);

  useEffect(() => {
    if (token) getUserCart();
  }, [token, getUserCart]);

  /* ---------------- ADD TO CART ---------------- */
  const addToCart = useCallback(
    async (itemId, size) => {
      if (!size) {
        toast.error("Select product size");
        return;
      }
      // console.log("token in addToCart:", token);
      // console.log("backendUrl in addToCart:", backendUrl);
      // console.log("itemId, size:", itemId, size);

      // Optimistic UI update
      setCartItems((prev) => {
        const cart = structuredClone(prev);
        if (!cart[itemId]) cart[itemId] = {};
        cart[itemId][size] = (cart[itemId][size] || 0) + 1;
        return cart;
      });
      if (!token) return;

      try {
        await axios.post(
          `http://localhost:4000/api/cart/add`,
          { itemId, size },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
      } catch (error) {
        toast.error("Failed to add to cart");
      }
      const getCartData = getUserCart();
      console.log("getCartData inside addToCart", getCartData);
    },
    [backendUrl, token, getUserCart],
  );

  /* ---------------- UPDATE QUANTITY ---------------- */
  const updateQuantity = useCallback(
    async (itemId, size, quantity) => {
      if (quantity < 0) return;

      setCartItems((prev) => {
        const cart = structuredClone(prev);
        if (!cart[itemId]) return prev;

        cart[itemId][size] = quantity;

        if (quantity === 0) {
          delete cart[itemId][size];
          if (!Object.keys(cart[itemId]).length) {
            delete cart[itemId];
          }
        }

        return cart;
      });

      if (!token) return;

      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } catch (error) {
        toast.error("Failed to update cart");
      }
    },
    [backendUrl, token],
  );

  /* ---------------- DERIVED VALUES ---------------- */
  const getCartCount = useMemo(() => {
    return Object.values(cartItems).reduce(
      (total, sizes) =>
        total + Object.values(sizes).reduce((sum, qty) => sum + qty, 0),
      0,
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

  /* ---------------- LOGOUT ---------------- */
  const logout = () => {
    setToken("");
    setCartItems({});
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
  };

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
    logout,
    setCartItems,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
