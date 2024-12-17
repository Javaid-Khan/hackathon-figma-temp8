import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import MultiCompaniesLogo from "@/components/multi-companies-logo";
import OurProducts from "@/components/our-products";
import TopCategories from "@/components/top-categories";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <MultiCompaniesLogo />
      <FeaturedProducts />
      <TopCategories />
      <OurProducts />
    </>
  );
}
