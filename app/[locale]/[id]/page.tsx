"use client";

import { CompareIcon, Delivery, Market } from "@/assets/icons";
import Products from "@/components/Products/Products";
import { IMG_API } from "@/hooks/getEnv";
import { Link } from "@/i18n/navigation";
import { getSingleProduct } from "@/service/getSingleProduct";
import { getVariations } from "@/service/getVariation";
import { Clock, HeartIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";

export default function SingleProduct() {
  const params = useParams();
  const locale = params?.locale;
  const category = params?.category;
  const id = params?.id;

  const tProduct = useTranslations("Products");

  const [isFavorited, setIsFavorited] = useState(false);
  const [isCompared, setIsCompared] = useState(false);

  // const handleClick = () => {
  //   setIsFavorited(!isFavorited);
  //   toast.success("Sevimlilarga qo'shildi!");
  // };

  const handleClick = () => {
    const newValue = !isFavorited;
    setIsFavorited(newValue);

    if (newValue) {
      toast.success("Sevimlilarga qo'shildi!");
    } else {
      toast.success("Sevimlilardan chiqarildi!");
    }
  };

  const handleCompareClick = () => {
    const newValue = !isCompared;
    setIsCompared(newValue);

    if (newValue) {
      toast.success("Ikkilanishga qo'shildi!");
    } else {
      toast.success("Ikkilanishdan chiqarildi!");
    }
  };

  // const { data: product, isLoading, isError } = getSingleProduct(id);
  const { data: product, isLoading, isError } = getSingleProduct(String(id));
  const { data: variations } = getVariations(String(id));
  // const { data: variations } = getVariations(id);

  //
  const [activeTab, setActiveTab] = useState<"specs" | "reviews">("specs");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <div className="w-10 h-10 border-4 border-[#134E9B] border-t-transparent rounded-full animate-spin"></div>
        <span className="ml-3 text-[#134E9B] text-[16px]">Yuklanmoqda...</span>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] text-red-500">
        <svg
          className="w-10 h-10 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        <p className="text-sm">Mahsulot topilmadi</p>
      </div>
    );
  }

  return (
    <>
      <div className="containers !mt-[20px]">
        <div className="flex gap-[15px]">
          <Link
            className="text-[15px] text-[#b6babf]  flex justify-between gap-[15px]"
            href={"/"}
          >
            <span>{tProduct("main")}</span>
            <span>/</span>
          </Link>

          <Link
            className="text-[15px] text-[#b6babf] flex gap-[15px]"
            href={"/"}
          >
            <span>{category}</span>
          </Link>
          <span className="text-[15px] text-[#134E9B] text-bold">
            {product.name}
          </span>
        </div>

        <div className="mt-10 containers ">
          <h2 className="mb-[20px] text-[24px] sm:text-[28px] md:text-[32px] font-bold mt-[20px] sm:mt-[24px]">
            {product.name}
          </h2>

          <div className="flex flex-wrap lg:flex-nowrap gap-[30px] ">
            {/* left tarafi  */}

            <div className="flex flex-col sm:flex-row gap-[20px] w-full lg:w-[50%] ">
              <div className="flex sm:flex-col gap-[20px] justify-center sm:justify-start">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[80px] h-[70px] sm:w-[120px] sm:h-[90px] bg-[#EBEFF3] rounded-[6px] flex items-center justify-center cursor-pointer border hover:border-[#134E9B] transition"
                  >
                    <Image
                      src={`${IMG_API}/${product.image}`}
                      alt={`${product.name}-${index}`}
                      width={64}
                      height={64}
                      className="object-contain cursor-pointer "
                    />
                  </div>
                ))}
              </div>

              <div className="relative w-full sm:w-[530px] h-[300px] sm:h-[430px] bg-[#EBEFF3] flex items-center justify-center rounded-[10px] mx-auto cursor-pointer">
                {/* Image */}
                <Image
                  src={`${IMG_API}/${product.image}`}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="object-contain rounded cursor-pointer"
                />

                {/* Top right icons */}
                <div className="absolute top-[16px] right-[16px] sm:top-[26px] sm:right-[26px] flex gap-[12px] sm:gap-[16px] text-[#5F728B]  ">
                  <button
                    onClick={handleCompareClick}
                    className={`text-[25px] cursor-pointer
    ${isCompared ? "text-white bg-[#134E9B]" : "text-[#5F728B] bg-white"}
    hover:bg-[#134E9B] hover:text-white
    border-2 border-transparent rounded-full p-2 transition
    transform hover:scale-110 active:scale-95 duration-200 ease-in-out`}
                  >
                    <CompareIcon />
                  </button>

                  <button
                    onClick={handleClick}
                    className={`absolute top-0 right-12 text-[25px] cursor-pointer 
    ${isFavorited ? "text-white bg-red-600" : "text-gray-500 bg-white"} 
    hover:text-white hover:bg-red-600 
    border-2 border-transparent rounded-full p-2 
    transition transform hover:scale-110 active:scale-95 duration-200 ease-in-out`}
                  >
                    <HeartIcon />
                  </button>
                </div>

                {/* Navigation buttons */}
                <button className="absolute w-[34px] h-[34px] left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow hover:bg-gray-200 transition flex items-center justify-center cursor-pointer">
                  ‹
                </button>
                <button className="absolute w-[34px] h-[34px] right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow hover:bg-gray-200 transition flex items-center justify-center cursor-pointer">
                  ›
                </button>
              </div>
            </div>

            <div className="mb-2 block md:hidden text-center justify-center ml-[50px]">
              <h2 className="mb-3 text-sm font-medium text-[#515D6C]">
                Rangni tanlang:
              </h2>
              <div className="flex flex-wrap gap-4 cursor-pointer">
                {["#BA2525", "#111111", "#FFFFFF", "#DADADA", "#40CEFF"].map(
                  (color, index) => (
                    <div
                      key={index}
                      className="w-9 h-9 rounded-[6px] shadow-md border border-gray-300 hover:ring-2 hover:ring-offset-2 hover:ring-[#134E9B] transition duration-200 cursor-pointer"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>
            </div>

            {/* narxi */}

            <div className="w-full p-4 space-y-4 sm:p-0">
              <div className="flex gap-[40px] justify-center items-center">
                <p className="text-[#515D6C] text-[14px] sm:text-[16px]">
                  {tProduct("price")}:
                </p>
                <p className="text-[28px] sm:text-[32px] font-bold">
                  {Number(product.price).toLocaleString()} UZS
                </p>
              </div>
              <button className="text-[#545D6A] py-[12px] sm:py-[15px] px-[20px] sm:px-[40px] bg-[#EBEFF3] rounded-[6px] mt-[10px] w-full text-sm sm:text-base">
                Oyiga 4 599 uzsdan muddatli to‘lov
              </button>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-[10px]">
                <button className="border w-full sm:w-[265px] border-[#134E9B] text-[#134E9B] py-[12px] px-[20px] sm:px-[30px] rounded-[6px] hover:bg-[#134E9B] hover:text-white transition cursor-pointer text-sm sm:text-base">
                  {tProduct("addToCart")}
                </button>
                <button className="bg-[#134E9B] w-full sm:w-[265px] text-white py-[12px] px-[20px] sm:px-[30px] rounded-[6px] hover:bg-[#0f3e7f] transition cursor-pointer text-sm sm:text-base">
                  {tProduct("buyNow")}
                </button>
              </div>

              <div className="mt-[30px] text-[#06172DB2] space-y-4 text-[14px] sm:text-[16px]">
                <div className="flex items-center gap-3">
                  <Delivery /> {tProduct("deliveryNationwide")}
                </div>
                <div className="flex items-center gap-3">
                  <Market /> {tProduct("storePickup")}
                </div>
                <div className="flex items-center gap-3">
                  <Clock /> {tProduct("deliveryTime")}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[650px] mt-[36px] sm:mt-[100px] h-auto px-4 sm:px-0">
            <div className="flex items-center gap-[40px] sm:gap-[85px] flex-wrap justify-center sm:justify-start">
              <div className="flex gap-[30px] sm:gap-[85px] mb-6">
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`text-[14px] sm:text-[16px] pb-2 cursor-pointer ml-[-50px] sm:ml-0  ${
                    activeTab === "specs"
                      ? "font-bold border-b-2 border-[#000] text-[#000]"
                      : "text-[#B6BABF]"
                  }`}
                >
                  {tProduct("specs")}
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`text-[14px] sm:text-[16px] pb-2 cursor-pointer sm:ml-[90px] ml-0  ${
                    activeTab === "reviews"
                      ? "font-bold border-b-2 border-[#000] text-[#000]"
                      : "text-[#B6BABF]"
                  }`}
                >
                  {tProduct("reviews")}
                </button>
              </div>
            </div>

            {activeTab === "specs" ? (
              <div className="border-t cursor-pointer border-dashed border-[#ccc] divide-y divide-dashed divide-[#ccc]">
                {variations?.options?.map((item: any, index: number) => (
                  <div
                    key={item.id || index}
                    className="py-[10px] px-2 flex justify-between text-[14px] sm:text-[15px] text-[#545D6A] hover:bg-[#f5f5f5] transition duration-200"
                  >
                    <div className="w-[50%]">{variations.name}</div>
                    <div className="w-[50%] text-left">{item?.value}</div>
                  </div>
                ))}
                {[
                  ["Brend", "Vivo"],
                  ["CIM kartalar soni", "2"],
                  ["O‘lchamlari", "75,09x155,11x8,28"],
                  ["Modeli", "Redmi T12"],
                  ["Akumulyator hajmi", "4000 amp"],
                  ["Yadro soni", "8"],
                  ["Tezkor xotira RAM", "6 GB"],
                  ["Ichki xotira ROM", "128 GB"],
                  ["Protsessori", "MediaTek Helio P35 (MT6765)"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="py-[10px] px-2 flex justify-between text-[14px] sm:text-[15px] text-[#545D6A] hover:bg-[#f5f5f5] transition duration-200"
                  >
                    <div className="w-[50%]">{label}</div>
                    <div className="w-[50%] text-left">{value}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-[30px] space-y-8">
                {[1, 2].map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                  >
                    <Image
                      src="/images/user.svg"
                      alt="user"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-[15px] sm:text-[16px] text-[#06172D]">
                        Evgeniy Viktorovich
                      </h3>
                      <div className="flex gap-1 text-[#FACC15] text-[14px] mt-[4px]">
                        ★★★★★
                      </div>
                      <p className="text-[#00000066] text-[12px] sm:text-[13px] mt-[2px]">
                        September 3, 2022
                      </p>
                      <p className="text-[#515D6C] text-[14px] sm:text-[15px] mt-[8px]">
                        The most inconvenient application written with the left
                        heel...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Products title="Oxirgi ko’rgan mahsulotlar" api="products" />
    </>
  );
}
