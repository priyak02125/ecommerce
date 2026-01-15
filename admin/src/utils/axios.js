import axios from "axios";

let token = null;

if (typeof window !== "undefined") {
  const auth = JSON.parse(localStorage.getItem("auth"));
  token = auth?.token;
}

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default api;
