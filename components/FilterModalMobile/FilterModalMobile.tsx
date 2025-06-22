import { BrandsType } from "@/types/BrandsType";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
import * as RadixSlider from "@radix-ui/react-slider";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface FilterModalMobileProps {
  isOpen: boolean;
  onClose: () => void;
  price: number[];
  // setPrice: (val: number[]) => void;
  setPrice: (price: [number, number]) => void;
  categories: HeaderCategoriesType[];
  brands: BrandsType[];
  category_id?: string;
  brand_id?: string;
  t: (key: string) => string;
  formatNumberSpaces: (value: number) => string;
  CategoryParams: (id: number) => void;
  BrandParams: (id: number) => void;
  ProductVariations: React.FC;
}

const FilterModalMobile: React.FC<FilterModalMobileProps> = ({
  isOpen,
  onClose,
  price,
  setPrice,
  categories,
  brands,
  category_id,
  brand_id,
  t,
  formatNumberSpaces,
  CategoryParams,
  BrandParams,
  ProductVariations,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 overflow-hidden rounded-lg bg-black/30 backdrop-blur-sm "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          {/* Modal Panel */}
          <motion.div
            className="fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-[#EBEFF3] z-50 shadow-2xl px-5 py-6 rounded-r-2xl overflow-y-auto"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={onClose}
                className="text-lg text-gray-500 transition-transform cursor-pointer hover:scale-110"
              >
                ×
              </button>
            </div>

            {/* Price Section */}
            <h3 className="text-lg font-semibold text-[#134E9B] mb-3">
              {t("price")}
            </h3>
            <div className="flex gap-2 mb-2">
              {[0, 1].map((i) => (
                <div key={i} className="flex flex-col w-full">
                  <span className="text-xs text-[#545D6A] mb-1">
                    {i === 0 ? t("from") : t("to")}
                  </span>
                  <div className="p-2 text-sm bg-white rounded-md shadow-inner">
                    {formatNumberSpaces(price[i])} uzs
                  </div>
                </div>
              ))}
            </div>
            <RadixSlider.Root
              className="relative flex items-center w-full h-5 mb-6 select-none touch-none"
              min={0}
              max={50000}
              step={10}
              value={price}
              onValueChange={(value) => setPrice([value[0], value[1]])}
            >
              <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
                <RadixSlider.Range className="absolute h-full bg-[#134E9B] rounded-full" />
              </RadixSlider.Track>
              {[0, 1].map((i) => (
                <RadixSlider.Thumb
                  key={i}
                  className="block h-5 w-5 bg-white border-[3px] border-[#134E9B] rounded-full shadow-md hover:scale-110 transition-transform"
                />
              ))}
            </RadixSlider.Root>

            {/* Category Section */}
            <h3 className="text-lg font-semibold text-[#134E9B] mb-3">
              {t("category")}
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {categories?.map((category, index) => (
                <div
                  key={`${category.id}-${index}`}
                  onClick={() => CategoryParams(category.id)}
                  className={`
       text-[12px] font-medium px-4 py-[6px] rounded-full cursor-pointer
       border transition-all duration-300 ease-in-out
       ${
         category.id === Number(category_id)
           ? "bg-[#134E9B] text-white border-[#134E9B]"
           : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
       }
     `}
                >
                  {category.name}
                </div>
              ))}
            </div>

            {/* Brands Section */}
            <h3 className="text-lg font-semibold text-[#134E9B] mb-3">
              {t("brands")}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {brands?.map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  onClick={() => BrandParams(brand.id)}
                  className={`
     text-[12px] font-medium px-4 py-[6px] rounded-full cursor-pointer 
     border transition-all duration-300 ease-in-out
     ${
       brand.id === Number(brand_id)
         ? "bg-[#134E9B] text-white border-[#134E9B]"
         : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
     }
   `}
                >
                  {brand.name}
                </div>
              ))}
            </div>

            <ProductVariations />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FilterModalMobile;
