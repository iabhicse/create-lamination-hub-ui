import React from "react";
import Link from "next/link";
import { productsProps } from "@/types/products";
import AddtoCartButton from "../cart/AddtoCartButton";
import { symbolOfCurrency } from "@/libs/configs/config.data";
import ImageComponent from "@/components/ui/images/Image_component";

interface ProductCardProps {
  products: productsProps;
}

const ProductCard = ({ products }: ProductCardProps) => {
  const { uid, image, link, name, description, price } = products;
  const imageArray = Array.isArray(image) ? image : [image];
  return (
    <>
      <div className="aspect-auto overflow-hidden h-[256px]">
        <Link href={`products/${link}`} className="cursor-pointer">
          <ImageComponent
            id={`product-image-${uid}`}
            src={imageArray[0].src}
            alt={imageArray[0].alt}
          />
        </Link>
      </div>
      <div className="p-6">
        <Link href={`products/${link}`} className="cursor-pointer">
          <h5 className="font-semibold mb-2">{name}</h5>
        </Link>
        <p className="text-gray-600 mb-4 ">{description}</p>
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
    </>
  );
};

export default ProductCard;
