"use client";
import { useState, useRef, useEffect } from "react";
import { useAuthStore } from "@/libs/store/useAuthStore";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";
import Image_avatar from "@/components/ui/images/Image_avatar";

interface UserDropdownProps {
  isCollapsed: boolean;
}

export function UserDropdown({ isCollapsed }: UserDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userMenuItems = [
    { id: "profile", label: "Profile", href: "/profile", icon: "User" },
    { id: "billing", label: "Billing", href: "/billing", icon: "CreditCard" },
    { id: "settings", label: "Settings", href: "/settings", icon: "Settings" },
    { id: "help", label: "Help", href: "/help", icon: "Info" },
    { id: "logout", label: "Sign out", icon: "LogOut", danger: true },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center px-3 py-2.5 rounded-lg
          transition-all duration-200 ease-smooth
          group relative
          ${isCollapsed ? "justify-center hover:bg-none" : "space-x-4 hover:bg-primary/30"}
        `}
      >
        <div className="w-8 h-8 bg-primary/30 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer">
          <Image_avatar src={user?.avatar} />
        </div>

        {!isCollapsed && (
          <div className="flex-1 text-left min-w-0">
            <div className="text-sm font-medium text-muted truncate">
              {user?.fullname || "John Doe"}
            </div>
            <div className="text-xs text-muted truncate">
              {user?.email || "john@example.com"}
            </div>
          </div>
        )}

        {/* Tooltip for collapsed state */}
        {isCollapsed && (
          <div
            className="
            absolute left-full ml-2 px-2 py-1 
            bg-background border border-border
            rounded-md text-xs text-muted
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-200 ease-smooth
            pointer-events-none z-50 whitespace-nowrap
          "
          >
            {user?.fullname || "John Doe"}
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`
          absolute bottom-full mb-2 ${isCollapsed ? "left-full ml-2" : "left-0 right-0"}
          bg-background border border-border
          rounded-lg shadow-xl py-2 z-50
          ${isCollapsed ? "w-48" : "w-full"}
          animate-in slide-in-from-bottom-2 duration-200
        `}
        >
          {/* User Info Header (only when collapsed) */}
          {isCollapsed && (
            <div className="px-3 py-2 border-b border-border">
              <div className="text-sm font-medium text-muted-foreground">
                {user?.fullname || "John Doe"}
              </div>
              <div className="text-xs text-muted-foreground">
                {user?.email || "john@example.com"}
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="py-1">
            {userMenuItems.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsOpen(false);
                    // Handle menu item click
                    console.log(`Clicked: ${item.label}`);
                  }}
                  className={`
                    w-full hover:bg-primary/30 flex items-center space-x-3 px-3 py-2 text-left cursor-pointer
                    transition-colors duration-150 ease-smooth
                    ${
                      item.danger
                        ? "text-red-400 hover:bg-red-500/10 hover:text-red-300"
                        : "text-muted-foreground hover:bg-primary hover:text-muted"
                    }
                  `}
                >
                  <Lucid_Icon iconName={item.icon} className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
