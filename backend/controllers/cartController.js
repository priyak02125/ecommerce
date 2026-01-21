import userModel from "../models/usermodel.js";

// add products to user cart
const addToCart = async (req, res) => {
  console.log("addToCart being called")
  // console.log("req.body",req.body)
  try {
    const { itemId, size } = req.body;
    const userId = req.user?.id;

    const userData = await userModel.findById(userId);
    // console.log(userData)
    let cartData = userData?.cartData || {};

    // console.log("cartdata", cartData)

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update cart
const updateCart = async (req, res) => {
  console.log("getUpdateCart backend called");
  try {
    const { itemId, size, quantity } = req.body;
     const userId = req.user?.id;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};
    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get user cart
const getUserCart = async (req, res) => {
  // console.log("getUserCart backend called");

  try {
    const userId = req.user?.id;
    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found in DB" });
    }

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
