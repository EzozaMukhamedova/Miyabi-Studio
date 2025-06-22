"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
}) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
