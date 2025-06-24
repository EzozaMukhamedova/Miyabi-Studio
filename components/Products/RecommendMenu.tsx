"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/components/Products/SlideConfig/index";

// Crown icon for 1–3-rank masters
function CrownIcon() {
  return (
    <svg width="28" height="23" viewBox="0 0 28 23" fill="none">
      <path
        d="M3 10L9 4L14 14L19 4L25 10"
        stroke="#e48c47"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="3" y="10" width="22" height="10" rx="3" fill="#f9e5c7" />
    </svg>
  );
}

// MASTER DATA
const topMasters = [
  {
    id: 1,
    name: "Dilnoza Qurbonova",
    specialty: "Soch ustasi",
    experience: "8 yil",
    rating: 1,
    languages: ["O‘zbek", "Rus", "Ingliz", "Turk"],
    image: "/images/master1.jpeg",
    salon: "Diamond SPA & Beauty",
  },
  {
    id: 2,
    name: "Kamola Nasirova",
    specialty: "Manikyur",
    experience: "6 yil",
    rating: 2,
    languages: ["O‘zbek", "Rus", "Ingliz", "Tojik"],
    image: "/images/master2.jpeg",
    salon: "Queen Beauty Studio",
  },
  {
    id: 3,
    name: "Malika Toshpulatova",
    specialty: "Kosmetolog",
    experience: "7 yil",
    rating: 3,
    languages: ["O‘zbek", "Rus", "Tojik"],
    image: "/images/master7.jpeg",
    salon: "Farhod Plaza Beauty",
  },
  {
    id: 4,
    name: "Muxlisa To‘xtayeva",
    specialty: "Massaj",
    experience: "5 yil",
    rating: 4,
    languages: ["O‘zbek"],
    image: "/images/master6.jpeg",
    salon: "Lux Beauty",
  },
  {
    id: 5,
    name: "Durdona Karimova",
    specialty: "Kiprik ustasi",
    experience: "4 yil",
    rating: 5,
    languages: ["O‘zbek", "Rus"],
    image: "/images/master5.jpeg",
    salon: "VIP Beauty",
  },
  {
    id: 6,
    name: "Rayhon Sharipova",
    specialty: "Make-up artist",
    experience: "3 yil",
    rating: 6,
    languages: ["O‘zbek", "Rus", "Ingliz"],
    image: "/images/master3.jpeg",
    salon: "Express Beauty",
  },
];

// INDIVIDUAL CARD
function MasterCard({ master }) {
  const isTop3 = master.rating <= 3;
  return (
    <div
      className={`
      w-[260px] max-[900px]:w-[98%] group bg-[#fdf8f2] rounded-[16px] p-5
      flex flex-col items-center relative border border-transparent hover:border-[#e48c47]
      transition-all duration-300
      `}
    >
      {/* Badge rasmga to‘g‘ri kelmasin deb: yuqoriroq va kichik */}
      {isTop3 ? (
        <span className="absolute top-2 left-2 flex items-center gap-1 bg-white/80 px-2.5 py-1.5 rounded-full font-bold text-[#e48c47] text-[15px] z-20 border border-[#fbe4a3] shadow">
          <CrownIcon />
          <span className="ml-0.5 text-[#e48c47] font-bold drop-shadow">
            {master.rating}-o‘rin
          </span>
        </span>
      ) : (
        <span className="absolute top-4 left-4 bg-[#fbe4a3] text-[#e48c47] font-bold rounded-full px-3 py-1 text-[14px] shadow border border-[#f9e8b5] z-10">
          {master.rating}-o‘rin
        </span>
      )}

      {/* Master photo: pastroqda */}
      <div className="w-[96px] h-[96px] rounded-full overflow-hidden mb-3 mt-4 border-2 border-[#fbe4a3] bg-white shadow">
        <img
          src={master.image}
          alt={master.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center w-full mt-2 text-center">
        <h3 className="font-bold text-lg text-[#2f2f2f] mb-1 leading-5">
          {master.name}
        </h3>
        <span className="text-[15px] text-[#e48c47] font-semibold mb-0.5 block">
          {master.specialty}
        </span>
        <span className="text-[16px] text-[#e48c47] font-semibold mb-1 block">
          {master.salon}
        </span>

        <span className="text-[16px] text-[#4a2103] mb-0.5 ">
          {master.experience} tajriba
        </span>

        <div className="flex items-center justify-center gap-1 text-[#2f2f2f] text-xs font-medium mb-1">
          <svg width={14} height={14} fill="none" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" stroke="#8ac6d1" strokeWidth="1.2" />
            <path
              d="M8 1c2.5 3.5 2.5 11.5 0 14m0-14c-2.5 3.5-2.5 11.5 0 14m-7-7h14"
              stroke="#e48c47"
              strokeWidth="1.1"
            />
          </svg>
          <span className="text-[#4a2103] text-[14px]">{master.languages.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

// MAIN EXPORT
export default function DemoMasters() {
  return (
    <>
      <h2 className="font-bold text-[32px] containers !mt-[80px] max-[1000px]:text-2xl max-[700px]:text-xl max-[800px]:!mt-[30px] max-[800px]:!mb-[20px] !mb-[50px] ">
        TOPdagi masterlar
      </h2>
      {/* Desktop: Slider */}
      <div className="max-[690px]:hidden">
        <Slider {...settings}>
          {topMasters.map((master) => (
            <MasterCard key={master.id} master={master} />
          ))}
        </Slider>
      </div>
      {/* Mobile: Grid */}
      <div className="min-[690px]:hidden grid grid-cols-2 max-[480px]:grid-cols-1 px-2.5 gap-[15px]">
        {topMasters.map((master) => (
          <MasterCard key={master.id} master={master} />
        ))}
      </div>
    </>
  );
}
