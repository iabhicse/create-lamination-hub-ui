"use client";
import React from "react";
import Logout from "../../auth/Logout";
import Navbar_link from "../Navbar_link";
import { Avatar, AvatarImage } from "@/components/ui/shadcn/avatar";
import { useSession } from "@/components/providers/AuthProvider";

const Navbar_user = () => {
  const dummyAvatar = {
    src: "/images/avatar/dummyAvatar.jpg",
    alt: "Avatar",
  };
  const { user } = useSession();
  return (
    <>
      <div className="group relative">
        <div className="flex items-center gap-1 w-fit font-medium text-[1rem] cursor-pointer">
          <Avatar>
            <AvatarImage
              src={user?.avatar ?? dummyAvatar.src}
              alt={dummyAvatar.alt}
            />
          </Avatar>
        </div>

        <div className="absolute top-full w-fit min-w-20 -left-5 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className=" flex flex-col gap-2 p-2 text-center">
            {user?.role === "ADMIN" ? (
              <Navbar_link
                key={"Dashboard"}
                link={{
                  id: "Dashboard",
                  label: "Dashboard",
                  href: "/dashboard",
                }}
              />
            ) : (
              <Navbar_link
                key={"Profile"}
                link={{ id: "Profile", label: "Profile", href: "/profile" }}
              />
            )}
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar_user;
