// "use client";
// import { getProducts } from "@/service/getProducts";
// import React, { useContext } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { settings } from "./SlideConfig/index";
// import ProductCard from "./ProductCardItem";
// import { ProductType } from "@/types/ProductType";
// import { ThemeContext } from "@/context/ThemeContextProvider";

// function Products({ title, api }: { title: string; api: string }) {
//   const { data: products, isLoading, isError } = getProducts(api);
//   const { theme } = useContext(ThemeContext);

//   if (isLoading || isError) {
//     return (
//       <div
//         className={`m-auto py-4 ${
//           theme === "dark" ? "bg-[#333]" : "bg-white"
//         } `}
//       >
//         <h2
//           className={`text-4xl max-co font-bold !my-11 containers ${
//             theme === "dark" ? "text-white" : "text-black"
//           } `}
//         >
//           {title}
//         </h2>
//         <Slider {...settings} autoplay={false}>
//           {[...Array(5)].map((_, index) => (
//             <div key={index} className="p-2">
//               <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center text-blue-500/20 skeleton rounded-lg loading ">
//                 {isLoading ? "Yuklanmoqda..." : "Yuklashda xatolik yuz berdi"}
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     );
//   }

//   return (
//     <>
//       <h2 className="font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]">
//         {title}
//       </h2>
//       <div className="max-[690px]:hidden ">
//         <Slider {...settings}>
//           {products?.map((product: ProductType, index: number) => (
//             <ProductCard key={product.id || index} product={product} />
//           ))}
//         </Slider>
//       </div>
//       <div className="min-[690px]:hidden grid grid-cols-3 max-[640px]:grid-cols-2 px-2.5 gap-[15px] ">
//         {products?.slice(0, 6)?.map((product: ProductType, index: number) => (
//           <ProductCard key={product.id || index} product={product} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Products;

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/components/Products/SlideConfig/index";
import ProductCard from "@/components/Products/ProductCardItem";
import { ProductType } from "@/types/ProductType";

const dummyProducts: ProductType[] = [
  {
    id: 1,
    name: "Soch turmaklash",
    image: "/images/beauty11.png",
    price: "100000",
    is_liked: false,
    category_id: 1,
    description: "Soch turmaklash xizmatlari",
  },
  {
    id: 2,
    name: "Manikyur",
    image: "/images/mankyur.jpg",
    price: "80000",
    is_liked: false,
    category_id: 2,
    description: "Chiroyli manikyur dizaynlari",
  },
  {
    id: 3,
    name: "Kosmetologiya",
    image: "/images/teri.png",
    price: "120000",
    is_liked: false,
    category_id: 3,
    description: "Terini parvarishlash muolajalari",
  },
  {
    id: 4,
    name: "Massaj",
    image: "/images/massaj.jpg",
    price: "150000",
    is_liked: false,
    category_id: 4,
    description: "Yengil va terapevtik massaj xizmati",
  },
  {
    id: 5,
    name: "Kiprik",
    image: "/images/kiprikcha.png", 
    price: "60000",
    is_liked: false,
    category_id: 5,
    description: "Kiprik bo‘yash va uzaytirish",
  },
  {
    id: 6,
    name: "Yuz bo‘yoqlari",
    image: "/images/yuz.png",
    price: "90000",
    is_liked: false,
    category_id: 6,
    description: "Professional make-up xizmati",
  },
];

export default function DemoProductsPage() {
  return (
    <>
      <h2 className="font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]">
        Chegirmadagi xizmatlar
      </h2>

      {/* Desktop: Slider */}
      <div className="max-[690px]:hidden">
        <Slider {...settings}>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>

      {/* Mobile: Grid */}
      <div className="min-[690px]:hidden grid grid-cols-3 max-[640px]:grid-cols-2 px-2.5 gap-[15px]">
        {dummyProducts.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
