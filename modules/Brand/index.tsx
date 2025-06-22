// "use client";
// import React from "react";
// import "./style.css";

// const categories = [
//   { id: 1, name: "Soch turmaklash", image: "/images/soch turmaklari.png" },
//   { id: 2, name: "Manikyur", image: "/images/mankyur.jpg" },
//   { id: 3, name: "Kosmetologiya", image: "/images/kosmetolog2.png" },
//   { id: 4, name: "Massaj", image: "/images/massaj.jpg" },
//   { id: 5, name: "Lazer muolajalari", image: "/images/lazer.jpg" },
//   // { id: 5, name: "Soch parvarishi", image: "/images/tirnoq.jpg" },
//   { id: 6, name: "Kiprik", image: "/images/kiprik.png" },
//   { id: 7, name: "Makyaj", image: "/images/yuz.jpg" },
// ];

// function Brands() {
//   return (
//     <div className="max-w-[1240px] custom-grid m-auto mt-[100px] px-4">
//       {categories.map((category, index) => (
//         <div
//           key={category.id}
//           className={`grid-element-${
//             index + 1
//           } grid-element group relative overflow-hidden rounded-[6px]
//                       shadow-sm cursor-pointer transition-all duration-300 hover:scale-[0.97]`}
//           title={category.name}
//         >
//           <img
//             src={category.image}
//             alt={category.name}
//             className="object-cover w-full h-full "
//           />
//           <div className="absolute bottom-0 left-0 w-full py-2 text-sm text-center text-white transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
//             {category.name}
//           </div>
//         </div>
//       ))}

//       <div
//         key="more-button"
//         className="transition-all duration-300 transform cursor-pointer grid-element-8 hover:scale-105"
//       >
//         <button
//           className="w-full h-full bg-[#0F4A97] text-white font-medium rounded-[6px]
//                shadow-md hover:bg-[#0d3e7d] hover:shadow-lg
//                transition-colors duration-300 ease-in-out cursor-pointer"
//         >
//           Ko'proq
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Brands;

// app/components/Brands.tsx
"use client";
import React from "react";
import { Link } from "@/i18n/navigation";
import "./style.css";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    name: "Soch turmaklash",
    slug: "sochTurmaklash",
    image: "/images/soch turmaklari.png",
  },
  { id: 2, name: "Manikyur", slug: "manikyur", image: "/images/mankyur.jpg" },
  {
    id: 3,
    name: "Kosmetologiya",
    slug: "kosmetologiya",
    image: "/images/kosmetolog2.png",
  },
  { id: 4, name: "Massaj", slug: "massaj", image: "/images/massaj.jpg" },
  {
    id: 5,
    name: "Lazer muolajalari",
    slug: "lazer",
    image: "/images/lazer.jpg",
  },
  { id: 6, name: "Kiprik", slug: "kiprik", image: "/images/kiprik.png" },
  { id: 7, name: "Makyaj", slug: "makyaj", image: "/images/yuz.jpg" },
];

function Brands() {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/category/${slug}`);
  };

  return (
    <div className="max-w-[1240px] custom-grid m-auto mt-[100px] px-4">
      {categories.map((category, index) => (
        <div
          key={category.id}
          onClick={() => handleClick(category.slug)}
          className={`grid-element-${
            index + 1
          } grid-element group relative overflow-hidden rounded-[6px] 
                      shadow-sm cursor-pointer transition-all duration-300 hover:scale-[0.97]`}
          title={category.name}
        >
          <img
            src={category.image}
            alt={category.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 w-full py-2 text-sm text-center text-white transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
            {category.name}
          </div>
        </div>
      ))}

      <div
        key="more-button"
        className="transition-all duration-300 transform cursor-pointer grid-element-8 hover:scale-105"
      >
        <button
          className="w-full h-full bg-[#0F4A97] text-white font-medium rounded-[6px] 
               shadow-md hover:bg-[#0d3e7d] hover:shadow-lg 
               transition-colors duration-300 ease-in-out cursor-pointer"
        >
          Ko'proq
        </button>
      </div>
    </div>
  );
}

export default Brands;
