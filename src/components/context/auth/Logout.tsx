"use client";
import React from "react";
import { toast } from "sonner";
import { logoutAPI } from "@/libs/api/api.auth";
import { useAuthStore } from "@/libs/store/useAuthStore";
import Button_centerUnderline from "@/components/ui/buttons/Button_centerUnderline";

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
  return (
    <Button_centerUnderline onClick={handleLogout} isActive={false}>
      Logout
    </Button_centerUnderline>
  );
};

export default Logout;
