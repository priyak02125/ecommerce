"use client";

import React, { useState } from "react";
import api from "@/utils/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token , setToken] = useState("");
  console.log(token)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/user/login", {
        email,
        password,
      });

      console.log("Login success:", res.data);

      const accessToken = res.data.token; 
      setToken(accessToken);
      localStorage.setItem("auth", JSON.stringify(res.data));
      window.location.reload();
      
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p>Email Address</p>
            <input
              type="email"
              placeholder="your@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-700 mb-2"
            />
          </div>

          <div className="mb-3 min-w-72">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-md w-full px-3 py-2 border border-gray-700 mb-2"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
