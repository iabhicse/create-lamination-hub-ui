import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { ImageProps } from "@/types/app";

interface Image_componentProps extends ImageProps {
  style?: React.CSSProperties;
}

const Image_component = ({
  src,
  alt,
  width = 512,
  height = 512,
  className,
  style,
}: Image_componentProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={clsx(
        className,
        "w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
      )}
    />
  );
};

export default Image_component;
