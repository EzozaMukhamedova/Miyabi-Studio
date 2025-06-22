"use client";
import { LocationIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
// import { getCookie } from "cookies-next";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const HeaderTop = () => {
  const t = useTranslations("HeaderTopTS");
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    const newPath = `/${value}${pathname?.substring(3)}`;
    router.push(newPath);
  };

  return (
    <div className="hidden md:block text-sm py-[10px] bg-[#EBEFF3]  mb-[32px]">
      <div className="flex items-center justify-between containers">
        <nav className="flex items-center gap-[28px]">
          <Link
            href="/location"
            className="flex items-center gap-[10px] hover:text-[#134E9B] text-[#545D6A] duration-300"
          >
            <LocationIcon />
            <span>{t("tashkent")}</span>
          </Link>
          <Link
            href="/about"
            className="text-[#545D6A] hover:text-[#134E9B] duration-300"
          >
            {t("about-us")}
          </Link>

          <Link
            href="/product"
            className="text-[#545D6A] hover:text-[#134E9B] duration-300"
          >
            {t("products")}
          </Link>
          <Link
            href="/contact"
            className="text-[#545D6A] hover:text-[#134E9B] duration-300"
          >
            {t("contacts")}
          </Link>
        </nav>
        <div className="flex justify-end items-center gap-[18px]">
          <Link href={`tel:+998711234567`}>+998 (99) 897-45-85</Link>
          <div className="text-[#545D6A] flex items-center gap-[7px] cursor-pointer">
            <Select onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[80px] border outline-none cursor-pointer">
                <SelectValue placeholder="Uz" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="cursor-pointer">
                  <SelectItem className="cursor-pointer" value="uz">
                    Uz
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="ru">
                    Ru
                  </SelectItem>
                  <SelectItem className="cursor-pointer" value="en">
                    En
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
