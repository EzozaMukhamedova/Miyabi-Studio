"use client";
import { ActionsButtonType } from "@/types/ButtonType";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const ActionButton: FC<ActionsButtonType> = ({ id, icon, to, count }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        if (to) {
          router.push(to);
        } else {
          console.error("`to` value is undefined or invalid");
        }
      }}
      className="w-[54px] text-[#545D6A] cursor-pointer h-[54px] flex justify-center items-center relative rounded-[6px] bg-[#EBEFF3]"
    >
      {icon}
      {!count ||
        (count !== 0 && (
          <span className="w-[20px] h-[20px] bg-[#E81504] text-white font-bold text-[10px] rounded-[50%] flex items-center justify-center absolute top-[-10px] right-[-10px]">
            {count}
          </span>
        ))}
    </button>
  );
};

export default ActionButton;
