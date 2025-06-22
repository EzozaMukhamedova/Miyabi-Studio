"use client";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/ProductType";

interface Props {
  product: ProductType;
  extraStyle?: string;
  extraStyleForImg?: string;
}

const ProductCardItem: React.FC<Props> = ({
  product,
  extraStyle = "",
  extraStyleForImg = "",
}) => {
  return (
    <div
      className={`rounded-lg overflow-hidden shadow-md bg-white p-4 flex flex-col items-center ${extraStyle}`}
    >
      <div className={`w-full h-[200px] relative mb-4 ${extraStyleForImg}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-center text-[#333]">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-center text-gray-500">
        {product.description}
      </p>
      <p className="text-[#E48C47] text-lg font-bold mt-3">
        {Number(product.price).toLocaleString("uz-UZ")} so‘m
      </p>
    </div>
  );
};

export default ProductCardItem;
