// "use client";
// import { handleNext, handlePrev, handleSetPage } from "./Params/productPrams";
// import { Link, useRouter } from "@/i18n/navigation";
// import ProductVariations from "@/modules/Products/SelectProduct";
// import { getBrands } from "@/service/getBrands";
// import { getCustomProducts } from "@/service/getCustomProducts";
// import { BrandsType } from "@/types/BrandsType";
// import * as RadixSlider from "@radix-ui/react-slider";
// import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
// import { useTranslations } from "next-intl";
// import { useSearchParams } from "next/navigation";
// import React, { useContext, useEffect, useState } from "react";
// import ProductsMain from "./ProductMainSection";

// import { getCategories } from "@/service/getCategories";
// import { HeaderCategoriesType } from "@/types/HeaderCategoriesType";
// import Products from "@/components/Products/Products";
// import { FilterIcon } from "@/assets/icons";
// import Button from "@/components/Button";
// import Modal from "@/components/FormModal";
// import { ThemeContext } from "@/context/ThemeContextProvider";
// import "./page.css";

// import { useDebounce } from "use-debounce";
// import FilterModalMobile from "@/components/FilterModalMobile/FilterModalMobile";

// function ProductsPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const t = useTranslations("Products");
//   const [page, setPage] = useState(searchParams?.get("page") || 1);

//   const [price, setPrice] = useState<[number, number]>([
//     parseInt(searchParams?.get("min") ?? "0") || 0,
//     parseInt(searchParams?.get("max") ?? "50000") || 50000,
//   ]);

//   const brand_id = searchParams?.get("brand") || "";
//   const category_id = searchParams?.get("category") || "";
//   const { data: products } = getCustomProducts();
//   const { data: brands } = getBrands();
//   const { data: categories } = getCategories();

//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const [sort, setSort] = useState(searchParams?.get("sort") || "");
//   const [limit, setLimit] = useState(searchParams?.get("limit") || "8");
//   const { theme } = useContext(ThemeContext);

//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const openFilter = () => setIsFilterOpen(true);
//   const closeFilter = () => setIsFilterOpen(false);

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams?.toString());
//     sort === "--" ? params.delete("sort") : params.set("sort", String(sort));
//     params.set("limit", String(limit));
//     params.set("page", String(1));
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   }, [sort, limit]);

//   const [debouncedPrice] = useDebounce(price, 1100);

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams?.toString());
//     if (price[0] === 0) params.delete("min");
//     else params.set("min", String(price[0]));
//     if (price[1] === 50000) params.delete("max");
//     else params.set("max", String(price[1]));
//     params.set("page", String(1));
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   }, [debouncedPrice]);

//   const BrandParams = (id: number | string) => {
//     const params = new URLSearchParams(searchParams?.toString());
//     if (id === "") {
//       params.delete("brand");
//     } else {
//       params.set("brand", String(id));
//     }
//     params.set("page", String(1));
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   };
//   const CategoryParams = (id: number | string) => {
//     const params = new URLSearchParams(searchParams?.toString());
//     if (id === "") {
//       params.delete("category");
//     } else {
//       params.set("category", String(id));
//     }
//     params.set("page", String(1));
//     setPage(1);
//     router.push(`?${params.toString()}`);
//   };

//   return (
//     <>
//       <div className="containers ">
//         <div className="flex   gap-3 text-[#B6BABF] text-[14px] font-normal my-[20px] mb-[32px]">
//           <Link href={"/"}>{t("main")}</Link> <span>/</span>{" "}
//           <p>{t("products")} </p> <span>/</span>
//         </div>

//         <div className="flex justify-between items-start gap-[21px] max-[680px]:flex-col max-[680px]:gap-[10px]  ">
//           <div className="flex  justify-between gap-[10px] items-center w-full min-[680px]:hidden ">
//             <Button
//               onClick={() => setIsFilterOpen(true)}
//               iconPosition="right"
//               icon={<FilterIcon />}
//               extraStyle="text-[14px] w-[114px] h-[38px] min-[680px]:hidden"
//             />
//           </div>

//           {/* Modal */}
//           <div
//             id="filterId"
//             className={`min-w-[300px] w-[300px] border border-gray-200 pb-[90px] bg-[#EBEFF3] p-[18px] rounded-[8px] max-[800px]:min-w-[220px] max-[680px]:hidden `}
//           >
//             {/* narx */}
//             <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
//               {t("price")}
//             </h3>
//             {/* narx bottom */}
//             <div className="flex gap-3  p-3 rounded-[6px] ">
//               <div className="flex flex-col w-full">
//                 <span className="text-[12px] text-[#6B7280] mb-1">
//                   {t("from")}
//                 </span>
//                 <div className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm">
//                   {formatNumberSpaces(price[0])} uzs
//                 </div>
//               </div>

//               <div className="flex flex-col w-full">
//                 <span className="text-[12px] text-[#6B7280] mb-1">
//                   {t("to")}
//                 </span>
//                 <div className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm">
//                   {formatNumberSpaces(price[1])} uzs
//                 </div>
//               </div>
//             </div>

//             <RadixSlider.Root
//               className="relative flex w-full touch-none select-none items-center h-5 my-[26px]"
//               min={0}
//               max={50000}
//               step={10}
//               value={price}
//               onValueChange={(value) => setPrice([value[0], value[1]])}
//             >
//               <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
//                 <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
//               </RadixSlider.Track>
//               <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none" />
//               <RadixSlider.Thumb className="block h-5 cursor-pointer w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md focus:outline-none " />
//             </RadixSlider.Root>
//             {/* Category qismi */}
//             <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
//               {t("category")}
//             </h3>

//             <div className="flex flex-wrap gap-[5px] ">
//               {categories?.map((category: HeaderCategoriesType) => (
//                 <div
//                   onClick={() => CategoryParams(category.id)}
//                   key={category.id}
//                   className={`
//    rounded-full text-[12px] font-medium
//    px-[18px] py-[7px]
//    max-[800px]:w-full
//    border transition-all duration-300 ease-in-out
//    cursor-pointer
//    ${
//      category.id === Number(category_id)
//        ? "bg-[#134E9B] text-white border-[#134E9B]"
//        : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
//    }
//  `}
//                 >
//                   {category.name}
//                 </div>
//               ))}{" "}
//             </div>

//             {/* Barend qismi */}
//             <h3 className="text-[16px] font-semibold text-[#0A1729] mt-5 mb-4 tracking-tight">
//               {t("brands")}
//             </h3>

//             <div className="flex flex-wrap gap-[5px]">
//               {brands?.map((brand: BrandsType, index) => (
//                 <div
//                   onClick={() => BrandParams(brand.id)}
//                   key={`${brand.id}-${index}`}
//                   className={`
//     rounded-full text-[12px] font-medium
//     px-[18px] py-[7px]
//     border transition-all duration-300 ease-in-out
//     cursor-pointer
//     ${
//       brand.id === Number(brand_id)
//         ? "bg-[#134E9B] text-white border-[#134E9B]"
//         : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
//     }
//   `}
//                 >
//                   {brand.name}
//                 </div>
//               ))}{" "}
//             </div>
//             <ProductVariations />
//           </div>

//           {/* modal */}
//           <FilterModalMobile
//             isOpen={isFilterOpen}
//             onClose={() => setIsFilterOpen(false)}
//             price={price}
//             // setPrice={setPrice}
//             setPrice={(newPrice: [number, number]) => setPrice(newPrice)}
//             categories={categories}
//             brands={brands}
//             category_id={category_id}
//             brand_id={brand_id}
//             t={t}
//             formatNumberSpaces={formatNumberSpaces}
//             CategoryParams={CategoryParams}
//             BrandParams={BrandParams}
//             ProductVariations={ProductVariations}
//           />

//           <div className="w-[100%]">
//             <ProductsMain products={products.items} setPage={setPage} />
//           </div>
//         </div>

//         {/* ボタン */}
//         <div
//           className={`flex justify-center md:justify-start md:pl-[300px] gap-3 mt-8 flex-wrap ${
//             products?.totalPages === 1 && "hidden"
//           }`}
//         >
//           <button
//             disabled={Number(page) <= 1}
//             onClick={() => handlePrev(page, searchParams, router, setPage)}
//             className={`
//     px-4 py-2 text-[14px] font-medium rounded-[6px] border
//     bg-[#134E9B] text-white
//     transition-all duration-200 ease-in-out
//     hover:bg-[#0d3e7d] hover:shadow-md
//     disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer
//   `}
//           >
//             {t("prev")}
//           </button>

//           {Array.from({ length: products.totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => handleSetPage(i, searchParams, router, setPage)}
//               className={`px-4 py-2 text-[14px] font-medium rounded-[6px] border
//               transition-all duration-200 ease-in-out
//               ${
//                 Number(page) === i + 1
//                   ? "bg-[#134E9B] text-white border-[#134E9B] shadow-md"
//                   : "bg-white text-[#134E9B] border-[#EBEFF3] hover:bg-[#134E9B]/10 hover:border-[#134E9B] cursor-pointer"
//               }`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             disabled={Number(page) >= products.totalPages}
//             onClick={() =>
//               handleNext(
//                 page,
//                 searchParams,
//                 router,
//                 setPage,
//                 products.totalPages
//               )
//             }
//             className={`
//     px-4 py-2 text-[14px] font-medium rounded-[6px] border
//     bg-[#134E9B] text-white
//     transition-all duration-200 ease-in-out
//     hover:bg-[#0d3e7d] hover:shadow-md
//     disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer
//   `}
//           >
//             {t("next")}
//           </button>
//         </div>
//       </div>
//       <Products title={t("products")} api="products" />
//       <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Modal>
//     </>
//   );
// }

// export default ProductsPage;
///////2222222222222222
// "use client";

// import * as RadixSlider from "@radix-ui/react-slider";
// import React, { useState } from "react";
// import { formatNumberSpaces } from "@/hooks/numberWithSpaces";

// const staticServices = [
//   { id: 1, name: "Soch turmaklash", image: "/images/soch.jpg", price: 50000 },
//   { id: 2, name: "Manikyur", image: "/images/mankyur.jpg", price: 120000 },
//   { id: 3, name: "Kosmetologiya", image: "/images/kosmetolog2.png", price: 300000 },
//   { id: 4, name: "Massaj", image: "/images/massaj.jpg", price: 150000 },
//   { id: 5, name: "Lazer muolajalari", image: "/images/lazer.jpg", price: 2500000 },
//   { id: 6, name: "Kiprik", image: "/images/kiprik.png", price: 80000 },
//   { id: 7, name: "Makyaj", image: "/images/yuz.jpg", price: 450000 },
// ];

// export default function ServicesPage() {
//   const [price, setPrice] = useState<[number, number]>([0, 5000000]);

//   const filteredServices = staticServices.filter(
//     (service) => service.price >= price[0] && service.price <= price[1]
//   );

//   return (
//     <div className="containers flex gap-[20px]">
//       {/* Filter Side */}
//       <div className="min-w-[300px] w-[300px] border border-gray-200 pb-[90px] bg-[#EBEFF3] p-[18px] rounded-[8px]">
//         <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
//           Narx oralig'i
//         </h3>

//         <div className="flex gap-3 p-3 rounded-[6px]">
//           <div className="flex flex-col w-full">
//             <span className="text-[12px] text-[#6B7280] mb-1">dan</span>
//             <div className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm">
//               {formatNumberSpaces(price[0])} so'm
//             </div>
//           </div>

//           <div className="flex flex-col w-full">
//             <span className="text-[12px] text-[#6B7280] mb-1">gacha</span>
//             <div className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm">
//               {formatNumberSpaces(price[1])} so'm
//             </div>
//           </div>
//         </div>

//         <RadixSlider.Root
//           className="relative flex w-full touch-none select-none items-center h-5 my-[26px]"
//           min={0}
//           max={5000000}
//           step={10000}
//           value={price}
//           onValueChange={(value) => setPrice(value)}
//         >
//           <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
//             <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
//           </RadixSlider.Track>
//           <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer focus:outline-none" />
//           <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer focus:outline-none" />
//         </RadixSlider.Root>
//       </div>

//       {/* Services Side */}
//       <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredServices.map((service) => (
//           <div key={service.id} className="p-4 bg-white border rounded-lg shadow">
//             <img
//               src={service.image}
//               alt={service.name}
//               className="object-cover w-full h-48 mb-3 rounded-md"
//             />
//             <h3 className="text-lg font-semibold text-[#0A1729]">{service.name}</h3>
//             <p className="text-[#15509E] text-md mt-2">
//               {formatNumberSpaces(service.price)} so'm
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
/////////////2222222222

// "use client";

// import * as RadixSlider from "@radix-ui/react-slider";
// import React, { useState } from "react";
// import { formatNumberSpaces } from "@/hooks/numberWithSpaces";

// const staticServices = [
//   {
//     id: 1,
//     name: "Soch turmaklash",
//     image: "/images/soch.jpg",
//     price: 50000,
//     category: "standard",
//   },
//   {
//     id: 2,
//     name: "Manikyur",
//     image: "/images/mankyur.jpg",
//     price: 120000,
//     category: "premium",
//   },
//   {
//     id: 3,
//     name: "Kosmetologiya",
//     image: "/images/kosmetolog2.png",
//     price: 300000,
//     category: "discount",
//   },
//   {
//     id: 4,
//     name: "Massaj",
//     image: "/images/massaj.jpg",
//     price: 150000,
//     category: "standard",
//   },
//   {
//     id: 5,
//     name: "Lazer muolajalari",
//     image: "/images/lazer.jpg",
//     price: 2500000,
//     category: "premium",
//   },
//   {
//     id: 6,
//     name: "Kiprik",
//     image: "/images/kiprik.png",
//     price: 80000,
//     category: "discount",
//   },
//   {
//     id: 7,
//     name: "Makyaj",
//     image: "/images/yuz.jpg",
//     price: 450000,
//     category: "premium",
//   },
//   {
//     id: 8,
//     name: "Pedikyur",
//     image: "/images/pedikur.jpg",
//     price: 100000,
//     category: "standard",
//   },
//   {
//     id: 9,
//     name: "Qosh olish",
//     image: "/images/qosh.jpg",
//     price: 60000,
//     category: "discount",
//   },
//   {
//     id: 10,
//     name: "Yuzni tozalash",
//     image: "/images/yuz2.jpg",
//     price: 200000,
//     category: "standard",
//   },
//   {
//     id: 11,
//     name: "Teri parvarishi",
//     image: "/images/teri.jpg",
//     price: 350000,
//     category: "premium",
//   },
//   {
//     id: 12,
//     name: "Tirnoq bezaklari",
//     image: "/images/tirnoq.jpg",
//     price: 90000,
//     category: "discount",
//   },
//   {
//     id: 13,
//     name: "Yuz niqoblari",
//     image: "/images/niqob.jpg",
//     price: 110000,
//     category: "standard",
//   },
//   {
//     id: 14,
//     name: "Soch bo‘yash",
//     image: "/images/boyash.jpg",
//     price: 250000,
//     category: "premium",
//   },
//   {
//     id: 15,
//     name: "Qosh chizish",
//     image: "/images/qosh2.jpg",
//     price: 120000,
//     category: "standard",
//   },
//   {
//     id: 16,
//     name: "Yuz massaji",
//     image: "/images/face-massage.jpg",
//     price: 170000,
//     category: "standard",
//   },
//   {
//     id: 17,
//     name: "Tayyor makiyaj",
//     image: "/images/makiyaj2.jpg",
//     price: 300000,
//     category: "premium",
//   },
//   {
//     id: 18,
//     name: "Spa xizmatlari",
//     image: "/images/spa.jpg",
//     price: 600000,
//     category: "premium",
//   },
//   {
//     id: 19,
//     name: "Teringa botoks",
//     image: "/images/botox.jpg",
//     price: 1500000,
//     category: "premium",
//   },
//   {
//     id: 20,
//     name: "Tirnoq bo‘yash",
//     image: "/images/tirnoq2.jpg",
//     price: 70000,
//     category: "discount",
//   },
//   {
//     id: 21,
//     name: "Soch tekislash",
//     image: "/images/tekislash.jpg",
//     price: 200000,
//     category: "standard",
//   },
//   {
//     id: 22,
//     name: "Chehra konturi",
//     image: "/images/kontur.jpg",
//     price: 550000,
//     category: "premium",
//   },
//   {
//     id: 23,
//     name: "Dazmol soch",
//     image: "/images/dazmol.jpg",
//     price: 80000,
//     category: "standard",
//   },
//   {
//     id: 24,
//     name: "Aloe terapiya",
//     image: "/images/aloe.jpg",
//     price: 180000,
//     category: "discount",
//   },
// ];

// export default function ServicesPage() {
//   const [price, setPrice] = useState<[number, number]>([50000, 2000000]);
//   const [category, setCategory] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showFiltered, setShowFiltered] = useState(false);

//   const itemsPerPage = 9;

//   const filteredServices = staticServices.filter(
//     (service) =>
//       service.price >= price[0] &&
//       service.price <= price[1] &&
//       (category === "all" || service.category === category)
//   );

//   const paginatedServices = filteredServices.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(filteredServices.length / itemsPerPage);

//   const handleShowFiltered = () => {
//     setShowFiltered(true);
//   };

//   return (
//     <div className="containers flex gap-[20px]">
//       {/* Filter Side */}
//       <div className="min-w-[300px] w-[300px] border border-gray-200 pb-[20px] bg-[#EBEFF3] p-[18px] rounded-[8px]">
//         <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
//           Narx oralig'i
//         </h3>

//         <div className="flex gap-3 p-3 rounded-[6px]">
//           <div className="flex flex-col w-full">
//             <span className="text-[12px] text-[#6B7280] mb-1">dan</span>
//             <input
//               type="number"
//               className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm"
//               value={price[0]}
//               onChange={(e) => setPrice([+e.target.value, price[1]])}
//             />
//           </div>

//           <div className="flex flex-col w-full">
//             <span className="text-[12px] text-[#6B7280] mb-1">gacha</span>
//             <input
//               type="number"
//               className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm"
//               value={price[1]}
//               onChange={(e) => setPrice([price[0], +e.target.value])}
//             />
//           </div>
//         </div>

//         <RadixSlider.Root
//           className="relative flex w-full touch-none select-none items-center h-5 my-[26px]"
//           min={50000}
//           max={2000000}
//           step={10000}
//           value={price}
//           onValueChange={(value) => setPrice(value)}
//         >
//           <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
//             <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
//           </RadixSlider.Track>
//           <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer focus:outline-none" />
//           <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer focus:outline-none" />
//         </RadixSlider.Root>

//         <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4 tracking-tight">
//           Kategoriyalar
//         </h3>
//         <div className="flex flex-wrap gap-2 mb-6">
//           {[
//             { label: "Barchasi", value: "all" },
//             { label: "Standart", value: "standard" },
//             { label: "Premium", value: "premium" },
//             { label: "Chegirma", value: "discount" },
//           ].map((cat) => (
//             <button
//               key={cat.value}
//               onClick={() => setCategory(cat.value)}
//               className={`px-4 py-1 rounded-full text-sm border transition-all duration-300 ${
//                 category === cat.value
//                   ? "bg-[#134E9B] text-white"
//                   : "bg-white text-[#0A1729] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={handleShowFiltered}
//           className="w-full bg-[#134E9B] hover:bg-[#0e3e7a] text-white font-medium py-2 rounded-md"
//         >
//           Xizmatlarni ko‘rish
//         </button>

//         <h4 className="mt-6 mb-2 text-[#0A1729] font-semibold text-sm">
//           Chegirmadagi xizmatlar
//         </h4>
//         <div className="space-y-3">
//           {staticServices
//             .filter((s) => s.category === "discount")
//             .slice(0, 3)
//             .map((service) => (
//               <div key={service.id} className="relative">
//                 <img
//                   src={service.image}
//                   alt={service.name}
//                   className="w-full h-[100px] object-cover rounded-md"
//                 />
//                 <div className="absolute px-2 py-1 text-xs font-bold text-white bg-red-600 rounded top-2 left-2 animate-pulse">
//                   30% chegirma
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* Services Grid Side */}
//       <div className="w-full">
//         <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {paginatedServices.map((service) => (
//             <div
//               key={service.id}
//               className="relative p-4 bg-white border rounded-lg shadow"
//             >
//               <img
//                 src={service.image}
//                 alt={service.name}
//                 className="object-cover w-full h-48 mb-3 rounded-md"
//               />
//               <h3 className="text-lg font-semibold text-[#0A1729]">
//                 {service.name}
//               </h3>
//               <p className="text-[#15509E] text-md mt-2">
//                 {formatNumberSpaces(service.price)} so'm
//               </p>
//               {service.category === "discount" && (
//                 <div className="absolute px-2 py-1 text-xs font-bold text-white bg-red-600 rounded top-2 right-2 animate-bounce">
//                   30% chegirma
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex items-center justify-center gap-3 mt-8">
//           <button
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             className="px-4 py-2 rounded bg-[#134E9B] text-white disabled:opacity-50"
//           >
//             Orqaga
//           </button>
//           <span className="text-sm font-medium text-[#0A1729]">
//             {currentPage} / {totalPages}
//           </span>
//           <button
//             disabled={currentPage === totalPages}
//             onClick={() =>
//               setCurrentPage((prev) => Math.min(prev + 1, totalPages))
//             }
//             className="px-4 py-2 rounded bg-[#134E9B] text-white disabled:opacity-50"
//           >
//             Oldinga
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

/////////////3333

// "use client";

// import * as RadixSlider from "@radix-ui/react-slider";
// import React, { useMemo, useState } from "react";
// import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
// import classNames from "classnames";

// const staticServices = [
//   {
//     id: 1,
//     name: "Soch turmaklash",
//     category: "Soch",
//     image: "/images/soch.jpg",
//     price: 50000,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Manikyur",
//     category: "Tirnoq",
//     image: "/images/mankyur.jpg",
//     price: 120000,
//     discount: 10,
//   },
//   {
//     id: 3,
//     name: "Kosmetologiya",
//     category: "Yuz",
//     image: "/images/kosmetolog2.png",
//     price: 300000,
//     discount: 30,
//   },
//   {
//     id: 4,
//     name: "Massaj",
//     category: "Tana",
//     image: "/images/massaj.jpg",
//     price: 150000,
//     discount: 20,
//   },
//   {
//     id: 5,
//     name: "Lazer muolajalari",
//     category: "Yuz",
//     image: "/images/lazer.jpg",
//     price: 2500000,
//     discount: 10,
//   },
//   {
//     id: 6,
//     name: "Kiprik",
//     category: "Ko‘z",
//     image: "/images/kiprik.png",
//     price: 80000,
//     discount: 30,
//   },
//   {
//     id: 7,
//     name: "Makyaj",
//     category: "Yuz",
//     image: "/images/yuz.jpg",
//     price: 450000,
//     discount: 10,
//   },
//   {
//     id: 8,
//     name: "Pedikyur",
//     category: "Tirnoq",
//     image: "/images/pedikur.jpg",
//     price: 180000,
//     discount: 20,
//   },
//   {
//     id: 9,
//     name: "Soch bo‘yash",
//     category: "Soch",
//     image: "/images/sochboyash.jpg",
//     price: 250000,
//     discount: 30,
//   },
//   {
//     id: 10,
//     name: "Terini tozalash",
//     category: "Yuz",
//     image: "/images/clean.jpg",
//     price: 200000,
//     discount: 20,
//   },
//   {
//     id: 11,
//     name: "Gialuron terapiya",
//     category: "Yuz",
//     image: "/images/gialuron.jpg",
//     price: 900000,
//     discount: 10,
//   },
//   {
//     id: 12,
//     name: "Epilatsiya",
//     category: "Tana",
//     image: "/images/epilatsiya.jpg",
//     price: 320000,
//     discount: 20,
//   },
//   {
//     id: 13,
//     name: "Chiroyli kiprik",
//     category: "Ko‘z",
//     image: "/images/kiprik2.jpg",
//     price: 150000,
//     discount: 10,
//   },
//   {
//     id: 14,
//     name: "Soch silliqlash",
//     category: "Soch",
//     image: "/images/soch_silliqlash.jpg",
//     price: 800000,
//     discount: 30,
//   },
//   {
//     id: 15,
//     name: "Botoks",
//     category: "Yuz",
//     image: "/images/botox.jpg",
//     price: 1200000,
//     discount: 10,
//   },
//   {
//     id: 16,
//     name: "Chehra massaji",
//     category: "Yuz",
//     image: "/images/face_massage.jpg",
//     price: 350000,
//     discount: 20,
//   },
//   {
//     id: 17,
//     name: "Tana massaji",
//     category: "Tana",
//     image: "/images/body_massage.jpg",
//     price: 700000,
//     discount: 30,
//   },
//   {
//     id: 18,
//     name: "Yuz niqobi",
//     category: "Yuz",
//     image: "/images/face_mask.jpg",
//     price: 100000,
//     discount: 10,
//   },
//   {
//     id: 19,
//     name: "Qosh bo‘yash",
//     category: "Ko‘z",
//     image: "/images/qosh.jpg",
//     price: 110000,
//     discount: 20,
//   },
//   {
//     id: 20,
//     name: "Tana skrabi",
//     category: "Tana",
//     image: "/images/body_scrub.jpg",
//     price: 240000,
//     discount: 20,
//   },
//   {
//     id: 21,
//     name: "Soch parvarishi",
//     category: "Soch",
//     image: "/images/soch_care.jpg",
//     price: 130000,
//     discount: 10,
//   },
//   {
//     id: 22,
//     name: "Manikyur + Pedikyur",
//     category: "Tirnoq",
//     image: "/images/combo.jpg",
//     price: 350000,
//     discount: 30,
//   },
//   {
//     id: 23,
//     name: "Lazer epilatsiya",
//     category: "Tana",
//     image: "/images/lazer2.jpg",
//     price: 2000000,
//     discount: 20,
//   },
//   {
//     id: 24,
//     name: "Chehra gialuron terapiya",
//     category: "Yuz",
//     image: "/images/gialuron2.jpg",
//     price: 1700000,
//     discount: 10,
//   },
// ];

// export default function ServicesPage() {
//   const [price, setPrice] = useState<[number, number]>([50000, 5000000]);
//   const [category, setCategory] = useState<string | null>(null);
//   const [page, setPage] = useState(1);
//   const perPage = 9;

//   const categories = useMemo(
//     () => ["Soch", "Tirnoq", "Yuz", "Tana", "Ko‘z"],
//     []
//   );

//   const filteredServices = useMemo(() => {
//     return staticServices
//       .filter(
//         (service) =>
//           service.price >= price[0] &&
//           service.price <= price[1] &&
//           (!category || service.category === category)
//       )
//       .slice((page - 1) * perPage, page * perPage);
//   }, [price, category, page]);

//   const totalPages = Math.ceil(
//     staticServices.filter(
//       (service) =>
//         service.price >= price[0] &&
//         service.price <= price[1] &&
//         (!category || service.category === category)
//     ).length / perPage
//   );

//   return (
//     <div className="containers flex flex-col lg:flex-row gap-[20px]">
//       {/* Filter Side */}
//       <div className="min-w-[280px] w-full lg:w-[300px] border border-gray-200 bg-[#EBEFF3] p-[18px] rounded-[8px]">
//         <h3 className="text-[16px] font-semibold text-[#0A1729] mb-4">
//           Narx oralig‘i
//         </h3>

//         <div className="flex gap-3 mb-4">
//           <div className="flex flex-col w-full">
//             <span className="text-[12px] text-[#6B7280] mb-1">dan</span>
//             <input
//               type="number"
//               className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm"
//               value={price[0]}
//               min={50000}
//               onChange={(e) => setPrice([+e.target.value, price[1]])}
//             />
//           </div>

//           <div className="flex flex-col w-full">
//             <span className="text-[12px] text-[#6B7280] mb-1">gacha</span>
//             <input
//               type="number"
//               className="w-full rounded-[6px] bg-white text-[14px] text-[#111827] p-2 shadow-sm"
//               value={price[1]}
//               max={5000000}
//               onChange={(e) => setPrice([price[0], +e.target.value])}
//             />
//           </div>
//         </div>

//         <RadixSlider.Root
//           className="relative flex items-center w-full h-5 mb-6 select-none touch-none"
//           min={50000}
//           max={5000000}
//           step={10000}
//           value={price}
//           onValueChange={(value) => setPrice(value as [number, number])}
//         >
//           <RadixSlider.Track className="relative h-[3px] w-full grow rounded-full bg-gray-300">
//             <RadixSlider.Range className="absolute h-full bg-[#15509E] rounded-full" />
//           </RadixSlider.Track>
//           <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer" />
//           <RadixSlider.Thumb className="block h-5 w-5 rounded-full bg-[#EBEFF3] border-[3px] border-[#15509E] shadow-md cursor-pointer" />
//         </RadixSlider.Root>

//         <h3 className="text-[16px] font-semibold text-[#0A1729] mb-3">
//           Kategoriya
//         </h3>
//         <div className="flex flex-wrap gap-2 mb-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setCategory(cat === category ? null : cat)}
//               className={classNames(
//                 "px-4 py-1 rounded-full border text-sm",
//                 category === cat
//                   ? "bg-[#134E9B] text-white border-[#134E9B]"
//                   : "bg-white text-[#0A1729] border-[#d0d7de] hover:bg-[#134E9B]/10 hover:text-[#134E9B]"
//               )}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="flex-1">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredServices.map((service) => (
//             <div
//               key={service.id}
//               className="relative p-4 bg-white border rounded-lg shadow"
//             >
//               {service.discount > 0 && (
//                 <div className="absolute top-2 left-2 bg-[#e48c47] text-white text-xs px-2 py-1 rounded-full animate-pulse">
//                   -{service.discount}% chegirma
//                 </div>
//               )}
//               <img
//                 src={service.image}
//                 alt={service.name}
//                 className="object-cover w-full h-48 mb-3 rounded-md"
//               />
//               <h3 className="text-lg font-semibold text-[#0A1729]">
//                 {service.name}
//               </h3>
//               <p className="text-[#15509E] text-md mt-2">
//                 {formatNumberSpaces(service.price)} so‘m
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex flex-wrap justify-center gap-2 mt-6">
//             {Array.from({ length: totalPages }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setPage(i + 1)}
//                 className={classNames(
//                   "px-4 py-2 rounded-[6px] border text-sm font-medium transition-all duration-200",
//                   page === i + 1
//                     ? "bg-[#e48c47] text-white border-[#e48c47] shadow-md"
//                     : "bg-white text-[#e48c47] border-[#e48c47] hover:bg-[#e48c47]/10"
//                 )}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

/////44444

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
  },
  {
    id: 2,
    name: "Manikyur",
    category: "Tirnoq",
    image: "/images/manikyur2.jpg",
    price: 120000,
    discount: 10,
    type: "Chegirma",
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
  },
  {
    id: 5,
    name: "Lazer muolajalari",
    category: "Lazer",
    image: "/images/lazer.jpg",
    price: 2500000,
    discount: 10,
    type: "Premium",
  },
  {
    id: 6,
    name: "Kiprik",
    category: "Ko‘z",
    image: "/images/kiprik2.png",
    price: 80000,
    type: "Standart",
  },
  {
    id: 7,
    name: "Makyaj",
    category: "Yuz",
    image: "/images/yuz.png",
    price: 450000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 8,
    name: "Pedikyur",
    category: "Tirnoq",
    image: "/images/manikyur1.jpg",
    price: 180000,
    type: "Standart",
  },
  {
    id: 9,
    name: "Soch bo‘yash",
    category: "Soch",
    image: "/images/soch5.jpg",
    price: 250000,
    type: "Premium",
  },
  {
    id: 10,
    name: "Terini tozalash",
    category: "Yuz",
    image: "/images/kosmetolog2.jpg",
    price: 200000,
    discount: 20,
    type: "Chegirma",
  },
  {
    id: 11,
    name: "Gialuron terapiya",
    category: "Kosmetolog",
    image: "/images/kosmetolog5.jpg",
    price: 900000,
    discount: 10,
    type: "Premium",
  },
  {
    id: 12,
    name: "Epilatsiya",
    category: "Tana",
    image: "/images/epilyatsiya.png",
    price: 320000,
    type: "Standart",
  },
  {
    id: 13,
    name: "Chiroyli kiprik",
    category: "Ko‘z",
    image: "/images/kiprik4.jpg",
    price: 150000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 14,
    name: "Soch silliqlash",
    category: "Soch",
    image: "/images/soch4.jpg",
    price: 800000,
    discount: 30,
    type: "Chegirma",
  },
  {
    id: 15,
    name: "Botoks",
    category: "Kosmetolog",
    image: "/images/botox.png",
    price: 1200000,
    type: "Premium",
  },
  {
    id: 16,
    name: "Yuz massaji",
    category: "Massaj",
    image: "/images/massaj3.jpg",
    price: 350000,
    discount: 20,
    type: "Chegirma",
  },
  {
    id: 17,
    name: "Tana massaji",
    category: "Massaj",
    image: "/images/massaj4.jpg",
    price: 700000,
    type: "Premium",
  },
  {
    id: 18,
    name: "Yuz niqobi",
    category: "Kosmetolog",
    image: "/images/kosmetolog.jpg",
    price: 100000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 19,
    name: "Qosh bo‘yash",
    category: "Ko‘z",
    image: "/images/qosh.png",
    price: 110000,
    type: "Standart",
  },
  {
    id: 20,
    name: "Tana skrabi",
    category: "Tana",
    image: "/images/kosmetolog7.jpg",
    price: 240000,
    type: "Standart",
  },
  {
    id: 21,
    name: "Soch parvarishi",
    category: "Soch",
    image: "/images/soch4.jpg",
    price: 130000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 22,
    name: "Manikyur + Pedikyur",
    category: "Tirnoq",
    image: "/images/manikyur1.jpg",
    price: 350000,
    type: "Premium",
  },
  {
    id: 23,
    name: "Lazer epilatsiya",
    category: "Lazer",
    image: "/images/lazer2.jpg",
    price: 2000000,
    discount: 20,
    type: "Standart",
  },
  {
    id: 24,
    name: "Chehra gialuron terapiya",
    category: "Kosmetolog",
    image: "/images/kosmetolog6.jpg",
    price: 1700000,
    discount: 10,
    type: "Premium",
  },
  {
    id: 25,
    name: "Tana depilatsiya",
    category: "Tana",
    image: "/images/depilyatsiya.png",
    price: 220000,
    type: "Standart",
  },
  {
    id: 26,
    name: "Spa muolajasi",
    category: "Massaj",
    image: "/images/spa.png",
    price: 550000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 27,
    name: "Soch botoks",
    category: "Soch",
    image: "/images/soch2.jpg",
    price: 900000,
    type: "Premium",
  },
  {
    id: 28,
    name: "Gel lak",
    category: "Tirnoq",
    image: "/images/manikyur3.jpg",
    price: 95000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 29,
    name: "Yuz massaji",
    category: "Massaj",
    image: "/images/massaj1.jpg",
    price: 190000,
    type: "Standart",
  },
  {
    id: 30,
    name: "Soch keratinlashtirish",
    category: "Soch",
    image: "/images/soch1.jpg",
    price: 1100000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 31,
    name: "Tana parvarishi",
    category: "Tana",
    image: "/images/massaj.jpg",
    price: 350000,
    type: "Standart",
  },
  {
    id: 32,
    name: "Akne muolajasi",
    category: "Kosmetolog",
    image: "/images/massaj5.jpg",
    price: 480000,
    discount: 20,
    type: "Chegirma",
  },
  {
    id: 33,
    name: "Shugaring",
    category: "Tana",
    image: "/images/kosmetolog.jpg",
    price: 180000,
    type: "Standart",
  },
  {
    id: 34,
    name: "Qosh laminatsiyasi",
    category: "Ko‘z",
    image: "/images/qosh.png",
    price: 120000,
    discount: 10,
    type: "Chegirma",
  },
  {
    id: 35,
    name: "Permanent makiyaj",
    category: "Kosmetolog",
    image: "/images/makyaj1.png",
    price: 1550000,
    type: "Premium",
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

export default function ServicesPage() {
  const [price, setPrice] = useState<[number, number]>([50000, 2000000]);
  const [category, setCategory] = useState<string | null>(null);
  const [serviceType, setServiceType] = useState<string | null>(null);

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
      return (
        service.price >= price[0] &&
        service.price <= price[1] &&
        matchCategory &&
        matchType
      );
    });
  }, [price, category, serviceType]);

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
  React.useEffect(() => setCurrentPage(1), [price, category, serviceType]);

  return (
    <div className="containers flex flex-col lg:flex-row gap-[20px] border border-red-600 ">
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
