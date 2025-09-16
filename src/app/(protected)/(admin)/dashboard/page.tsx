"use client";
import React, { useCallback } from "react";
import Dashboard_user from "@/components/context/dashboard/Dashboard_user";
import { useSidebarDesktop } from "@/components/providers/SidebarDesktopProvider";

const DashboardPage = () => {
  const { activeItem } = useSidebarDesktop();
  const snippet = useCallback(() => {
    switch (activeItem?.id) {
      case "Profile":
        return <Dashboard_user />;

      default:
        return <div>{activeItem?.label}</div>;
    }
  }, [activeItem]);
  return <div className="flex-1 overflow-y-auto p-4">{snippet()}</div>;
};

export default DashboardPage;
