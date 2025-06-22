import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const footerLinks: { titleKey: string; href: string }[] = [
  { titleKey: "about-material", href: "/" },
  { titleKey: "terms-of-use", href: "/" },
  { titleKey: "privacy-and-security", href: "/" },
  { titleKey: "return-policy", href: "/" },
  { titleKey: "contact-us", href: "/" },
];

function FooterCenter() {
  const t = useTranslations("HeaderTopTS");

  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px]">
        {t("menu")}
      </h4>
      <ul className="max-w-[236px] flex flex-col gap-[9px]">
        {footerLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="hover:text-[#134E9B] duration-1000 text-base text-[#000000B2]"
            >
              {t(item.titleKey)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterCenter;
