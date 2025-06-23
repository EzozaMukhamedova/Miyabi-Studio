"use client";
import { CartIcon, CompareIcon, HeartOutlineIcon } from "@/assets/icons";
import HeaderForm from "@/components/HeaderForm";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderActions from "../../components/Actions";
import HeaderPopapCategory from "./HeaderPopapCategory";
import { Auth } from "./Authentication";
import { Menu } from "lucide-react";
import HeaderSidebar from "./HeaderSidebar";

function HeaderCenter() {
  const buttons = [
    { id: 1, icon: <CompareIcon />, count: 7, to: "/compare" },
    { id: 2, icon: <HeartOutlineIcon />, count: 11, to: "/liked" },
    { id: 3, icon: <CartIcon />, count: 7, to: "/cart" },
    { id: 4, icon: <Auth />, count: 0, to: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="containers w-full py-4 !mb-[32px] md:!mt-[54px] !mt-[20px]">
      <div className="flex items-center justify-between md:justify-start md:gap-6">
        <Link
          href="/"
          className="flex items-center gap-0 text-[#134E9B]" 
        >
          <Image
            src="/images/miyabii.png"
            alt="Miyabi Studio Logo"
            width={80}
            height={80}
            className="object-contain w-9 h-9 md:w-20 md:h-20"
          />

          <span className="text-[#4E3629] text-xl sm:text-2xl md:text-3xl font-extrabold leading-none tracking-tight">
            Beauty Park
          </span>
        </Link>

        <div className="block md:hidden text-[#134E9B] font-medium text-[14px]">
          +998 (99) 897-45-85
        </div>

        {/* <button className="md:hidden">
          <Menu size={24} />
        </button> */}

        <div
          className="cursor-pointer sm:hidden"
          tabIndex={0}
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </div>
        <HeaderSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <div className="items-center hidden gap-4 ml-auto md:flex">
          <HeaderForm />
          {buttons.map((item) => (
            <HeaderActions
              key={item.id}
              icon={item.icon}
              count={item.count}
              to={item.to}
              id={item.id}
            />
          ))}
          <HeaderPopapCategory />
        </div>
      </div>

      <div className="flex w-full gap-2 mt-4 md:hidden">
        <HeaderForm />
        <HeaderPopapCategory />
      </div>
    </div>
  );
}

export default HeaderCenter;
