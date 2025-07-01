"use client";
import { useState } from "react";

const hairstyles = [
  {
    id: 1,
    title: "Kattalar uchun funksional qisqa soch",
    salon: "Puur soch saloni",
    image: "/hairstyles/qisqa1.jpg",
  },
  {
    id: 2,
    title: "Trenddagi qisqa bob soch turmagi",
    salon: "ANTI salon",
    image: "/hairstyles/qisqa2.jpg",
  },
  {
    id: 3,
    title: "Yumshoq qatlamli qisqa soch",
    salon: "BONNY COUTURE",
    image: "/hairstyles/qisqa3.jpg",
  },
  {
    id: 4,
    title: "Hajmli va havodor bob",
    salon: "Que hair",
    image: "/hairstyles/qisqa4.jpg",
  },
  {
    id: 5,
    title: "Tabiiy ko‘rinishdagi silliq bob",
    salon: "BONNY COUTURE",
    image: "/hairstyles/qisqa5.jpg",
  },
  {
    id: 6,
    title: "40+ ayollar uchun yoshartiruvchi bob",
    salon: "Chocolat NAMBA",
    image: "/hairstyles/qisqa6.jpg",
  },
  {
    id: 7,
    title: "O‘rta uzunlikdagi yumshoq to‘lqinli soch",
    salon: "Euphoria yangi filiali",
    image: "/hairstyles/orta1.jpg",
  },
  {
    id: 8,
    title: "Oson parvarish qilinadigan qatlamli soch",
    salon: "Door Bell hair Living",
    image: "/hairstyles/orta2.jpg",
  },
  {
    id: 9,
    title: "Uzun va tabiiy to‘g‘ri soch",
    salon: "ALICe by AFLOAT",
    image: "/hairstyles/uzun1.jpg",
  },
  {
    id: 10,
    title: "Qalin sochli ayollar uchun havodor shaggy bob",
    salon: "Lond profil",
    image: "/hairstyles/qisqa7.jpg",
  },
];

const Populars = () => {
  const [region, setRegion] = useState("");
  const [age, setAge] = useState("");
  const [length, setLength] = useState("");
  const [menu, setMenu] = useState("");
  const [imageType, setImageType] = useState("");

  return (
    <div className="flex mx-auto mt-[150px] containers border-2  border-red-200">
      {/* Filtrlar paneli */}
      <aside className="w-64 pr-6">
        <div className="mb-6">
          <h2 className="mb-2 font-bold mt-[50px]">Hudud / Vokzal</h2>
          <select
            className="w-full mb-2"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">Tanlanmagan</option>
            <option value="toshkent">Toshkent</option>
            <option value="samarqand">Samarqand</option>
          </select>
        </div>
        <div className="mb-6">
          <h2 className="mb-2 font-bold">Yosh toifasi</h2>
          <select
            className="w-full mb-2"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Tanlanmagan</option>
            <option value="10">10 yosh</option>
            <option value="20">20 yosh</option>
            <option value="30">30 yosh</option>
            <option value="40">40 yosh</option>
            <option value="50">50 yoshdan katta</option>
          </select>
        </div>
        <div className="mb-6">
          <h2 className="mb-2 font-bold">Soch uzunligi</h2>
          <select
            className="w-full mb-2"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          >
            <option value="">Tanlanmagan</option>
            <option value="short">Qisqa</option>
            <option value="medium">O‘rtacha</option>
            <option value="long">Uzun</option>
          </select>
        </div>
        <div className="mb-6">
          <h2 className="mb-2 font-bold">Menyu</h2>
          <select
            className="w-full mb-2"
            value={menu}
            onChange={(e) => setMenu(e.target.value)}
          >
            <option value="">Tanlanmagan</option>
            <option value="cut">Soch olish</option>
            <option value="color">Bo‘yoq</option>
            <option value="perm">Perm</option>
          </select>
        </div>
        <div>
          <h2 className="mb-2 font-bold">Turi</h2>
          <select
            className="w-full"
            value={imageType}
            onChange={(e) => setImageType(e.target.value)}
          >
            <option value="">Tanlanmagan</option>
            <option value="natural">Tabiiy</option>
            <option value="elegant">Elegant</option>
            <option value="cute">Yoqimli</option>
          </select>
        </div>
      </aside>
      {/* Kontent paneli */}
      <main className="flex-1">
        <h1 className="mb-4 text-3xl font-bold mt-[50px]">
          Ayollar soch turmaklari katalogi
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {hairstyles.map((h) => (
            <div className="p-3 bg-white rounded-lg shadow" key={h.id}>
              <img
                src={h.image}
                alt={h.title}
                className="object-cover w-full h-40 mb-2 rounded"
              />
              <h3 className="font-semibold">{h.title}</h3>
              <p className="text-sm text-gray-500">{h.salon}</p>
              {/* Like tugmasi yoki boshqa harakat */}
              <button className="mt-2 text-pink-500 hover:underline">
                Sevimlilar
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Populars;


