"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../../assests/assets";
import RelatedProduct from "../../../components/RelatedProduct";
const Page = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="px-22">
      <div className="border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
        {/* Product Data */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <Image
                  src={item}
                  onClick={() => setImage(item)}
                  key={index}
                  alt="product image"
                  width={500}
                  height={500}
                  className="w-[24%] sm:w-full sm:mb-3 shrink-0"
                />
              ))}
            </div>
            <div className="w-full h-auto \">
              <Image
                src={image}
                alt="product image"
                width={500}
                height={500}
                className=" w-full h-auto object-cover"
              />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex-1">
            <h1 className="text-xl font-medium">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <Image
                src={assets.star_icon}
                alt="star_icon"
                width={10}
                height={10}
              />
              <Image
                src={assets.star_icon}
                alt="star_icon"
                width={10}
                height={10}
              />
              <Image
                src={assets.star_icon}
                alt="star_icon"
                width={10}
                height={10}
              />
              <Image
                src={assets.star_icon}
                alt="star_icon"
                width={10}
                height={10}
              />
              <Image
                src={assets.star_icon}
                alt="star_icon"
                width={10}
                height={10}
              />
              <p className="pl-2">(123)</p>
            </div>
            <p className="text-2xl mt-5 font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8 ">
              <p>Select size</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    type="button" // prevent form submission
                    onClick={() => setSize(item)}
                    className={`py-2 px-4 rounded border cursor-pointer ${
                      item === size ? "border-orange-500" : "border-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div>
                <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                  ADD TO CART
                </button>
                <hr className="mt-8 sm:w-4/5 border-gray-300"></hr>
                <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                  <p>100 % Original product.</p>
                  <p>Cash on delivery is available on this products.</p>
                  <p>Easy return and exchange policy within 7 days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex">
            <p className="border border-gray-300 px-5 py-3 text-sm">
              Description
            </p>
            <p className="border border-gray-300 px-5 py-3 text-sm">
              Reviews (123)
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-gray-300 px-6 mt-2 py-6 text-sm text-gray-500">
            <p>
              Welcome to our e-commerce store, your one-stop destination for
              high-quality products at unbeatable prices. We offer a wide range
              of items, from fashion and accessories to electronics and home
              essentials, all carefully curated to meet your needs.
            </p>
            <p>
              Our mission is to provide a seamless shopping experience with fast
              shipping, secure payments, and exceptional customer service.
              Discover our latest collections, find the perfect products, and
              enjoy a hassle-free online shopping journey with us.
            </p>
          </div>
        </div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>   
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Page;
