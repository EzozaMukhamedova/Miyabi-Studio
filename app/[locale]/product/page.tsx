"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import React, { useMemo, useState } from "react";
import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
import classNames from "classnames";

const staticServices = [
  {
    id: 1,
    name: "Soch turmaklash",
    category: "Soch",
    image: "/images/soch3.jpg",
    price: 50000,
    type: "Standart",
    ages: ["0~10", "20~", "30~"],
  },
  {
    id: 2,
    name: "Manikyur",
    category: "Tirnoq",
    image: "/images/manikyur2.jpg",
    price: 120000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 3,
    name: "Kosmetolog",
    category: "Kosmetolog",
    image: "/images/kosmetolog2.png",
    price: 300000,
    discount: 30,
    type: "Chegirma",
    description:
      "Terini tozalash, niqob, gialuron terapiya va boshqa kosmetologik xizmatlar.",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 4,
    name: "Massaj",
    category: "Massaj",
    image: "/images/massaj2.jpg",
    price: 150000,
    type: "Standart",
    description:
      "Tana, orqa va chehra massaji. Professional massaj ustalari tomonidan bajariladi.",
    ages: ["0~10", "20~", "30~"],
  },
  {
    id: 5,
    name: "Lazer muolajalari",
    category: "Lazer",
    image: "/images/lazer.jpg",
    price: 2500000,
    discount: 10,
    type: "Premium",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 6,
    name: "Kiprik",
    category: "Ko‘z",
    image: "/images/kiprik2.png",
    price: 80000,
    type: "Standart",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 7,
    name: "Makyaj",
    category: "Yuz",
    image: "/images/yuz.png",
    price: 450000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 8,
    name: "Pedikyur",
    category: "Tirnoq",
    image: "/images/manikyur1.jpg",
    price: 180000,
    type: "Standart",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 9,
    name: "Soch bo‘yash",
    category: "Soch",
    image: "/images/soch5.jpg",
    price: 250000,
    type: "Premium",
    ages: ["0~10", "20~", "30~"],
  },
  {
    id: 10,
    name: "Terini tozalash",
    category: "Yuz",
    image: "/images/kosmetolog2.jpg",
    price: 200000,
    discount: 20,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 11,
    name: "Gialuron terapiya",
    category: "Kosmetolog",
    image: "/images/kosmetolog5.jpg",
    price: 900000,
    discount: 10,
    type: "Premium",
    ages: ["30~", "40~"],
  },
  {
    id: 12,
    name: "Epilatsiya",
    category: "Tana",
    image: "/images/epilyatsiya.png",
    price: 320000,
    type: "Standart",
    ages: ["20~", "30~"],
  },
  {
    id: 13,
    name: "Chiroyli kiprik",
    category: "Ko‘z",
    image: "/images/kiprik4.jpg",
    price: 150000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 14,
    name: "Soch silliqlash",
    category: "Soch",
    image: "/images/soch4.jpg",
    price: 800000,
    discount: 30,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 15,
    name: "Botoks",
    category: "Kosmetolog",
    image: "/images/botox.png",
    price: 1200000,
    type: "Premium",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 16,
    name: "Yuz massaji",
    category: "Massaj",
    image: "/images/massaj3.jpg",
    price: 350000,
    discount: 20,
    type: "Chegirma",
    ages: ["30~", "40~"],
  },
  {
    id: 17,
    name: "Tana massaji",
    category: "Massaj",
    image: "/images/massaj4.jpg",
    price: 700000,
    type: "Premium",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 18,
    name: "Yuz niqobi",
    category: "Kosmetolog",
    image: "/images/kosmetolog.jpg",
    price: 100000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~"],
  },
  {
    id: 19,
    name: "Qosh bo‘yash",
    category: "Ko‘z",
    image: "/images/qosh.png",
    price: 110000,
    type: "Standart",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 20,
    name: "Tana skrabi",
    category: "Tana",
    image: "/images/kosmetolog7.jpg",
    price: 240000,
    type: "Standart",
    ages: ["30~", "40~"],
  },
  {
    id: 21,
    name: "Soch parvarishi",
    category: "Soch",
    image: "/images/soch4.jpg",
    price: 130000,
    discount: 10,
    type: "Chegirma",
    ages: ["30~", "40~"],
  },
  {
    id: 22,
    name: "Manikyur + Pedikyur",
    category: "Tirnoq",
    image: "/images/manikyur1.jpg",
    price: 350000,
    type: "Premium",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 23,
    name: "Lazer epilatsiya",
    category: "Lazer",
    image: "/images/lazer2.jpg",
    price: 2000000,
    discount: 20,
    type: "Standart",
    ages: ["30~", "40~"],
  },
  {
    id: 24,
    name: "Chehra gialuron terapiya",
    category: "Kosmetolog",
    image: "/images/kosmetolog6.jpg",
    price: 1700000,
    discount: 10,
    type: "Premium",
    ages: ["30~", "40~"],
  },
  {
    id: 25,
    name: "Tana depilatsiya",
    category: "Tana",
    image: "/images/depilyatsiya.png",
    price: 220000,
    type: "Standart",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 26,
    name: "Spa muolajasi",
    category: "Massaj",
    image: "/images/spa.png",
    price: 550000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 27,
    name: "Soch botoks",
    category: "Soch",
    image: "/images/soch2.jpg",
    price: 900000,
    type: "Premium",
    ages: ["30~", "40~"],
  },
  {
    id: 28,
    name: "Gel lak",
    category: "Tirnoq",
    image: "/images/manikyur3.jpg",
    price: 95000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 29,
    name: "Yuz massaji",
    category: "Massaj",
    image: "/images/massaj1.jpg",
    price: 190000,
    type: "Standart",
    ages: ["30~", "40~"],
  },
  {
    id: 30,
    name: "Soch keratinlashtirish",
    category: "Soch",
    image: "/images/soch1.jpg",
    price: 1100000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 31,
    name: "Tana parvarishi",
    category: "Tana",
    image: "/images/massaj.jpg",
    price: 350000,
    type: "Standart",
    ages: ["30~", "40~"],
  },
  {
    id: 32,
    name: "Akne muolajasi",
    category: "Kosmetolog",
    image: "/images/massaj5.jpg",
    price: 480000,
    discount: 20,
    type: "Chegirma",
    ages: ["20~", "30~", "40~"],
  },
  {
    id: 33,
    name: "Shugaring",
    category: "Tana",
    image: "/images/kosmetolog.jpg",
    price: 180000,
    type: "Standart",
    ages: ["30~", "40~"],
  },
  {
    id: 34,
    name: "Qosh laminatsiyasi",
    category: "Ko‘z",
    image: "/images/qosh.png",
    price: 120000,
    discount: 10,
    type: "Chegirma",
    ages: ["20~", "30~"],
  },
  {
    id: 35,
    name: "Permanent makiyaj",
    category: "Kosmetolog",
    image: "/images/makyaj1.png",
    price: 1550000,
    type: "Premium",
    ages: ["20~"],
  },
];

const categories = [
  "Barchasi",
  "Soch",
  "Tirnoq",
  "Yuz",
  "Tana",
  "Ko‘z",
  "Lazer",
  "Massaj",
  "Kosmetolog",
];

const types = ["Barchasi", "Standart", "Premium", "Chegirma"];
const years = ["0~10", "20~", "30~", "40~"];

export default function ServicesPage() {
  const [price, setPrice] = useState<[number, number]>([50000, 2000000]);
  const [category, setCategory] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<string | null>(null);
  const [selectedYear, setYear] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  // Filtering
  const filteredServices = useMemo(() => {
    return staticServices.filter((service) => {
      const matchCategory =
        category && category !== "Barchasi"
          ? service.category === category
          : true;
      const matchType =
        serviceType && serviceType !== "Barchasi"
          ? service.type === serviceType
          : true;
      const matchYear = selectedYear
        ? service.ages?.includes(selectedYear)
        : true;
      return (
        service.price >= price[0] &&
        service.price <= price[1] &&
        matchCategory &&
        matchType &&
        matchYear
      );
    });
  }, [price, category, serviceType, selectedYear]);

  // Sahifalash uchun xizmatlarni bo‘lib olish
  const pageCount = Math.ceil(filteredServices.length / servicesPerPage);
  const servicesToShow = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  // Pagination buttonlari
  const paginationButtons = [];
  for (let i = 1; i <= pageCount; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={classNames(
          "px-3 py-1 rounded mx-1 border cursor-pointer transition-colors duration-150",
          currentPage === i
            ? "bg-[#e47c48] text-white border-[#e47c48]" // Active tugma
            : "bg-white text-[#0A1729] border-gray-300 hover:bg-[#ffe0ce] hover:text-[#e47c48] hover:border-[#e47c48]"
        )}
      >
        {i}
      </button>
    );
  }

  // Qayta render bo‘lishida sahifani 1 ga olib kelish (filter o‘zgarganda)
  React.useEffect(
    () => setCurrentPage(1),
    [price, category, serviceType, selectedYear]
  );

  return (
    <div className="containers flex flex-col lg:flex-row gap-[20px]  ">
      {/* Chap panel */}
      <div className="min-w-[280px] w-full lg:w-[300px] border border-gray-200 bg-[#EBEFF3] p-[18px] rounded-[8px] mt-[40px]">
        {/* Narx va slider */}
        <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4">
          Narx oralig‘i
        </h3>
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col w-full">
            <span className="text-[14px] text-[#6B7280] mb-1">So'mdan</span>
            <input
              type="number"
              className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm"
              value={price[0]}
              min={50000}
              onChange={(e) => setPrice([+e.target.value, price[1]])}
            />
          </div>
          <div className="flex flex-col w-full">
            <span className="text-[14px] text-[#6B7280] mb-1">So'mgacha</span>
            <input
              type="number"
              className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm"
              value={price[1]}
              max={2000000}
              onChange={(e) => setPrice([price[0], +e.target.value])}
            />
          </div>
        </div>
        <RadixSlider.Root
          className="relative flex items-center w-full h-5 mb-6 select-none touch-none"
          min={50000}
          max={2000000}
          step={10000}
          value={price}
          onValueChange={(value) => setPrice(value as [number, number])}
        >
          <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-[#ffd7bd]">
            <RadixSlider.Range className="absolute h-full bg-[#e47c48] rounded-full" />
          </RadixSlider.Track>

          <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#e47c48] shadow-md cursor-pointer" />
          <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#e47c48] shadow-md cursor-pointer" />
        </RadixSlider.Root>

        {/* Kategoriya */}
        <h4 className="mt-4 mb-2 text-[16px] font-medium">Kategoriya</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat === category ? null : cat)}
              className={classNames(
                "px-3 py-1 rounded-full text-sm border cursor-pointer transition-colors duration-150",
                category === cat
                  ? "bg-[#e47c48] text-white border-[#e47c48]" // Tanlangan (active) tugma
                  : "bg-white text-[#0A1729] border-gray-300 hover:bg-[#ffe0ce] hover:text-[#e47c48] hover:border-[#e47c48]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Xizmat turi */}
        <h4 className="mt-4 mb-2 text-[16px] font-medium">Turi</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setServiceType(type === serviceType ? null : type)}
              className={classNames(
                "px-3 py-1 rounded-full text-sm border cursor-pointer transition-colors duration-150 cursor-pointer",
                serviceType === type
                  ? "bg-[#e47c48] text-white border-[#e47c48]" // Tanlangan tugma
                  : "bg-white text-[#0A1729] border-gray-300 hover:bg-[#ffe0ce] hover:text-[#e47c48] hover:border-[#e47c48]"
              )}
            >
              {type}
            </button>
          ))}
        </div>

        <h4 className="mt-4 mb-2 text-[16px] font-medium">Yoshi</h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setYear(year === selectedYear ? null : year)}
              className={classNames(
                "px-3 py-1 rounded-full text-sm border cursor-pointer transition-colors duration-150",
                selectedYear === year
                  ? "bg-[#e47c48] text-white border-[#e47c48]"
                  : "bg-white text-[#0A1729] border-gray-300 hover:bg-[#ffe0ce] hover:text-[#e47c48] hover:border-[#e47c48]"
              )}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Chegirmadagi xizmatlar */}
        <h4 className="mt-6 mb-3 text-[16px] font-semibold">
          Chegirmadagi xizmatlar
        </h4>
        <div className="flex flex-col gap-2">
          {staticServices
            .filter((s) => s.discount > 0)
            .slice(0, 4)
            .map((service) => (
              <div
                key={service.id}
                className="flex items-center gap-2 p-2 bg-white rounded shadow-sm"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="object-cover w-12 h-12 rounded"
                />
                <div>
                  <p className="text-sm font-medium">{service.name}</p>
                  <span className="text-xs text-[#e45447]">
                    -{service.discount}% chegirma
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Xizmatlar ro‘yxati va pagination */}
      <div className="flex flex-col flex-1 mt-[40px]">
        <div className="grid grid-cols-1 gap-4sm:grid-cols-2 lg:grid-cols-3">
          {servicesToShow.map((service) => (
            <div
              key={service.id}
              className="relative p-4 overflow-hidden transition bg-white shadow rounded-xl hover:shadow-lg"
            >
              {service.discount > 0 && (
                <span className="absolute z-10 top-2 left-2 text-xs bg-[#e45947] text-white px-2 py-1 rounded animate-pulse">
                  -{service.discount}% chegirma
                </span>
              )}
              <img
                src={service.image}
                alt={service.name}
                className="object-cover w-full h-40 mb-2 transition-transform duration-300 ease-in-out cursor-pointer rounded-xl hover:scale-102"
              />
              <h3 className="font-semibold text-[#0A1729]">{service.name}</h3>
              <p className="text-[#15509E] text-sm mt-1">
                {formatNumberSpaces(service.price)} so‘m
              </p>
              <p className="mt-1 text-xs text-gray-500">Turi: {service.type}</p>
              {/* Agar description bo'lsa, chiqarish */}
              {service.description && (
                <p className="mt-1 text-xs text-gray-600">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
        {/* Sahifalash buttonlari */}
        <div className="flex justify-center mt-6">{paginationButtons}</div>
      </div>
    </div>
  );
}
