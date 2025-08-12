"use client";
import React from "react";
import { toast } from "sonner";
import { logoutAPI } from "@/libs/api/api.auth";
import { Button } from "@/components/ui/shadcn/button";
import { useAuthStore } from "@/libs/store/useAuthStore";

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
    <Button onClick={handleLogout} variant={"gradient"}>
      Logout
    </Button>
  );
};

export default Logout;
