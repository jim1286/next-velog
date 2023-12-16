import axios from "axios";
import { getToken } from "./token.service";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 1000 * 15,
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();

    config.headers["Content-Type"] = "application/json";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token.accessToken}`;
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
