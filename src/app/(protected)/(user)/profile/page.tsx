"use client";
import React, { useCallback } from "react";
import { useSidebarDesktop } from "@/components/providers/SidebarDesktopProvider";
import Profile_User from "@/components/context/profile/Profile_User";
import Profile_orderPage from "@/components/context/profile/Profile_orderPage";

const ProfilePage = () => {
  const { activeItem } = useSidebarDesktop();
  const snippet = useCallback(() => {
    switch (activeItem?.id) {
      case "Profile":
        return <Profile_User />;

      case "Orders":
        return <Profile_orderPage />;

      default:
        return <div>{activeItem?.label}</div>;
    }
  }, [activeItem]);

  return <div className="flex-1 overflow-y-auto p-4">{snippet()}</div>;
};

export default ProfilePage;
