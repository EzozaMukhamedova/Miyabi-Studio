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

//////salonchilarga foydalan
// "use client";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { settings } from "@/components/Products/SlideConfig/index";
// import ProductCard from "@/components/Products/ProductCardItem";
// import { ProductType } from "@/types/ProductType";

// const dummyProducts: ProductType[] = [
//   {
//     id: 1,
//     name: "Soch turmaklash",
//     image: "/images/beauty11.png",
//     price: "100000",
//     is_liked: false,
//     category_id: 1,
//     description: "Soch turmaklash xizmatlari",
//   },
//   {
//     id: 2,
//     name: "Manikyur",
//     image: "/images/mankyur.jpg",
//     price: "80000",
//     is_liked: false,
//     category_id: 2,
//     description: "Chiroyli manikyur dizaynlari",
//   },
//   {
//     id: 3,
//     name: "Kosmetologiya",
//     image: "/images/teri.png",
//     price: "120000",
//     is_liked: false,
//     category_id: 3,
//     description: "Terini parvarishlash muolajalari",
//   },
//   {
//     id: 4,
//     name: "Massaj",
//     image: "/images/massaj.jpg",
//     price: "150000",
//     is_liked: false,
//     category_id: 4,
//     description: "Yengil va terapevtik massaj xizmati",
//   },
//   {
//     id: 5,
//     name: "Kiprik",
//     image: "/images/kiprikcha.png",
//     price: "60000",
//     is_liked: false,
//     category_id: 5,
//     description: "Kiprik bo‘yash va uzaytirish",
//   },
//   {
//     id: 6,
//     name: "Yuz bo‘yoqlari",
//     image: "/images/yuz.png",
//     price: "90000",
//     is_liked: false,
//     category_id: 6,
//     description: "Professional make-up xizmati",
//   },
// ];

// export default function DemoProductsPage() {
//   return (
//     <>
//       <h2 className="font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]">
//         Chegirmadagi xizmatlar
//       </h2>

//       {/* Desktop: Slider */}
//       <div className="max-[690px]:hidden">
//         <Slider {...settings}>
//           {dummyProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </Slider>
//       </div>

//       {/* Mobile: Grid */}
//       <div className="min-[690px]:hidden grid grid-cols-3 max-[640px]:grid-cols-2 px-2.5 gap-[15px]">
//         {dummyProducts.slice(0, 6).map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// }
//////salonchilar tepada

"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/components/Products/SlideConfig/index";

// 1. Salonlar massivini yuqoriga joylashtirdik (10 ta mashhur salon)
const popularSalons = [
  {
    id: 1,
    name: "Diamond SPA",
    rating: 1,
    district: "Chilonzor",
    address: "Chilonzor tumani, Bunyodkor shoh ko'chasi",
    title: "Premium SPA & Beauty",
    languages: ["O‘zbek", "Rus", "Ingliz", "Tojik", "Qirg'iz", "Turk"],
    image: "/images/salon1.jpg",
    description:
      "O‘zbekistonning eng mashhur SPA va kosmetologiya markazi. Zamonaviy muhit, xalqaro mutaxassislar va VIP xizmat.",
  },
  {
    id: 2,
    name: "Queen Beauty Studio",
    rating: 2,
    district: "Olmazor",
    address: "Olmazor tumani, G‘afur G‘ulom ko'chasi, 15",
    title: "Eng yaxshi stilistlar",
    languages: ["O‘zbek", "Rus", "Ingliz", "Turk", "Tojik"],
    image: "/images/salon2.jpg",
    description:
      "Stilistlar va koloristlar jamoasi, sertifikatli brend mahsulotlari, zamonaviy atmosfera.",
  },
  {
    id: 3,
    name: "Farhod Plaza Beauty",
    rating: 3,
    district: "Olmazor",
    address: "Olmazor tumani, Chorsu mehmonxonasi, 1-qavat",
    title: "Oila uchun qulay",
    languages: ["O‘zbek", "Rus", "Tojik", "Turk"],
    image: "/images/salon3.jpg",
    description:
      "Oilaviy xizmatlar, bolalar uchun zona, soch, tirnoq va yuz parvarishi.",
  },
  {
    id: 4,
    name: "Lux Beauty",
    rating: 4,
    district: "Yunusobod",
    address: "Yunusobod tumani, Bog'ishamol ko'chasi, 8",
    title: "Stil va komfort",
    languages: ["O‘zbek", "Rus", "Ingliz", "Qozoq"],
    image: "/images/salon4.jpg",
    description:
      "Stil, soch kesish, makeup va spa. Hamma uchun ochiq, do‘stona muhit.",
  },
  {
    id: 5,
    name: "Aesthetic Island Spa",
    rating: 5,
    district: "Mirzo-Ulug‘bek",
    address: "Mirzo-Ulug‘bek tumani, Mustaqillik shoh ko'chasi, 6",
    title: "SPA va kosmetologiya",
    languages: ["O‘zbek", "Rus", "Tojik", "Qozoq"],
    image: "/images/salon10.jpg",
    description: "Massaj, spa va yuzni parvarishlashda yetakchi markaz.",
  },
  {
    id: 6,
    name: "Studio 026",
    rating: 6,
    district: "Mirzo-Ulug‘bek",
    address: "Mirzo-Ulug‘bek tumani, Zarafshan ko'chasi, 1",
    title: "Tajribali ustalar",
    languages: ["O‘zbek", "Rus", "Ingliz"],
    image: "/images/salon5.jpg",
    description:
      "Yuqori darajada tirnoq va soch xizmati, eng so‘nggi tendensiyalar.",
  },
  {
    id: 7,
    name: "La Bellezza",
    rating: 7,
    district: "Olmazor",
    address: "Olmazor tumani, Yangi Olmazor Street 7a,",
    title: "Italiya dizayni",
    languages: ["O‘zbek", "Rus", "Qozoq"],
    image: "/images/salon6.jpg",
    description:
      "Evropa uslubi va sifatli xizmat, zamonaviy go‘zallik markazi.",
  },
  {
    id: 8,
    name: "Dream Look Studio",
    rating: 8,
    district: "Olmazor",
    address: "Olmazor tumani, Себзор кўчаси 1",
    title: "Zamonaviy va qulay",
    languages: ["O‘zbek", "Rus", "Ingliz", "Tojik", "Turk"],
    image: "/images/salon7.jpg",
    description:
      "Innovatsion soch, manikyur va make-up. Professional stilistlar.",
  },
  {
    id: 9,
    name: "VIP Beauty",
    rating: 9,
    district: "Olmazor",
    address: "Olmazor tumani, Ganga 35",
    title: "VIP xizmat",
    languages: ["O‘zbek", "Rus"],
    image: "/images/salon8.jpg",
    description: "Faol VIP mijozlar uchun maxfiy va sifatli xizmat.",
  },
  {
    id: 10,
    name: "Express Beauty",
    rating: 10,
    district: "Olmazor",
    address: "Olmazor tumani, G‘afur G‘ulom ko'chasi, 20",
    title: "Tezkor va sifatli",
    languages: ["O‘zbek", "Rus", "Ingliz"],
    image: "/images/salon9.jpg",
    description:
      "Qisqa vaqtda professional xizmat, har doim ochiq va qulay joylashuv.",
  },
];

// 2. Kartochka komponenti
function SalonRatingCard({ salon, extraStyle }) {
  return (
    <div
      className={`w-[290px] max-[1100px]:w-[230px] group transition-all !duration-500  hover:border-[#e47c48]  ${extraStyle}`}
    >
      <div className="bg-[#f7f3ed] w-full flex justify-center items-center h-[200px] rounded-[12px] overflow-hidden relative ">
        <img
          src={salon.image}
          alt={salon.name}
          width={210}
          height={130}
          className="object-cover w-full h-full transition-all duration-300 cursor-pointer rounded-xl group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-br from-[#fbc19d] to-[#e47c48] text-white text-[18px] font-bold rounded-full px-4 py-1.5 shadow-lg">
          {salon.rating}-o‘rin
        </span>
        {salon.title && (
          <span className="absolute bottom-3 left-3 text-[#e47c48] bg-white/80 px-2.5 py-1 rounded-lg text-[14px] font-semibold shadow">
            {salon.title}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <h3 className="text-lg font-bold text-[#2f2f2f]">{salon.name}</h3>
        <div className="flex items-center gap-1 text-[#e47c48] text-[16px] font-medium">
          <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
            <path
              d="M8 15s6-5 6-9a6 6 0 10-12 0c0 4 6 9 6 9z"
              stroke="#e47c48"
              strokeWidth="1.2"
            />
            <circle cx="8" cy="6" r="2" fill="#e47c48" />
          </svg>
          <span>{salon.district} tumani</span>
        </div>
        <span className="text-xs text-[#b6947b] mb-1">{salon.address}</span>

        <div className="flex items-center gap-1 text-[#2f2f2f] text-[14px] font-medium">
          {/* Tillar uchun pastel turquoise (blue-green) icon va text */}
          <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" stroke="#8ac6d1" strokeWidth="1.2" />
            <path
              d="M8 1c2.5 3.5 2.5 11.5 0 14m0-14c-2.5 3.5-2.5 11.5 0 14m-7-7h14"
              stroke="#2f2f2f"
              strokeWidth="1.2"
            />
          </svg>
          {salon.languages.join(", ")}
        </div>

        {salon.description && (
          <p className="text-[13px] text-[#51535e] mt-2 line-clamp-2">
            {salon.description}
          </p>
        )}
      </div>
    </div>
  );
}
 // Mobile variant
function MobileSalonRatingCard({ salon }) {
  return (
    <div
      className={`
        w-full bg-gradient-to-br  
        rounded-xl p-3  flex flex-col relative mb-2 
        active:scale-[0.97] transition-all duration-200
      `}
    >
      <div className="w-full h-[90px] rounded-lg overflow-hidden relative flex items-center justify-center bg-[#faece1] mb-2">
        <img
          src={salon.image}
          alt={salon.name}
          width={100}
          height={90}
          className="object-cover w-full h-full transition-all duration-200 rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-gradient-to-br from-[#fbc19d] to-[#e47c48] text-white text-xs font-bold rounded-full px-3 py-1 shadow">
          {salon.rating}-o‘rin
        </span>
        {salon.title && (
          <span className="absolute bottom-2 left-2 text-[#e47c48] bg-white/90 px-2 py-0.5 rounded-lg text-[11px] font-semibold shadow">
            {salon.title}
          </span>
        )}
      </div>

      <h3 className="text-[15px] font-bold text-[#2f2f2f] mb-1">
        {salon.name}
      </h3>
      <div className="flex items-center gap-1 text-[#e47c48] text-xs font-medium mb-0.5">
        <svg width={14} height={14} fill="none" viewBox="0 0 16 16">
          <path
            d="M8 15s6-5 6-9a6 6 0 10-12 0c0 4 6 9 6 9z"
            stroke="#e47c48"
            strokeWidth="1.1"
          />
          <circle cx="8" cy="6" r="2" fill="#e47c48" />
        </svg>
        <span>{salon.district} t.</span>
      </div>
      <span className="text-xs text-[#b6947b] mb-1">{salon.address}</span>

      <div className="flex items-center gap-1 text-[#2f2f2f] text-xs font-medium">
        <svg width={13} height={13} fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7" stroke="#8ac6d1" strokeWidth="1.1" />
          <path
            d="M8 1c2.5 3.5 2.5 11.5 0 14m0-14c-2.5 3.5-2.5 11.5 0 14m-7-7h14"
            stroke="#2f2f2f"
            strokeWidth="1.1"
          />
        </svg>
        {salon.languages.join(", ")}
      </div>

      {salon.description && (
        <p className="text-[12px] text-[#51535e] mt-1 line-clamp-2">
          {salon.description}
        </p>
      )}
    </div>
  );
}

// 3. Sahifa
export default function DemoProductsPage() {
  return (
    <>
      <h2 className="font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]">
        Mashhur salonlar reytingi
      </h2>

      {/* Desktop: Slider */}
      <div className="max-[690px]:hidden border-2 border-red-500">
        <Slider {...settings}>
          {popularSalons.map((salon) => (
            <SalonRatingCard key={salon.id} salon={salon} />
          ))}
        </Slider>
      </div>

      {/* Mobile: Grid */}
      {/* <div className="min-[690px]:hidden grid grid-cols-2 px-2.5 gap-[15px]">
        {popularSalons.map((salon) => (
          <SalonRatingCard key={salon.id} salon={salon} />
        ))}
      </div> */}

      <div className="min-[641px]:hidden grid grid-cols-2 px-2 gap-3">
        {popularSalons.map((salon) => (
          <MobileSalonRatingCard key={salon.id} salon={salon} />
        ))}
      </div>
    </>
  );
}
