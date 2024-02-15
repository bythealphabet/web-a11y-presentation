"use client";
import { useEffect } from "react";
import { useKbShortcutState } from "@/store/useNavigationState";

export const useKeyboardShortcut = () => {
  const { isShortcutModalOpen, setIsShortcutModalOpen } = useKbShortcutState();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "?") {
        setIsShortcutModalOpen(!isShortcutModalOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShortcutModalOpen]);
};
