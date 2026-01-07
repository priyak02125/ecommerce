"use client";

import { useContext, useState, useMemo } from "react";
import { ShopContext } from "../../app/context/ShopContext";
import { assets } from "../../assests/assets.js";
import Image from "next/image";
import Title from "../Title.jsx";
import ProductItem from "../ProductItem.jsx";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  // Filter & sort state
  const [showFilter, setShowFilter] = useState(true);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Toggle category selection
  const toggleCategory = (value) => {
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // Toggle subcategory selection
  const togglesubCategory = (value) => {
    if (subcategory.includes(value)) {
      setSubcategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubcategory((prev) => [...prev, value]);
    }
  };

  const filteredProducts = useMemo(() => {
  let productsCopy = products.slice();

  // Filter by search term
  if (showSearch && search) {
    productsCopy = productsCopy.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filter by category
  if (category.length > 0) {
    productsCopy = productsCopy.filter((item) =>
      category.includes(item.category)
    );
  }

  // Filter by subcategory
  if (subcategory.length > 0) {
    productsCopy = productsCopy.filter((item) =>
      subcategory.includes(item.subCategory)
    );
  }

  // Sort products
  switch (sortType) {
    case "low-high":
      productsCopy.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      productsCopy.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return productsCopy;
}, [products, category, subcategory, sortType, search, showSearch]);


  return (
    <div className="px-6 sm:px-22">
      <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-gray-300">
        {/* Left Side - filters */}
        <div className="min-w-max sm:w-60">
          {/* FILTER toggle for small screens */}
          <p
            className="my-2 text-xl flex items-center cursor-pointer gap-2 sm:hidden"
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS
            <Image
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              width={16}
              height={16}
              className={`h-3 ${showFilter ? "rotate-90" : ""}`}
            />
          </p>

          {/* FILTER Heading */}
          <div className={`sm:block ${showFilter ? "" : "hidden"}`}>
            <h2 className="text-lg font-semibold mb-6">FILTERS</h2>

            {/* Category filter */}
            <div className="border border-gray-300 pl-5 py-3 mb-5">
              <p className="mb-3 text-sm font-medium">CATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Men", "Women", "Kids"].map((cat) => (
                  <p key={cat} className="flex items-center gap-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      value={cat}
                      checked={category.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Subcategory filter */}
            <div className="border border-gray-300 pl-5 py-3">
              <p className="mb-3 text-sm font-medium">SUBCATEGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
                  <p key={sub} className="flex items-center gap-2">
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      value={sub}
                      checked={subcategory.includes(sub)}
                      onChange={() => togglesubCategory(sub)}
                    />
                    <span>{sub}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - products */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-2">
            <Title text1="ALL" text2="COLLECTION" />

            {/* Sort dropdown */}
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="border border-gray-300 text-sm px-2 py-1 focus:outline-none"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Price (Low to High)</option>
              <option value="high-low">Sort by: Price (High to Low)</option>
            </select>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                title={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
