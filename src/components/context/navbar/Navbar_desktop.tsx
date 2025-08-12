import React from "react";
import Logout from "../auth/Logout";
import Navbar_link from "./Navbar_link";
import Navbar_cart from "./Navbar_cart";
import Navbar_auth from "./Navbar_auth";
import { extendedNavlink } from "@/types/app";

interface Navbar_desktopProps {
  navbarlinks: Array<extendedNavlink>;
  isAuthenticated: boolean;
}

const Navbar_desktop = ({
  navbarlinks,
  isAuthenticated,
}: Navbar_desktopProps) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      {navbarlinks.map((link) => (
        <Navbar_link key={link.id} link={link} />
      ))}
      {isAuthenticated ? <Logout /> : <Navbar_auth />}
      <Navbar_cart />
    </div>
  );
};

export default Navbar_desktop;
