import React from "react";
import { productsProps } from "@/types/products";
import AddtoCartButton from "../cart/AddtoCartButton";
import ImageComponent from "@/components/ui/helper/Image";
import { currencySymbol } from "@/libs/configs/config.data";

interface ProductCardProps {
  products: productsProps;
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { image, link, name, description, price } = products;
  const imageArray = Array.isArray(image) ? image : [image];
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-auto overflow-hidden h-[128px]">
        <ImageComponent src={imageArray[0].src} alt="Product" />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{name}</h4>
        <p className="text-gray-600 mb-4 p.small">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            From {currencySymbol}
            {price}
          </span>
          <AddtoCartButton
            item={{
              id: name,
              image: imageArray[0].src,
              link: link,
              name: name,
              price: Number(price),
              qty: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
