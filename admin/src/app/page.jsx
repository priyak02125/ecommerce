"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

const Page = () => {
  const [token, setToken] = useState(null);
  console.log(token);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const parsedAuth = JSON.parse(auth);
      setToken(parsedAuth?.token);
    } else {
      setToken(null);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {!token ? (
        <Login />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />

          {/* <div className="flex w-full">
            <Sidebar />

            <div className="w-[70%] mx-auto my-8 text-gray-600">
              <div className="flex gap-6">
                <Link href="/add"></Link>
                <Link href="/list"></Link>
                <Link href="/orders"></Link>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Page;
