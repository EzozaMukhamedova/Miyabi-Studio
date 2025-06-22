"use client";
import { Context } from "@/context/Context";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
import Image from "next/image";
import React, { useContext, useState } from "react";

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context);
  const { data: categories } = getCategories();
  const [hoveredCategory, setHoveredCategory] =
    useState<HeaderCategoriesType | null>(null);

  return (
    <div
      className={`${
        showCategory
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      } transition-all duration-300 absolute z-[9999] left-1/2 top-[180px] -translate-x-1/2 w-full max-w-[1180px] bg-white rounded-2xl shadow-2xl overflow-hidden`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Categories */}
        <div className="w-full md:w-[35%] bg-gradient-to-br from-[#f5f7fa] to-[#e1e7ef] p-6 space-y-3 overflow-y-auto max-h-[75vh]">
          {categories?.map((item: HeaderCategoriesType) => (
            <Link
              key={item.id}
              href="/"
              onMouseEnter={() => setHoveredCategory(item)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 bg-[#ffffff52] hover:bg-[#EBEFF3]/90 hover:text-[#134E9B]  hover:shadow-md"
            >
              <Image
                src={`${IMG_API}/${item.icon}`}
                alt={item.name}
                width={28}
                height={28}
                className="w-[28px] h-[28px] object-contain"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Preview Panel */}
        <div className="hidden md:flex w-[65%] bg-white p-8 items-center justify-center">
          {hoveredCategory ? (
            <div className="text-center space-y-3 animate-fadeIn">
              <Image
                src={`${IMG_API}/${hoveredCategory.icon}`}
                alt={hoveredCategory.name}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-[#134E9B]">
                {hoveredCategory.name}
              </h4>
              <p className="text-gray-600 text-sm">
                Bu kategoriya ichida turli mahsulotlar mavjud. Batafsil ko‘rish
                uchun bosing.
              </p>
              <Link
                href="/product"
                className="inline-block mt-3 px-5 py-2 rounded-full bg-[#134E9B] text-white text-sm hover:bg-[#0e3e7a] transition-colors"
              >
                Mahsulotlarni ko‘rish
              </Link>
            </div>
          ) : (
            <div className="text-center text-gray-400 text-sm">
              Kategoriya ustiga bosganingizda bu yerda maʼlumot chiqadi.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderPopapCategory;
