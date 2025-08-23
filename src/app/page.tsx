import Hero from "@/components/layouts/Hero";
import { swiperLinks } from "@/libs/data/data.layout";
import { productsList } from "@/libs/data/data.products";
import SwiperSlider from "@/components/ui/swiper/SwiperSlider";
import ProductsListpage from "@/components/context/products/ProductsListpage";
import BackgroundProvider from "@/components/providers/BackgroundProvider";

export default function Home() {
  return (
    <section className="relative">
      <BackgroundProvider variants={"fade_Effect"}>
        <Hero />
      </BackgroundProvider>
      <ProductsListpage ProductsList={productsList} />
      <SwiperSlider
        swiperLinks={swiperLinks}
        swipeTime={400}
        // className="w-full h-auto lg:h-[600px]"
      />
    </section>
  );
}
