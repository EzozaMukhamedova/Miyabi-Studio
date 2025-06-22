"use client";
import { handleNext, handlePrev, handleSetPage } from "./Params/productPrams";
import { Link, useRouter } from "@/i18n/navigation";
import ProductVariations from "@/modules/Products/SelectProduct";
import { getBrands } from "@/service/getBrands";
import { getCustomProducts } from "@/service/getCustomProducts";
import { BrandsType } from "@/types/BrandsType";
import * as RadixSlider from "@radix-ui/react-slider";
import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import ProductsMain from "./ProductMainSection";

import { getCategories } from "@/service/getCategories";
import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
import Products from "@/components/Products/Products";
import { FilterIcon } from "@/assets/icons";
import Button from "@/components/Button";
import Modal from "@/components/FormModal";
import { ThemeContext } from "@/context/ThemeContextProvider";
import "./page.css";

import { useDebounce } from "use-debounce";
import FilterModalMobile from "@/components/FilterModalMobile/FilterModalMobile";

function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const t = useTranslations("Products");
  const [page, setPage] = useState(searchParams?.get("page") || 1);

  const [price, setPrice] = useState<[number, number]>([
    parseInt(searchParams?.get("min") ?? "0") || 0,
    parseInt(searchParams?.get("max") ?? "50000") || 50000,
  ]);

  const brand_id = searchParams?.get("brand") || "";
  const category_id = searchParams?.get("category") || "";
  const { data: products } = getCustomProducts();
  const { data: brands } = getBrands();
  const { data: categories } = getCategories();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [sort, setSort] = useState(searchParams?.get("sort") || "");
  const [limit, setLimit] = useState(searchParams?.get("limit") || "8");
  const { theme } = useContext(ThemeContext);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const openFilter = () => setIsFilterOpen(true);
  const closeFilter = () => setIsFilterOpen(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString());
    sort === "--" ? params.delete("sort") : params.set("sort", String(sort));
    params.set("limit", String(limit));
    params.set("page", String(1));
    setPage(1);
    router.push(`?${params.toString()}`);
  }, [sort, limit]);

  const [debouncedPrice] = useDebounce(price, 1100);

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString());
    if (price[0] === 0) params.delete("min");
    else params.set("min", String(price[0]));
    if (price[1] === 50000) params.delete("max");
    else params.set("max", String(price[1]));
    params.set("page", String(1));
    setPage(1);
    router.push(`?${params.toString()}`);
  }, [debouncedPrice]);

  const BrandParams = (id: number | string) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (id === "") {
      params.delete("brand");
    } else {
      params.set("brand", String(id));
    }
    params.set("page", String(1));
    setPage(1);
    router.push(`?${params.toString()}`);
  };
  const CategoryParams = (id: number | string) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (id === "") {
      params.delete("category");
    } else {
      params.set("category", String(id));
    }
    params.set("page", String(1));
    setPage(1);
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <div className="containers ">
        <div className="flex   gap-3 text-[#B6BABF] text-[14px] font-normal my-[20px] mb-[32px]">
          <Link href={"/"}>{t("main")}</Link> <span>/</span>{" "}
          <p>{t("products")} </p> <span>/</span>
        </div>

        <div className="flex justify-between items-start gap-[21px] max-[680px]:flex-col max-[680px]:gap-[10px]  ">
          <div className="flex  justify-between gap-[10px] items-center w-full min-[680px]:hidden ">
            <Button
              onClick={() => setIsFilterOpen(true)}
              iconPosition="right"
              icon={<FilterIcon />}
              extraStyle="text-[14px] w-[114px] h-[38px] min-[680px]:hidden"
            />
          </div>

          {/* Modal */}
          <div
            id="filterId"
            className={`min-w-[300px] w-[300px] border border-gray-200 pb-[90px] bg-[#EBEFF3] p-[18px] rounded-[8px] max-[800px]:min-w-[220px] max-[680px]:hidden `}
          >
            {/* narx */}
            <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
              {t("price")}
            </h3>
            {/* narx bottom */}
            <div className="flex gap-3  p-3 rounded-[6px] ">
              <div className="flex flex-col w-full">
                <span className="text-[12px] text-[#6B7280] mb-1">
                  {t("from")}
                </span>
                <div className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm">
                  {formatNumberSpaces(price[0])} uzs
                </div>
              </div>

              <div className="flex flex-col w-full">
                <span className="text-[12px] text-[#6B7280] mb-1">
                  {t("to")}
                </span>
                <div className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm">
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
              <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none" />
              <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none " />
            </RadixSlider.Root>
            {/* Category qismi */}
            <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
              {t("category")}
            </h3>

            <div className="flex flex-wrap gap-[5px] ">
              {categories?.map((category: HeaderCategoriesType) => (
                <div
                  onClick={() => CategoryParams(category.id)}
                  key={category.id}
                  className={` 
   rounded-full text-[12px] font-medium
   px-[18px] py-[7px] 
   max-[800px]:w-full
   border transition-all duration-300 ease-in-out
   cursor-pointer
   ${
     category.id === Number(category_id)
       ? "bg-[#134E9B] text-white border-[#134E9B]"
       : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
   }
 `}
                >
                  {category.name}
                </div>
              ))}{" "}
            </div>

            {/* Barend qismi */}
            <h3 className="text-[16px] font-semibold text-[#0A1729] mt-5 mb-4 tracking-tight">
              {t("brands")}
            </h3>

            <div className="flex flex-wrap gap-[5px]">
              {brands?.map((brand: BrandsType, index) => (
                <div
                  onClick={() => BrandParams(brand.id)}
                  key={`${brand.id}-${index}`}
                  className={`
    rounded-full text-[12px] font-medium
    px-[18px] py-[7px]
    border transition-all duration-300 ease-in-out
    cursor-pointer
    ${
      brand.id === Number(brand_id)
        ? "bg-[#134E9B] text-white border-[#134E9B]"
        : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
    }
  `}
                >
                  {brand.name}
                </div>
              ))}{" "}
            </div>
            <ProductVariations />
          </div>

          {/* modal */}
          <FilterModalMobile
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            price={price}
            // setPrice={setPrice}
            setPrice={(newPrice: [number, number]) => setPrice(newPrice)}
            categories={categories}
            brands={brands}
            category_id={category_id}
            brand_id={brand_id}
            t={t}
            formatNumberSpaces={formatNumberSpaces}
            CategoryParams={CategoryParams}
            BrandParams={BrandParams}
            ProductVariations={ProductVariations}
          />

          <div className="w-[100%]">
            <ProductsMain products={products.items} setPage={setPage} />
          </div>
        </div>

        {/* ボタン */}
        <div
          className={`flex justify-center md:justify-start md:pl-[300px] gap-3 mt-8 flex-wrap ${
            products?.totalPages === 1 && "hidden"
          }`}
        >
          <button
            disabled={Number(page) <= 1}
            onClick={() => handlePrev(page, searchParams, router, setPage)}
            className={`
    px-4 py-2 text-[14px] font-medium rounded-[6px] border 
    bg-[#134E9B] text-white 
    transition-all duration-200 ease-in-out 
    hover:bg-[#0d3e7d] hover:shadow-md 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer
  `}
          >
            {t("prev")}
          </button>

          {Array.from({ length: products.totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handleSetPage(i, searchParams, router, setPage)}
              className={`px-4 py-2 text-[14px] font-medium rounded-[6px] border 
              transition-all duration-200 ease-in-out
              ${
                Number(page) === i + 1
                  ? "bg-[#134E9B] text-white border-[#134E9B] shadow-md"
                  : "bg-white text-[#134E9B] border-[#EBEFF3] hover:bg-[#134E9B]/10 hover:border-[#134E9B] cursor-pointer"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={Number(page) >= products.totalPages}
            onClick={() =>
              handleNext(
                page,
                searchParams,
                router,
                setPage,
                products.totalPages
              )
            }
            className={`
    px-4 py-2 text-[14px] font-medium rounded-[6px] border 
    bg-[#134E9B] text-white 
    transition-all duration-200 ease-in-out 
    hover:bg-[#0d3e7d] hover:shadow-md 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer
  `}
          >
            {t("next")}
          </button>
        </div>
      </div>
      <Products title={t("products")} api="products" />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Modal>
    </>
  );
}

export default ProductsPage;
