"use client";

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ShopContext } from "../../store/ShopContext";

const Login = () => {
  const router = useRouter();
  const { token, setToken, backendUrl } = useContext(ShopContext);

  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (mode === "signup") {
        response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
      }

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(
          mode === "login" ? "Login successful 🎉" : "Account created 🎉"
        );
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
      console.error(error);
    }
  };

  // redirect after login
  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-md mx-auto mt-10 p-6 flex flex-col gap-4 border rounded"
    >
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <h2 className="text-3xl font-semibold">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>
      </div>

      {/* Name (signup only) */}
      {mode === "signup" && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      )}

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />

      {/* Switch mode */}
      <div className="flex justify-between text-sm">
        <p className="cursor-pointer text-gray-600">
          Forgot password?
        </p>
        {mode === "login" ? (
          <p
            onClick={() => setMode("signup")}
            className="cursor-pointer font-medium"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setMode("login")}
            className="cursor-pointer font-medium"
          >
            Login here
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-1/2 mx-auto bg-black text-white py-2 rounded"
      >
        {mode === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
