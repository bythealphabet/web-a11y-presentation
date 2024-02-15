import { create } from "zustand";

export const useNavigationState = create<{
  isMenuOpen: boolean;
  setIsMenuOpen: (i: boolean) => void;
}>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen }),
}));

export const useKbShortcutState = create<{
  isShortcutModalOpen: boolean;
  setIsShortcutModalOpen: (i: boolean) => void;
}>((set) => ({
  isShortcutModalOpen: false,
  setIsShortcutModalOpen: (isShortcutModalOpen: boolean) =>
    set({ isShortcutModalOpen }),
}));
