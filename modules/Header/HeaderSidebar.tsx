import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CartIcon,
  CompareIcon,
  HeartOutlineIcon,
  UserIcon,
} from "@/assets/icons";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HeaderSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const items = [
    {
      id: 1,
      icon: <CompareIcon />,
      label: "Compare",
      count: 3,
      link: "/compare",
    },
    {
      id: 2,
      icon: <HeartOutlineIcon />,
      label: "Wishlist",
      count: 5,
      link: "/liked",
    },
    {
      id: 3,
      icon: <CartIcon />,
      label: "Cart",
      count: 2,
      link: "/cart",
    },
    {
      id: 4,
      icon: <UserIcon />,
      label: "Profile",
      count: 0,
      link: "/profile",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl rounded-l-2xl py-6 px-5 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-right text-gray-500 hover:text-gray-700 self-end text-lg cursor-pointer"
            >
              ×
            </button>

            {/* Menu Items */}
            <div className="mt-4 flex flex-col gap-4">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={onClose}
                  className="flex items-center justify-between bg-[#F7F9FB] hover:bg-gradient-to-r hover:from-[#EBEFF3] hover:to-[#dce3eb] transition-all duration-300 ease-in-out px-4 py-3 rounded-xl shadow-sm hover:shadow-md group border border-transparent hover:border-[#134E9B]/30"
                >
                  <div className="flex items-center gap-3 text-[#134E9B]">
                    <div className="group-hover:scale-110 group-hover:rotate-1 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm text-[#545D6A] font-semibold transition-colors group-hover:text-[#134E9B]">
                      {item.label}
                    </span>
                  </div>
                  {item.count > 0 && (
                    <span className="text-xs bg-red-500 text-white rounded-full px-2 py-0.5 font-medium">
                      {item.count}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HeaderSidebar;
