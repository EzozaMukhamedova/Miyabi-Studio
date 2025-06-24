"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/components/Products/SlideConfig/index";
import ProductCard from "@/components/Products/ProductCardItem";
import { ProductType } from "@/types/ProductType";

const dummyProducts: ProductType[] = [
  {
    id: 1,
    name: "Soch turmaklash",
    image: "/images/soch3.jpg",
    price: "100000",
    is_liked: false,
    category_id: 1,
    description: "Kundalik Soch turmaklash xizmatlari",
  },
  {
    id: 2,
    name: "Manikyur",
    image: "/images/mankyur8.png",
    price: "80000",
    is_liked: false,
    category_id: 2,
    description: "Chiroyli manikyur dizaynlari",
  },
  {
    id: 3,
    name: "Kosmetologiya",
    image: "/images/teri.png",
    price: "120000",
    is_liked: false,
    category_id: 3,
    description: "Yuz Terisini parvarishlash muolajalari",
  },
  {
    id: 4,
    name: "Massaj",
    image: "/images/massajBoyin.png",
    price: "150000",
    is_liked: false,
    category_id: 4,
    description: "Bo'yin va yelka uchun massaj xizmati",
  },
  {
    id: 5,
    name: "Kiprik",
    image: "/images/kiprikcha.png",
    price: "60000",
    is_liked: false,
    category_id: 5,
    description: "Kiprik bo‘yash va uzaytirish",
  },
  {
    id: 6,
    name: "Yuz bo‘yoqlari",
    image: "/images/yuz.png",
    price: "90000",
    is_liked: false,
    category_id: 6,
    description: "Kundalik yengil make-up xizmati",
  },
];

export default function DemoMastersPage() {
  return (
    <>
      <h2 className="font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px]">
       Eng ko‘p tanlangan xizmatlar
      </h2>

      {/* Desktop: Slider */}
      <div className="max-[690px]:hidden">
        <Slider {...settings}>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>

      {/* Mobile: Grid */}
      <div className="min-[690px]:hidden grid grid-cols-3 max-[640px]:grid-cols-2 px-2.5 gap-[15px]">
        {dummyProducts.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
