import Products from "@/components/Products/Products";
import Brands from "@/modules/Brand";
import FooterTop from "@/modules/TopFooter";
import BrandCategory from "@/modules/BrandCategoryList";
import HeroMain from "@/modules/Hero/HeroMain";
import { useTranslations } from "next-intl";
import DemoMastersPage from "@/components/Products/Master";
import DemoMasters from "@/components/Products/RecommendMenu";

export default function Home() {
  const t = useTranslations("Products");
  return (
    <>
      <HeroMain />
      <Brands />

      {/* <Products title={t("MostPopularProducts")} api="products" /> */}
      {/* <Products title={t("PremiumProducts")} api="products" />
      <Products title={t("SaleProducts")} api="products" /> */}
      <DemoMasters />
      <DemoMastersPage />
      <BrandCategory />
      <FooterTop />
    </>
  );
}
