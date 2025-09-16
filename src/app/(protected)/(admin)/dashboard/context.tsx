"use client";
import React, { useContext, createContext, useCallback, useMemo } from "react";
import {
  SchemaKey,
  SchemaType,
} from "@/components/context/profile/forms/profile.main";

export type SchemaKeyType = SchemaKey | null;

interface ProfileContextValue {
  submitHandler: (data: SchemaType<SchemaKey>, schemaKey: SchemaKey) => void;
}

const ProfileContext = createContext<ProfileContextValue | undefined>(
  undefined
);

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const submitHandler = useCallback(
    (data: SchemaType<SchemaKey>, schemaKey: SchemaKey) => {
      console.info(`[ProfileContext] ${schemaKey} submitted`, data);
      // Add actual submission logic here
    },
    []
  );

  const value = useMemo(
    () => ({
      submitHandler,
    }),
    [submitHandler]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

const useLayoutDashboard = (): ProfileContextValue => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useDashboardContext must be used within a LayoutProvider");
  }
  return context;
};

export { LayoutProvider, useLayoutDashboard };
