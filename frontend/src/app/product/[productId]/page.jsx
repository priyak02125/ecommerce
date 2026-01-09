"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ShopContext } from "../../context/ShopContext";
import { assets } from "../../../assests/assets";
import RelatedProduct from "../../../components/RelatedProduct";
const Page = () => {
  const { productId } = useParams();
  const { products, currency, addTocart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 max-w-7xl mx-auto">
      <div className="border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
        {/* Product Data */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto gap-2 lg:w-[18%] w-full">
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
            <div className="w-full">
              <Image
                src={image}
                alt="product image"
                width={600}
                height={600}
                className="w-full max-h-400px sm:max-h-500px object-contain"
              />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex-1">
            <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
              {productData.name}
            </h1>
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
            <p className="text-xl sm:text-2xl mt-4 font-semibold">
              {currency}
              {productData.price}
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8 ">
              <p>Select size</p>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    key={index}
                    type="button" // prevent form submission
                    onClick={() => setSize(item)}
                    className={`py-2 px-3 sm:px-4 text-sm rounded border cursor-pointer ${
                      item === size ? "border-orange-500" : "border-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div>
                <button
                  onClick={() => addTocart(productData._id, size)}
                  className="w-full sm:w-auto bg-black text-white px-8 py-3 text-sm rounded-md active:bg-gray-700"
                >
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
        <div className="mt-16 sm:mt-20">
          <div className="flex text-xs sm:text-sm mt-16">
            <p className="border border-gray-300 px-5 py-3 text-sm">
              Description
            </p>
            <p className="border border-gray-300 px-5 py-3 text-sm">
              Reviews (123)
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-gray-300 px-4 sm:px-6 py-5 text-sm text-gray-500">
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
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Page;
