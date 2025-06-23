// "use client";
// import { Context } from "@/context/Context";
// import { IMG_API } from "@/hooks/getEnv";
// import { Link } from "@/i18n/navigation";
// import { getCategories } from "@/service/getCategories";
// import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
// import Image from "next/image";
// import React, { useContext, useState } from "react";

// const HeaderPopapCategory = () => {
//   const { showCategory } = useContext(Context);
//   const { data: categories } = getCategories();
//   const [hoveredCategory, setHoveredCategory] =
//     useState<HeaderCategoriesType | null>(null);

//   return (
//     <div
//       className={`${
//         showCategory
//           ? "opacity-100 scale-100"
//           : "opacity-0 scale-95 pointer-events-none"
//       } transition-all duration-300 absolute z-[9999] left-1/2 top-[180px] -translate-x-1/2 w-full max-w-[1180px] bg-white rounded-2xl shadow-2xl overflow-hidden`}
//     >
//       <div className="flex flex-col md:flex-row">
//         {/* Sidebar Categories */}
//         <div className="w-full md:w-[35%] bg-gradient-to-br from-[#f5f7fa] to-[#e1e7ef] p-6 space-y-3 overflow-y-auto max-h-[75vh]">
//           {categories?.map((item: HeaderCategoriesType) => (
//             <Link
//               key={item.id}
//               href="/"
//               onMouseEnter={() => setHoveredCategory(item)}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 bg-[#ffffff52] hover:bg-[#EBEFF3]/90 hover:text-[#134E9B]  hover:shadow-md"
//             >
//               <Image
//                 src={`${IMG_API}/${item.icon}`}
//                 alt={item.name}
//                 width={28}
//                 height={28}
//                 className="w-[28px] h-[28px] object-contain"
//               />
//               <span className="text-sm font-medium">{item.name}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Preview Panel */}
//         <div className="hidden md:flex w-[65%] bg-white p-8 items-center justify-center">
//           {hoveredCategory ? (
//             <div className="space-y-3 text-center animate-fadeIn">
//               <Image
//                 src={`${IMG_API}/${hoveredCategory.icon}`}
//                 alt={hoveredCategory.name}
//                 width={64}
//                 height={64}
//                 className="mx-auto mb-4"
//               />
//               <h4 className="text-xl font-semibold text-[#134E9B]">
//                 {hoveredCategory.name}
//               </h4>
//               <p className="text-sm text-gray-600">
//                 Bu kategoriya ichida turli mahsulotlar mavjud. Batafsil ko‘rish
//                 uchun bosing.
//               </p>
//               <Link
//                 href="/product"
//                 className="inline-block mt-3 px-5 py-2 rounded-full bg-[#134E9B] text-white text-sm hover:bg-[#0e3e7a] transition-colors"
//               >
//                 Mahsulotlarni ko‘rish
//               </Link>
//             </div>
//           ) : (
//             <div className="text-sm text-center text-gray-400">
//               Kategoriya ustiga bosganingizda bu yerda maʼlumot chiqadi.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderPopapCategory;

"use client";
import { Context } from "@/context/Context";
import { staticCategories } from "../../app/constants/staticCategories";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useContext, useState } from "react";

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context);
  const [hoveredCategory, setHoveredCategory] = useState<
    null | (typeof staticCategories)[0]
  >(null);

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
          {staticCategories.map((item) => (
            <Link
              key={item.id}
              href={`/category/${item.slug}`}
              onMouseEnter={() => setHoveredCategory(item)}
              className="flex items-center gap-4 px-4 py-3 transition-all duration-200 shadow-sm rounded-xl bg-white/60 hover:bg-white group hover:shadow-md"
            >
              <div className="w-10 h-10 overflow-hidden transition-transform duration-200 rounded-full shadow-inner group-hover:scale-105">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>

              <span className="text-sm font-medium text-gray-800 group-hover:text-[#e48c47] transition-colors duration-300">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Preview Panel */}
        <div className="hidden md:flex w-[65%] bg-white p-8 items-center justify-center">
          {hoveredCategory ? (
            <div className="space-y-4 text-center animate-fadeIn">
              {/* Rasm kartasi */}
              <div className="w-[104px] h-[104px] mx-auto rounded-full overflow-hidden shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-300">
                <Image
                  src={hoveredCategory.icon}
                  alt={hoveredCategory.name}
                  width={104}
                  height={104}
                  className="object-cover w-full h-full cursor-pointer"
                />
              </div>

              {/* Kategoriya nomi */}
              <h4 className="text-2xl font-semibold text-[#4e3629]">
                {hoveredCategory.name}
              </h4>

              {/* Tavsif */}
              <p className="px-4 text-sm leading-relaxed text-gray-600">
                Bu kategoriya ichida turli xizmatlar mavjud. Batafsil ko‘rish
                uchun bosing.
              </p>

              {/* Tugma */}
              <Link
                href={`/category/${hoveredCategory.slug}`}
                className="inline-block mt-3 px-6 py-2.5 rounded-full 
                   bg-[#e48c47] text-white text-sm font-medium
                   hover:bg-[#b85f2b] transition-all duration-300 
                   shadow-md hover:shadow-lg"
              >
                Batafsil ko‘rish
              </Link>
            </div>
          ) : (
            <div className="text-sm text-center text-gray-400">
              Kategoriya ustiga bosganingizda bu yerda maʼlumot chiqadi.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderPopapCategory;
