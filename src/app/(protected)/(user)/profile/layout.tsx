import React from "react";
import { LayoutProvider } from "./context";
import { Sidebar_desktop } from "@/components/context/sidebar/sidebar-desktop";
import { SidebarDesktopProvider } from "@/components/providers/SidebarDesktopProvider";
import Profile_Header from "@/components/context/profile/Profile_Header";

const sidebarItems = [
  { id: "Profile", label: "My Profile", icon: "User", active: true },
  { id: "Orders", label: "My Orders", icon: "ShoppingBag" },
  { id: "Payments", label: "Payment Methods", icon: "CreditCard" },
  { id: "Loyalty", label: "Rewards & Loyalty", icon: "Gift" },
  { id: "Wishlist", label: "My Wishlist", icon: "Heart" },
  { id: "Support", label: "Help & Support", icon: "MessageCircle" },
  { id: "Settings", label: "Account Settings", icon: "Settings" },
];

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="flex justify-baseline items-start">
        <SidebarDesktopProvider sidebarItems={sidebarItems}>
          <LayoutProvider>
            <Sidebar_desktop />
            <main className="flex-1 overflow-y-auto content-height">
              <Profile_Header />
              {children}
            </main>
          </LayoutProvider>
        </SidebarDesktopProvider>
      </div>
    </div>
  );
};

export default ProfileLayout;
