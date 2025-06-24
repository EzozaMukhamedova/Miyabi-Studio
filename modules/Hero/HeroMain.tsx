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
//       "Sokin muhitda nafis go‘zallikni kashf eting — Beauty Parksaloni bilan.",
//     image: "/images/beauty11.png",
//     product_id: 102,
//   },
//   {
//     id: 3,
//     name: "Beauty Park — Nafosat markazi",
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
    image: "/images/beauty555.png",
    product_id: 101,
  },
  {
    id: 2,
    name: "Beauty Park",
    description:
      "Sokin muhitda nafis go‘zallikni kashf eting — Beauty Parki bilan.",
    image: "/images/qiz55.jpg",
    product_id: 102,
  },
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
    <div className="bg-[#f2dec2] mt-[20px] pt-[0px] md:pt-0">
      <Swiper
        autoplay={isDesktop ? { delay: 5000 } : false}
        loop={true}
        speed={600}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper !h-[450px] max-[1000px]:!h-[320px] max-[600px]:!h-[220px]"
      >
        {staticBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="
            flex flex-row 
            max-[600px]:flex-row 
            items-center containers h-full px-4 sm:px-6 md:px-12 py-3 md:py-10 gap-5
          "
            >
              {/* Matn qismi */}
              <div
                className="
            flex flex-col justify-center 
            w-1/2 
            max-[600px]:w-[55%] 
            max-[600px]:order-1
            max-[600px]:pr-2
          "
              >
                <h2 className="text-[#2f2f2f] font-black text-[44px] max-[900px]:text-2xl max-[600px]:text-lg mb-3 leading-tight drop-shadow-lg">
                  {banner.name}
                </h2>
                <p className="text-[#51535e] mb-5 max-w-[480px] text-lg max-[900px]:text-base max-[600px]:text-xs">
                  {banner.description}
                </p>
                <button
                  className="
                bg-[#e47c48] text-white 
                px-8 py-3 rounded-[5px] 
                cursor-pointer shadow 
                hover:bg-[#cf703d] 
                font-semibold text-base 
                transition-all duration-300
                max-[900px]:px-6 max-[900px]:py-2 max-[900px]:text-sm
                max-[600px]:px-3 max-[600px]:py-1.5 max-[600px]:text-xs
              "
                  onClick={() => router.push(`/product`)}
                >
                  Xizmatlarini ko'rish
                </button>
              </div>
              {/* Rasm qismi */}
              <div
                className="
            flex items-center justify-end 
            w-1/2 h-[220px] md:h-[370px] 
            max-[600px]:w-[45%] 
            max-[600px]:order-2 
            max-[600px]:h-[160px] 
            max-[600px]:pl-2
          "
              >
                <img
                  src={banner.image}
                  alt={banner.name}
                  className="
                object-cover w-full h-full rounded-xl shadow-xl border border-[#edd4bb]
                max-[600px]:min-h-[130px]
              "
                  loading="lazy"
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
