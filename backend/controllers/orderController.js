import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js";

// Placing orders using COD Method
const placeOrder = async (req,res) => {

    try {

     const {items,amount,address} = req.body;
     const userId = req.user.id

     const orderData = {
        userId:userId,
        items,
        address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date: Date.now()
     }

     const newOrder = new orderModel(orderData)
     await newOrder.save()

     await userModel.findByIdAndUpdate(userId,{cartData:{}})

     res.json({success:true,message:"Order Placed"})
        
    } catch (error) {
       console.log(error)
       res.json({success:false,message:error.message}) 
    }

}


// Placing orders using stripe Method
const placeOrderStripe = async (req,res) => {

}

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req,res) => {

}

// All Orders data for Admin Panel
const allOrders = async (req,res) => {

}

// All Orders data for Frontend
const userOrders = async (req,res) => {

    try {
     const {userId} = req.body
     const orders = await orderModel.find({userId})
     res.json({success:true,orders})
        
    } catch (error) {
       console.log(error)
       res.json({success:false,message:error.message}) 
    }
    
}

// update order status from Admin panel
const updateStatus = async (req,res) => {
    
}

export{placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}