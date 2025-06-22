import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function FooterRight() {
  const t = useTranslations("HeaderTopTS");

  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px] max-w-[340px] w-full">
        {t("contact")}
      </h4>
      <Link
        href={"tel:+998711234567"}
        className="md:text-2xl text-[16px] font-bold hover:underline text-[#00000080]"
      >
        +998 (99) 897-45-85
      </Link>
      <label className="block mt-[32px] hidden sm:block">
        <span className="block mb-[12px]">{t("have-question")}</span>
        <input
          type="text"
          placeholder=" O’zingiz qiziqtirgan savollarni bering"
          className="bg-[#EBEFF3] outline-none text-[12px] rounded-[6px] p-[10px] max-w-[340px] block w-full"
        />
      </label>
    </div>
  );
}
