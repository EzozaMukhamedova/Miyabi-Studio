import Products from "@/components/Products/Products";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("HeaderTopTS");
  const tProduct = useTranslations("Products");

  return (
    <>
      <Products title={tProduct("PromotionalProducts")} api="products" />
      <footer className="py-10 text-white sm:mt-[70px]">
        <div className="container mx-auto max-w-[1350px] px-4">
          <div className="flex flex-wrap mx-auto items-center justify-between py-6 px-6 text-white bg-[#ece0d0] rounded-[20px]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[100px] relative  w-full">
              <div className="flex flex-col gap-4 text-center lg:text-left text-[#ffffff] font-black leading-[120%] text-[24px] sm:text-[32px] md:text-[38px]">
                <p className="sm:w-[500px] w-[300px]">
                  {tProduct("EnjoyMusic")}
                </p>
                <button className="bg-[#FFFFFF] w-[180px] h-[60px] text-[16px] mt-[20px] text-[#111111] px-6 py-2 rounded transition duration-300 hover:opacity-80 cursor-pointer mx-auto lg:mx-0">
                  {t("hero-button")}
                </button>
              </div>

              <div className="relative mb-6 w-fit group lg:mb-0">
                <div className="absolute cursor-pointer inset-0  h-[500px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#ffffff53] blur-[30px] opacity-60 group-hover:blur-[20px]  group-hover:opacity-80 transition-all duration-300 z-0 " />

                <img
                  // src="/images/qoraNaushnik.svg"
                  src="/images/beauty2.png"
                  alt="Naushnik"
                  className="relative  mb-[-20px] z-10 w-[600px] sm:w-[400px] md:w-[500px] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Products title={tProduct("LastViewedProducts")} api="products" />
    </>
  );
}
