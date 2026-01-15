"use client";

import Image from "next/image";
import api from "@/utils/axios";

const Navbar = ({ setToken }) => {
  const logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setToken(null);

    try {
      const res = await api.post("/api/user/logout");

      console.log("logout success:", res.data);
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <Image src="/logo1.png" alt="logo" width={150} height={100} />
      <button
        onClick={logout}
        className="bg-gray-600 text-white px-5 py-2 rounded-full text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
