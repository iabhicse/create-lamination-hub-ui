"use client";
import { useEffect, useRef } from "react";
import { useSession } from "./AuthProvider";

export const AuthHydrator = () => {
  const hasFetchedRef = useRef(false);
  const { getUserProfile } = useSession();

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    // Ensure profile fetch completes before allowing re-entry
    getUserProfile().catch((err) => {
      if (process.env.NODE_ENV === "development") {
        console.error("AuthHydrator fetch failed:", err);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
