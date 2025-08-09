import React from "react";
import Link from "next/link";
import Lucid_svg from "../ui/helper/Lucid_svg";
import Navbar_link from "../context/navbar/Navbar_link";
import { footerLinks } from "@/libs/configs/config.data";

const Footer = () => {
  return (
    <footer className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* <!-- Company Info --> */}
          <div>
            <h3 className="text-xl  text-primary mb-4">
              {footerLinks.footer_messages.heading}
            </h3>
            <p className="text-muted mb-4">
              {footerLinks.footer_messages.description}
            </p>
          </div>
          {/* <!-- Quick Links --> */}
          <div>
            <h4 className="font-semibold mb-4">
              {footerLinks.footerSection[0]}
            </h4>
            <ul className="space-y-2 text-muted">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Navbar_link link={link} key={index} />
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- Customer Service --> */}
          <div>
            <h4 className="font-semibold mb-4">
              {footerLinks.footerSection[1]}
            </h4>
            <ul className="space-y-2 text-muted">
              {footerLinks.customerService.map((link, index) => (
                <li key={index}>
                  <Navbar_link link={link} key={index} />
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- Newsletter --> */}
          <div>
            <h4 className="font-semibold mb-4">
              {footerLinks.footerSection[2]}
            </h4>
            <p className="text-muted mb-4">
              {footerLinks.footer_messages.susbcribe}
            </p>
            <div className="flex space-x-4">
              {footerLinks.socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted hover:text-muted-foreground"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Lucid_svg iconName={link.icon} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <!-- Bottom Footer --> */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted text-sm mb-4 md:mb-0">
              {footerLinks.footer_messages.copyright}
            </div>
            {/* <!-- Trust Badges --> */}
            <div className="flex justify-center items-center space-x-6 mt-6 text-muted text-sm">
              {footerLinks.features.map((link, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <Lucid_svg iconName={link.icon} />
                  </div>
                  {link.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
