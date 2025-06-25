"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { categoryDetails } from "../../../../app/constants/categoryData";
import BookingTableButton from "../../../../components/BookingTableButton/BookingTableButton";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as keyof typeof categoryDetails;
  const category = categoryDetails[slug];

  const [open, setOpen] = useState(false);

  if (!category)
    return <div className="py-10 text-center">Kategoriya topilmadi</div>;

  return (
    <div className="max-w-[1200px] mx-auto mt-[40px] px-4">
      <h1 className="mb-4 text-3xl font-bold">{category.title}</h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Chap taraf - Galereya */}
        <div className="lg:col-span-2">
          <p className="mb-4 text-lg text-gray-700">{category.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3">
            {category.images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-md">
                <Image
                  src={img}
                  alt={category.title + " image"}
                  width={300}
                  height={200}
                  className="w-full h-[180px] object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="mb-[50px] ">
            <h2 className="mb-2 text-xl font-semibold ">
              Omotesandoda erishish mumkin bo'lgan ideal porloq sochlar. Soch
              turiga <br />
              moslashtirilgan ehtiyotkorlik bilan sochlaringizga silliq va
              chiroyli qoplama bering.
            </h2>
            <p className="mt-[20px]">
              "Bir kun" - Omotesandodagi go'zallik saloni, sochni parvarish
              qilish va uslublar yaratishga ixtisoslashgan. Muolajalar va soch
              ranglari har bir mijozning soch turiga moslashtirilib, porloq va
              chiroyli qoplamaga olib keladi. "Sochlaringizga g'amxo'rlik
              qilsangiz, har kuni o'zgaradi." "Bir kun" sochlarning holatiga
              moslashtirilgan muolajalarni taklif qiladi va sog'lom va oson
              ishlov beradigan soch turmagini maqsad qiladi. Omotesandodagi
              tajribali stilist sizning soch muammolaringizga yaqin bo'ladi va
              ideal uslubni taklif qiladi. Nega xorijdagi mijozlar orasida
              mashhur bo'lgan Omotesando sartaroshxonasida Yaponiyaga xos nozik
              texnika va mehmondo'stlikni his qilmaysiz? Sochingizga yangi
              porlashni bering. Omotesandoda yaponcha sifatli sochni parvarish
              qilishni xohlaysizmi?
            </p>
          </div>

          {/* Service qismi*/}
          <div>
            <h2 className="mb-5 text-2xl font-bold text-[#e47c48]">
              Xizmatlar va Mijoz Fikrlari
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {/* 1-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Yuz parvarishi
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    60 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Xodimalar professional, natija har doim zamonaviy va uslubli
                  chiqadi! Qizimning to‘yida ham shu salonga ishonch bildirdik."
                  — <span className="text-[#f02c96]">Malika Y.</span>
                </p>
              </div>
              {/* 2-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Quruq terini namlantirish
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    90 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "To‘yim uchun turmak oldim — ko‘pchilik maqtadi! Nafis,
                  mustahkam va juda go‘zal chiqdi." —{" "}
                  <span className="text-[#e47c48]">Nigora M.</span>
                </p>
              </div>
              {/* 3-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Yuz: Teshiklarni tozalash
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    75 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Yuzim silliq va toza bo‘ldi, aknilarim sezilarli kamaydi.
                  Xodimalar juda e’tiborli." —{" "}
                  <span className="text-[#f02c96]">Dilnoza O.</span>
                </p>
              </div>
              {/* 4-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Yuz: Nemlendiruvchi parvarish
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    75 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Terim nemlangan, tiniq va yorqin bo‘lib chiqdi. Massaj ham
                  yoqdi!" — <span className="text-[#e47c48]">Dilafruz X.</span>
                </p>
              </div>
              {/* 5-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Yuz: Mini lifting
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    75 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Radio to‘lqinli muolajadan keyin yuz chizig‘im ancha
                  tiniqlashdi. Juda tavsiya qilaman!" —{" "}
                  <span className="text-[#f02c96]">Lola A.</span>
                </p>
              </div>
              {/* 6-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Maxsus to‘liq yuz parvarishi
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    135 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Teri muammolarim uchun kompleks muolaja oldim — natijadan
                  juda mamnunman." —{" "}
                  <span className="text-[#e47c48]">Nozima S.</span>
                </p>
              </div>
              {/* 7-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Yuz massaji
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    40 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Ishdan charchaganimda oyoq massaji menga dam beradi, har
                  safar shu salonga kelaman." —{" "}
                  <span className="text-[#f02c96]">Gulbahor T.</span>
                </p>
              </div>
              {/* 8-xizmat */}
              <div className="p-5 rounded-xl shadow bg-white border border-[#f6e2d1] flex flex-col gap-3 hover:shadow-lg transition">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-[#2f2f2f]">
                    Yuz massaji (xushbo‘y aromatlar bilan)
                  </span>
                  <span className="px-3 py-1 bg-[#ffe6d3] text-[#e47c48] rounded-full text-xs font-bold">
                    70 daqiqa
                  </span>
                </div>
                <p className="text-[15px] text-[#555] italic">
                  "Yuz massajidan keyin o‘zimni yengil his qilaman, stressdan
                  xalos bo‘ldim." —{" "}
                  <span className="text-[#e47c48]">Zamira R.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Salon joylashuvi */}
          <div>
            <h2 className="mt-10 mb-4 text-xl font-semibold">
              Joylashuvingiz yaqinidagi salonlarni toping
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 border rounded-md shadow-sm">
                <img
                  src="/images/salon1.jpg"
                  alt="SALOWIN"
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="font-bold">SALOWIN Ebisu TOMOMI NISHIDA</p>
                <p className="text-sm text-gray-600">Sharhlar yetarli emas</p>
                <p className="mt-1 text-sm text-gray-500">
                  Ideal porloq soch turmagi uchun joy
                </p>
              </div>
              <div className="p-4 border rounded-md shadow-sm">
                <img
                  src="/images/salon2.jpg"
                  alt="Ayatori"
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="font-bold">Ayatori soch saloni</p>
                <p className="text-sm text-gray-600">Sharhlar yetarli emas</p>
                <p className="mt-1 text-sm text-gray-500">
                  6 daqiqalik yurishdagi salqin joy
                </p>
              </div>
              <div className="p-4 border rounded-md shadow-sm">
                <img
                  src="/images/salon3.jpg"
                  alt="echki Harajuku"
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="font-bold">echki Harajuku</p>
                <p className="text-sm text-gray-600">Sharhlar yetarli emas</p>
                <p className="mt-1 text-sm text-gray-500">
                  Jonli Harajuku sartarosh saloni
                </p>
              </div>
              <div className="p-4 border rounded-md shadow-sm">
                <img
                  src="/images/salon4.jpg"
                  alt="sulir soch va tirnoq dizayni"
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="font-bold">sulir soch va tirnoq dizayni</p>
                <p className="text-sm text-gray-600">Sharhlar yetarli emas</p>
                <p className="mt-1 text-sm text-gray-500">
                  Yapon texnologiyasi bilan uyg‘unlashgan go‘zallik
                </p>
              </div>
              <div className="p-4 border rounded-md shadow-sm">
                <img
                  src="/images/salon5.jpg"
                  alt="V-TOKYO"
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="font-bold">V-TOKYO</p>
                <p className="text-sm text-gray-600">Sharhlar yetarli emas</p>
                <p className="mt-1 text-sm text-gray-500">
                  Trenddagi salqin dizayn va xizmatlar
                </p>
              </div>

              <div className="p-4 border rounded-md shadow-sm">
                <img
                  src="/images/salon5.jpg"
                  alt="V-TOKYO"
                  className="object-cover w-full h-40 mb-2 rounded"
                />
                <p className="font-bold">V-TOKYO</p>
                <p className="text-sm text-gray-600">Sharhlar yetarli emas</p>
                <p className="mt-1 text-sm text-gray-500">
                  Trenddagi salqin dizayn va xizmatlar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* O‘ng taraf - Booking va xarita */}
        <div className=" lg:col-span-1">
          <div className="p-4 mb-6 bg-white border rounded-md shadow-sm">
            <h2 className="mb-2 text-lg font-semibold text-[#3b2f23]">
              Narxlar
            </h2>
            <p className="text-xl font-bold text-[#be5a21]">{category.price}</p>
            {/* bron qilish */}
            <button
              className="mt-4 w-full bg-[#e47c48] text-white py-2 rounded-lg font-semibold shadow-sm hover:bg-[#cf703d] transition-colors duration-150 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Hoziroq bron qilish
            </button>
            <BookingTableButton open={open} onClose={() => setOpen(false)} />
          </div>

          <div className="p-4 bg-white border rounded-md shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Map</h2>
            <iframe
              src={category.mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-2 text-sm text-gray-700">{category.address}</p>
            <p className="text-sm text-gray-700">{category.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
