"use client";
import React from "react";

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  category: { name: string; image: string } | null;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ open, onClose, category }) => {
  if (!open || !category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg max-w-[90%] w-[400px] shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute text-lg font-bold text-gray-500 top-2 right-3 hover:text-red-500"
        >
          &times;
        </button>
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-[200px] object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold text-center">{category.name}</h2>
        <p className="mt-2 text-sm text-center text-gray-600">Bu xizmat haqida batafsil ma'lumot shu yerda ko‘rsatiladi.</p>
      </div>
    </div>
  );
};

export default CategoryModal;
