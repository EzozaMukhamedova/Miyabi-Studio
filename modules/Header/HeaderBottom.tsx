// "use client";
// // import HeaderForm from "@/components/HeaderForm";
// import { useRouter } from "@/i18n/navigation";
// import { getCategories } from "@/service/getCategories";
// import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
// import { useSearchParams } from "next/navigation";
// import React from "react";

// function HeaderBottom() {
//   const { data: categories, isLoading, isError } = getCategories();
//   const loadingDivs = new Array(8).fill(null);
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const handleGoCategory = (id: number) => {
//     const params = new URLSearchParams(searchParams?.toString());
//     params.set("category", String(id));
//     router.push(`/product?${params.toString()}`);
//   };
//   return (
//     <>
//       <div className="containers max-xl:hidden flex justify-between items-center text-[#545D6A] gap-2 flex-wrap">
//         {/* Loading bo‘lsa */}
//         {isLoading || isError ? (
//           loadingDivs.map((_, index) => (
//             <div
//               key={index}
//               className="w-[10%] h-[18px] my-[3px] loading"
//             ></div>
//           ))
//         ) : (
//           <>
//             {/* Dinamik kategoriyalar */}
//             {categories?.map((category: HeaderCategoriesType) => (
//               <p
//                 onClick={() => handleGoCategory(category.id)}
//                 className="hover:text-[#134E9B] duration-500 cursor-pointer"
//                 key={category.id}
//               >
//                 {category.name}
//               </p>
//             ))}

//             {/* Qo‘shimcha beauty xizmatlari */}
//             <p className="hover:text-[#134E9B] duration-500 cursor-pointer">
//               Soch turmaklash
//             </p>
//             <p className="hover:text-[#134E9B] duration-500 cursor-pointer">
//               Manikyur
//             </p>
//             <p className="hover:text-[#134E9B] duration-500 cursor-pointer">
//               Kosmetologiya
//             </p>
//             <p className="hover:text-[#134E9B] duration-500 cursor-pointer">
//               Massaj
//             </p>
//           </>
//         )}
//       </div>

//       {/* <div className="xl:hidden containers">
//         <HeaderForm />
//       </div> */}
//     </>
//   );
// }

// export default HeaderBottom;

"use client";

import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

function HeaderBottom() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleGoCategory = (id: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("category", String(id));
    router.push(`/product?${params.toString()}`);
  };

  // Statik xizmatlar (frontendda qattiq yozilgan)
  const beautyServices = [
    { id: 1001, name: "Soch turmaklash" },
    { id: 1007, name: "Makyaj" },
    { id: 1003, name: "Kosmetologiya" },
    { id: 1006, name: "Kiprik" },
    { id: 1002, name: "Manikyur" },
    { id: 1004, name: "Massaj" },
    { id: 1005, name: "Lazer muolajalari" },
  ];

  return (
    <div className="containers mx-auto flex justify-between items-center text-[#545D6A] gap-3 flex-wrap py-2">
      {beautyServices.map((service) => (
        <p
          key={service.id}
          onClick={() => handleGoCategory(service.id)}
          className="hover:text-[#134E9B] duration-300 cursor-pointer"
        >
          {service.name}
        </p>
      ))}
    </div>
  );
}

export default HeaderBottom;
