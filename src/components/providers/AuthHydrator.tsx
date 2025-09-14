import { useEffect, useRef } from "react";
import { useSession } from "@/libs/store/useSession";

export const AuthHydrator = () => {
  const hasFetchedRef = useRef(false);
  const { getUserProfile } = useSession();

  useEffect(() => {
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      getUserProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // Just a silent sync component
};
