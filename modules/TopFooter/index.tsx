// import Products from "@/components/Products/Products";
// import { useTranslations } from "next-intl";

// export default function Footer() {
//   const t = useTranslations("HeaderTopTS");
//   const tProduct = useTranslations("Products");

//   return (
//     <>
//       <Products title={tProduct("PromotionalProducts")} api="products" />
//       <footer className="py-10 text-white sm:mt-[70px]">
//         <div className="container mx-auto max-w-[1350px] px-4">
//           <div className="flex flex-wrap mx-auto items-center justify-between py-6 px-6 text-white bg-[#ece0d0] rounded-[20px]">
//             <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px] relative  w-full">
//               <div className="flex flex-col gap-4 text-center lg:text-left text-[#ffffff] font-black leading-[120%] text-[24px] sm:text-[32px] md:text-[38px]">
//                 <p className="sm:w-[500px] w-[300px]">
//                   {tProduct("EnjoyMusic")}
//                 </p>
//                 <button className="bg-[#FFFFFF] w-[180px] h-[60px] text-[16px] mt-[20px] text-[#111111] px-6 py-2 rounded transition duration-300 hover:opacity-80 cursor-pointer mx-auto lg:mx-0">
//                   {t("hero-button")}
//                 </button>
//               </div>

//               <div className="relative mb-6 w-fit group lg:mb-0">
//                 <div className="absolute cursor-pointer inset-0  h-[500px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#ffffff53] blur-[30px] opacity-60 group-hover:blur-[20px]  group-hover:opacity-80 transition-all duration-300 z-0 " />

//                 <img
//                   // src="/images/qoraNaushnik.svg"
//                   src="/images/beautyBanner.png"
//                   alt="Naushnik"
//                   className="relative  mb-[-20px] z-10  sm:w-[400px]  cursor-pointer"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <Products title={tProduct("LastViewedProducts")} api="products" />
//     </>
//   );
// }
"use client";
import Products from "@/components/Products/Products";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Footer() {
  const t = useTranslations("HeaderTopTS");
  const tProduct = useTranslations("Products");

  const router = useRouter();

  return (
    <>
      <Products title={tProduct("PromotionalProducts")} api="products" />
      <footer className="py-10 sm:mt-[70px] bg-[#f6ede2]">
        <div className="container mx-auto max-w-[1350px] px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between py-7 px-5 sm:px-10 bg-[#efe6db] rounded-[28px] shadow-[0_6px_24px_0_rgba(140,102,47,0.09)] overflow-hidden">
            {/* LEFT: TEXT + BUTTON */}
            <div className="flex flex-col items-center flex-1 gap-5 text-center md:items-start md:text-left">
              <p className="font-black leading-tight text-[#2f2f2f] text-[24px] sm:text-[30px] md:text-[36px] max-w-[400px] md:max-w-[500px]">
                {tProduct("EnjoyMusic")}
              </p>
              <button
                className="bg-[#e47c48] w-[160px] h-[52px] text-[16px] rounded-[14px]
    text-white shadow-lg cursor-pointer font-semibold transition hover:scale-[1.05] duration-200 mx-auto md:mx-0"
                onClick={() => router.push("/product")}
              >
                {t("hero-button")}
              </button>
            </div>
            {/* RIGHT: IMAGE */}
            {/* RIGHT: IMAGE */}
            <div className="relative flex justify-center flex-1 mb-6 md:mb-0">
              {/* Gradient glow circle (banner uslubida) */}
              <div
                className="
      absolute inset-0 m-auto h-[180px] w-[180px] sm:h-[250px] sm:w-[250px] md:h-[310px] md:w-[310px]
      rounded-full bg-gradient-to-br from-[#e47c48]/30 via-[#f6ede2]/20 to-[#fff]/10
      blur-2xl opacity-80 z-0 pointer-events-none
    "
              />
              {/* Banner Image (bir xil radius va border bilan) */}
              <img
                src="/images/qiz55.jpg"
                alt="Beauty Banner"
                className="
    relative z-10 w-[200px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[440px] md:h-[240px]
    rounded-[10px] object-cover  object-center shadow-xl
    border-[4px] border-[#fbe4a3] ring-offset-2
    transition-all duration-500
  "
              />
            </div>
          </div>
        </div>
      </footer>
      <Products title={tProduct("LastViewedProducts")} api="products" />
    </>
  );
}
