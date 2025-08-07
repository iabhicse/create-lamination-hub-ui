import React from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={512}
      height={512}
      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
    />
  );
};

export default ImageComponent;
