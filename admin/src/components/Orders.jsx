"use client";
import React, { useEffect, useState } from "react";
import api from "../utils/axios";
import { toast } from "react-toastify";
import Image from "next/image";
const Orders = ({ token }) => {
  console.log("admin order");

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    console.log("fetchAllOrders admin");

    // if(!token){
    //   return null;
    // }

    try {
      const response = await api.get(
        "/api/order/list",
        {},
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

 const statusHandler = async (event, orderId) => {
  // console.log("event",event.target.value)
  const status = event.target.value
  console.log("orderId",orderId)
  console.log("status :: ",status)

  try {
    const response = await api.post(
      "/api/order/status",
      {
        orderId,
        status: event.target.value,
      },
    );

    if (response.data.success) {
      toast.success("Order Status Updated");
      fetchAllOrders();
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log("statusHandler Catch error")
    toast.error(error.response?.data?.message || error.message);
  }
};


  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-center border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
            <Image
              className="w-12"
              src="/admin_assets/parcel_icon.svg"
              alt="parcel_icon"
              width={50}
              height={50}
            />
            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} x {item.quantity} <span>{item.size}</span>,
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">{order.address.firstName + "" + order.address.lastName}</p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
            <p className="text-sm sm:text-[15px]">Items:{order.items.length}</p>
            <p className="mt-3">Method:{order.paymentMethod}</p>
            <p>Payment:{order.payment ? "Done" : "Pending"}</p>
            <p>
              Date:{" "}
              {new Date(order.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <p className="text-sm sm:text-[-15px]">$ {order.amount}</p>
          <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="p-2 font-semibold">
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
