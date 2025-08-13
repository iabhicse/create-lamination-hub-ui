"use client";
import React from "react";
import { toast } from "sonner";
import { logoutAPI } from "@/libs/api/api.auth";
import { useAuthStore } from "@/libs/store/useAuthStore";
import Button_underline from "@/components/ui/custom/Button_underline";

const Logout = () => {
  const { logout } = useAuthStore();
  const handleLogout = async () => {
    // Perform logout action
    const res = await logoutAPI();
    if (res?.status === "success") {
      toast.success(res.message);
      logout();
    }
  };
  return <Button_underline onClick={handleLogout}>Logout</Button_underline>;
};

export default Logout;
