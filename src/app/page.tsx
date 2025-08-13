import Hero from "@/components/layouts/Hero";
import SwiperSlider from "@/components/ui/swiper/SwiperSlider";
import { productsList, swiperLinks } from "@/libs/configs/config.data";
import HeroBackgroundImage from "@/components/ui/wrappers/HeroBackgroundImage";
import ProductsListpage from "@/components/context/products/ProductsListpage";

export default function Home() {
  return (
    <section>
      <HeroBackgroundImage>
        <Hero />
      </HeroBackgroundImage>
      <ProductsListpage ProductsList={productsList} />
      <SwiperSlider
        swiperLinks={swiperLinks}
        swipeTime={400}
        // className="w-full h-auto lg:h-[600px]"
      />
    </section>
  );
}
