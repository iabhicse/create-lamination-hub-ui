"use client";
import React from "react";
import Button_centerUnderline from "@/components/ui/buttons/Button_centerUnderline";
import { useSession } from "@/components/providers/AuthProvider";

const Logout = () => {
  const { signoutUser } = useSession();
  const handleLogout = async () => {
    // Perform logout action
    signoutUser();
  };
  return (
    <Button_centerUnderline onClick={handleLogout} isActive={false}>
      Logout
    </Button_centerUnderline>
  );
};

export default Logout;
