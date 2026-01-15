// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import api from "../utils/axios";

// const Add = () => {
//   const [image1, setImage1] = useState(false);
//   const [image2, setImage2] = useState(false);
//   const [image3, setImage3] = useState(false);
//   const [image4, setImage4] = useState(false);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("Men");
//   const [subCategory, setSubCategory] = useState("Topwear");
//   const [bestseller, setBestseller] = useState(false);
//   const [sizes, setSizes] = useState([]);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     const auth = JSON.parse(localStorage.getItem("auth"));
//     const token = auth?.token;

//     console.log(token);
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//       formData.append("bestseller", bestseller);
//       formData.append("sizes", JSON.stringify(sizes));

//       formData.append("image1", image1);
//       formData.append("image2", image2);
//       formData.append("image3", image3);
//       formData.append("image4", image4);

//       const response = await api.post(`/api/product/add`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className="flex flex-col w-full items-start gap-3"
//     >
//       <div>
//         <p>Upload Image</p>
//         <div className="flex gap-2">
//           <label htmlFor="image1">
//             <Image
//               className="w-20"
//               src={
//                 image1
//                   ? URL.createObjectURL(image1)
//                   : "/admin_assets/upload_area.png"
//               }
//               alt="upload_area"
//               width={100}
//               height={100}
//             />
//             <input
//               onChange={(e) => setImage1(e.target.files[0])}
//               type="file"
//               id="image1"
//               hidden
//             />
//           </label>

//           <label htmlFor="image2">
//             <Image
//               className="w-20"
//               src={
//                 image2
//                   ? URL.createObjectURL(image2)
//                   : "/admin_assets/upload_area.png"
//               }
//               alt="upload_area"
//               width={100}
//               height={100}
//             />
//             <input
//               onChange={(e) => setImage2(e.target.files[0])}
//               type="file"
//               id="image2"
//               hidden
//             />
//           </label>

//           <label htmlFor="image3">
//             <Image
//               className="w-20"
//               src={
//                 image3
//                   ? URL.createObjectURL(image3)
//                   : "/admin_assets/upload_area.png"
//               }
//               alt="upload_area"
//               width={100}
//               height={100}
//             />
//             <input
//               onChange={(e) => setImage3(e.target.files[0])}
//               type="file"
//               id="image3"
//               hidden
//             />
//           </label>

//           <label htmlFor="image4">
//             <Image
//               className="w-20"
//               src={
//                 image4
//                   ? URL.createObjectURL(image4)
//                   : "/admin_assets/upload_area.png"
//               }
//               alt="upload_area"
//               width={100}
//               height={100}
//             />
//             <input
//               onChange={(e) => setImage4(e.target.files[0])}
//               type="file"
//               id="image4"
//               hidden
//             />
//           </label>
//         </div>
//       </div>

//       <div className="w-full">
//         <p>Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-125 px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500] px-3 py-2"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2"
//           >
//             <option value="Men">Men</option>
//             <option value="Women">Women</option>
//             <option value="kids">Kids</option>
//           </select>
//         </div>

//         <div>
//           <p className="mb-2">Sub category</p>
//           <select
//             onChange={(e) => setSubCategory(e.target.value)}
//             className="w-full px-3 py-2"
//           >
//             <option value="Topwear">Topwear</option>
//             <option value="Bottomwear">Bottomwear</option>
//             <option value="Winterwear">Winterwear</option>
//           </select>
//         </div>

//         <div>
//           <p>Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-30"
//             type="number"
//             placeholder="25"
//           />
//         </div>
//       </div>

//       <div>
//         <p className="mb-2">Product Sizes</p>
//         <div className="flex gap-3">
//           {["S", "M", "L", "XL", "XXL"].map((size) => (
//             <div
//               key={size}
//               onClick={() =>
//                 setSizes((prev) =>
//                   prev.includes(size)
//                     ? prev.filter((item) => item !== size)
//                     : [...prev, size]
//                 )
//               }
//             >
//               <p
//                 className={`${
//                   sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"
//                 } px-3 py-1 cursor-pointer`}
//               >
//                 {size}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import api from "../utils/axios";
import Navabr from "../components/Navbar";

const Add = () => {
  // Image states
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [preview1, setPreview1] = useState("/admin_assets/upload_area.png");
  const [preview2, setPreview2] = useState("/admin_assets/upload_area.png");
  const [preview3, setPreview3] = useState("/admin_assets/upload_area.png");
  const [preview4, setPreview4] = useState("/admin_assets/upload_area.png");

  // Update previews when images change
  useEffect(() => {
    if (!image1) return;
    const objUrl = URL.createObjectURL(image1);
    setPreview1(objUrl);
    return () => URL.revokeObjectURL(objUrl);
  }, [image1]);

  useEffect(() => {
    if (!image2) return;
    const objUrl = URL.createObjectURL(image2);
    setPreview2(objUrl);
    return () => URL.revokeObjectURL(objUrl);
  }, [image2]);

  useEffect(() => {
    if (!image3) return;
    const objUrl = URL.createObjectURL(image3);
    setPreview3(objUrl);
    return () => URL.revokeObjectURL(objUrl);
  }, [image3]);

  useEffect(() => {
    if (!image4) return;
    const objUrl = URL.createObjectURL(image4);
    setPreview4(objUrl);
    return () => URL.revokeObjectURL(objUrl);
  }, [image4]);

  // Other product states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const auth = JSON.parse(localStorage.getItem("auth"));
    const token = auth?.token;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      const response = await api.post("/api/product/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Size toggle function
  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      
      {/* Image Upload */}
      <div>
        <p>Upload Image</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((num) => (
            <label key={num} htmlFor={`image${num}`}>
              <Image
                className="w-20"
                src={
                  num === 1
                    ? preview1
                    : num === 2
                    ? preview2
                    : num === 3
                    ? preview3
                    : preview4
                }
                alt="upload_area"
                width={100}
                height={100}
              />
              <input
                onChange={(e) =>
                  num === 1
                    ? setImage1(e.target.files[0])
                    : num === 2
                    ? setImage2(e.target.files[0])
                    : num === 3
                    ? setImage3(e.target.files[0])
                    : setImage4(e.target.files[0])
                }
                type="file"
                id={`image${num}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p>Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500] px-3 py-2"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Category, Subcategory, Price */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2"
            value={category}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-3 py-2"
            value={subCategory}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-30"
            type="number"
            placeholder="25"
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} onClick={() => toggleSize(size)}>
              <p
                className={`${
                  sizes.includes(size) ? "bg-pink-100" : "bg-slate-200"
                } px-3 py-1 cursor-pointer`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;

