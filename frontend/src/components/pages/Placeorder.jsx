"use client"
import React, { useState } from "react";
import Title from "../Title";
import CartTotal from "./CartTotal";
import Image from "next/image";
import { assets } from "../../assests/assets";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ShopContext } from "../../store/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Placeorder() {
  const [method,setMethod] = useState('cod');
  // console.log("method",method)
  const router = useRouter();
  const {
  backendUrl,
  token,
  cartItems,
  setCartItems,
  getCartAmount,
  delivery_fee,
  products,
} = useContext(ShopContext);

  const [formData, setformData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name
    const value = event.target.value

    setformData(data =>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
     event.preventDefault()

    try {
  // let orderItems = [];

  // for (const productId in cartItems) {
  //   for (const size in cartItems[productId]) {
  //     if (cartItems[productId][size] > 0) {
  //       const itemInfo = structuredClone( 
  //         products.find(product => product._id === productId)
  //       );

  //       if (itemInfo) {
  //         itemInfo.size = size;
  //         itemInfo.quantity = cartItems[productId][size];
  //         orderItems.push(itemInfo);
  //       }
  //     }
  //   }
  // }

  // let orderData = {
  //    address: formData,
  //    items: orderItems,
  //    amount: getCartAmount + delivery_fee
  // }


  let orderItems = [];

for (const productId in cartItems) {
  for (const size in cartItems[productId]) {
    const quantity = cartItems[productId][size];
    if (quantity > 0) {
      orderItems.push({
        productId, // Only ID
        size,
        quantity
      });
    }
  }
}

const orderData = {
  // userId: userId,
  address: formData,
  items: orderItems,
  amount: getCartAmount + delivery_fee
};

switch (method) {
  // API Calls for COD
  case "cod":
  // const response = await axios.post(
  //   backendUrl + "/api/order/place",
  //   orderData,
  //   { headers: { token } }
  // );

  const response = await axios.post(
  backendUrl + "/api/order/place",
  orderData,
  { headers: { Authorization: `Bearer ${token}` } }
);
  console.log(response.data);
  if (response.data.success) {
    setCartItems({});
    router.push("/orders"); 
  } else {
    toast.error(response.data.message)
  }
  break;

  default :
  break;
}

} catch (error) {
  console.error(error);
}

  }

  return (
    <div className="px-5 sm:px-10 lg:px-20">
      <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-12 pt-5 sm:pt-14 border-t">
        {/* LEFT FORM */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          <div className="flex gap-3">
            <input
              onChange={onChangeHandler} name='firstName' value={formData.firstName}
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="First name"
              required
            />
            <input
              onChange={onChangeHandler} name='lastName' value={formData.lastName}
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="Last name"
              required
            />
          </div>

          <input
            onChange={onChangeHandler} name='email' value={formData.email}
            className="border border-gray-300 rounded py-1 px-2 "
            type="email"
            placeholder="Email address"
            required
          />
         
          <input
            onChange={onChangeHandler} name='street' value={formData.street}
            className="border border-gray-300 rounded py-1 px-2 "
            type="text"
            placeholder="Street address"
            required
          />

          <div className="flex gap-3">
            <input
              onChange={onChangeHandler} name='city' value={formData.city}
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="City"
              required
            />
            <input
              onChange={onChangeHandler} name='state' value={formData.state}
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="State"
              required
            />
          </div>

          <div className="flex gap-3">
            <input
              onChange={onChangeHandler} name='zipcode' value={formData.zipcode}
              className="border border-gray-300 rounded py-1 px-2 "
              type="text"
              placeholder="Zipcode"
              required
            />
            <input
              onChange={onChangeHandler} name='country' value={formData.country}
              className="border border-gray-300 rounded py-1 px-2"
              type="text"
              placeholder="Country"
              required
            />
          </div>

          <input
            onChange={onChangeHandler} name='phone' value={formData.phone}
            className="border border-gray-300 rounded py-1 px-2 "
            type="number"
            placeholder="Phone number"
            required
          />
        </div>

        {/* RIGHT - CART TOTAL */}
        <div>
          <div className="mt-20 min-w-[320px]">
            <CartTotal />
          </div>
          <div className="text-xl sm:text-2xl my-8">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            <div className="flex gap-3 flex-col lg:flex-row">
              <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <input className={`w-4 h-4 border rounded-full focus:outline-none ${method === 'stripe' ? 'bg-green-400 border' : ''}`}></input>
                <Image
                  src={assets.stripe_logo}
                  alt="stripe_logo"
                  width={50}
                  height={50}
                />
              </div>
                <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                 <input className={`w-4 h-4 border rounded-full focus:outline-none ${method === 'razorpay' ? 'bg-green-400' : ''}`}></input>
                <Image
                  src={assets.razorpay_logo}
                  alt="razorpay_logo"
                  width={50}
                  height={50}
                />
              </div>
                <div  onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <input className={`w-4 h-4 border rounded-full focus:outline-none ${method === 'cod' ? 'bg-green-400' : ''}`}></input>
                <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
              </div>
            </div>
          </div>
          <div className="w-full text-end mt-8">
           <button type="submit" className="bg-black  cursor-pointer text-white px-2 py-2 text-sm rounded-sm">PLACE  ORDER</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Placeorder;
