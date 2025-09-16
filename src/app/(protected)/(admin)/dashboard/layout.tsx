import React from "react";
import { LayoutProvider } from "./context";
import Profile_Header from "@/components/context/profile/Profile_Header";
import { Sidebar_desktop } from "@/components/context/sidebar/sidebar-desktop";
import { SidebarDesktopProvider } from "@/components/providers/SidebarDesktopProvider";

const sidebarItems = [
  { id: "Profile", label: "My Profile", icon: "User", active: true },
  { id: "Products", label: "Manage Products", icon: "Box" },
  { id: "Orders", label: "Order Management", icon: "ShoppingCart" },
  { id: "Customers", label: "Customer Insights", icon: "Brain" },
  { id: "Analytics", label: "Sales Analytics", icon: "ChartLine" },
  { id: "Promotions", label: "Discounts & Coupons", icon: "Tag" },
  { id: "Reviews", label: "Product Reviews", icon: "Star" },
  { id: "Support", label: "Support Tickets", icon: "MessageCircle" },
  { id: "Settings", label: "Shop Settings", icon: "Settings" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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

export default DashboardLayout;
