// "use client";
// import { useParams } from "next/navigation";

// const categoryContents: Record<string, { title: string; description: string }> =
//   {
//     sochTurmaklash: {
//       title: "Soch turmaklash",
//       description:
//         "Soch turmaklash xizmatlari, klassik va zamonaviy uslublar bilan",
//     },
//     manikyur: {
//       title: "Manikyur",
//       description: "Chiroyli tirnoqlar uchun professional manikyur xizmatlari",
//     },
//     kosmetologiya: {
//       title: "Kosmetologiya",
//       description: "Teringiz uchun parvarish, tozalash va davolash muolajalari",
//     },
//     massaj: {
//       title: "Massaj",
//       description: "Dam olish va sog‘liq uchun terapevtik massaj xizmati",
//     },
//     lazer: {
//       title: "Lazer muolajalari",
//       description: "Lazer asosidagi zamonaviy teri parvarish muolajalari",
//     },
//     kiprik: {
//       title: "Kiprik",
//       description: "Kipriklarni bo‘yash, uzaytirish va bukish xizmatlari",
//     },
//     makyaj: {
//       title: "Makyaj",
//       description: "Professional make-up xizmatlari har qanday tadbir uchun",
//     },
//   };

// export default function CategoryPage() {
//   const { slug } = useParams();

//   const content = categoryContents[slug as string];

//   if (!content) {
//     return <div className="p-10 text-red-500">Kategoriya topilmadi</div>;
//   }

//   return (
//     <div className="max-w-3xl p-10 mx-auto">
//       <h1 className="mb-4 text-3xl font-bold">{content.title}</h1>
//       <p className="text-lg text-gray-700">{content.description}</p>
//     </div>
//   );
// }
/////////
// app/[locale]/category/[slug]/page.tsx
// import { categoryDetails } from "../../../../app/constants/categoryData";
// import Image from "next/image";
// import Link from "next/link";

// interface Props {
//   params: { slug: string };
// }

// export default function CategoryPage({ params }: Props) {
//   const category = categoryDetails[params.slug as keyof typeof categoryDetails];

//   if (!category) {
//     return <div className="py-10 text-xl text-center">Ma’lumot topilmadi</div>;
//   }

//   return (
//     <div className="max-w-6xl px-4 py-8 mx-auto">
//       <h1 className="mb-2 text-3xl font-bold">{category.title}</h1>
//       <p className="mb-6 text-gray-600">{category.description}</p>

//       {/* Booking */}
//       <div className="bg-[#f8f8f8] p-6 rounded-lg shadow-md mb-8">
//         <h2 className="mb-2 text-xl font-semibold">Booking</h2>
//         <p className="text-lg font-bold">{category.price}</p>
//         <Link href="/contact">
//           <button className="mt-4 bg-[#0F4A97] hover:bg-[#0d3e7d] text-white py-2 px-6 rounded-md">
//             Buyurtma berish
//           </button>
//         </Link>
//       </div>

//       {/* Contact */}
//       <div className="mb-8">
//         <h3 className="font-semibold">📍 Manzil:</h3>
//         <p>{category.address}</p>
//         <h3 className="mt-2 font-semibold">📞 Telefon:</h3>
//         <p>{category.phone}</p>
//       </div>

//       {/* Gallery */}
//       <div className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-3">
//         {category.images.map((img, index) => (
//           <div key={index} className="overflow-hidden rounded-lg">
//             <Image
//               src={img}
//               alt={`${category.title} rasm ${index + 1}`}
//               width={300}
//               height={200}
//               className="w-full h-[200px] object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Map */}
//       <div className="mt-10">
//         <h2 className="mb-2 text-xl font-semibold">Xarita</h2>
//         <iframe
//           src={category.mapUrl}
//           width="100%"
//           height="300"
//           className="border rounded-md"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }
//////

"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { categoryDetails } from "../../../../app/constants/categoryData";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as keyof typeof categoryDetails;
  const category = categoryDetails[slug];

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
            <h2 className="mb-2 text-xl font-semibold">Service</h2>

            <div className="p-4 mb-4 border rounded-md shadow-sm">
              <p className="font-bold">Soch turmaklash - 60 daqiqa</p>
              <p className="mt-2 text-sm text-gray-600">
                Turli uslublardagi professional soch turmaklash xizmati.
              </p>
            </div>

            <div className="p-4 mb-4 border rounded-md shadow-sm">
              <p className="font-bold">Maxsus uslubli to‘y soch turmaklash</p>
              <p className="mt-2 text-sm text-gray-600">
                Maxsus tadbirlar uchun professional to‘y soch bezatish
                xizmatlari.
              </p>
            </div>

            <div className="flex items-start justify-between p-4 mb-4 border rounded-md shadow-sm">
              <div>
                <p className="font-bold">
                  [Yuz] Teshiklarni tozalash yuz 60 daqiqa
                </p>
                <p className="mt-1 text-sm text-gray-600">75 daqiqa</p>
                <p className="mt-2 text-sm text-gray-600">
                  Tozalash → yuz yoki yuzdagi epilasyon → gidra yoki yuz peeling
                  → modelllashtirish to‘plami. Tegishli tashvishlar: tiqilib
                  qolgan gözenekler/qaraytirish/pürüzlilik/sebum muammolari.
                </p>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-semibold">13 000 yen</p>
                <button className="px-4 py-1 mt-2 text-white bg-gray-800 rounded">
                  Zaxira
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 mb-4 border rounded-md shadow-sm">
              <div>
                <p className="font-bold">
                  [Yuz] Nemlendirici va chiroyli teri yuzini 60 daqiqa
                </p>
                <p className="mt-1 text-sm text-gray-600">75 daqiqa</p>
                <p className="mt-2 text-sm text-gray-600">
                  Peeling → Yengil yuz (foto) → Quritish, xiralik, ko‘zlar,
                  nozik ajinlar, qaruvchilik parvarish.
                </p>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-semibold">16 000 yen</p>
                <button className="px-4 py-1 mt-2 text-white bg-gray-800 rounded">
                  Zaxira
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 mb-4 border rounded-md shadow-sm">
              <div>
                <p className="font-bold">
                  [Yuz] Kichkina yuzni yuqoriga ko‘tarish 60 daqiqa
                </p>
                <p className="mt-1 text-sm text-gray-600">75 daqiqa</p>
                <p className="mt-2 text-sm text-gray-600">
                  Radio to‘lqin → yuz chizig‘ining sarkmasi / ikki iyak / sust
                  kontur.
                </p>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-semibold">18 000 yen</p>
                <button className="px-4 py-1 mt-2 text-white bg-gray-800 rounded">
                  Zaxira
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 mb-4 border rounded-md shadow-sm">
              <div>
                <p className="font-bold">
                  [Yuz] Maxsus tayyorlangan yuz 120 daqiqa
                </p>
                <p className="mt-1 text-sm text-gray-600">135 daqiqa</p>
                <p className="mt-2 text-sm text-gray-600">
                  Umumiy teri muammolari (terining teshiklari / quritilish /
                  sarkmasi / qarish).
                </p>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-semibold">23 000 yen</p>
                <button className="px-4 py-1 mt-2 text-white bg-gray-800 rounded">
                  Zaxira
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 mb-4 border rounded-md shadow-sm">
              <div>
                <p className="font-bold">
                  [Tana] Oyoq va oyoq parvarishi massaji 30 daqiqa
                </p>
                <p className="mt-1 text-sm text-gray-600">40 daqiqa</p>
                <p className="mt-2 text-sm text-gray-600">
                  Shish / sovuq / oyoqlarda og‘riq / charchash / sinov.
                </p>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-semibold">8 000 yen</p>
                <button className="px-4 py-1 mt-2 text-white bg-gray-800 rounded">
                  Zaxira
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 mb-4 border rounded-md shadow-sm">
              <div>
                <p className="font-bold">
                  [Body] To‘liq tana xushbo‘yligi tanaga ishlov berish 60 daqiqa
                </p>
                <p className="mt-1 text-sm text-gray-600">70 daqiqa</p>
                <p className="mt-2 text-sm text-gray-600">
                  Xushbo‘y hid bilan orqa, elkalar, oyoq va tana yengilligi.
                  Faqat ayollar uchun mavjud.
                </p>
              </div>
              <div className="text-right min-w-[100px]">
                <p className="font-semibold">16 000 yen</p>
                <button className="px-4 py-1 mt-2 text-white bg-gray-800 rounded">
                  Zaxira
                </button>
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
        <div className="border border-red-600 lg:col-span-1">
          <div className="p-4 mb-6 bg-white border rounded-md shadow-sm">
            <h2 className="mb-2 text-lg font-semibold">Booking</h2>
            <p className="text-xl font-bold text-pink-600">{category.price}</p>
            <button className="mt-4 w-full bg-[#0F4A97] text-white py-2 rounded hover:bg-[#0d3e7d] transition-colors">
              Reserve Now
            </button>
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
