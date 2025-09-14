"use client";
import clsx from "clsx";
import { UserDropdown } from "./user-dropdown";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarDesktop } from "@/components/providers/SidebarDesktopProvider";

export function Sidebar_desktop() {
  const { isOpen, sidebarActiveList, activeItem, setActiveTab, setIsOpen } =
    useSidebarDesktop();

  return (
    <div
      className={`content-height bg-background flex flex-col transition-all duration-300 ease-smooth ${
        isOpen ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="p-4 shadow-sm">
        <div className="flex items-center justify-between">
          {!isOpen && (
            <div className="flex items-center space-x-2">
              <div className="text-lg font-semibold">{activeItem?.label}</div>
            </div>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 cursor-pointer rounded-lg text-muted hover:bg-primary/30 hover:text-muted-foreground transition-all duration-200 ease-smooth"
          >
            {isOpen ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={clsx(
          "flex-1 p-4 overflow-y-auto overflow-x-hidden",
          isOpen
            ? " scrollbar-hide scroll-smooth"
            : " scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
        )}
      >
        <nav className="space-y-2">
          {sidebarActiveList.map((item) => {
            return (
              <button
                key={item.id}
                className={`cursor-pointer w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 ease-smooth group relative ${
                  isOpen ? "justify-center" : "space-x-4"
                } ${
                  item.active
                    ? "bg-primary/30 text-muted shadow-sm"
                    : "text-muted-foreground hover:bg-primary/30 hover:text-muted-foreground"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Lucid_Icon
                  iconName={item.icon}
                  className="w-5 h-5 flex-shrink-0"
                />
                {!isOpen && (
                  <span className="font-medium text-sm">{item.label}</span>
                )}
                {/* {isOpen && (
                  <div className="absolute -left-full -top-1/4 ml-2 px-2 py-1 bg-primary border border-border rounded-md text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-smooth pointer-events-none z-100 whitespace-nowrap">
                    {item.label}
                  </div>
                )} */}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Static User Profile Section */}
      <div className="p-4 border-t border-border">
        <UserDropdown isCollapsed={isOpen} />
      </div>
    </div>
  );
}
