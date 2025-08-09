import React from "react";
import ProductCard from "./ProductCard";
import { productsProps } from "@/types/products";

import {
  Product__list,
  ProductList__main,
} from "@/components/ui/styled-components/styled-products";

interface ProductsListpageProps {
  ProductsList: Array<productsProps>;
}
const ProductsListpage = ({ ProductsList }: ProductsListpageProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Gift Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved personalized gifts perfect for any occasion
          </p>
        </div>
        <ProductList__main>
          {ProductsList.map((product) => (
            <Product__list key={product.name}>
              <ProductCard products={product} />
            </Product__list>
          ))}
        </ProductList__main>
      </div>
    </section>
  );
};

export default ProductsListpage;
