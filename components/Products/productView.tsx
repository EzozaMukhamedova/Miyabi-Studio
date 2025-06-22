"use client";

import { getProducts } from "@/service/getProducts";
import React, { useContext } from "react";
import ProductCard from "./ProductCardItem";
import { ProductType } from "@/types/ProductType";
import { ThemeContext } from "@/context/ThemeContextProvider";

function ProductPage({ title, api }: { title: string; api: string }) {
  const { data: products, isLoading, isError } = getProducts(api);
  const { theme } = useContext(ThemeContext);

  if (isLoading || isError) {
    return (
      <div
        className={`containers py-10 ${
          theme === "dark" ? "bg-[#333]" : "bg-white"
        }`}
      >
        <h2
          className={`text-4xl font-bold my-6 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {isLoading ? "Loading..." : "Xatolik yuz berdi"}
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[...Array(9)].map((_, idx) => (
            <div
              key={idx}
              className="w-full h-[350px] bg-gray-200 animate-pulse flex justify-center items-center text-blue-500/20 rounded-lg "
            >
              Loading...
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="containers py-10">
      <h2 className="text-[32px] font-bold mb-[40px]">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product: ProductType, index: number) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
