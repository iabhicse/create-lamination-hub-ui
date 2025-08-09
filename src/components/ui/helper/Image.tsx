import React from "react";
import Image from "next/image";
import { cn } from "@/libs/utils/utils-shadcn";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageComponent = ({
  src,
  alt,
  width = 512,
  height = 512,
  className,
}: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        className,
        "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
      )}
    />
  );
};

export default ImageComponent;
