import React from "react";
import { Avatar, AvatarImage } from "../shadcn/avatar";

type ImageAvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
  size?: number | string; // Accepts number (px) or Tailwind-compatible string like "w-10"
};

const fallbackSrc = "/images/avatar/dummyAvatar.jpg";
const fallbackAlt = "Default Avatar";

const ImageAvatar: React.FC<ImageAvatarProps> = ({
  src,
  alt,
  className,
  size = 40,
}) => {
  const imageSrc = src && src.trim() !== "" ? src : fallbackSrc;

  const dimensionStyle =
    typeof size === "number" ? { width: size, height: size } : undefined;

  const tailwindSizeClass = typeof size === "string" ? size : "";

  return (
    <div
      className={`flex items-center gap-1 w-fit font-medium text-[1rem] cursor-pointer ${className || ""}`}
    >
      <Avatar className={tailwindSizeClass} style={dimensionStyle}>
        <AvatarImage
          src={imageSrc}
          alt={alt || fallbackAlt}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== fallbackSrc) {
              target.src = fallbackSrc;
            }
          }}
          className="rounded-full object-cover w-full h-full"
        />
      </Avatar>
    </div>
  );
};

export default ImageAvatar;
