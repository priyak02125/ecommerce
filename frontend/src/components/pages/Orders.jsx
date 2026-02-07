"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Title from "../Title";
import { ShopContext } from "../../store/ShopContext";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  console.log("od", orderData);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      // const response = await axios.get(
      //   backendUrl + "/api/order/userorders",
      //   {},
      //   { headers: { Authorization: `Bearer ${token}` } }
      // );

      const response = await axios.get(`${backendUrl}/api/order/userorders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        let allOrdersItem = [];
        // console.log("get order", allOrdersItem);

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]); 

  return (
    // <div className="sm:px-22">
    //   <div className="border-t border-gray-300">
    //     <div className="text-2xl">
    //       <div className="text-center text-xl sm:text-2xl sm:mt-8 mt-4">
    //         <Title text1={"MY"} text2={"ORDERS"} />
    //       </div>
    //     </div>
    //     <div>
    //       {orderData.map((item, index) => (
    //         <div
    //           key={index}
    //           className="py-4 border-t border-b border-gray-300 text-gray-700 flex justify-between"
    //         >
    //           <div className="flex gap-2 w-96">
    //             {/* <Image
    //             src={item.image[0]}
    //             width={100}
    //             height={100}
    //             alt="product_image"
    //             className="w-16 sm:w-20"
    //           /> */}
    //             <Image
    //               src={item.image}
    //               width={100}
    //               height={100}
    //               alt="product_image"
    //               className="w-16 sm:w-20"
    //             />

    //             <div>
    //               <p className="sm:text-base font-medium">{item.name}</p>
    //               <div className="flex items-center gap-3 mt-3 text-base text-gray-700">
    //                 {currency}
    //                 {item.price}
    //                 <p>Quantity: {item.quantity}</p>
    //                 <p>Size: {item.size}</p>
    //               </div>
    //               <p className="mt-2">
    //                 Date: 
    //                 <span className="text-gray-400">
    //                     {item.date
    //                     ? (() => {
    //                         const d = new Date(item.date);
    //                         const day = d.toLocaleDateString("en-US", {
    //                           weekday: "short",
    //                         });
    //                         const date = d.getDate();
    //                         const month = d.toLocaleDateString("en-US", {
    //                           month: "short",
    //                         });
    //                         const year = d.getFullYear();
    //                         return `${day} ${date} ${month} ${year}`;
    //                       })()
    //                     : "N/A"}
    //                 </span>
    //               </p>
    //                <p className="mt-2">
    //                 Payment: 
    //                 <span className="text-gray-400"> {item.paymentMethod}</span>
    //                 </p>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-2">
    //             <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
    //             <p className="text-sm md:text-base ">{item.status}</p>
    //           </div>
    //           <div className="flex items-center">
    //             <button onClick = {loadOrderData} className="border border-gray-300 px-4 py-2 text-sm font-medium rounded-sm">
    //               Track Order
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="sm:px-22 px-4">
  <div className="border-t border-gray-300">
    <div className="text-center text-xl sm:text-2xl sm:mt-4 mt-4">
      <Title text1={"MY"} text2={"ORDERS"} />
    </div>

    <div>
      {orderData.map((item, index) => (
        <div
          key={index}
          className="py-4 border-t border-b border-gray-300 text-gray-700
                     flex flex-col sm:flex-row sm:justify-between gap-4"
        >
          {/* LEFT */}
          <div className="flex gap-3 w-full sm:w-96">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt="product_image"
              className="w-16 sm:w-20 shrink-0"
            />

            <div className="w-full">
              <p className="text-sm sm:text-base font-medium">{item.name}</p>

              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm sm:text-base">
                <span>
                  {currency}
                  {item.price}
                </span>
                <p>Qty: {item.quantity}</p>
                <p>Size: {item.size}</p>
              </div>

              <p className="mt-2 text-sm">
                Date:
                <span className="text-gray-400 ml-1">
                  {item.date
                    ? (() => {
                        const d = new Date(item.date);
                        return d.toLocaleDateString("en-US", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        });
                      })()
                    : "N/A"}
                </span>
              </p>

              <p className="mt-1 text-sm">
                Payment:
                <span className="text-gray-400 ml-1">
                  {item.paymentMethod}
                </span>
              </p>
            </div>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <p className="text-sm md:text-base">{item.status}</p>
          </div>

          {/* ACTION */}
          <div className="flex items-center">
            <button
              onClick={loadOrderData}
              className="border border-gray-300 px-4 py-2 text-sm font-medium rounded-sm w-1/2 sm:w-auto"
            >
              Track Order
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Orders;
