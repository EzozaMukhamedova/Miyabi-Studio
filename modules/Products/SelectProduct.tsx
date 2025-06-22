import { useTranslations } from "next-intl";
import React from "react";

function ProductSelects() {
  const t = useTranslations("Products");
  return (
    <>
      <h3 className="text-[16px] font-medium mt-[33px] mb-[15px]">
        {t("ram")}
      </h3>
      <div className="flex flex-wrap gap-[5px]">
        {["2", "3", "4", "6", "8", "12", "16"].map((brand, i) => (
          <div
            key={i}
            className={`
    rounded-full text-[12px] font-medium
    px-4 py-[6px]
    border border-[#d0d7de]
    bg-white text-[#0A1729]
    hover:bg-[#134E9B]/10 hover:text-[#134E9B]
    transition-all duration-300 ease-in-out
    cursor-pointer
  `}
          >
            {brand} GB
          </div>
        ))}
      </div>

      <h3 className="text-[16px] font-semibold text-[#0A1729] mt-[33px] mb-4 tracking-tight">
        {t("rom")}
      </h3>

      <div className="flex flex-wrap gap-[5px]">
        {["32", "64", "128", "256", "512"].map((brand, i) => (
          <div
            key={i}
            className={`
    rounded-full text-[12px] font-medium
    px-4 py-[6px]
    border border-[#d0d7de]
    bg-white text-[#0A1729]
    hover:bg-[#134E9B]/10 hover:text-[#134E9B]
    transition-all duration-300 ease-in-out
    cursor-pointer
  `}
          >
            {brand} GB
          </div>
        ))}
      </div>

      <h3 className="text-[16px] font-semibold text-[#0A1729] mt-[33px] mb-4 tracking-tight">
        {t("batteryMah")}
      </h3>

      <div className="flex flex-wrap gap-[5px]">
        {["3000", "3200", "3600", "4000", "4500", "5000", "6000", "7000"].map(
          (brand, i) => (
            <div
              key={i}
              className={`
              rounded-full text-[12px] font-medium
              px-4 py-[6px]
              border border-[#d0d7de]
              bg-white text-[#0A1729]
              hover:bg-[#134E9B]/10 hover:text-[#134E9B]
              transition-all duration-300 ease-in-out
              cursor-pointer
            `}
            >
              {brand} MHz
            </div>
          )
        )}
      </div>
    </>
  );
}

export default ProductSelects;
