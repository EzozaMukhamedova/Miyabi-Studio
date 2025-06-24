// "use client";

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Button from "@/components/Button";
// import { useTranslations } from "next-intl";
// import { useRouter } from "@/i18n/navigation";

// // 💄 Statik Beauty Bannerlar (yuklangan rasm fayllari bilan)
// const staticBanners = [
//   {
//     id: 1,
//     name: "Go‘zallik sizdan boshlanadi",
//     description:
//       "Manikyur, soch turmaklash va nafis parvarish — barchasi bir joyda.",
//     image: "/images/beauty2.png",
//     product_id: 101,
//   },
//   {
//     id: 2,
//     name: "Beauty Salon",
//     description:
//       "Sokin muhitda nafis go‘zallikni kashf eting — Miyabi saloni bilan.",
//     image: "/images/beauty11.png",
//     product_id: 102,
//   },
//   {
//     id: 3,
//     name: "Miyabi Studio — Nafosat markazi",
//     description:
//       "Yapon estetikasidan ilhomlangan go‘zallik tajribasi. O‘zingizni zavqlantiring.",
//     image: "/images/beauty3.png",
//     product_id: 103,
//   },
// ];

// function Hero() {
//   const router = useRouter();
//   const t = useTranslations("HeaderTopTS");

//   const [isDesktop, setIsDesktop] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleGoToSeeBanner = (id: number) => {
//     router.push(`/product/${id}`);
//   };

//   return (
//     <div className="bg-[#ece0d0] mt-[20px] pt-[38px] md:pt-0">
//       <Swiper
//         autoplay={isDesktop ? { delay: 5000 } : false}
//         loop={true}
//         speed={500}
//         slidesPerView={1}
//         pagination={isDesktop ? { clickable: true } : false}
//         modules={isDesktop ? [Pagination, Navigation, Autoplay] : []}
//         className="mySwiper max-[1000px]:!h-[400px] max-[800px]:!h-[300px] max-[500px]:!h-[210px]"
//       >
//         {staticBanners.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             <h2 className="text-[#3B3B3B] font-black leading-[120%] text-xl min-[500px]:hidden line-clamp-1 pl-[10px]">
//               {banner.name}
//             </h2>

//             <div className="containers h-full max-[500px]:h-auto flex justify-between items-center gap-[20px]">
//               <div className="max-[800px]:w-[50%]">
//                 <h2 className="text-[#2F2F2F] font-black leading-[120%] text-[44px] max-[1000px]:text-4xl max-[800px]:text-2xl max-[500px]:hidden">
//                   {banner.name}
//                 </h2>
//                 <p className="text-[#545D6A] mt-[6px] mb-[22px] max-[1000px]:text-sm max-[500px]:text-xs line-clamp-3 max-[500px]:mb-[10px]">
//                   {banner.description}
//                 </p>
//                 <Button
//                   onClick={() => handleGoToSeeBanner(banner.product_id)}
//                   title={t("hero-button")}
//                   extraStyle="!px-10 max-[1000px]:text-sm max-[500px]:text-xs max-[500px]:!py-[10px]"
//                 />
//               </div>

//               <div className="flex justify-end flex-col h-full items-end w-[45%] max-[1000px]:w-[40%]">
//                 <img
//                   src={banner.image}
//                   alt={banner.name}
//                   className="object-contain w-full max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Hero;

"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

const staticBanners = [
  {
    id: 1,
    name: "Go‘zallik sizdan boshlanadi",
    description:
      "Manikyur, soch turmaklash va nafis parvarish — barchasi bir joyda.",
    image: "/images/beauty2.png",
    product_id: 101,
  },
  {
    id: 2,
    name: "Beauty Salon",
    description:
      "Sokin muhitda nafis go‘zallikni kashf eting — Miyabi saloni bilan.",
    image: "/images/beauty11.png",
    product_id: 102,
  },
  {
    id: 3,
    name: "Miyabi Studio — Nafosat markazi",
    description:
      "Yapon estetikasidan ilhomlangan go‘zallik tajribasi. O‘zingizni zavqlantiring.",
    image: "/images/bannerQiz.png",
    product_id: 103,
  },
];

// 🏙️ Toshkent shahridagi barcha tumanlar
const districts = [
  "Chilonzor tumani",
  "Olmazor tumani",
  "Shayxontohur tumani",
  "Mirzo Ulug'bek tumani",
  "Sergeli tumani",
  "Yashnobod tumani",
  "Yakkasaroy tumani",
  "Yunusobod tumani",
  "Uchtepa tumani",
  "Bektemir tumani",
  "Mirobod tumani",
];

function Hero() {
  const router = useRouter();
  const t = useTranslations("HeaderTopTS");
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDistrictSelect = (district: string) => {
    console.log("Tanlangan tuman:", district);
    // optional: router.push(`/district/${slugify(district)}`);
  };

  return (
    <div className="bg-[#ece0d0] mt-[20px] pt-[38px] md:pt-0">
      <Swiper
        autoplay={isDesktop ? { delay: 5000 } : false}
        loop={true}
        speed={500}
        slidesPerView={1}
        pagination={isDesktop ? { clickable: true } : false}
        modules={isDesktop ? [Pagination, Navigation, Autoplay] : []}
        className="mySwiper max-[1000px]:!h-[400px] max-[800px]:!h-[300px] max-[500px]:!h-[210px]"
      >
        {staticBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <h2 className="text-[#3B3B3B] font-black leading-[120%] text-xl min-[500px]:hidden line-clamp-1 pl-[10px]">
              {banner.name}
            </h2>

            <div className="containers h-full max-[500px]:h-auto flex justify-between items-center gap-[20px]">
              <div className="max-[800px]:w-[50%]">
                <h2 className="text-[#2F2F2F] font-black leading-[120%] text-[44px] max-[1000px]:text-4xl max-[800px]:text-2xl max-[500px]:hidden">
                  {banner.name}
                </h2>
                <p className="text-[#545D6A] mt-[6px] mb-[22px] max-[1000px]:text-sm max-[500px]:text-xs line-clamp-3 max-[500px]:mb-[10px]">
                  {banner.description}
                </p>

                {/* 🔽 Dropdown: Toshkent tumanlari */}
                <select
                  onChange={(e) => handleDistrictSelect(e.target.value)}
                  defaultValue=""
                  className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md cursor-pointer"
                >
                  <option value="" disabled>
                    Eng yaqin manzilni tanlang
                  </option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end flex-col h-full items-end w-[45%] max-[1000px]:w-[40%]">
                <img
                  src={banner.image}
                  alt={banner.name}
                  className="object-contain w-full max-h-[300px] md:max-h-[400px] lg:max-h-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
