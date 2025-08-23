import React from "react";
import { productsProps } from "@/types/products";
import AddtoCartButton from "../cart/AddtoCartButton";
import ImageComponent from "@/components/ui/images/Image_component";
import { symbolOfCurrency } from "@/libs/configs/config.data";

interface ProductCardProps {
  products: productsProps;
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { uid, image, link, name, description, price } = products;
  const imageArray = Array.isArray(image) ? image : [image];
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-auto overflow-hidden h-[128px]">
        <ImageComponent
          id={`product-image-${uid}`}
          src={imageArray[0].src}
          alt={imageArray[0].alt}
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{name}</h4>
        <p className="text-gray-600 mb-4 p.small">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            From {symbolOfCurrency}
            {price}
          </span>
          <AddtoCartButton
            item={{
              uid: uid,
              image: imageArray[0],
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
