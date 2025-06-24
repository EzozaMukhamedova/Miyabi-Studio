// import { CompareIconn, Compare, HeartLike, CartIconn } from "@/assets/icons";
// import { calculate } from "@/hooks/calculatePriceN";
// import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
// import { API } from "@/hooks/getEnv";
// import { ProductType } from "@/types/ProductType";
// import Image from "next/image";
// import React, { useState } from "react";
// import Button from "../Button";
// import { ShoppingBag } from "lucide-react";
// import { useRouter } from "@/i18n/navigation";
// import { useTranslations } from "next-intl";

// import { toast } from "react-hot-toast";

// function ProductCardItem({
//   product,
//   extraStyle,
//   extraStyleForImg,
// }: {
//   product: ProductType;
//   extraStyle?: string;
//   extraStyleForImg?: string;
// }) {
//   const router = useRouter();
//   const t = useTranslations("Products");
//   const navigateToItem = () => {
//     router.push(`${product.id}`);
//   };

//   const [isFavorited, setIsFavorited] = useState(false);

//   const handleClick = () => {
//     setIsFavorited(!isFavorited);
//     toast.success("Sevimlilarga qo'shildi!");
//   };

//   return (
//     <div
//       className={`w-[270px]  max-[1200px]:w-[250px] max-[900px]:w-[250px] max-[640px]:w-[100%] max-[1100px]:w-[230px] max-[840px]:w-[230px] max-[1000px]:w-[200px] max-[770px]:w-[200px] !mx-[15px] max-[690px]:!mx-0 group transition-all !duration-500 ${extraStyle}`}
//     >
//       <div
//         className={`bg-[#EBEFF3]  w-full flex justify-center items-center h-[270px] max-[1200px]:h-[250px] max-[901px]:h-[250px] max-[410px]:h-[200px] max-[1100px]:h-[230px] max-[640px]:h-[250px] max-[840px]:h-[230px] max-[1000px]:h-[200px] max-[770px]:h-[200px] rounded-[6px] overflow-hidden relative ${extraStyleForImg}`}
//       >
//         <Image
//           onClick={navigateToItem}
//           src={`${API}/uploads/${product.image}`}
//           alt={product.name}
//           width={202}
//           height={202}
//           className="w-[80%] h-auto group-hover:scale-[1.1] duration-300 cursor-pointer"
//         ></Image>

//         <button
//           onClick={handleClick}
//           className={`
//     absolute top-5 right-5 
//     !text-[12px] p-[2px] 
//     sm:text-[18px] sm:p-[7px]
//     md:text-[25px] md:p-1
//     rounded-full 
//     cursor-pointer
//     border-2 border-transparent
//     transition
//     ${isFavorited ? "text-white bg-red-600" : "text-gray-500 bg-white"}
//     hover:text-white hover:bg-red-600
//   `}
//         >
//           <HeartLike />
//         </button>

//         {product.is_aksiya && (
//           <span
//             className="
//     absolute top-2 left-2 
//     text-[#E81504] bg-white 
//     font-semibold rounded-md
//     text-[15px] px-[10px] py-[6px]
//     shadow-sm z-10 cursor-default

//     transition-all duration-300 ease-in-out
//     hover:scale-105 hover:shadow-md hover:bg-[#fff7f5]
//     cursor-pointer
//     animate-pulse

//     max-[700px]:text-[14px] 
//     max-[500px]:text-[14px] 
//     max-[600px]:px-[7px] max-[600px]:py-[4px]
//   "
//           >
//             {t("Sale")}
//           </span>
//         )}
//       </div>
//       <p
//         onClick={navigateToItem}
//         className=" line-clamp-2 text-[14px] text-[#545D6A] mt-[16px] mb-[28px] max-[1000px]:mb-[17px] max-[520px]:text-[12px] md:w-[200px] w-[150px] h-[60px]"
//       >
//         {product.description}
//       </p>
//       <div className="flex items-end justify-between max-[1100px]:hidden">
//         <div onClick={navigateToItem}>
//           <strong className="text-xl font-bold text-[#0A1729]">
//             {formatNumberSpaces(product.price)} uzs
//           </strong>
//           <div className="bg-[#F02C961A] rounded-[3px] font-bold text-[#F02C96] py-[7px] px-2.5 text-[14px]">
//             {product.nasiya} /{" "}
//             {formatNumberSpaces(calculate(product.price, product.nasiya))} uzs
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button
//             icon={<Compare />}
//             iconPosition="left"
//             extraStyle="bg-transparent transition-transform duration-300 ease-in-out  hover:bg-gray-100 !text-[#545D6A] !border-[#545d6a71] h-[50px] !p-0 w-[50px]"
//           />
//           <Button
//             icon={<ShoppingBag size={24} />}
//             iconPosition="left"
//             extraStyle="!border-[#545D6A] h-[50px] !p-0 w-[50px]"
//           />
//         </div>
//       </div>
//       <div className="flex items-end justify-between min-[1100px]:hidden flex-col">
//         <div
//           onClick={navigateToItem}
//           className="flex justify-between w-full mb-3"
//         >
//           <strong className="text-lg font-bold text-[#0A1729] max-[1000px]:text-[14px] line-clamp-1">
//             {formatNumberSpaces(product.price)}
//             <span className="text-xs"> uzs</span>
//           </strong>
//           <div className="bg-[#F02C961A] rounded-[3px] text-[#F02C96] py-[3px] px-2.5 line-clamp-1 text-[14px] max-[1000px]:text-[10px]">
//             {product.nasiya} /{" "}
//             {formatNumberSpaces(calculate(product.price, product.nasiya))}{" "}
//             <span className="max-[400px]:hidden">uzs</span>
//           </div>
//         </div>
//         <div className="flex items-center justify-between w-full gap-[8px]">
//           <Button
//             icon={<CompareIconn />}
//             iconPosition="left"
//             extraStyle="bg-transparent !text-[#545D6A] !border-[#545D6A] h-[50px] !p-0 !w-[50px] max-[1000px]:h-[40px] !min-w-[40px max-[350px]:text-[8px] max-[350px]:h-[30px]"
//           />
//           <Button
//             icon={<CartIconn />}
//             iconPosition="right"
//             title="Savatcha"
//             extraStyle="!border-[#545D6A] h-[50px] text-sm max-w-[90%] max-[1000px]:h-[40px] max-[435px]:px-[10px] max-[350px]:text-[8px] max-[350px]:h-[20px] max-[520px]:text-xs"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCardItem;


"use client";
import { CompareIconn, Compare, HeartLike, CartIconn } from "@/assets/icons";
import { calculate } from "@/hooks/calculatePriceN";
import { formatNumberSpaces } from "@/hooks/numberWithSpaces";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { toast } from "react-hot-toast";

function ProductCardItem({
  product,
  extraStyle,
  extraStyleForImg,
}: {
  product: ProductType;
  extraStyle?: string;
  extraStyleForImg?: string;
}) {
  const router = useRouter();
  const t = useTranslations("Products");

  const navigateToItem = () => {
    router.push(`${product.id}`);
  };

  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
    toast.success("Sevimlilarga qo'shildi!");
  };

  // Statik rasmga yo‘lni moslashtirish
  const imageSrc = product.image.startsWith("/")
    ? product.image
    : `/images/${product.image}`;

  return (
    <div
      className={`w-[270px]  max-[1200px]:w-[250px] max-[900px]:w-[250px] max-[640px]:w-[100%] max-[1100px]:w-[230px] max-[840px]:w-[230px] max-[1000px]:w-[200px] max-[770px]:w-[200px] !mx-[15px] max-[690px]:!mx-0 group transition-all !duration-500 ${extraStyle}`}
    >
      <div
        className={`bg-[#EBEFF3]  w-full flex justify-center items-center h-[270px] max-[1200px]:h-[250px] max-[901px]:h-[250px] max-[410px]:h-[200px] max-[1100px]:h-[230px] max-[640px]:h-[250px] max-[840px]:h-[230px] max-[1000px]:h-[200px] max-[770px]:h-[200px] rounded-[6px] overflow-hidden relative ${extraStyleForImg}`}
      >
        <Image
          onClick={navigateToItem}
          src={imageSrc}
          alt={product.name}
          width={202}
          height={202}
          className="w-[100%] h-auto group-hover:scale-[1.1] duration-300 cursor-pointer object-cover rounded-lg"
        />

        <button
          onClick={handleClick}
          className={`
            absolute top-5 right-5 
            !text-[12px] p-[2px] 
            sm:text-[18px] sm:p-[7px]
            md:text-[25px] md:p-1
            rounded-full 
            cursor-pointer
            border-2 border-transparent
            transition
            ${isFavorited ? "text-white bg-red-600" : "text-gray-500 bg-white"}
            hover:text-white hover:bg-red-600
          `}
        >
          <HeartLike />
        </button>

        {product.is_aksiya && (
          <span
            className="absolute top-2 left-2 text-[#E81504] bg-white 
            font-semibold rounded-md text-[15px] px-[10px] py-[6px]
            shadow-sm z-10 animate-pulse hover:scale-105 hover:shadow-md hover:bg-[#fff7f5]"
          >
            {t("Sale")}
          </span>
        )}
      </div>

      <p
        onClick={navigateToItem}
        className="line-clamp-2 text-base font-bold text-[#2f2f2f] mt-[16px] mb-[10px] max-[1000px]:mb-[17px] max-[520px]:text-[12px] md:w-[200px] w-[150px] h-[60px]"
      >
        {product.description}
      </p>

      <div className="flex items-end justify-between max-[1100px]:hidden">
        <div onClick={navigateToItem}>
          <strong className="text-xl font-bold text-[#0A1729]">
            {formatNumberSpaces(product.price)} so'm
          </strong>
          {/* <div className="bg-[#F02C961A] rounded-[3px] font-bold text-[#F02C96] py-[7px] px-2.5 text-[14px]">
            {product.nasiya} / {formatNumberSpaces(calculate(product.price, product.nasiya))} uzs
          </div> */}
        </div>
        <div className="flex items-center gap-2">
          <Button
            icon={<Compare />}
            iconPosition="left"
            extraStyle="bg-transparent transition-transform duration-300 ease-in-out hover:bg-gray-100 !text-[#545D6A] !border-[#545d6a71] h-[50px] !p-0 w-[50px]"
          />
          <Button
            icon={<ShoppingBag size={24} />}
            iconPosition="left"
            extraStyle="!border-[#545D6A] h-[50px] !p-0 w-[50px]"
          />
        </div>
      </div>

      <div className="flex items-end justify-between min-[1100px]:hidden flex-col">
        <div onClick={navigateToItem} className="flex justify-between w-full mb-3">
          <strong className="text-lg font-bold text-[#0A1729] max-[1000px]:text-[14px] line-clamp-1">
            {formatNumberSpaces(product.price)}
            <span className="text-xs"> uzs</span>
          </strong>
          <div className="bg-[#F02C961A] rounded-[3px] text-[#F02C96] py-[3px] px-2.5 line-clamp-1 text-[14px] max-[1000px]:text-[10px]">
            {product.nasiya} / {formatNumberSpaces(calculate(product.price, product.nasiya))} uzs
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-[8px]">
          <Button
            icon={<CompareIconn />}
            iconPosition="left"
            extraStyle="bg-transparent !text-[#545D6A] !border-[#545D6A] h-[50px] !p-0 !w-[50px] max-[1000px]:h-[40px] !min-w-[40px] max-[350px]:text-[8px] max-[350px]:h-[30px]"
          />
          <Button
            icon={<CartIconn />}
            iconPosition="right"
            title="Savatcha"
            extraStyle="!border-[#545D6A] h-[50px] text-sm max-w-[90%] max-[1000px]:h-[40px] max-[435px]:px-[10px] max-[350px]:text-[8px] max-[350px]:h-[20px] max-[520px]:text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCardItem;
