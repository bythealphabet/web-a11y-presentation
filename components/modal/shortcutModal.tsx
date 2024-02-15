"use client";
import React from "react";
import clsx from "clsx";
import { useKbShortcutState } from "@/store/useNavigationState";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";

interface ShortcutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShortcutModal: React.FC<ShortcutModalProps> = ({ isOpen, onClose }) => {
  useKeyboardShortcut();
  const { isShortcutModalOpen, setIsShortcutModalOpen } = useKbShortcutState();

  if (!isShortcutModalOpen) return null;

  return (
    <dialog open={isShortcutModalOpen}>
      <div className="modal-content">
        <h2>Keyboard Shortcuts</h2>
        <ul>
          <li>
            <kbd>?</kbd> - Show this help
          </li>
          {/* Add more shortcuts here */}
        </ul>
        <button onClick={() => setIsShortcutModalOpen(false)}>Close</button>
      </div>
    </dialog>
  );
};

export default ShortcutModal;
