import axios from "axios";
import { envBackendConfig } from "../env/env.backend";

// Only used for logging/debugging in development
const isDev = process.env.NODE_ENV === "development";

// Create Axios instance
export const axiosInstance = axios.create({
  baseURL: envBackendConfig.APP_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Required for cookie/session auth
});

// Optional: Logging interceptor for development
if (isDev) {
  axiosInstance.interceptors.request.use((config) => {
    console.log("[Axios Request]", config);
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log("[Axios Response]", response);
      return response;
    },
    (error) => {
      console.error("[Axios Error]", error);
      return Promise.reject(error);
    }
  );
}
