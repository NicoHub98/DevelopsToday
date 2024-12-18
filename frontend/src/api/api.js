import axios from "axios";

const BackURL = import.meta.env.VITE_APP_BACKEND_URL;

const api = axios.create({
  baseURL: BackURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
