"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import styles from "./modal.module.scss";
import clsx from "clsx";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Ref for the modal container

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Tab" && isOpen) {
        // Trap focus within the modal
        const focusableModalElements = modalRef.current
          ? modalRef.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          : [];
        const firstElement =
          focusableModalElements.length > 0
            ? (focusableModalElements[0] as HTMLElement)
            : null;
        const lastElement = focusableModalElements[
          focusableModalElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey) {
          /* Shift + Tab */ if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } /* Tab */ else {
          if (document.activeElement === lastElement && firstElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Only add the listener if the modal is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]); // Depend on isOpen and onClose to re-bind the event as needed

  useEffect(() => {
    if (isOpen) {
      // Record the currently focused element
      lastFocusedElementRef.current = document.activeElement as HTMLElement;
      // Focus the first focusable element in the modal, e.g., the close button or another element
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusableElement = focusableElements[0] as HTMLElement;
      firstFocusableElement.focus();
    } else if (lastFocusedElementRef.current) {
      // Restore focus to the last focused element outside the modal
      lastFocusedElementRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={clsx(styles.modal)}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      <div className={clsx(styles.modalContent)}>
        <button className={clsx(styles.closeButton)} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
