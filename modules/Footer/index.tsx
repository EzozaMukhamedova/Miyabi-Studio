import React from "react";
import { FooterLeft } from "./FooterLeftSection";
import FooterCenter from "./FooterCenterSection";
import FooterRight from "./FooterRightSection";

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="flex justify-between max-[750px]:flex-col items-start gap-[10px] containers !mt-[130px] max-[1000px]:!mt-[100px] max-[920px]:!mt-[70px] max-[750px]:!mt-[0px]">
        <FooterLeft />
        <div className="max-[920px]:hidden">
          <FooterCenter />
        </div>
        <div className="max-[920px]:hidden">
          <FooterRight />
        </div>
        <div className="flex min-[920px]:hidden min-[750px]:flex-col justify-between items-star !gap-[10px]">
          <FooterCenter />
          <FooterRight />
        </div>
      </div>
      <p className="min-[750px]:!mt-[57px] min-[750px]:!mb-[81px] max-[750px]:!mb-[40px] max-[750px]:!mt-[30px] containers text-[14px] text-[#00000066]">
        © 2025 Beauty Park O'zbekistondagi Yagona Beauty brend.
      </p>
    </footer>
  );
}
