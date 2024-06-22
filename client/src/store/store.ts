import { create } from "zustand";
import { User } from "../services/interfaces";

// Global states needed
/**
 * User
 * Posts (all)
 * Users (all)
 * Settings theme (maybe)
 */

// Local States (do not need store)

/**
 * Form fields
 * Settings
 */

//! Use React Query to make the API calls and just store the results here

type UserStore = {
  user: User | null;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));
