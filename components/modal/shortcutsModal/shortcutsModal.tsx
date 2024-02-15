"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { useKbShortcutState } from "@/store/useNavigationState";
import { useKeyboardShortcut } from "@/hooks/useKeyboardShortcut";
import scModalStyles from "./shortcutsModal.module.scss";

function ShortcutsModal() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  useKeyboardShortcut();
  const { isShortcutModalOpen, setIsShortcutModalOpen } = useKbShortcutState();

  const dialogHandler = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setIsShortcutModalOpen(false);
    }
  };

  useEffect(() => {
    if (isShortcutModalOpen) {
      dialogRef.current?.showModal();
    }
  }, [isShortcutModalOpen]);

  if (!isShortcutModalOpen) return null;

  return (
    <div className={clsx("sub-grid", scModalStyles.root)}>
      <dialog className={scModalStyles.dialog} ref={dialogRef}>
        <div className="modal-content">
          <h2>Keyboard Shortcuts</h2>
          <ul>
            <li>
              <kbd>?</kbd> - Show this help
            </li>
            {/* Add more shortcuts here */}
          </ul>
          <button onClick={dialogHandler}>Close</button>
        </div>
      </dialog>
    </div>
  );
}

export default ShortcutsModal;
