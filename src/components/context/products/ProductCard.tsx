import React from "react";
import Link from "next/link";
import ImageComponent from "@/components/ui/helper/Image";
import { productProps } from "./ProductList";

interface ProductCardProps {
  products: productProps;
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { image, link, name, description, price } = products;
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-auto overflow-hidden h-[256px]">
        <ImageComponent src={image.src} alt="Product" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            From &#8377;{price}
          </span>
          <Link href={link} data-readdy="true">
            <button className="bg-primary text-white px-4 py-2 !rounded-button font-medium hover:bg-primary-foreground transition-colors whitespace-nowrap">
              Customize
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
