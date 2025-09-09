"use client";
import { SidebarItem } from "@/types/app";
import {
  useState,
  useEffect,
  Dispatch,
  useContext,
  SetStateAction,
  createContext,
} from "react";

export interface SidebarDesktopContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeItem: SidebarItem | undefined;
  sidebarActiveList: SidebarItem[];
}

const SidebarDesktopContext = createContext<
  SidebarDesktopContextType | undefined
>(undefined);

const SidebarDesktopProvider = ({
  sidebarItems,
  children,
}: {
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const sidebarActiveList = sidebarItems.map((item: SidebarItem) => {
    return { ...item, active: item.id === activeTab };
  });

  const activeItem = sidebarActiveList.find((item) => item.active);

  useEffect(() => {
    const activeItem = sidebarItems.find((item) => item.active);
    setActiveTab(activeItem?.id ?? "");
    return () => {
      setActiveTab("");
    };
  }, [sidebarItems]);

  const value = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    setActiveTab: setActiveTab,
    activeItem: activeItem,
    sidebarActiveList: sidebarActiveList,
  };
  return (
    <SidebarDesktopContext.Provider value={value}>
      {children}
    </SidebarDesktopContext.Provider>
  );
};

const useSidebarDesktop = () => {
  const context = useContext(SidebarDesktopContext);
  if (!context) {
    throw new Error(
      "useSidebarDesktop must be used within SidebarDesktopContextProvider"
    );
  }
  return context;
};

export { SidebarDesktopProvider, useSidebarDesktop };
