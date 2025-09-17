"use client";
import React from "react";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";
import Image_avatar from "@/components/ui/images/Image_avatar";
import BackgroundProvider from "@/components/providers/BackgroundProvider";
import { ProfileBackgroundShape } from "@/components/ui/styled-components/styled-shapes";
import { useSession } from "@/components/providers/AuthProvider";

const Icons = [
  { id: "1", icon: "User" },
  { id: "2", icon: "ShoppingBag" },
  { id: "3", icon: "CreditCard" },
  { id: "4", icon: "Gift" },
];

const Profile_Header = () => {
  const { user } = useSession();
  return (
    <BackgroundProvider variants="gradient" className="w-full">
      <div className="w-full h-96 px-0">
        <div className=" w-full h-[90%] relative">
          <div className=" h-[50%] center">
            <div className="text-2xl md:text-5xl font-bold">
              Hello Dear {user?.fullname}
            </div>
          </div>
          <div className="w-full -bottom-5 md:-bottom-16 absolute p-2 md:p-10">
            <div className="center">
              <ProfileBackgroundShape>
                <div className="w-full h-full flex flex-row-reverse">
                  <ul className="w-2/5 pb-3 pr-3 justify-around items-end gap-2 hidden md:flex">
                    {Icons.map((icon) => {
                      return (
                        <li
                          key={icon.id}
                          className="bg-primary/30 rounded-full flex items-center justify-center p-2 cursor-pointer z-50"
                        >
                          <Lucid_Icon
                            iconName={icon.icon}
                            className="w-5 h-5 text-primary-foreground cursor-pointer"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ProfileBackgroundShape>
              <div className="absolute inset-0 flex items-center justify-center md:bottom-25 bottom-20">
                <Image_avatar size={192} src={user?.avatar} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundProvider>
  );
};

export default Profile_Header;
