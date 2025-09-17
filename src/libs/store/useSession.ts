// // store/useSession.ts
// import { create } from "zustand";
// import { sendToast } from "@/libs/utils/utils.app";
// import { handleErrorMessage } from "@/libs/api/api.axios";
// import { IUserProfileRoleType, User } from "@/types/auth";
// import { LoginFormInputs } from "@/components/context/auth/LoginPage";
// import { RegistrationFormInputs } from "@/components/context/auth/RegistrationPage";

// import {
//     loginAPI,
//     logoutAPI,
//     registerAPI,
//     getUserProfileAPI,
// } from "@/libs/api/api.auth";

// interface AuthState {
//     user: User | null;
//     isLoading: boolean;
//     isAuthenticated: boolean;
//     hasFetchedProfile: boolean;

//     // Actions
//     signinUser: (data: LoginFormInputs) => Promise<void>;
//     signupUser: (data: RegistrationFormInputs) => Promise<void>;
//     signoutUser: () => Promise<void>;
//     getUserProfile: () => Promise<void>;
//     hasRole: (role: IUserProfileRoleType | IUserProfileRoleType[]) => boolean;
//     isAdmin: () => boolean;
// }

// export const useSession = create<AuthState>((set, get) => ({
//     user: null,
//     isLoading: false,
//     isAuthenticated: false,
//     hasFetchedProfile: false,

//     signinUser: async (data) => {
//         set({ isLoading: true });
//         try {
//             const response = await loginAPI(data);
//             if (!response?.success || !response?.data) {
//                 throw new Error(response?.message || "Failed to sign in");
//             }

//             set({
//                 user: response.data,
//                 isAuthenticated: true,
//             });

//             sendToast(response.message || "Sign in successful");
//         } catch (error) {
//             handleErrorMessage(error);
//         } finally {
//             set({ isLoading: false });
//         }
//     },

//     signupUser: async (data) => {
//         set({ isLoading: true });
//         try {
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             const { confirmPassword, ...payload } = data;
//             const response = await registerAPI(payload);

//             if (!response?.success || !response?.data) {
//                 throw new Error(response?.message || "Failed to sign up");
//             }

//             set({
//                 user: response.data,
//                 isAuthenticated: true,
//             });

//             sendToast(response.message || "Sign up successful");
//         } catch (error) {
//             handleErrorMessage(error);
//         } finally {
//             set({ isLoading: false });
//         }
//     },

//     signoutUser: async () => {
//         try {
//             const response = await logoutAPI();
//             if (!response?.success) {
//                 throw new Error(response?.message || "Failed to sign out");
//             }

//             set({
//                 user: null,
//                 isAuthenticated: false,
//             });

//             sendToast("Signed out successfully");
//         } catch (error) {
//             handleErrorMessage(error);
//         }
//     },

//     getUserProfile: async () => {
//         const { user, isAuthenticated, hasFetchedProfile } = get();

//         // ✅ Avoid duplicate calls if already fetched
//         if (hasFetchedProfile || (isAuthenticated && user)) return;

//         set({ isLoading: true });

//         try {
//             const response = await getUserProfileAPI();
//             if (!response?.success || !response?.data) {
//                 throw new Error("Invalid session or missing user data");
//             }

//             set({
//                 user: response.data,
//                 isAuthenticated: true,
//                 hasFetchedProfile: true, // ✅ Mark as fetched
//             });
//         } catch (error) {
//             if (process.env.NODE_ENV === "development") {
//                 console.error("getUserProfile error:", error);
//             }
//             set({ user: null, isAuthenticated: false, hasFetchedProfile: false });
//         } finally {
//             set({ isLoading: false });
//         }
//     },

//     hasRole: (role) => {
//         const currentRole = get().user?.role;
//         if (!currentRole) return false;
//         return Array.isArray(role)
//             ? role.includes(currentRole)
//             : currentRole === role;
//     },

//     isAdmin: () => get().hasRole("ADMIN"),
// }));
