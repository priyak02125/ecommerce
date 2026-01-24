import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js";
import productModel from "../models/productModel.js";

// Placing orders using COD Method
const placeOrder = async (req, res) => {
  console.log("placeOrder is being called")
  try {
    const { items, amount, address } = req.body;
    const userId = req.user.id;

    const detailedItems = await Promise.all(
      items.map(async (item) => {
        //   const product = await productModel.findById(item._id);
        const product = await productModel.findById(item.productId || item._id);
        console.log("product", product);
        return {
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image[0],
          size: item.size,
          quantity: item.quantity,
        };
      }),
    );

    console.log("detailedItems",detailedItems)

    const orderData = {
      userId: userId,
      // items,
      items: detailedItems,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed", newOrder });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using stripe Method
const placeOrderStripe = async (req, res) => {};

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
   try {
    //  const { userId } = req.body;
    // const userId = req.user.id;
    // console.log(userId);
    const orders = await orderModel.find();
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// All Orders data for Frontend
const userOrders = async (req, res) => {
  try {
    //  const { userId } = req.body;
    const userId = req.user.id;
    console.log(userId);
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update order status from Admin panel
const updateStatus = async (req, res) => {
  try {
    const {orderId,status} = req.body

    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:'Status Updated'})
  } catch (error) {
     console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
