import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://tiko-fullstack-realtime-chat-app.onrender.com/api", // ✅ Add this
  withCredentials: true,
});

