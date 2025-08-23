import React from "react";
import Navbar_link from "../Navbar_link";
import { ExtendedNavLink } from "@/types/app";
import Navbar_user from "./Navbar_user";
import Navbar_auth from "./Navbar_auth";
import Navbar_cart from "./Navbar_cart";

interface Navbar_desktopProps {
  navbarlinks: Array<ExtendedNavLink>;
  isAuthenticated: boolean;
}

const Navbar_desktop = ({
  isAuthenticated,
  navbarlinks,
}: Navbar_desktopProps) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      {navbarlinks.map((link) => (
        <Navbar_link key={link.id} link={link} />
      ))}
      {isAuthenticated ? <Navbar_user /> : <Navbar_auth />}
      <Navbar_cart />
    </div>
  );
};

export default Navbar_desktop;
