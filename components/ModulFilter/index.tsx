"use client";
import React, { useState, useEffect } from "react";
import Modal from "../FormModal";
import * as RadixSlider from "@radix-ui/react-slider";
import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
import { BrandsType } from "@/types/BrandsType";
import { getCategories } from "@/service/getCategories";
import { getBrands } from "@/service/getBrands";

const ModulFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [price, setPrice] = useState<[number, number]>([0, 50000]);

  const t = useTranslations("Products");
  const searchParams = useSearchParams();
  const router = useRouter();

  const category_id = searchParams?.get("category") || "";
  const brand_id = searchParams?.get("brand") || "";

  const { data: categories } = getCategories();
  const { data: brands } = getBrands();

  const updateQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  };

  const CategoryParams = (id: string | number) => {
    updateQueryParam("category", String(id));
  };

  const BrandParams = (id: string | number) => {
    updateQueryParam("brand", String(id));
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString());
    price[0] === 0 ? params.delete("min") : params.set("min", String(price[0]));
    price[1] === 50000
      ? params.delete("max")
      : params.set("max", String(price[1]));
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  }, [price]);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#134E9B] text-white px-4 py-2 rounded-md"
      >
        {/* {t("filters")} */} filters
      </button>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="w-full max-w-lg bg-[#EBEFF3] p-6 rounded-[10px] mx-auto space-y-8 relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-[24px] cursor-pointer text-[#0a172956] hover:text-[#134E9B] transition"
          >
            &times;
          </button>

          {/* Price Filter */}
          <section>
            <h3 className="text-lg font-semibold text-[#0A1729] mb-4">
              {t("price")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-[#0A1729]/60">{t("from")}</span>
                <div className="mt-1 bg-[#fff] text-sm p-2 rounded-md">
                  {formatNumberSpaces(price[0])} uzs
                </div>
              </div>
              <div>
                <span className="text-xs text-[#0A1729]/60">{t("to")}</span>
                <div className="mt-1 bg-[#fff] text-sm p-2 rounded-md">
                  {formatNumberSpaces(price[1])} uzs
                </div>
              </div>
            </div>

            <RadixSlider.Root
              className="relative flex w-full items-center h-5 mt-6"
              min={0}
              max={50000}
              step={10}
              value={price}
              onValueChange={(value) => setPrice([value[0], value[1]])}
            >
              <RadixSlider.Track className="relative h-[4px] w-full rounded-full bg-gray-300">
                <RadixSlider.Range className="absolute h-full bg-[#134E9B] rounded-full" />
              </RadixSlider.Track>
              <RadixSlider.Thumb className="block w-5 h-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#134E9B] shadow-md" />
              <RadixSlider.Thumb className="block w-5 h-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#134E9B] shadow-md" />
            </RadixSlider.Root>
          </section>

          {/* Category Filter */}
          <section>
            <h3 className="text-lg font-semibold text-[#0A1729] mb-4">
              {t("category")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories?.map((category: HeaderCategoriesType) => (
                <button
                  key={category.id}
                  onClick={() => CategoryParams(category.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                    category.id === Number(category_id)
                      ? "bg-[#134E9B] text-white"
                      : "bg-white text-[#0A1729] hover:bg-[#134E9B]/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </section>

          {/* Brand Filter */}
          <section>
            <h3 className="text-lg font-semibold text-[#0A1729] mb-4">
              {t("brands")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {brands?.map((brand: BrandsType, index) => (
                <button
                  key={`${brand.id}-${index}`}
                  onClick={() => BrandParams(brand.id)}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                    brand.id === Number(brand_id)
                      ? "bg-[#134E9B] text-white"
                      : "bg-white text-[#0A1729] hover:bg-[#134E9B]/20"
                  }`}
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default ModulFilter;
