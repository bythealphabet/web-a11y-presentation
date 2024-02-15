import { create } from "zustand";

export const useNavigationState = create<{
  isMenuOpen: boolean;
  setIsMenuOpen: (i: boolean) => void;
}>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
}));
