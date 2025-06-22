import { useState, useEffect } from "react";
import * as RadixSlider from "@radix-ui/react-slider";
import { X } from "lucide-react";
import ProductVariations from "@/modules/Products/ProductOptions";

export default function FilterSidebar({
  price,
  setPrice,
  category_id,
  brand_id,
  categories,
  brands,
  CategoryParams,
  BrandParams,
  formatNumberSpaces,
  t,
}: any) {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 680);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const FilterContent = (
    <div className="min-w-[280px] w-[280px] border border-gray-200 pb-[90px] bg-[#EBEFF3] p-[18px] rounded-[8px]">
      {/* Close button for mobile */}
      {isMobile && (
        <div className="flex justify-end mb-2">
          <button onClick={() => setShowMobileFilter(false)}>
            <X size={20} />
          </button>
        </div>
      )}

      {/* Price */}
      <h3 className="text-[16px] font-medium mb-[15px]">{t("price")}</h3>
      <div className="flex gap-[4px]">
        <div className="w-full flex flex-col">
          <span className="text-[12px] text-[#00000066] mb-[6px]">
            {t("from")}
          </span>
          <div className="w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2">
            {formatNumberSpaces(price[0])} uzs
          </div>
        </div>
        <div className="w-full flex flex-col">
          <span className="text-[12px] text-[#00000066] mb-[6px]">
            {t("to")}
          </span>
          <div className="w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2">
            {formatNumberSpaces(price[1])} uzs
          </div>
        </div>
      </div>

      <RadixSlider.Root
        className="relative flex w-full touch-none select-none items-center h-5 my-[26px]"
        min={0}
        max={50000}
        step={10}
        value={price}
        onValueChange={(value) => setPrice([value[0], value[1]])}
      >
        <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
          <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
        </RadixSlider.Track>
        <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer focus:outline-none" />
        <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer focus:outline-none" />
      </RadixSlider.Root>

      {/* Categories */}
      <h3 className="text-[16px] font-medium mb-[15px]">{t("category")}</h3>
      <div className="flex flex-wrap gap-[5px]">
        {categories?.map((category: any) => (
          <div
            onClick={() => CategoryParams(category.id)}
            key={category.id}
            className={`rounded-[30px] text-[12px] py-[7px] px-[18px] cursor-pointer hover:bg-[#134E9B] hover:text-white duration-500 ${
              category.id === Number(category_id)
                ? "bg-[#134E9B] text-white"
                : "bg-[#FFFFFF] text-[#0A1729]"
            }`}
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Brands */}
      <h3 className="text-[16px] font-medium mt-[20px] mb-[15px]">
        {t("brands")}
      </h3>
      <div className="flex flex-wrap gap-[5px]">
        {brands?.map((brand: any, index: number) => (
          <div
            onClick={() => BrandParams(brand.id)}
            key={`${brand.id}-${index}`}
            className={`rounded-[30px] text-[12px] py-[7px] px-[18px] cursor-pointer hover:bg-[#134E9B] hover:text-white duration-500 ${
              brand.id === Number(brand_id)
                ? "bg-[#134E9B] text-white"
                : "bg-[#FFFFFF] text-[#0A1729]"
            }`}
          >
            {brand.name}
          </div>
        ))}
      </div>

      {/* Product variations if needed */}
      <div className="mt-4">
        <ProductVariations />
      </div>
    </div>
  );

  return (
    <>
      {/* Show desktop filter only */}
      {!isMobile && <div id="filterId">{FilterContent}</div>}

      {/* Button to show mobile filter */}
      {isMobile && !showMobileFilter && (
        <button
          onClick={() => setShowMobileFilter(true)}
          className="fixed bottom-4 left-4 bg-[#134E9B] text-white py-2 px-4 rounded-lg shadow-lg z-50"
        >
          {t("filter")}
        </button>
      )}

      {/* Mobile Filter Modal */}
      {isMobile && showMobileFilter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-h-[90%] overflow-y-auto rounded-lg p-4">
            {FilterContent}
          </div>
        </div>
      )}
    </>
  );
}
