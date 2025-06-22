"use client";
import { API } from "@/hooks/getEnv";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
import React from "react";
import "./style.css";
function CategoryBrandList() {
  const { data: brandCategories } = getCategories();

  return (
    <div className="containers item_wrapper ">
      {brandCategories
        ?.slice(0, -1)
        .map((item: HeaderCategoriesType, index: number) => (
          <div
            key={item.id}
            className={`item-${item.id} 
                      transition-all duration-300 ease-in-out transform
                      hover:scale-[0.97] hover:opacity-90 hover:shadow-md 
                      hover:ring-2 hover:ring-[#0f4a9794] hover:ring-offset-2 
                      rounded-[6px] cursor-pointer`}
          >
            <img
              src={`${API}/uploads/${item?.image}`}
              alt="brand category image"
            />
            <span
              className="
    absolute 
    top-3 left-2 
    text-white 
    px-4 py-[2px] 
    rounded-full 
    text-[12px] 
    bg-gradient-to-r from-black/60 to-black/20 
    backdrop-blur-sm 
    border border-white/20 
    shadow-md 
    z-40
    cursor-pointer

    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-lg hover:backdrop-blur-md hover:bg-black/30

    md:text-[12px] md:px-4 md:py-[2px]         
    sm:text-[10px] sm:px-3 sm:py-[1.5px]       
    max-[400px]:text-[8px] max-[400px]:px-2 max-[400px]:py-[1px]
  "
            >
              {item.name}
            </span>
          </div>
        ))}
        
      {/* <button
        className="item-koproq w-full h-full bg-[#0F4A97] text-white font-medium 
             rounded-[6px] shadow-md cursor-pointer 
             transition-all duration-300 ease-in-out transform 
             hover:bg-[#0d3e7d] hover:shadow-lg  hover:scale-[0.97] 
             hover:ring-2 hover:ring-white hover:ring-offset-2"
      >
        Ko'proq
      </button> */}
    </div>
  );
}

export default CategoryBrandList;
