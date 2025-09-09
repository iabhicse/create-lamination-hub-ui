import React from "react";
import { Avatar, AvatarImage } from "../shadcn/avatar";

const Image_avatar = ({ src }: { src?: string }) => {
  const dummyAvatar = {
    src: "/images/avatar/dummyAvatar.jpg",
    alt: "Avatar",
  };

  return (
    <>
      <div className="flex items-center gap-1 w-fit font-medium text-[1rem] cursor-pointer">
        <Avatar>
          <AvatarImage src={src ?? dummyAvatar.src} alt={dummyAvatar.alt} />
        </Avatar>
      </div>
    </>
  );
};

export default Image_avatar;
