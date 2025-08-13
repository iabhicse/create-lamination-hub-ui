import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUserProfileRoleType } from "@/types/auth";

// User type
export interface AuthUser {
  id: string;
  user_id: string;
  email: string;
  fullname: string;
  avatar: string;
  role: IUserProfileRoleType;
  created_at: string;
  updated_at: string;
}

// Auth store state
interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  hasRole: (role: IUserProfileRoleType | IUserProfileRoleType[]) => boolean;
}

// Zustand store
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: (user) => {
        set({ user, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      hasRole: (role) => {
        const currentRole = get().user?.role;
        if (!currentRole) return false;
        return Array.isArray(role)
          ? role.includes(currentRole)
          : currentRole === role;
      },

      // Actions
      isAdmin: () => get().hasRole("ADMIN"),
    }),
    {
      name: "auth-storage", // localStorage key
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
