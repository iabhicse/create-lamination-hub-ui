"use client";
import React from "react";
import { useSidebarDesktop } from "@/components/providers/SidebarDesktopProvider";

const DashboardPage = () => {
  const { activeItem } = useSidebarDesktop();
  return <div className="flex-1 overflow-y-auto p-4">{activeItem?.label}</div>;
};

export default DashboardPage;
