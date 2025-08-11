import axios from "axios";
import { envBackendConfig } from "../configs/config.env";

export const axiosInstance = axios.create({
    baseURL: envBackendConfig.APP_BACKEND_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // required if backend sets cookies or session
});
