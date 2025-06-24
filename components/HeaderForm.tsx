// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from "@/assets/icons";
// import { Context } from "../context/Context";
// import { useTranslations } from "next-intl";
// import { instance } from "@/hooks/instance";
// import debounce from "@/hooks/debounceFn";
// import Button from "./Button";
// import HeaderInput from "./HeaderInput";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "@/i18n/navigation";

// const HeaderForm = () => {
//   const t = useTranslations("HeaderTopTS");
//   const { setShowCategory, showCategory } = useContext(Context);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [searchValue, setSearchValue] = useState("");
//   const [searchData, setSearchData] = useState([]);
//   const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentValue, setCurrentValue] = useState("");

//   const debouncedValue = debounce(searchValue, 500);

//   const staticCategories = [
//     "Soch turmaklash",
//     "Makyaj",
//     "Kosmetologiya",
//     "Kiprik",
//     "Manikyur",
//     "Massaj",
//     "Lazer muolajalari",
//   ];

//   const filteredCategories = staticCategories.filter((item) =>
//     item.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   useEffect(() => {
//     if (!debouncedValue) {
//       setSearchData([]);
//       return;
//     }
//     if (currentValue !== debouncedValue) {
//       setIsLoading(true);
//       instance()
//         .get(`/categories/search`, { params: { name: debouncedValue } })
//         .then((res) => {
//           setSearchData(res.data);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [debouncedValue]);

//   const handleFocus = () => setIsOpenSearchModal(true);
//   const handleBlur = () => setIsOpenSearchModal(false);

//   return (
//     <>
//       {/*  Desktop version */}
//       <div className="hidden md:flex items-start gap-[10px] w-full ">
//         <Button
//           onClick={() => setShowCategory(!showCategory)}
//           title={t("category")}
//           icon={showCategory ? <ArrowUpIcon /> : <ArrowDownIcon />}
//           iconPosition="right"
//         />
//         {/* ////// */}
//         <div className="w-[520px] relative bg-[#EBEFF3] rounded-[6px] ">
//           <HeaderInput
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             placeholder={t("search-placeholder")}
//             type="text"
//             extraStyle="w-full !pr-[65px] z-[30] relative "
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//           />
//           <Button
//             icon={<SearchIcon />}
//             iconPosition="left"
//             extraStyle="!p-0 w-[60px] absolute top-0 right-0 h-full max-h-[64px] z-[50] "
//           />
//           <div
//             className={`w-full absolute rounded-b-[6px] bg-[#EBEFF3]  z-[11] left-0 ${
//               (isOpenSearchModal && isLoading) || searchData?.length
//                 ? "max-h-[300px] pt-[10px] overflow-y-scroll shadow-lg top-[90%] "
//                 : "h-[0px] pt-[0px] overflow-hidden top-[50%]"
//             } duration-500`}
//           >
//             {isLoading ? (
//               <div className="w-full text-left border-t px-[40px] py-[14px]">
//                 <div className="h-[25px] loading"></div>
//               </div>
//             ) : (
//               searchData?.map((item: any) => (
//                 <div
//                   key={item.id}
//                   onClick={() => {
//                     setIsOpenSearchModal(false);
//                     setSearchData([]);
//                     setSearchValue(item.name);
//                     setCurrentValue(item.name);
//                   }}
//                   className="w-full cursor-pointer text-left border-t px-[40px] py-[14px] hover:bg-[#B6BABF4D]/90 duration-300  "
//                 >
//                   {item.name}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>

//       {/*  Mobile version */}
//       <div className="flex flex-col w-full gap-3 md:hidden">
//         <div className="flex w-full gap-2">
//           <button
//             onClick={() => setShowCategory(!showCategory)}
//             className="px-4 py-2 bg-[#134E9B] text-white text-sm rounded-[6px] flex items-center gap-2"
//           >
//             {t("category")}
//             {showCategory ? <ArrowUpIcon /> : <ArrowDownIcon />}
//           </button>
//           <div className="flex-1 relative bg-[#EBEFF3] rounded-[6px]">
//             <input
//               type="text"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               placeholder={t("search-placeholder")}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               className="w-full p-3 pr-12 rounded-[6px] bg-[#EBEFF3] outline-none text-sm"
//             />
//             <button className="absolute top-0 right-0 h-full px-4 flex items-center justify-center text-white bg-[#134E9B] rounded-[5px]">
//               <SearchIcon />
//             </button>
//           </div>
//         </div>
//         {(isOpenSearchModal || searchData?.length > 0) && (
//           <div className="bg-[#EBEFF3] rounded-md shadow-md  max-h-[300px] overflow-y-auto px-3 py-2">
//             {isLoading ? (
//               <p className="text-sm text-gray-500">Yuklanmoqda...</p>
//             ) : searchData.length === 0 ? (
//               <p className="text-sm text-gray-500">Hech narsa topilmadi</p>
//             ) : (
//               searchData.map((item: any) => (
//                 <div
//                   key={item.id}
//                   onClick={() => {
//                     setIsOpenSearchModal(false);
//                     setSearchData([]);
//                     setSearchValue(item.name);
//                     setCurrentValue(item.name);
//                   }}
//                   className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100"
//                 >
//                   {item.name}
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default HeaderForm;

"use client";
import React, { useContext, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from "@/assets/icons";
import { Context } from "../context/Context";
import { useTranslations } from "next-intl";
import debounce from "@/hooks/debounceFn";
import Button from "./Button";
import HeaderInput from "./HeaderInput";
import { useRouter } from "@/i18n/navigation";

const HeaderForm = () => {
  const t = useTranslations("HeaderTopTS");
  const { setShowCategory, showCategory } = useContext(Context);
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);

  const debouncedValue = debounce(searchValue, 300);

  const staticCategories = [
    { name: "Soch turmaklash", slug: "sochTurmaklash" },
    { name: "Makyaj", slug: "makyaj" },
    { name: "Kosmetologiya", slug: "kosmetologiya" },
    { name: "Kiprik", slug: "kiprik" },
    { name: "Manikyur", slug: "manikyur" },
    { name: "Massaj", slug: "massaj" },
    { name: "Lazer muolajalari", slug: "lazer" },
  ];

  const filteredCategories = staticCategories.filter((item) =>
    item.name.toLowerCase().includes(debouncedValue.toLowerCase())
  );

  const handleFocus = () => setIsOpenSearchModal(true);
  const handleBlur = () => {
    // Delay to allow onMouseDown to fire before blur hides dropdown
    setTimeout(() => setIsOpenSearchModal(false), 100);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-start gap-[10px] w-full">
        <Button
          onClick={() => setShowCategory(!showCategory)}
          title={t("category")}
          icon={showCategory ? <ArrowUpIcon /> : <ArrowDownIcon />}
          iconPosition="right"
        />
        <div className="w-[520px] relative bg-[#EBEFF3] rounded-[6px]">
          <HeaderInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("search-placeholder")}
            type="text"
            extraStyle="w-full !pr-[65px] z-[30] relative"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button
            icon={<SearchIcon />}
            iconPosition="left"
            extraStyle="!p-0 w-[60px] absolute top-0 right-0 h-full max-h-[64px] z-[50]"
          />
          <div
            className={`w-full absolute rounded-b-[6px] bg-[#EBEFF3] z-[11] left-0 ${
              isOpenSearchModal && filteredCategories.length
                ? "max-h-[300px] pt-[10px] overflow-y-scroll shadow-lg top-[90%]"
                : "h-[0px] pt-[0px] overflow-hidden top-[50%]"
            } duration-500`}
          >
            {filteredCategories.map((item) => (
              <div
                key={item.slug}
                onMouseDown={() => {
                  setSearchValue(item.name);
                  setIsOpenSearchModal(false);
                  router.push(`/category/${item.slug}`);
                }}
                className="w-full cursor-pointer text-left border-t px-[40px] py-[14px] hover:bg-[#B6BABF4D]/90 duration-300"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col w-full gap-3 md:hidden">
        <div className="flex w-full gap-2">
          <button
            onClick={() => setShowCategory(!showCategory)}
            className="px-4 py-2 bg-[#e47c48] text-white text-sm rounded-[6px] flex items-center gap-2"
          >
            {t("category")}
            {showCategory ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </button>
          <div className="flex-1 relative bg-[#EBEFF3] rounded-[6px]">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={t("search-placeholder")}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full p-3 pr-12 rounded-[6px] bg-[#EBEFF3] outline-none text-sm"
            />
            <button className="absolute top-0 right-0 h-full px-4 flex items-center justify-center text-white bg-[#e47c48] rounded-[5px]">
              <SearchIcon />
            </button>
          </div>
        </div>
        {isOpenSearchModal && (
          <div className="bg-[#EBEFF3] rounded-md shadow-md max-h-[300px] overflow-y-auto px-3 py-2">
            {filteredCategories.length === 0 ? (
              <p className="text-sm text-gray-500">Hech narsa topilmadi</p>
            ) : (
              filteredCategories.map((item) => (
                <div
                  key={item.slug}
                  onMouseDown={() => {
                    setSearchValue(item.name);
                    setIsOpenSearchModal(false);
                    router.push(`/category/${item.slug}`);
                  }}
                  className="px-2 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  {item.name}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderForm;
