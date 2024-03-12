import FilterButtons from "@/components/product/FilterButtons";
import HeroSection from "@/components/product/HeroSection";
import ProductsWrapper from "@/components/product/ProductsWrapper";
import ProductNav from "@/components/ui/navs/ProductNav";
import { FooterMenu } from "@/router/layout/footer/Footer";

const BuyersInterface = () => {
  return (
    <div className="bg-white">
      <ProductNav />

      <HeroSection />

      <FilterButtons />

      <ProductsWrapper />
      <FooterMenu />
    </div>
  );
};

export default BuyersInterface;
