import Hero from "@/components/layouts/Hero";
import { productList } from "@/libs/configs/config.data";
import ProductList from "@/components/context/products/ProductList";

export default function Home() {
  return (
    <section>
      <Hero />
      <ProductList ProductList={productList} />
    </section>
  );
}
