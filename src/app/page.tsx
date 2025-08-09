import Hero from "@/components/layouts/Hero";
import { productsList } from "@/libs/configs/config.data";
import HeroBackgroundImage from "@/components/ui/wrappers/HeroBackgroundImage";
import ProductsListpage from "@/components/context/products/ProductsListpage";

export default function Home() {
  return (
    <section>
      <HeroBackgroundImage>
        <Hero />
      </HeroBackgroundImage>
      <ProductsListpage ProductsList={productsList} />
    </section>
  );
}
