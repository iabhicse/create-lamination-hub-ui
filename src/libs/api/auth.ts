// src/api/authAPI.ts
import { axiosInstance } from "./AxiosInstance";

import {
    LoginPayload,
    AuthResponse,
    LogoutResponse,
    RegisterPayload,
} from "@/types/auth";

export const registerAPI = async (data: RegisterPayload): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>("/auth/register", data);
    return response.data;
};

export const loginAPI = async (data: LoginPayload): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>("/auth/login", data);
    return response.data;
};

export const logoutAPI = async (): Promise<LogoutResponse> => {
    const response = await axiosInstance.post<LogoutResponse>("/auth/logout", {});
    return response.data;
};

axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        // Customize error handling
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);
